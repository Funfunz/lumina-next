/**
 * Lumina main reducer
 * It turns all the reducers into a single one
 */
import { Dispatch } from "react";
import { IAppContext, TAppContextAction } from "./appContext";
import { IBuilderDataContext, TBuilderDataContextAction } from "./builderDataContext";
export type TAppContextDispatch = Dispatch<TAppContextAction | TBuilderDataContextAction>;
export interface IInitialStateType {
    appContext: IAppContext;
    builderDataContext: IBuilderDataContext;
}
export declare const initialContext: {
    appContext: {
        editor: boolean;
    };
    builderDataContext: {
        builderData: {};
        selectedPage: string;
        pages: never[];
    };
};
export declare const mainReducer: ({ appContext, builderDataContext }: IInitialStateType, action: TAppContextAction | TBuilderDataContextAction) => {
    appContext: IAppContext;
    builderDataContext: any;
};
