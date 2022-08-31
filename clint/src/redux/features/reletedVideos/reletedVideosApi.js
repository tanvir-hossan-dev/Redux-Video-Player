import axios from "axios";

const getReletedVideosApi = async ({ id, tags }) => {
  const limit = 5;
  const queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;
  const { data } = await axios.get(
    `http://localhost:9000/videos?${queryString}`
  );
  return data;
};

export { getReletedVideosApi };
