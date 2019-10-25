import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import Phaser from 'phaser';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2)
  },
  phaser: {
    padding: theme.spacing(3, 2)
  }
}));

const PhaserContainer = () => {

  const game = useRef(null);
  const classes = useStyles();

  const preload = () => {
    const scene = game.current.scene.scenes[0];

    scene.load.setBaseURL('assets/img/');

    scene.load.image('sky', 'space3.png');
    scene.load.image('logo', 'phaser3-logo.png');
    scene.load.image('red', 'red.png');
  }

  const create = () => {
    const scene = game.current.scene.scenes[0];

    scene.add.image(400, 300, 'sky');

    const particles = scene.add.particles('red');

    const emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    const logo = scene.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'phaser',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: {
        preload: preload,
        create: create
      },
      scale: {
        mode: Phaser.Scale.ScaleModes.FIT
      }
    }

    game.current = new Phaser.Game(config);

    return (() => {
      if (game.current) {
        game.current.destroy();
        game.current = null;
        console.log('unmount phaser');
      }
    })
  }, []);

  return (
    <>
      <Paper className={classes.paper}>
        <Typography align="center" variant="h3">
          Phaser
        </Typography>
      </Paper>
      <Box className={classes.phaser} display="flex" align="center">
        <div id="phaser"/>
      </Box>
      
    </>
  )
}

export default PhaserContainer;
