import { PropsWithChildren } from 'react';
import { TConfigItem } from "../../models/editor-buttonModel";
type TProps = {
    config: TConfigItem;
    value: string | number;
    handleOnChangeInput: (key: string, value: string | number) => void;
};
export declare const Form: React.FC<PropsWithChildren>;
export declare const LuminaInputRenderer: ({ config, value, handleOnChangeInput }: TProps) => import("react/jsx-runtime").JSX.Element;
export {};
