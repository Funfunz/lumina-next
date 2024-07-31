import { IComponentProps } from "@/models/data";

export interface IUpdateBackendData {
  props: IComponentProps;
  id: string;
}

export const apiDispatcher = (data: IUpdateBackendData) => {
  console.log(data);
};
