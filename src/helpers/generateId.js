const MAX_ID_LENGTH = 6;

const generateId = () => {
  let id = '';
  for (let i = 0; i < MAX_ID_LENGTH; i += 1) {
    id += Math.floor(Math.random() * 9);
  }

  return id;
};

export { MAX_ID_LENGTH };
export default generateId;
