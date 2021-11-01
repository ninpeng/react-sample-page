import { useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Phaser from 'phaser';

const PREFIX = 'PhaserContainer';

const classes = {
  paper: `${PREFIX}-paper`,
  phaser: `${PREFIX}-phaser`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.paper}`]: {
    padding: theme.spacing(3, 2),
  },

  [`& .${classes.phaser}`]: {
    padding: theme.spacing(3, 2),
    maxHeight: 600,
  },
}));

const PhaserContainer = () => {
  const game = useRef(null);

  const preload = () => {
    const scene = game.current.scene.scenes[0];

    scene.load.setBaseURL('assets/img/');

    scene.load.image('sky', 'space3.png');
    scene.load.image('logo', 'phaser3-logo.png');
    scene.load.image('red', 'red.png');
  };

  const create = () => {
    const scene = game.current.scene.scenes[0];

    scene.add.image(400, 300, 'sky');

    const particles = scene.add.particles('red');

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });

    const logo = scene.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  };

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'phaser',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 },
        },
      },
      scene: {
        preload: preload,
        create: create,
      },
      scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
      },
    };

    game.current = new Phaser.Game(config);

    return () => {
      if (game.current) {
        game.current.destroy();
        game.current = null;
        console.log('unmount phaser');
      }
    };
  }, []);

  return (
    <Root>
      <Paper className={classes.paper} elevation={8}>
        <Typography align="center" variant="h3">
          Phaser
        </Typography>
      </Paper>
      <Box className={classes.phaser} display="flex" align="center">
        <div id="phaser" />
      </Box>
    </Root>
  );
};

export default PhaserContainer;
