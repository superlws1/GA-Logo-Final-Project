import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
import Slider from './Slider';
import Movie from './Movie';

const Hello = () => {
  return (
  <div>
    <p>Hello</p>
    <ul>
      <li>123</li>
      <li>456</li>
    </ul>
  </div>
  )
}

const Header = () => {
  return <div>
    <p>About Me</p>
    {/* <Button>Login</Button> */}
  </div>
}

const SideBar = () => {
  let array = ([1,2,3,4,5,], 'checking','Name1');
  return <div>
    {/* <aSide>

    </aSide> */}
  </div>
}




function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <Hello/>
      <Header/>
      <SideBar/>
      <Counter/>
      <Slider/>
      <Movie/>
    </div>
  );
}

export default App;
