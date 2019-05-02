import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Phaser from 'phaser';

class PhaserContainer extends Component {
  game = null;

  render () {
    return(
      <Container>
        <Row>
          <h2>Phaser3 in React</h2>
        </Row>
        <Row>
          <div id="phaser"/>
        </Row>
      </Container>)
  }

  preload () {
    this.load.setBaseURL('assets/img/');

    this.load.image('sky', 'space3.png');
    this.load.image('logo', 'phaser3-logo.png');
    this.load.image('red', 'red.png');
  }

  create () {
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }

  componentDidMount() {
    var config = {
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
            preload: this.preload,
            create: this.create
        },
        scale: {
          mode: Phaser.Scale.ScaleModes.FIT
        }
    };

    this.game = new Phaser.Game(config);
  }

  componentWillUnmount() {
    if (this.game) {
      this.game.destroy();
      this.game = null;
    }
  }
}

export default PhaserContainer;
