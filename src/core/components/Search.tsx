import { useContext } from "react";
import { SearchContext } from "../../contexts/searchContext/searchContext";

/**
 * @returns A search component for filtering data
 */
function Search() {

    const { searchText, setSearchString, setDeptValue, searchByDept } = useContext(SearchContext);
    /**
     *@name searchInputHandler 
     *@description set seach text to context 
     */
    const searchInputHandler = (e: any) => {
        setSearchString(e.target.value);
    }
    /**
     *@name DropDownHandler 
     *@description set selected dropdown value to the context  
     */
    const dropDownHandler = (e: any) => {
        setDeptValue(e.target.value);
    }

    return (
        <div className="d-none d-sm-flex align-items-center ">
            <div className="form-control w-50">
                <label htmlFor="search" className="bg-light align-self-center cursor-pointer" >
                    <span className="icon-search text-dark"></span>
                </label>
                <input id="search" className="border-0 p-0 ms-2 w-50 w-md-100" type="search" placeholder="Search" onChange={searchInputHandler} value={searchText} />
            </div>
            <div className="mx-3">
                <select className="form-select cursor-pointer" onChange={dropDownHandler} value={searchByDept}>
                    <option value="" disabled>Department</option>
                    <option value="Planning">Planning</option>
                    <option value="Web Designer">Web Designer</option>
                    <option value="Front-end Developer">Front-end Developer</option>
                    <option value="Back-end Developer">Back-end Developer</option>
                </select>
            </div>
        </div>
    );
};

export default Search;
