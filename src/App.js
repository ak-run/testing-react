import logo from './logo.svg';
import './App.css';
import photo from './guitar.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Hobby: Playing the Guitar</h1>
        <img src={photo} alt="photo not recognised" className="guitar"/>
        <p>I started playing the guitar when I was 16. It helps me with my singing exercies. It helps me relax. It's easy to start but requires a lot of work to continue.</p>
        <h4>Why do I like it?</h4>
            <p className="list">It's creative</p>
            <p className="list">It's fun</p>
            <p className="list">It helps me relax</p>
          <h4>Helpful resources</h4>
            <p className="list" >
              <a className="App-link" href="https://en.wikipedia.org/wiki/Guitar" target="_blank">Wikipedia page</a>
            </p>
            <p className="list">
              <a className="App-link" href="https://www.fender.com/play" target="_blank">Fender online lessons</a>
            </p>
        <p className="list"><a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
