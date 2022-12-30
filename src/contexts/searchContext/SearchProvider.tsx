import { useState } from "react";
import { SearchContext } from "./searchContext";

interface ISearchProviderProps {
    children: React.ReactNode;
}
/**
 * @returns Search Provider component to provide context data to the consumer 
 */
function SearchProvider({ children }: ISearchProviderProps) {

    const [searchText, setSearchText] = useState<string>('');
    const [searchByDept, setSearchByDept] = useState<string>('');
    /**
     * @name setSearchString 
     * @description set the search text, which is written in the searchbar
     * @param text The entered text
     */
    const setSearchString = (text: string) => {
        setSearchText(text);
        console.log(searchText);
    }
    /**
     * @name setDeptValue
     * @description set the department value, which is selected inthe dropdown
     * @param text dept value from the selected dropdown
     */
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
