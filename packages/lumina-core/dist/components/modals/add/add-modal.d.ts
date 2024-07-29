import { ChangeEvent } from "react";
import { TSelectedOption } from "../../../models/editor-buttonModel";
type TProps = {
    id?: string;
    showModalAdd: boolean;
    handleCloseModal: () => void;
    handleAddComponent: () => void;
    selectedOption: TSelectedOption;
    handleSelectChange: (options: any) => void;
    newComponentFriendlyName: string;
    handleOnChangeNewComponentFriendlyName: (event: ChangeEvent<HTMLInputElement>) => void;
};
export declare const AddModal: ({ id, showModalAdd, handleCloseModal, handleAddComponent, selectedOption, handleSelectChange, newComponentFriendlyName, handleOnChangeNewComponentFriendlyName }: TProps) => import("react/jsx-runtime").JSX.Element;
export {};
