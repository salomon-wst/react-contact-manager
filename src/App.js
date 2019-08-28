import React,{Component} from 'react';
// import logo from './logo.svg';
import Contact from './components/Contact'
import Header from './components/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render()
  {
    return (
      <div className="App">
        <Header title='Contact Manager'></Header>
        <div className="container">
          <Contact name='John Doe' email='jdoe@gmail.com' phone='99956814785'></Contact>
          <Contact name='Mariya Hills' email='mariyahills@gmail.com' phone='9887754876'></Contact>
        </div>
      </div>
    );

  }
}

export default App;
