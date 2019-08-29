import React,{Component} from 'react';
import propTypes from 'prop-types';
import {Consumer} from '../../context';

class Contact extends Component {
 state ={
 	showContactInfo:false
 };
  ShowContent = (id,e) =>{
  	// console.log(id);
  	this.setState({showContactInfo:!this.state.showContactInfo});
  }
  DeleteItem = (id,dispatch) =>{
  	dispatch({type:'DELETE_CONTACT',payload:id});
  }
  render(){
  	const {id,name,email,phone} = this.props.contact;
  	const {showContactInfo} = this.state;
  	return (
      <Consumer>
        {
          value => {
          const {dispatch} = value;
    	return (
	    	<div className='card card-body mb-3'>
	    		<h4>{name} <i onClick={this.ShowContent.bind(this,id)} style={{cursor:'pointer'}} className='fas fa-sort-down'></i>
	    			<i className='fas fa-times' style={{cursor:'pointer',float:'right',color:'red'}} onClick={this.DeleteItem.bind(this,id,dispatch)}></i>
	    		</h4>
	    		{showContactInfo ? ( 
	    		<ul className='list-group'>
	    		<li className='list-group-item'>Email: {email}</li>
	    		<li className='list-group-item'>Phone: {phone}</li>
	    		</ul>)
	    		: null}
	    	</div>
	    	);
    	}}
    </Consumer>
    );
  }
}
Contact.propTypes={
	contact:propTypes.object.isRequired,
}
export default Contact;