import { useState } from "react";
import { SearchContext } from "./searchContext";

interface ISearchProviderProps {
    children: React.ReactNode;
}

function SearchProvider({ children }: ISearchProviderProps) {

    const [searchText, setSearchText] = useState<string>('');
    const [searchByDept, setSearchByDept] = useState<string>('');

    const setSearchString = (text: string) => {
        setSearchText(text);
        console.log(searchText);
    }

    const setDeptValue = (text: string) => {
        console.log(text);
        setSearchByDept(searchByDept);
    }

    const searchCtx = {
        searchText,
        setSearchString,
        searchByDept,
        setDeptValue
    }

    return (
        <SearchContext.Provider value={searchCtx}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;
