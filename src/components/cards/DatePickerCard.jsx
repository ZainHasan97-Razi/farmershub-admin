import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { CalendarIcon } from "../icons/icons";
import PrimaryModal from "../modals/PrimaryModal";

const DatePickerCard = ({
  isPlaceholder,
  setfilterUsers,
  setDate,
  date,
  setOffset,
  setUsers,
}) => {
  const [showDate, setShowDate] = useState(false);

  const handleClose = () => {
    setShowDate(false);
  };
  const handleShow = () => {
    setShowDate(true);
  };

  const clearDate = () => {
    setOffset(0);
    setShowDate(false);
    setfilterUsers(null);
    setUsers([]);
  };

  const applyFilter = () => {
    setfilterUsers(true);
    setShowDate(false);
    setOffset(0);
    setUsers([]);
  };

  return (
    <>
      <div className="position-relative h-100">
        <button
          onClick={handleShow}
          type="button"
          className="w-100 h-100 btn btn-light text-dark text-opacity-75 py-2 px-3 rounded d-flex align-items-center gap-2"
        >
          <CalendarIcon
            className={`${isPlaceholder && "text-body text-opacity-50"}`}
          />
          <span className="fs-7 fw-semibold">
            {isPlaceholder ? (
              <span className="text-body text-opacity-50 fw-500">
                Choose date range
              </span>
            ) : (
              <span>13 Aug - 20 Aug</span>
            )}
          </span>
        </button>
      </div>

      <PrimaryModal show={showDate} onHide={handleClose}>
        <h4 className="mb-2 fw-bold text-capitalize">Choose date</h4>
        <div className="text-center">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate(item.selection)}
            moveRangeOnFirstSelection={false}
            ranges={[date]}
          />
        </div>
        <div className="pt-4 d-flex gap-3">
          <button
            type="button"
            onClick={clearDate}
            className="flex-fill btn btn-gray text-white rounded-1 px-2 py-3"
          >
            <span className="fw-semibold">Clear</span>
          </button>
          <button
            type="button"
            onClick={applyFilter}
            className="flex-fill btn btn-primary rounded-1 px-2 py-3"
          >
            <span className="fw-semibold">Save</span>
          </button>
        </div>
      </PrimaryModal>
    </>
  );
};

export default DatePickerCard;
