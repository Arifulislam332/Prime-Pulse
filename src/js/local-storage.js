export const updateStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};