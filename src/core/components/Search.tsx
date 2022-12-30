import { useContext, useState } from "react";
import { SearchContext } from "../../contexts/searchContext/searchContext";

function Search() {

    const { setSearchString, setDeptValue } = useContext(SearchContext);

    const [searchVal, setSearchVal] = useState('')
    const [searchDept, setSearchDept] = useState('')

    const searchInputHandler = (e: any) => {
        setSearchVal(e.target.value)
        setSearchString(searchVal);
    }

    const dropDownHandler = (e: any) => {
        setSearchDept(e.target.value)
        setDeptValue(searchDept);
    }

    return (
        <div className="d-none d-sm-flex align-items-center ">
            <div className="form-control w-50">
                <label htmlFor="search" className="bg-light align-self-center cursor-pointer" >
                    <span className="icon-search text-dark"></span>
                </label>
                <input id="search" className="border-0 p-0 ms-2 w-50 w-md-100" type="search" placeholder="Search" onChange={searchInputHandler} value={searchVal} />
            </div>
            <div className="mx-3">
                <select className="form-select cursor-pointer" onChange={dropDownHandler} value={searchDept}>
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
