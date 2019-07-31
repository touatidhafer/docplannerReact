import React,{Component} from 'react';
import Header from './component/header';
import Main from './component/main';
import Footer from './component/footer';
import './App.css';

class App extends Component {
  state = {  }
  render() { 
  return ( <div className="App">
    
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
}
export default App;
