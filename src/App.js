import './App.css';
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css'
import Weather from './components/Weather';

const  API_Key = 'bc0df53bcf25bf5442d42b7384746a68'

function App() {
  return (
    <>
      <Header />
      <Weather />
    </>
  );
}

export default App;
