import { Component } from "react";

class ClassComp extends Component{
    // - state is an object
    // - it is used to manipulate the data within the component

    constructor(){
        super()
        // this.state = {
        //     counter: 0,
        //     userData: []
        // }
    }

    state = {
        counter:0,
        userData:[]
    }

    handleIncrement = () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }

    render(){
        return(
            <>
                <h2>Class Comp</h2>
                <h4>Counter: {this.state.counter}</h4>
                <button className="btn btn-primary me-2"
                onClick={() => {this.handleIncrement()}}
                >Increment</button>
                <button className="btn btn-danger me-2">Decrement</button>
                <button className="btn btn-warning me-2">Reset</button>
            </>
        )
    }
}

export default ClassComp