export const store = {
  get(key, fallback = []) {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};