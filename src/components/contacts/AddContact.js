import React,{Component} from 'react';
import {Consumer} from '../../context';
import TextInputGroup from '../layouts/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
  state ={
    name:'',
    email:'',
    phone:'',
  }
  onChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit = (dispatch,e) =>{
    e.preventDefault();
    const {email,phone,name} = this.state;
    const newContact={
      id:uuid(),
      name,
      email,
      phone
    }
    dispatch({type:'ADD_CONTACT',payload:newContact});
    this.setState({
      name:'',
      email:'',
      phone:'',
    });
  }
  render(){
    const {name,email,phone} = this.state;
    return(
      <Consumer>
        {value=>{
          const {dispatch} = value;
        	return (
      	    	<div className='card card-body mb-3'>
      	    	  <div className='card-header'>Add Contact</div>
                <div className='card-body'>
                  <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                  <TextInputGroup
                  label="Name"
                  name="name"
                  placeholder="Enter the name...."
                  value={name}
                  onChange={this.onChange}
                   />
                  <TextInputGroup
                  label="Email"
                  name="email"
                  placeholder="Enter the email...."
                  value={email}
                  type="email"
                  onChange={this.onChange}
                   />
                  <TextInputGroup
                  label="Phone"
                  name="phone"
                  placeholder="Enter the phone...."
                  value={phone}
                  onChange={this.onChange}
                   /> 
                  <button type="submit" className="btn btn-block btn-light btn-primary">Add Contact</button>   
                  </form>
                </div>
      	    	</div>
      	    	);
        }}
      </Consumer>
      )


  }
}
export default AddContact;