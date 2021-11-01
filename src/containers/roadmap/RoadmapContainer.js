import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';

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
