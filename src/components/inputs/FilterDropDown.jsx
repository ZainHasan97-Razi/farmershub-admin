// FilterDropdown.js
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const FilterDropdown = ({ options, selectedValue, onChange, title = "Filter by Status" }) => {
    return (
        <DropdownButton
            id="filter-dropdown"
            title={selectedValue || title}
            variant="outline-secondary"
        >
            {options.map((option) => (
                <Dropdown.Item
                    key={option}
                    onClick={() => onChange(option)}
                    active={option === selectedValue}
                >
                    {option}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
};

export default FilterDropdown;
