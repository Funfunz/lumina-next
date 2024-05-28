import { IComponentData, IComponentProps, IData, IPageData } from "@/data/data";

export interface IBuilderDataContext {
  builderData: IData;
  selectedPage: string;
  pages: string[];
}

export type TBuilderDataContextAction =
  | ISetBuilderDataAction
  | ICreatePageAction
  | IUpdatePageAction
  | IDeletePageAction
  | ICreateComponentAction
  | IUpdateComponentAction
  | IDeleteComponentAction
  | IMoveUpComponentAction
  | IMoveDownComponentAction;

export interface ISetBuilderDataAction {
  type: "setBuilderData";
  data: IBuilderDataContext;
}

export interface ICreatePageAction {
  type: "createPage";
  data: {
    name: string;
    friendlyName: string;
  };
}

export interface IUpdatePageAction {
  type: "updatePage";
  data: {
    name: string;
    newData: Partial<{
      name: string;
      friendlyName: string;
    }>;
  };
}

export interface IDeletePageAction {
  type: "deletePage";
  data: string;
}

export interface ICreateComponentAction {
  type: "createComponent";
  data: {
    parentId: string;
  } & Partial<IComponentData>;
}

export interface IUpdateComponentAction {
  type: "updateComponent";
  data: {
    id: string;
    newProps: IComponentProps;
  };
}

export interface IMoveUpComponentAction {
  type: "moveUpComponent";
  data: {
    id: string;
  };
}

export interface IMoveDownComponentAction {
  type: "moveDownComponent";
  data: {
    id: string;
  };
}

export interface IDeleteComponentAction {
  type: "deleteComponent";
  data: {
    id: string;
  };
}

export const initialBuilderDataContextState = {
  builderData: {},
  selectedPage: "",
  pages: [],
};

function newComponentFactory(
  componentData: ICreateComponentAction["data"],
  order: number
): IComponentData {
  const { type, friendlyName, ...rest } = componentData;
  return {
    id: `${type}_${Math.random()}`,
    type: type as string,
    friendlyName: friendlyName as string,
    children: [],
    order,
    props: { ...rest.props },
  };
}

const instanceOfIComponentData = (object: any): object is IComponentData => {
  return object.id;
};

function createElementAt(
  component: IPageData | IComponentData,
  data: ICreateComponentAction["data"]
): IPageData | IComponentData {
  if (!component.children) [(component.children = [])];
  if (
    !data.parentId ||
    (instanceOfIComponentData(component) && component.id === data.parentId)
  ) {
    component.children?.push(newComponentFactory(data, Math.max(...component.children.map((element) => element.order))));
    return component;
  }

  component.children = component.children.map((element) => {
    return createElementAt(element, data) as IComponentData;
  });
  return component;
}

function updateElement(
  childrens: IComponentData[],
  targetId: string,
  newProps: IComponentProps
): IComponentData[] {
  let found: IComponentData | undefined;
  return childrens.map((element) => {
    if (element.id === targetId) {
      element.props = {
        ...element.props,
        ...newProps,
      };
    }
    if (element.children) {
      element.children = [
        ...updateElement(element.children, targetId, newProps),
      ];
      return element;
    }
    return element;
  });
}

function deleteElement(
  childrens: IComponentData[],
  targetId: string
): IComponentData[] {
  return childrens
    .map((element) => {
      if (element.id === targetId) {
        return undefined;
      }
      if (element.children) {
        element.children = [...deleteElement(element.children, targetId)];
        return element;
      }
      return element;
    })
    .filter((e) => e) as IComponentData[];
}

function upOrderElement (
  element: IComponentData,
  childrens: IComponentData[],
): IComponentData | undefined {
  let componentToReplace: IComponentData | undefined = undefined
  childrens.forEach(
    (currentElement) => {
      if (currentElement.order < element.order) {
        if (!componentToReplace) {
          componentToReplace = {...currentElement}
        }
        if (componentToReplace && currentElement.order > componentToReplace.order) {
          componentToReplace = {...currentElement}
        }
      }
    }
  )

  return componentToReplace
}

function downOrderElement (
  element: IComponentData,
  childrens: IComponentData[],
): IComponentData | undefined {
  let componentToReplace: IComponentData | undefined = undefined
  childrens.forEach(
    (currentElement) => {
      if (currentElement.order > element.order) {
        if (!componentToReplace) {
          componentToReplace = {...currentElement}
        }
        if (componentToReplace && currentElement.order < componentToReplace.order) {
          componentToReplace = {...currentElement}
        }
      }
    }
  )

  return componentToReplace
}

function moveUpElement(
  childrens: IComponentData[],
  targetId: string
) {
  let componentToReplace:IComponentData | undefined
  let oldOrder = 0
  let newChildrens = childrens.map(
    (element) => {
      if (element.id === targetId) {
        oldOrder = element.order
        componentToReplace = upOrderElement(element, childrens)
        if (componentToReplace) {
          element.order = componentToReplace?.order
        } else {
          element.order = 0
        }
      }
      if (element.children && !componentToReplace) {
        element.children = [...moveUpElement(element.children, targetId)];
      }
      return element;
    }
  )

  if (componentToReplace) {
    return newChildrens.map(
      (element) => {
        if (element.id === componentToReplace?.id) {
          element.order = oldOrder
        }
        return element
      }
    )
  }

  return newChildrens
}

function moveDownElement(
  childrens: IComponentData[],
  targetId: string
) {
  let componentToReplace:IComponentData | undefined
  let oldOrder = 0
  let newChildrens = childrens.map(
    (element) => {
      if (element.id === targetId) {
        oldOrder = element.order
        componentToReplace = downOrderElement(element, childrens)
        if (componentToReplace) {
          element.order = componentToReplace?.order
        } else {
          element.order = 0
        }
      }
      if (element.children && !componentToReplace) {
        element.children = [...moveDownElement(element.children, targetId)];
      }
      return element;
    }
  )

  if (componentToReplace) {
    return newChildrens.map(
      (element) => {
        if (element.id === componentToReplace?.id) {
          element.order = oldOrder
        }
        return element
      }
    )
  }

  return newChildrens
}

export const builderDataContextReducer = (
  data: IBuilderDataContext,
  action: TBuilderDataContextAction
) => {
  switch (action.type) {
    case "setBuilderData":
      return JSON.parse(JSON.stringify(action.data));

    case "createPage":
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [action.data.name]: {
            name: action.data.name,
            friendyName: action.data.friendlyName,
            children: [],
          },
        },
      };

    case "updatePage":
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [action.data.name]: {
            ...data.builderData[action.data.name],
            ...action.data.newData,
          },
        },
      };
    case "deletePage":
      const newState = {
        ...data,
        builderData: {
          ...data.builderData,
        },
      };
      delete newState.builderData[action.data];
      return newState;

    case "createComponent":
      const stateCreateComponent = {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            ...createElementAt(
              data.builderData[data.selectedPage],
              action.data
            ),
          },
        },
      };
      return stateCreateComponent;

    case "updateComponent":
      const stateUpdateComponent = {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [
              ...updateElement(
                data.builderData[data.selectedPage].children,
                action.data.id,
                action.data.newProps
              ),
            ],
          },
        },
      };
      return stateUpdateComponent;
    case "deleteComponent":
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [
              ...deleteElement(
                data.builderData[data.selectedPage].children,
                action.data.id
              ),
            ],
          },
        },
      };
    case "moveUpComponent":
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [
              ...moveUpElement(
                data.builderData[data.selectedPage].children,
                action.data.id
              ),
            ],
          },
        },
      };
    case "moveDownComponent":
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [
              ...moveDownElement(
                data.builderData[data.selectedPage].children,
                action.data.id
              ),
            ],
          },
        },
      };
    default:
      break;
  }

  return data;
};
