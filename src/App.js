
import './App.css';
import './components/header'
import Header from "./components/header";
import NavBar from "./components/navbar";
import Profile from "./components/profile";


const App = ()=> {
  return (
    <div className="App">
        <Header />
        <NavBar />
        <Profile />
    </div>
  );
}

export default App;
