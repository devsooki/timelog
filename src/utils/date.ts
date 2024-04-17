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