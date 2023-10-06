import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainListPage from './TrainListPage';
import TrainDetailPage from './TrainDetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TrainListPage} />
        <Route path="/train/:id" component={TrainDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
