// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfessorForm from './components/ProfessorForm';
import DisciplinaForm from './components/DisciplinaForm';
import CursoForm from './components/CursoForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/professor" component={ProfessorForm} />
        <Route path="/disciplina" component={DisciplinaForm} />
        <Route path="/curso" component={CursoForm} />
      </Switch>
    </Router>
  );
};

export default App;
