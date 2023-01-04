import FilterByDepartment from "./FilterByDepartment";
import SeachBar from "./SeachBar";

/**
 * @returns A search component for filtering data
 */
function Search() {
    return (
        <div className="d-none d-sm-flex align-items-center ">
            <SeachBar />
            <FilterByDepartment />
        </div>
    );
};

export default Search;
