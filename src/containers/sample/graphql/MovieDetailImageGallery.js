// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import Skeleton from '@mui/material/Skeleton';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

const MovieDetailImageGallery = ({ movie }) => {
  const images = movie
    ? [
        {
          name: 'screenshot1',
          mediumImage: movie.medium_screenshot_image1,
          largeImage: movie.large_screenshot_image1,
        },
        {
          name: 'screenshot2',
          mediumImage: movie.medium_screenshot_image2,
          largeImage: movie.large_screenshot_image2,
        },
        {
          name: 'screenshot3',
          mediumImage: movie.medium_screenshot_image3,
          largeImage: movie.large_screenshot_image3,
        },
      ]
    : [];

  return movie ? (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView="auto"
      centeredSlides
      loop
      pagination={{ clickable: true }}
      navigation
    >
      {images.map((image) => (
        <SwiperSlide key={image.name} style={{ maxWidth: 607, maxHeight: 360 }}>
          <img
            src={image.largeImage}
            alt={image.name}
            srcSet={`${image.mediumImage} 430w, ${image.largeImage} 1000w`}
            width="100%"
            height="100%"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <Skeleton variant="rectangular" width={'100%'} height={300} />
  );
};

export default MovieDetailImageGallery;
