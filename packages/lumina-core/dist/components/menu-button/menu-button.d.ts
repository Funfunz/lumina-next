import { TConfig } from "../../models/editor-buttonModel";
import { IComponentProps } from "../../models/data";
type TMenuProps = {
    id: string;
    config: TConfig;
    data: IComponentProps;
};
export declare const menuButton: ({ id, config, data }: TMenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
