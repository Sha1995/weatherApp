import LocationFetcher from './components/LocationFetcher';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        Weather App
      </header>
      <div className='App-header'>
        <LocationFetcher />
      </div>
    </div>
  );
}

export default App;
