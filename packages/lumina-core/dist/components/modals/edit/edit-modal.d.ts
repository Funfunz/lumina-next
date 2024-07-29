import { IComponentProps } from "../../../models/data";
import { TConfig } from "../../../models/editor-buttonModel";
type TProps = {
    showModalEdit: boolean;
    handleCloseModal: () => void;
    handleOnClickSaveData: () => void;
    handleOnChangeInput: (key: string, value: string | number) => void;
    config: TConfig;
    formData: IComponentProps;
};
export declare const EditModal: ({ showModalEdit, handleCloseModal, handleOnClickSaveData, handleOnChangeInput, config, formData }: TProps) => import("react/jsx-runtime").JSX.Element;
export {};
