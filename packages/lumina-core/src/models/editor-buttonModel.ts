export type TConfigItem = TConfigItemValue | TConfigItemSelect;

interface TConfigItemBase {
  name: string;
  label: string;
}

export type TEditorConfig = {
  children: boolean;
  editable: boolean;
  delete: boolean;
};

export interface TConfigItemValue extends TConfigItemBase {
  type: "string" | "number";
}

export interface TConfigItemSelect<T = string> extends TConfigItemBase {
  type: "singleSelect" | "multiSelect";
  arrayValues: T[];
}

export type TConfig = {
  name: string;
  props?: (TConfigItemValue | TConfigItemSelect)[];
  editor: TEditorConfig;
};

export type TElementConfig = (TConfigItemValue | TConfigItemSelect)[];

export type TSelectedOption = {
  label: string;
  value: string;
};
