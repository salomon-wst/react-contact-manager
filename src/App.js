import React,{Component} from 'react';
// import logo from './logo.svg';
// import Contact from './components/Contact'
import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContact'
import Header from './components/layouts/Header'
import {Provider} from './context'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render()
  {
    return (
      <Provider>
      <div className="App">
        <Header title='Contact Manager'></Header>
        <div className="container">
          <AddContact/>
          <Contacts />
        </div>
      </div>
      </Provider>
    );

  }
}

export default App;
