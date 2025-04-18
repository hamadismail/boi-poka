const getLocalStorage = () => {
  const readlistString = localStorage.getItem('readlist');
  return readlistString ? JSON.parse(readlistString) : [];
};

const saveLocalStorage = readlist => {
  localStorage.setItem('readlist', JSON.stringify(readlist));
};

const setLocalstorage = id => {
  const readlist = getLocalStorage();
  readlist.push(id);

  saveLocalStorage(readlist);
};

const removeLocalStorage = id => {
  const readlist = getLocalStorage();
  const readlistIds = readlist.map(id => parseInt(id));
  const remainingList = readlistIds.filter(readlistId => readlistId !== id);

  saveLocalStorage(remainingList);
};

export { getLocalStorage, setLocalstorage, removeLocalStorage };
