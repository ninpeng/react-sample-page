import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const iframeCcontentWidth = 248;

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: iframeCcontentWidth + theme.spacing(4),
  },
  content: {
    padding: theme.spacing(0, 2)
  },
  trello: {
    margin: -1,
    border: 1,
    borderRadius: 6,
    borderColor: '#888',
    borderStyle: 'dotted',
    
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

  React.useEffect(() => {
    const aScript = document.createElement('script');
    aScript.src = "https://p.trellocdn.com/embed.min.js";

    document.body.appendChild(aScript);
        
    return ()=> {
      document.body.removeChild(aScript);
    }
  }, []);

  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid item>
        <Card className={classes.card} elevation={7}>
          <CardHeader
            title="Roadmap Board"
            subheader="November 8, 2019"
          />
          <CardContent className={classes.content}>
            <div className={classes.trello}>
              <blockquote className={clsx('trello-board-compact', )}>
                <a href="https://trello.com/b/nTorxbbf">Trello Board</a>
              </blockquote>
            </div>
            <Typography className={classes.cardText} variant="subtitle2">
              <>
                개발 로드맵을 기록해 놓은 Trello 보드 링크 입니다.<br />
                Trello 스크립트를 동적으로 로드하니 새로고침 시에만 나타나는 버그가 있어 Rest API로 변경할 예정
              </>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Paper className={classes.paper} elevation={8}>
          <Grid container spacing={2}>
            <Grid item>
              <blockquote className="trello-card">
                <a href="https://trello.com/c/03XoOLPR">1.0</a>
              </blockquote>
            </Grid>
            <Grid item>
              <blockquote className="trello-card">
                <a href="https://trello.com/c/mHqUGnkc">2.0~</a>
              </blockquote>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default RoadmapContainer;
