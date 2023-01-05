import { useContext } from "react"
import { SearchContext } from "../../contexts/searchContext/searchContext"

/**
 * @returns A dropdown to filter data
 */
function FilterByDepartment() {

    const { searchByDept, setSearchByDept } = useContext(SearchContext);

    const handleDropDown = (e: React.FormEvent<HTMLSelectElement>) => {
        setSearchByDept(e.currentTarget.value)
    }

    return (
        <div className="w-50 mx-3">
            <select
                className="form-select cursor-pointer"
                onChange={handleDropDown}
                value={searchByDept}
            >
                <option value="">Department</option>
                <option value="Planning">Planning</option>
                <option value="Web Designer">Web Designer</option>
                <option value="Front-end Developer">Front-end Developer</option>
                <option value="Back-end Developer">Back-end Developer</option>
            </select>
        </div>
    )
}

export default FilterByDepartment;
