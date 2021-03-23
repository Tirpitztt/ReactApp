import * as React from "react";
import c from './user_info.module.css';

class Status extends React.Component{

    state = {
        editStatus:false,
        status:'status ept'
    }

    activateEditStatus(){
        this.setState({
            editStatus:!this.state.editStatus
        })
    }
    changeStatus(){

    }
    render(){
        return(
            <div>
                {!this.state.editStatus?
                    <div><p className={c.statusstring} onClick={this.activateEditStatus.bind(this)}>{this.state.status}</p></div>
                    :<div><input autoFocus={true} onBlur={this.activateEditStatus.bind(this)} type="text" value={this.state.status}/>
                    <button onClick={this.changeStatus.bind(this)}>save</button></div>
                }
            </div>
        )
    }
}

export default Status;