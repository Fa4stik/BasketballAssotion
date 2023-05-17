import React, {Component, useEffect, useState} from 'react';
import {Box, Pagination, colors} from "@mui/material";
import axios from "axios";
import Slide from "./Slide";
import uuid from 'react-uuid'
import {SwiperSlide} from "swiper/react";
import { picturesApi } from '../api/picturesApi';
import { picturesDownloader } from '../api/picturesDownloader';
import { DataGrid } from "@mui/x-data-grid";
import ContextMenu from "./ContextMenu"

export default function PhotosPag () {
  const [items, setItems] = useState([]);
  const photosPerPage = 12;
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });



  useEffect(() => {
    fetchPictures(page);
  }, [page]);

  const fetchPictures = (page) => {
    const start = (page-1) * photosPerPage
    const end = (page) * photosPerPage
    picturesApi.getPictures(start, end)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setItems(data);
      });
  };

  useEffect(() => {
    picturesApi.getPictures(0, 1000)
      .then((response) => {
        setTotalPages(Math.ceil((response.data.length)/12));
      })
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  function downloadPhoto(photo) {
    downloadImage(items[0].id)
    /*const link = document.createElement('a');
    link.href = `http://www.basketballassotion.space/Files/Pictures/1.jpg`;
    link.download = `http://www.basketballassotion.space/Files/Pictures/1.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);*/
    }

    const downloadImage = (imageID) => {
      picturesDownloader.downloadPictures(imageID)

      .then((blob) => {
      // Создаем ссылку на полученный blob
      var binaryData = [];
      binaryData.push(blob.data);
      const url = URL.createObjectURL(new Blob(binaryData));

      // Создаем ссылку для скачивания файла
      const a = document.createElement('a');
      a.href = url;
      console.log(url)
      a.download = 'image.jpg'; // Установите имя файла для скачивания здесь
      a.click();


      })
      .catch((error) => {
      console.log('Ошибка при загрузке картинки:', error);
      });
      };

      const handleContextMenu = (event) => {
        event.preventDefault();
        setContextMenu({
            visible: true,
            x: event.clientX,
            y: event.clientY,
        });
    }

    const handleDownload = () => {
        console.log('Download clicked!');
        setContextMenu({ visible: false, x: 0, y: 0 });
    }

    const handleLike = () => {
        console.log('Like clicked!');
        setContextMenu({ visible: false, x: 0, y: 0 });
    }

    const handleClick = () => {
        setContextMenu({ visible: false, x: 0, y: 0 });
    }



  return (
    <>

    <div
    style={{justifyContent:'space-between', alignItems: 'center', columnCount: 4, border: '1px solid', borderColor: '#cccccc', width: 1470, height:670, marginBottom: 20, marginTop: 40}}

    >

      {items.map((image, index) => (
          <tr>
            <td  key={index}>
              <img onContextMenu={handleContextMenu} onClick={handleClick} style={{marginTop: 30, marginLeft: 30, width: 290, height: 180 }} src={`http://www.basketballassotion.space${image.img}`} alt="" />
              {contextMenu.visible &&
                        <ContextMenu
                            x={contextMenu.x}
                            y={contextMenu.y}
                            onDownload={handleDownload}
                            onLike={handleLike}
                        />
                    }
            </td>
          </tr>
        ))}
    </div>


    <Box sx={{ display: 'flex', flexDirection: 'row' , pb: '30px'}}>
        <Box className="font-bold fst-italic mt-[28px] pr-[460px] pl-[30px]">
          Total 19 Photos , {items.length} Photos in one page, Total {totalPages} Pages
        </Box>


      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{ mt: '20px' }}

        showFirstButton
        showLastButton
      />


      <Box sx={{ mt: '20px', ml: '35px' }}>
          <button onClick={() => downloadPhoto(`http://www.basketballassotion.space${items.img}`)} className="w-[320px] h-[33px] border text-[20px] rounded-[8px] text-nba-darkgray text-center">
            Download photos in current page
          </button>
        </Box>
      </Box>

    </>
  );
}
