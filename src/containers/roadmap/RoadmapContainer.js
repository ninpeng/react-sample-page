import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
  },
  content: {
    padding: theme.spacing(0, 2),
  },
  cardText: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    background: '#EEE',
    borderRadius: 6,
    wordBreak: 'keep-all'
  },
  paper: {
    padding: theme.spacing(2)
  }
}));

const RoadmapContainer = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid item>
        <Card className={classes.card} elevation={7}>
          <CardHeader
            title="Roadmap Board"
            subheader="November 15, 2019"
          />
          <CardContent className={classes.content}>
            <Link href="https://www.notion.so/ninpeng/636b5bbed01849379a99e5a8ca09437e?v=c6f6300954e14ce9ada5651c06c5772d" target="_blank" underline="always">Roadmap Notion Link</Link>
            <Typography className={classes.cardText} variant="subtitle2">
              개발 로드맵을 기록해 놓은 Notion 보드 링크 입니다.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default RoadmapContainer;
