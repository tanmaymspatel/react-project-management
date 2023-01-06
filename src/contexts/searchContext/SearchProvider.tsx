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

    const searchCtx = {
        searchText,
        setSearchText,
        searchByDept,
        setSearchByDept
    }

    return (
        <SearchContext.Provider value={searchCtx}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;
