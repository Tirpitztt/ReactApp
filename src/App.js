
import './App.css';
import './components/header'
import Header from "./components/header";
import NavBar from "./components/navbar";
import Profile from "./components/profile";
import Footer from "./components/footer";


const App = ()=> {
  return (
    <div className="App">
        <Header />
        <NavBar />
        <Profile />
        <Footer />
    </div>
  );
}

export default App;
