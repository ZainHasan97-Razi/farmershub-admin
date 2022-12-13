const LOCAL_STORAGE_KEYS = {
  authToken: "accessToken",
};

const storeLocalData = (key, value) => {
  localStorage.setItem(key, value);
};

const getLocalData = (key) => localStorage.getItem(key);

const clearAllLocalData = () => {
  localStorage.clear();
};

export { storeLocalData, getLocalData, clearAllLocalData, LOCAL_STORAGE_KEYS };
