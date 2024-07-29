import type { IData, IPageData } from "./models/data";
import { TConfig } from "./models/editor-buttonModel";
export type TComponentConfig = {
    [key: string]: {
        component: (data: any) => React.JSX.Element | null;
        config: TConfig;
    };
};
type TProps = {
    selectedPage: string;
    getData: () => Promise<IData>;
    components: TComponentConfig;
};
export declare function getComponentConfig(): TComponentConfig;
export default function Lumina({ selectedPage, getData, components }?: TProps): import("react/jsx-runtime").JSX.Element | null;
export { EditorButton } from './components/editor-button/editor-button';
export type { TConfig } from './models/editor-buttonModel';
export type { IData, IPageData };
