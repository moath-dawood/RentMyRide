import React from "react";
import { useState, createContext } from "react";

const FilterContext = createContext();

export function FilterContextProvider(props) {
    const [filterValues, setFilterValues] = useState({
        type: [],
        passengers: [],
        price: 150
    });

    const handleType = (name, checked) => {
        setFilterValues(prev => ({
            ...prev,
            type: checked
                ? [...prev.type, name]
                : prev.type.filter(item => item !== name)
        }));
    };

    const handlePassengers = (name, checked) => {
        setFilterValues(prev => ({
            ...prev,
            passengers: checked
                ? [...prev.passengers, name]
                : prev.passengers.filter(item => item !== name)
        }));
    };

    const handlePrice = (value) => {
        setFilterValues(prev => ({ ...prev, price: value }));
    };

    return (
        <FilterContext.Provider value={{ filterValues, handleType, handlePassengers, handlePrice }}>
            {props.children}
        </FilterContext.Provider>
    );
}

export default FilterContext;