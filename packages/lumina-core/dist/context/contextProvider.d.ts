import { IInitialStateType, TAppContextDispatch } from "./reducers/luminaReducer";
import { IAppContext } from "./reducers/appContext";
import { IBuilderDataContext } from "./reducers/builderDataContext";
export interface IContext {
    state: IInitialStateType;
    dispatch: TAppContextDispatch;
}
export declare function ContextProvider({ children, data, }: {
    children: React.ReactNode;
    data?: {
        appContext?: IAppContext;
        builderDataContext?: IBuilderDataContext;
    };
}): import("react/jsx-runtime").JSX.Element;
export declare const useLuminaContext: () => IContext;
