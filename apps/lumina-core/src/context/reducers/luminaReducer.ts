"use client";

/**
 * Lumina main reducer
 * It turns all the reducers into a single one
 */
import { Dispatch } from "react";
import {
  IAppContext,
  TAppContextAction,
  appContextReducer,
  initialAppContextState,
} from "./appContext";
import {
  IBuilderDataContext,
  builderDataContextReducer,
  TBuilderDataContextAction,
  initialBuilderDataContextState,
} from "./builderDataContext";
import { IComponentsConfig } from "@/data/data";

export type TAppContextDispatch = Dispatch<
  TAppContextAction | TBuilderDataContextAction
>;

export interface IInitialStateType {
  appContext: IAppContext;
  builderDataContext: IBuilderDataContext;
  componentsConfig: IComponentsConfig;
}

export const initialContext = {
  appContext: initialAppContextState,
  builderDataContext: initialBuilderDataContextState,
  componentsConfig: {}
};

export const mainReducer = (
  { appContext, builderDataContext, componentsConfig }: IInitialStateType,
  action: TAppContextAction | TBuilderDataContextAction
) => ({
  appContext: appContextReducer(appContext, action as TAppContextAction),
  builderDataContext: builderDataContextReducer(
    builderDataContext,
    action as TBuilderDataContextAction
  ),
  componentsConfig: componentsConfig
});
