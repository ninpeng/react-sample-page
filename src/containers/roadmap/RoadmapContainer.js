import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';

const PREFIX = 'RoadmapContainer';

const classes = {
  card: `${PREFIX}-card`,
  content: `${PREFIX}-content`,
  cardText: `${PREFIX}-cardText`,
  paper: `${PREFIX}-paper`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.card}`]: {
    maxWidth: 300,
  },

  [`& .${classes.content}`]: {
    padding: theme.spacing(0, 2),
  },

  [`& .${classes.cardText}`]: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    background: '#EEE',
    borderRadius: 6,
    wordBreak: 'keep-all',
  },

  [`& .${classes.paper}`]: {
    padding: theme.spacing(2),
  },
}));

const RoadmapContainer = () => {
  return (
    <StyledGrid container direction="column" alignItems="center" spacing={3}>
      <Grid item>
        <Card className={classes.card} elevation={7}>
          <CardHeader title="Roadmap Board" subheader="November 15, 2019" />
          <CardContent className={classes.content}>
            <Link
              href="https://www.notion.so/ninpeng/636b5bbed01849379a99e5a8ca09437e?v=c6f6300954e14ce9ada5651c06c5772d"
              target="_blank"
              underline="always"
            >
              Roadmap Notion Link
            </Link>
            <Typography className={classes.cardText} variant="subtitle2">
              개발 로드맵을 기록해 놓은 Notion 보드 링크 입니다.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </StyledGrid>
  );
};

export default RoadmapContainer;
