import * as React from "react";
import c from './user_info.module.css';

class Status extends React.Component{

    state = {
        editStatus:false,
        status:this.props.status
    }

    activateEditStatus(){
        this.setState({
            editStatus:!this.state.editStatus
        })
    }
    changeStatus(e){
        this.setState({
            status:e.currentTarget.value
        })
    }
    render(){
        return(
            <div>
                {!this.state.editStatus?
                    <div><p className={c.statusstring} onClick={this.activateEditStatus.bind(this)}>{this.state.status||'----------'}</p></div>
                    :<div><input onChange={this.changeStatus.bind(this)}
                                 autoFocus={true} onBlur={this.activateEditStatus.bind(this)} type="text"
                                value={this.state.status}/>
                    <button >save</button></div>
                }
            </div>
        )
    }
}

export default Status;