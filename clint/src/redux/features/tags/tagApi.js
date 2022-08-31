import axios from "axios";

const getApi = async () => {
  const { data } = await axios.get("http://localhost:9000/tags");
  return data;
};

export default getApi;
