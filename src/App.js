
import './style.css';
import './App.css';
import './components/header/header'
import Header from "./components/header/header";
import NavBar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Footer from "./components/footer/footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter,Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";


const App = ()=> {
  return (
      <BrowserRouter>
    <div className="App">
        <Header />
        <NavBar />
        <div className='content'>
            <Route path='/profile' component={Profile}/>
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
        </div>

        <Footer />
    </div>
      </BrowserRouter>
  );
}

export default App;
