export const loadItems = () => {
  const data = localStorage.getItem("inventory");
  return data ? JSON.parse(data) : null;
};

export const saveItems = (items) => {
  localStorage.setItem("inventory", JSON.stringify(items));
};
