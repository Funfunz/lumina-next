import { IComponentProps } from '../../models/data';
export interface IAppContext {
    editor: boolean;
}
export type TAppContextAction = IUpdateBackendAction;
export interface IUpdateBackendAction {
    type: 'updateBackend';
    data: {
        props: IComponentProps;
        id: string;
    };
}
export declare const initialAppContextState: {
    editor: boolean;
};
export declare const appContextReducer: (data: IAppContext, action: TAppContextAction) => IAppContext;
