import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


export const StatusFilters = ({handleChange, selected = ""}) => {
    const [filter] = React.useState([
        {value:  "", label: "All"},
        {value:  "Not Submitted", label: "Not Submitted"},
        {value:  "Pending", label: "Pending"},
        {value:  "Verified", label: "Verified"},
        {value:  "Not Verified", label: "Not Verified"},
    ]);

    const onChangeStatus = (e) => {
      handleChange(e.target.text);
    }
    return (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selected ? selected : "Search by status"} 
          </Dropdown.Toggle>
    
          <Dropdown.Menu onClick={onChangeStatus} >
            {filter.map((data) => (
                <Dropdown.Item key={data.value}>{data.label}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      );
  }

  export default StatusFilters;