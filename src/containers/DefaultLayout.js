import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';

import Navbars from './Navbars';
import DrawerComponent from './DrawerComponent';

const AppBarSpacer = styled('div')(({ theme }) => theme.mixins.toolbar);

const Main = styled('main')(({ theme }) => ({
  padding: theme.spacing(3, 2),
}));

const Home = loadable(() => import('./home/HomeContainer'));
const Sample = loadable(() => import('./sample/SampleContainer'));
const Phaser = loadable(() => import('./phaser/PhaserContainer'));
const Bitly = loadable(() => import('./bitly/BitlyContainer'));
const Roadmap = loadable(() => import('./roadmap/RoadmapContainer'));
const NoMatch = loadable(() => import('./nomatch/NomatchContainer'));

const DefaultLayout = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Box display="flex">
      <CssBaseline />
      <Navbars setOpen={setOpen} />
      <DrawerComponent open={open} setOpen={setOpen} />
      <Box width="100%">
        <AppBarSpacer />
        <Main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="sample/*" element={<Sample />} />
            <Route path="phaser/*" element={<Phaser />} />
            <Route path="bitly/*" element={<Bitly />} />
            <Route path="roadmap/*" element={<Roadmap />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Main>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
