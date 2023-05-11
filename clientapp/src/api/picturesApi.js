import $api from "./instance";

const getPictures = async (start, end) => {
  return $api.get("/Picture", {
    params: {
      start: start,
      end: end,
    },
  });
};

export const picturesApi = { getPictures };
