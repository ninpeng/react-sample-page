import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Skeleton from '@material-ui/lab/Skeleton';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MovieDetailImageGallery = ({ movie }) => {

  const params = {
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
    emulateTouch: true,
  }

  return (
    movie ?
    <Carousel {...params}>
      {/* <iframe title="trailer" width="560" height="315" src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /> */}
      <img src={movie.large_screenshot_image1} alt="screenshot1"
        srcSet={`${movie.medium_screenshot_image1} 430w, ${movie.large_screenshot_image1} 1000w`} />
      <img src={movie.large_screenshot_image2} alt="screenshot2"
        srcSet={`${movie.medium_screenshot_image2} 430w, ${movie.large_screenshot_image2} 1000w`} />
      <img src={movie.large_screenshot_image3} alt="screenshot3"
        srcSet={`${movie.medium_screenshot_image3} 430w, ${movie.large_screenshot_image3} 1000w`} />
    </Carousel> :
    <Skeleton variant="rect" width={'100%'} height={300} />
  )
}

export default MovieDetailImageGallery;