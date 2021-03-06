import { Route, Switch } from 'react-router-dom';

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
    <Switch>
      <Route exact path="/sample/gsap" component={Gsap} />
      <Route exact path="/sample/dnd" component={DnD} />
      <Route exact path="/sample/rematch" component={Rematch} />
      <Route exact path="/sample/select" component={Select} />
      <Route path="/sample/graphql" component={Graphql} />
      <Route exact path="/sample/share" component={Share} />
      <Route exact path="/sample/websocket" component={WebSocket} />
      <Route exact path="/sample/roughviz" component={RoughViz} />
    </Switch>
  )
}

export default SampleContent;
