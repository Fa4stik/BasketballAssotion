import $api from "./instance";

const getPictures = async (start, end) => {
  return $api.get("/Picture", {
    params: {
      start: start,
      end: end,
    },
  });
};
const putLike = async (id, isPlus) => {
  return $api.put(`/Picture?id=${id}&isPlus=${isPlus}`);;
};
export const picturesApi = { getPictures, putLike };
