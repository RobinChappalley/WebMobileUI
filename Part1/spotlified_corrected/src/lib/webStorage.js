export const setItem = (id, value) => localStorage.setItem(id, JSON.stringify(value));
export const getItem = (id) => JSON.parse(localStorage.getItem(id));
export const getItems = () => Object.keys(localStorage).map(getItem);
export const removeItem = (id) => localStorage.removeItem(id);
