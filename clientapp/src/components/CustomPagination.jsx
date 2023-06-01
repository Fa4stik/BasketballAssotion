import React, { useState } from "react";
import { TextField, IconButton, Button } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPageOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRightOutlined";

import LastPageIcon from "@mui/icons-material/LastPageOutlined";
const CustomPagination = ({ count, page, onChange }) => {
  const [inputPage, setInputPage] = useState(page);

  const handleInputChange = (event) => {
    setInputPage(event.target.value);
  };

  const handlePageSubmit = (event) => {
    event.preventDefault();
    const newPage = parseInt(inputPage, 10);
    if (newPage >= 1 && newPage <= count) {
      onChange(null, newPage);
    } else {
      setInputPage(page);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handlePageSubmit(event);
    }
  };

  return (
    <form
      onSubmit={handlePageSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <Button
        disabled={page === 1}
        onClick={() => onChange(null, 1)}
        sx={{ color: "black" }}
      >
        <FirstPageIcon />
      </Button>
      <Button
        sx={{ color: "black" }}
        disabled={page === 1}
        onClick={() => onChange(null, page - 1)}
      >
        <ChevronLeftIcon />
      </Button>
      <TextField
        type="number"
        value={inputPage}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        inputProps={{
          min: 1,
          max: count,
          style: { textAlign: "center" },
        }}
        variant="outlined"
        size="small"
        sx={{
          margin: "0 10px",
          width: "40px",
          '& input[type="number"]::-webkit-inner-spin-button, & input[type="number"]::-webkit-outer-spin-button':
            {
              display: "none",
            },
        }}
      />
      <Button
        sx={{ color: "black" }}
        disabled={page === count}
        onClick={() => onChange(null, page + 1)}
      >
        <ChevronRightIcon />
      </Button>
      <Button
        disabled={page === count}
        onClick={() => onChange(null, count)}
        sx={{ color: "black" }}
      >
        <LastPageIcon />
      </Button>
    </form>
  );
};

export default CustomPagination;
