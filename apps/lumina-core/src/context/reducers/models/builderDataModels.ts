import { IData } from "@/data/data";

export interface IBuilderDataContext {
  builderData: IData;
  selectedPage: string;
  pages: string[];
}

export interface ISetBuilderDataAction {
  type: "setBuilderData";
  data: IBuilderDataContext;
}