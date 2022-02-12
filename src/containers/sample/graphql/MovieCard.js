import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';

import LazyLoad from 'react-lazyload';

const imgWidth = 230;
const imgHeight = 345;

const MovieCard = ({ movie }) => {
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const handleClickCard = () => {
    if (movie) {
      navigate(`detail/${movie.id}`);
    }
  };

  return (
    <Card elevation={8}>
      <CardActionArea onClick={handleClickCard}>
        <Box padding={2}>
          {movie ? (
            <LazyLoad height={imgHeight} once>
              <Fade in={checked}>
                <CardMedia
                  component="img"
                  width={imgWidth}
                  height={imgHeight}
                  image={movie.medium_cover_image}
                  title={movie.title}
                  onLoad={() => setChecked(true)}
                />
              </Fade>
            </LazyLoad>
          ) : (
            <Skeleton variant="rectangular" height={imgHeight} />
          )}
          <CardContent sx={{ padding: 1 }}>
            {movie ? (
              <>
                <Typography noWrap variant="subtitle1">
                  {movie.title}
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Typography variant="subtitle2">{movie.year}</Typography>
                  <Rating value={movie.rating / 2} precision={0.1} size="small" readOnly />
                </Box>
              </>
            ) : (
              <>
                <Skeleton />
                <Skeleton />
              </>
            )}
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
