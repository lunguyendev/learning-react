import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "K-Indie",
      thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/d/4/5cd447fb9f945ea181ed5e1e81da1b98.jpg",
    },
    {
      id: 2,
      name: "U-Indie",
      thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/d/4/5cd447fb9f945ea181ed5e1e81da1b98.jpg",
    },
    {
      id: 3,
      name: "V-Indie",
      thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/d/4/5cd447fb9f945ea181ed5e1e81da1b98.jpg",
    }
  ];

  return (
    <div>
      <h1>Bài hát yêu thích</h1>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;