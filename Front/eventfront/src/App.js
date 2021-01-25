import React ,{} from 'react';
import './App.css';
import SignIn from './Loginpage/SignIn';
import SignUp from './Loginpage/SignUp';
import event from './Evenements/evnetss';
import NavBar from './NavBar/NavBar';

import { BrowserRouter,Route,Switch } from 'react-router-dom';
import DescriptionEvent from './Evenements/DescriptionEvent';

function App() {
    return(

        <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={event} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/home" component={event} />
          <Route path="/DescriptionEvent/:id" component={DescriptionEvent} />

        </Switch>


      </BrowserRouter>
    )
  
}

export default App;
