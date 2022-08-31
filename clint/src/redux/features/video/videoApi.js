import axios from "axios";

const getApi = async (id) => {
  const { data } = await axios.get(`http://localhost:9000/videos/${id}`);
  return data;
};

export { getApi };
