// libraries
import moment from "moment";

export const numberDate = (date) => moment(date).format("DD-MM-Y");

export const formatDate = (date) => moment(date).format("Y-MM-DD");

export const showCommaSeperated = (number) => {
  return number?.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
};
