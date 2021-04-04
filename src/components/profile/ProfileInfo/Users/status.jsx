import * as React from "react";
import c from './user_info.module.css';
import StatusForm from "../../../Common/Forms/statusForm";

class Status extends React.Component {

    state = {
        editStatus: false,
        status: this.props.status
    }

    activateEditStatus() {
        this.setState({
            editStatus: !this.state.editStatus
        })
    }



    updateStatus(e) {
        console.log(e.status)
        this.props.upStatus({status: e.status});
        this.activateEditStatus();
    }

    render() {
        return (
             <div >
                {!this.state.editStatus ?
                    <div><p className={c.statusstring}
                            onClick={this.activateEditStatus.bind(this)}>{this.props.status || '----------'}</p></div>
                    : <StatusForm upStatus={this.updateStatus.bind(this)} />
                }
            </div>
        )
    }
}

export default Status;