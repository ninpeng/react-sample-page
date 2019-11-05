import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  item: {
    padding: theme.spacing(2),
  },
}));

const MovieDetailCast = ({ movie }) => {
  const classes = useStyles();

  return (
    <Grid container>
      { movie.cast.map((cast, idx) => (
        <Grid key={idx} className={classes.item} item xs={12} sm={6} md={4} lg={3}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Avatar alt={cast.character_name} src={cast.url_small_image} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" nowrap="true">
                {cast.character_name}
              </Typography>
              <Typography variant="subtitle2">
                {cast.name}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
        </Grid>
      ))}
    </Grid>
  )
}

export default MovieDetailCast;