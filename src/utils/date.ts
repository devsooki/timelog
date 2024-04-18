export const getPrevMonth = (date: Date) => {
  const now = date.getMonth();
  const newDate = new Date(date);

  newDate.setMonth(now - 1);
  return newDate;
}

export const getNextMonth = (date: Date) => {
  const now = date.getMonth();
  const newDate = new Date(date);

  newDate.setMonth(now + 1);
  return newDate;
}

export const getFirstDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  return new Date(year, month, 1);
}

export const getLastDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  return new Date(year, month + 1, 0);
}