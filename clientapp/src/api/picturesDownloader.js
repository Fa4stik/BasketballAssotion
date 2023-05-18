

import axios from "axios";

export const downloadImage = (imageID) => {
  axios({
    url: `http://www.basketballassotion.space/Files/Pictures/${imageID}.jpg`,
    method: "GET",
    responseType: "blob",
  })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));

      const a = document.createElement("a");
      a.href = url;
      a.download = `NBAimage_${imageID}.jpg`;
      a.click();
    })
    .catch((error) => {
      console.log("Ошибка при загрузке картинки:", error);
    });
};
