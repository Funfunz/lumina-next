export interface ICreatePageAction {
    type: "createPage";
    data: {
        id: string;
        pageName: string;
        friendlyName: string;
        extendedName: string;
        dateModified: string;
        status: boolean;
        route: string;
    };
}
export interface IUpdatePageAction {
    type: "updatePage";
    data: {
        id: string;
        pageName: string;
        newData: Partial<{
            name: string;
            friendlyName: string;
            dateModified: string;
            status: boolean;
        }>;
    };
}
export interface IDeletePageAction {
    type: "deletePage";
    data: string;
}
