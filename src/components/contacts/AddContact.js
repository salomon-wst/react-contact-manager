import React,{Component} from 'react';
import {Consumer} from '../../context';
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
  onSubmit = (e,dispatch) =>{
    e.preventDefault();
    //console.log(this.state);
    const {email,phone,name} = this.state;
    const newContact={
      id:uuid(),
      name,
      email,
      phone
    }
    dispatch({type:'ADD_CONTACT',payload:newContact});
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
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter name ..." value={name} onChange={this.onChange}></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter email ..." value={email} onChange={this.onChange}></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" className="form-control form-control-lg" placeholder="Enter phone ..." value={phone} onChange={this.onChange}></input>
                  </div> 
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