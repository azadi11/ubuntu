import React from "react";


class VolunteersForm extends React.Component {
state={
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    password:"",
    address:""

};
onSubmit=e=>{
    e.preventDefault();
    console.log(this.state);
};
render(){
    return(
        <form>
            <input placeholder="First name" 
            value={this.state.firstName}
           onChange={e=> this.setState({firstName: e.target.value})}
            />
            <br/>
            <input placeholder="Last name" 
            value={this.state.lastName}
           onChange={e=> this.setState({lastName: e.target.value})}
            />
            <br/>
            <input placeholder="Email" 
            value={this.state.email}
           onChange={e=> this.setState({email: e.target.value})}
            />
            <br/>
            <input placeholder="Phone number" 
            value={this.state.phoneNumber}
           onChange={e=> this.setState({phoneNumber: e.target.value})}
            />
            <br/>
            <input placeholder="Password" 
            value={this.state.password}
           onChange={e=> this.setState({password: e.target.value})}
            />
            <br/>
            <input placeholder="Address" 
            value={this.state.address}
           onChange={e=> this.setState({address: e.target.value})}
            />
            <br/>
            <button onClick={e=>this.onSubmit(e)}>Submit</button>
        </form>
    )
}
};
export default VolunteersForm;