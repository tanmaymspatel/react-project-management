import { createContext } from "react";
import { ISearchProvider } from "../InterFace/contextInterface";

const initialValue: ISearchProvider = {
    searchText: "",
    setSearchString: (text: string) => { },
    searchByDept: "",
    setDeptValue: (text: string) => { }
}

export const SearchContext = createContext(initialValue);