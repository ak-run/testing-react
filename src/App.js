import './App.css';
import { UseStateTutorial } from './components/UseStateHook';
import { InputState } from './components/UseStateHook';
import { ReducerTutorial } from './components/useReducerHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learning React</h1>
      </header>
      <div className="learning">
        <UseStateTutorial></UseStateTutorial>
        <InputState></InputState>
        <ReducerTutorial></ReducerTutorial>
      </div>
    </div>
  );
}

export default App;