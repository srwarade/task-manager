export const generateRandomId = () => {
  return "id" + Math.random().toString(16).slice(2);
};

export const checkIfDetailsExists = (title, dueDate) => {
  return title && dueDate;
};
