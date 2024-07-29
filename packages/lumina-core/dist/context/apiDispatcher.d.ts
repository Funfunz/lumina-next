import { IComponentProps } from "../models/data";
export interface IUpdateBackendData {
    props: IComponentProps;
    id: string;
}
export declare const apiDispatcher: (data: IUpdateBackendData) => void;
