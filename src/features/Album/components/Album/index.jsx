import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

Album.propTypes = {
  album: PropTypes.object.isRequired
};

function Album(props) {
  const { album } = props
  return (
    <div className="album">
      <div className="album-thumbnail">
        <img src={album.thumbnaiUrl} alt={album.name} />
      </div>
      <p className="album-name">{album.name}</p>
    </div>
  );
}

export default Album;