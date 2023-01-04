import { useContext } from "react";
import { SearchContext } from "../../contexts/searchContext/searchContext";

/**
 * @returns A seach bar component
 */
function SeachBar() {

    const { searchText, setSearchText } = useContext(SearchContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(preValue => preValue = e.target.value);
    }
    return (
        <div className="ms-2 form-control">
            <label htmlFor="search" className="bg-light align-self-center cursor-pointer" >
                <span className="icon-search text-dark"></span>
            </label>
            <input
                id="search"
                type="text"
                name="search"
                className="border-0 ms-2 w-50 w-md-100"
                placeholder="Search"
                onChange={handleChange}
                value={searchText}
                autoComplete="off"
            />
        </div>
    )
}

export default SeachBar
