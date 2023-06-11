import React from "react";
import { useState, createContext } from "react";

const FilterContext = createContext();

export function FilterContextProvider(props) {
    const [filterValues, setFilterValues] = useState({
        type: [],
        passengers: []
    });

    const handleType = (name, value) => {
        let types = [...filterValues.type]
        if (value) {
            if (types.indexOf(name)===-1)
                types.push(name)
        } else {
            types = types.filter(item => item !== name)
        }
        setFilterValues({ ...filterValues, type: types })
    }

    const handlePassengers = (name, value) => {
        let types = [...filterValues.passengers]
        if (value) {
            if (types.indexOf(name)===-1)
                types.push(name)
        } else {
            types = types.filter(item => item !== name)
        }
        setFilterValues({ ...filterValues, passengers: types })
    }

    return (
        <FilterContext.Provider
            value={{
                handlePassengers, handleType, filterValues
            }}
        >
            {props.children}
        </FilterContext.Provider>
    );
}

export default FilterContext;