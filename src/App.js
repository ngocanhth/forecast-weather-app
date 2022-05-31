import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Sidebar from './features/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
