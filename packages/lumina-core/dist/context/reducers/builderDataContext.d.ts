import { ICreatePageAction, IDeletePageAction, IUpdatePageAction } from "./models/builderPageModels";
import { IBuilderDataContext, ISetBuilderDataAction } from "./models/builderDataModels";
import { ICreateComponentAction, IDeleteComponentAction, IMoveDownComponentAction, IMoveUpComponentAction, IUpdateComponentAction } from "./models/builderComponentModels";
export type TBuilderDataContextAction = ISetBuilderDataAction | ICreatePageAction | IUpdatePageAction | IDeletePageAction | ICreateComponentAction | IUpdateComponentAction | IDeleteComponentAction | IMoveUpComponentAction | IMoveDownComponentAction;
export declare const initialBuilderDataContextState: {
    builderData: {};
    selectedPage: string;
    pages: never[];
};
export declare const builderDataContextReducer: (data: IBuilderDataContext, action: TBuilderDataContextAction) => any;
export type { IBuilderDataContext };
