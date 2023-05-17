import React from 'react';

const ContextMenu = ({ x, y, onDownload, onLike }) => {
    return (
        <div style={{ top: `${y}px`, left: `${x}px`, position: 'absolute' }} className="text-dark bg-white">
            <div className="m-[10px]" onClick={onDownload}>Download</div>
            <div className="m-[10px]" onClick={onLike}>Like</div>
        </div>
    );
}
export default ContextMenu;
