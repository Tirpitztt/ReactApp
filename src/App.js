
import './style.css';
import './App.css';
import './components/header/header'

import Footer from "./components/footer/footer";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import NavBarContainer from "./components/navbar/navBarContainer";

import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/Login/login";
import MainPage from "./components/Main/mainPage";
import UsersContainer from "./components/Users/UsersContainer";



const App = (props)=> {
  return (
      <BrowserRouter>
    <div className="App">
        <HeaderContainer />
        <NavBarContainer />
        <div className='content'>
            <Route path={'/'} render = {()=> <Redirect to={'/main'} />} />
            <Route path={'/main'} render = {()=> <MainPage />} />
            <Route path='/profile/:userId' render={()=> <ProfileContainer />}/>
            <Route path='/dialogs' render={()=> <DialogsContainer />}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/users' render={()=> <UsersContainer />}/>
            <Route path='/login' render = {()=> <Login />}/>
        </div>

        <Footer />
    </div>
      </BrowserRouter>
  );
}

export default App;
