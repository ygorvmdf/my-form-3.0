import './App.css';
import Forms from './Forms';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Forms />
      </Provider>
    </div>
  );
}

export default App;
