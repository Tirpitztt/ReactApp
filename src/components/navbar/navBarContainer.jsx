import {connect} from "react-redux";
import NavBar from "./navbar";
import {compose} from "redux";
import * as React from "react";


class NavBarContainer extends React.Component {
    render() {
        return (
            <NavBar {...this.props} />
        )
    }
}


let mapStateToProps = (state)=>{

    return{
        state
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {

    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps))(NavBarContainer);

