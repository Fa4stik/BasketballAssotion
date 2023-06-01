import React from 'react';

const ContextMenu = ({ x, y, onDownload, onLike }) => {
    return (
      <div
        style={{ top: `${y}px`, left: `${x}px`, position: "absolute" }}
        className="text-dark bg-white"
      >
        <div
          className="p-[10px] cursor-pointer hover:bg-nba-wheat"
          onClick={onDownload}
        >
          Download
        </div>
        <div
          className="p-[10px] cursor-pointer hover:bg-nba-wheat"
          onClick={onLike}
        >
          Like
        </div>
      </div>
    );
}
export default ContextMenu;
