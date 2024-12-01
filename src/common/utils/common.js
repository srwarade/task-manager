export const generateRandomId = () => {
  return "id" + Math.random().toString(16).slice(2);
};

export const checkIfDetailsExists = (title, dueDate) => {
  if (!title) {
    return {
      label: "title",
      message: "Title is required",
    };
  } else if (!dueDate) {
    return {
      label: "dueDate",
      message: "Due date is required",
    };
  }

  return false;
};
