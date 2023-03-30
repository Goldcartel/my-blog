import React, {Component} from "react";
import './Box.css';

export default class BoxClass extends Component {

    constructor(props){
        super(props);
        this.state = {
            cnt:0
        };
    }
    inc = () => {
        this.setState({cnt:this.state.cnt+1});
    }
    render() {
        return (
            <div>
                <p>클릭횟수:{this.state.cnt}</p>
                <button onClick={this.inc}>클릭</button>
                <hr/>
                <hr/>
                <div className="box">{this.state.cnt}</div>
            </div>
        )
    }
}