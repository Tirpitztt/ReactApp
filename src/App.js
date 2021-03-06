
import './App.css';
import './components/header/header'
import Header from "./components/header/header";
import NavBar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Footer from "./components/footer/footer";


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
