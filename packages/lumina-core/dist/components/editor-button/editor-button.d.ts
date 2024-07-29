import { IComponentProps } from "../../models/data";
import { TConfig } from "../../models/editor-buttonModel";
type EditorButtonProps = {
    id: string;
    onUpdate?: (data: any) => void;
    data: IComponentProps;
    config?: TConfig;
    inline?: boolean;
    noUp?: boolean;
    noDown?: boolean;
    visible?: boolean;
    menu?: boolean;
};
export declare const EditorButton: ({ id, onUpdate, config, data, inline, noUp, noDown, visible, menu, }: EditorButtonProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
