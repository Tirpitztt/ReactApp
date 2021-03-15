
import './style.css';
import './App.css';
import './components/header/header'
import Header from "./components/header/header";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import {BrowserRouter,Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/profile/ProfileContainer";


const App = (props)=> {
  return (
      <BrowserRouter>
    <div className="App">
        <Header />
        <NavBar state={props.state}/>
        <div className='content'>
            <Route path='/profile' render={()=> <ProfileContainer state={props.state}/>}/>
            <Route path='/dialogs' render={()=> <DialogsContainer state={props.state} />}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
        </div>

        <Footer />
    </div>
      </BrowserRouter>
  );
}

export default App;
