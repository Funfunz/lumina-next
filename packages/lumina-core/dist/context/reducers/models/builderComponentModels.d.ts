import { IComponentData, IComponentProps } from "../../../models/data";
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
