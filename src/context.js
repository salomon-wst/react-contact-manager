import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state,action)=>{

	switch(action.type){
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts:state.contacts.filter(contact => contact.id !== action.payload)
			}
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts:[action.payload,...state.contacts]
      }
		default:
			return state;
	}
}
export class Provider extends Component {

	state={
      contacts:[
        {
          id:1,
          name:'John Doe',
          email:'jdoe@gmail.com',
          phone:'99956847852'
        },
        {
          id:2,
          name:'Mariya Hills',
          email:'mhills@gmail.com',
          phone:'5778845824'
        },
        {
          id:3,
          name:'Phill Colson',
          email:'phill@gmail.com',
          phone:'8884571458'
        },
      ],
      dispatch:action => this.setState(state => reducer(state,action))
    };
    render(){
    	return(
    		<Context.Provider value={this.state}>
    			{this.props.children}
    		</Context.Provider>
    	);
    }
}

export const Consumer = Context.Consumer;