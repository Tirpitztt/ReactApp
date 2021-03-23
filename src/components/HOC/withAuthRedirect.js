import {connect} from "react-redux";
import * as React from "react";
import {Redirect} from "react-router-dom";


let mapStateToProps = (state)=>{

    return{
        isAuth:state.authentication.isUserAuth
    }
}


export const withAuthRedirect = (Component)=>{

    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isAuth){
                return <Redirect to={'/login'} />
            }
            return <Component {...this.props} />
        }
    }

    let connectRedirectAuthComponent = connect(mapStateToProps)(RedirectComponent)

    return connectRedirectAuthComponent;
}