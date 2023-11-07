export const occasions = [
  { value: "noSpecified", text: "No specified" },
  { value: "birthday", text: "Birthday" },
  { value: "anniversary", text: "Anniversary" },
  { value: "christmas", text: "Christmas" },
];

export const availableTimes = [
  { value: "17:00", text: "17:00" },
  { value: "18:00", text: "18:00" },
  { value: "19:00", text: "19:00" },
  { value: "20:00", text: "20:00" },
  { value: "21:00", text: "21:00" },
  { value: "22:00", text: "22:00" },
];

export const extraTimes = [
  { value: "15:00", text: "15:00" },
  { value: "16:00", text: "16:00" },
];

export const initializeTimes = () => {
  return [...availableTimes];
};

export const updateTimes = (date) => {
  let selectedDate = new Date(date);
  if (selectedDate.getDay() === 0) {
    return [...extraTimes, ...availableTimes];
  }
  return [...availableTimes];
};
