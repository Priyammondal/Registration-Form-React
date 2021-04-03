import React from 'react';
class Demo2 extends React.Component {
    constructor() {
        super();
        this.state={
            name:"priyam",
            age:"22"
        }
    }
    componentDidMount() {
        console.warn("Props",this.props.name);
    }
    componentDidUpdate() {
        console.warn("Props in update",this.props.name);
    }
    render() {
        return (
            <div>
            <h1>This is Demo2</h1>
                <h1>{this.props.name}</h1>
                <h3>{this.state.name}</h3>
                <button onClick={()=>{this.setState({name:"Priyam Mondal"})}}>Update State Name in class component</button>
            </div>
        )
    }
}
export default Demo2;