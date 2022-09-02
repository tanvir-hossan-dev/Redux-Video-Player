import axios from "axios";

const getApi = async (tags, search) => {
  let queryString = "";

  if (tags?.lenght > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const { data } = await axios.get(
    `http://localhost:9000/videos?${queryString}`
  );
  return data;
};

export { getApi };
