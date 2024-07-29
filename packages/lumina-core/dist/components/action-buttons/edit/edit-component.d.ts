import { TLumButtonAsButton } from "../../../components/button/button-models";
import { IComponentProps } from "../../../models/data";
import { TConfig } from "../../../models/editor-buttonModel";
type TProps = TLumButtonAsButton & {
    id: string;
    data: IComponentProps;
    onUpdate?: (data: IComponentProps) => void;
    config: TConfig;
};
export declare const EditComponentButton: ({ id, data, onUpdate, config }: TProps) => import("react/jsx-runtime").JSX.Element;
export {};
