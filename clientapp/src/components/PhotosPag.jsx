import React, { useEffect, useState } from "react";
import { Box, Grid, Pagination } from "@mui/material";

import { picturesApi } from "../api/picturesApi";
import { downloadImage } from "../api/picturesDownloader";

import ContextMenu from "./ContextMenu";
import CustomPagination from "./CustomPagination";

export default function PhotosPag() {
  const [items, setItems] = useState([]);
  const photosPerPage = 12;
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });
  const [selectedPhoto, setSelectedPhoto] = useState(1);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPictures(page);
  }, [page]);

  const fetchPictures = (page) => {
    setLoading(true);
    const start = (page - 1) * photosPerPage;
    const end = page * photosPerPage;
    picturesApi
      .getPictures(start, end)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    picturesApi.getPictures(0, 1000).then((response) => {
      setTotalPages(Math.ceil(response.data.length / 12));
    });
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  function downloadCurrentPhotos() {
    if (items) {
      items.forEach((photo) => downloadImage(photo.id));
    }
  }
  const handleContextMenu = (event) => {
    event.preventDefault();
    setSelectedPhoto(event.target.id);
    setContextMenu({
      visible: true,
      x: event.clientX - 30,
      y: event.clientY + 10,
    });
  };

  const handleDownload = () => {
    console.log("Download clicked!");
    downloadImage(selectedPhoto);
    setContextMenu({ visible: false, x: 0, y: 0 });
  };

  const handleLike = () => {
    console.log("Like clicked!");
    picturesApi.putLike(selectedPhoto, "true");
    setContextMenu({ visible: false, x: 0, y: 0 });
  };

  const handleClick = () => {
    setContextMenu({ visible: false, x: 0, y: 0 });
    setSelectedPhoto(1);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Grid
          container
          rowGap={1}
          style={{
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid",
            borderColor: "#cccccc",
            width: 1470,
            paddingBottom: 20,
            marginTop: 20,
          }}
          onClick={handleClick}
        >
          {items.map((image, index) => (
            <Grid item key={index} xs={3}>
              <img
                onContextMenu={handleContextMenu}
                onClick={handleClick}
                style={{
                  marginTop: 30,
                  marginLeft: 30,
                  width: 290,
                  height: 180,
                }}
                id={image.id}
                src={`http://www.basketballassotion.space${image.img}`}
                alt=""
              />
              {contextMenu.visible && (
                <ContextMenu
                  x={contextMenu.x}
                  y={contextMenu.y}
                  onDownload={handleDownload}
                  onLike={handleLike}
                />
              )}
            </Grid>
          ))}
        </Grid>
      )}

      <Box sx={{ display: "flex", flexDirection: "row", pb: "30px" }}>
        <Box className="font-bold fst-italic mt-[28px] pr-[460px] pl-[30px]">
          Total 19 Photos , {items.length} Photos in one page, Total{" "}
          {totalPages} Pages
        </Box>
        <CustomPagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
        />
        <Box sx={{ mt: "20px", ml: "35px" }}>
          <button
            onClick={downloadCurrentPhotos}
            className="w-[320px] h-[33px] border text-[20px] rounded-[8px] text-nba-darkgray text-center cursor-pointer"
          >
            Download photos in current page
          </button>
        </Box>
      </Box>
    </>
  );
}
