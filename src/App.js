import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import {Provider} from 'react-redux';
import configure from './redux/store';

const store = configure();


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Header />
        <ImageGrid />
      </div>
    </Provider>

  );
}

export default App;
