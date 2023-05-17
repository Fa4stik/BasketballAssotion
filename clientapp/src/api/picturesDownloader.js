import $api from "./instance";

const downloadPictures = async (id) => {
  return $api.get("/FileDownload", {
    params: {
      id: id,
    },
  });
};

export const picturesDownloader = { downloadPictures };
