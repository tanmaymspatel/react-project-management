import { useContext } from "react";

import { SearchContext } from "../../contexts/searchContext/searchContext";

/**
 * @returns A seach bar component
 */
function SeachBar() {

    const { searchText, setSearchText } = useContext(SearchContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }
    return (
        <div className="ms-2 d-flex bg-light border-radius input-padding">
            <label htmlFor="search" className="bg-light align-self-center cursor-pointer" >
                <span className="icon-search text-dark"></span>
            </label>
            <input
                id="search"
                type="text"
                name="search"
                className="w-50 w-md-100 flex-grow-1 ms-2 border-0"
                placeholder="Search"
                onChange={handleChange}
                value={searchText}
                autoComplete="off"
            />
        </div>
    )
}

export default SeachBar
