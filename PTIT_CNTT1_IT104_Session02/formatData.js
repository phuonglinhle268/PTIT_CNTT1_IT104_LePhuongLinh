export const formatDate = (currentDate) => {
  let day = currentDate.getDate();
  if (day > 0 && day < 10) {
    day = `0${day}`;
  }
  let month = currentDate.getMonth() + 1;
  if (month > 0 && month < 10) {
    month = `0${month}`;
  }
  let year = currentDate.getFullYear();

  return `${day}/${month}/${year}`;
};