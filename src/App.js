import './App.css';
import { UseStateTutorial } from './components/UseStateHook';
import { InputState } from './components/UseStateHook';
import { ReducerTutorial } from './components/useReducerHook';
import { EffectTutorial } from './components/UseEfectHook';

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
        <EffectTutorial></EffectTutorial>
      </div>
    </div>
  );
}

export default App;