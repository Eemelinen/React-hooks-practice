import React from 'react';
import ImageElement from '../components/imageElement/ImageElement';

function WallWrapper({ imageCount }) {
  return (
    <React.Fragment>
      { Array.from({ length: imageCount }, () => <ImageElement />) }
    </React.Fragment>
  )
}

export default WallWrapper;