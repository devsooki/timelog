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

export const dateFormatted = (date: Date) => {
  return (
    String(date.getFullYear()) +
    '-' +
    String(date.getMonth() + 1) +
    '-' +
    String(date.getDate())
  );
};

export const dateCellFormatted = (date: Date, cell: number) => {
  return (
    String(date.getFullYear()) +
    '-' +
    String(date.getMonth()+1) +
    '-' +
    cell
  );
};