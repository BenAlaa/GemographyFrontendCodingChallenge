export const findDateBeforeDays = (baseDate, noOfDays = 30) => {
  const date = new Date(baseDate);
  return new Date().setDate(date.getDate()-noOfDays);
}

export const getISODate = (date = new Date()) => {
  return new Date(date).toISOString().split('T')[0];
}


export const getTodayISO = () => new Date().toISOString().split('T')[0];

export const getDiffInDays = (firstDate, secondDate) => {
  const date1 = new Date(firstDate);
  const date2 = new Date(secondDate);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays;
}

export const roundThousandToK = (number) => {
  if (number < 1000) return number;
  return `${Math.floor(number/1000*10)/10}K`
}