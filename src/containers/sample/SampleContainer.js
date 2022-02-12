import { Route, Routes } from 'react-router-dom';

import loadable from '@loadable/component';

const Gsap = loadable(() => import('./gsap/GsapContainer'));
const DnD = loadable(() => import('./dnd/DnDContainer'));
const Rematch = loadable(() => import('./redux/RematchContainer'));
const Select = loadable(() => import('./select/SelectContainer'));
const Graphql = loadable(() => import('./graphql/GraphqlContainer'));
const Share = loadable(() => import('./share/ShareContainer'));
const WebSocket = loadable(() => import('./websocket/WebSocketContainer'));
const RoughViz = loadable(() => import('./roughviz/RoughVizContainer'));

const SampleContent = () => {
  return (
    <Routes>
      <Route path="gsap/*" element={<Gsap />} />
      <Route path="dnd/*" element={<DnD />} />
      <Route path="rematch/*" element={<Rematch />} />
      <Route path="select/*" element={<Select />} />
      <Route path="graphql/*" element={<Graphql />} />
      <Route path="share/*" element={<Share />} />
      <Route path="websocket/*" element={<WebSocket />} />
      <Route path="roughviz/*" element={<RoughViz />} />
    </Routes>
  );
};

export default SampleContent;
