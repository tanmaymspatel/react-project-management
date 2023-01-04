import { createContext } from "react";
import { ISearchProvider } from "../InterFace/contextInterface";

const initialValue: ISearchProvider = {
    searchText: "",
    searchByDept: "",
    setSearchText: () => { },
    setSearchByDept: () => { }
}

export const SearchContext = createContext(initialValue);