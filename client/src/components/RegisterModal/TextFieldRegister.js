import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import API from '../../utils/API';

import axios from "axios";

export default class TextFieldSimple extends Component {
  constructor(props) {
    super(props);
    }

    // localStorage
    // Redux

    inputChange = (event) => {
      // TODO
        const name = event.target.name;
        const value = event.target.value;

        console.log("Name: ", name);
        console.log("Value: ", value);
        

        this.setState({[name]: value});
  };

  sendData = (event) => {
    // TODO
    event.preventDefault();

    axios({
      url:"/",
      method:"POST",
      data:this.state
    })
    .then((response) => {
      console.log("Data: ", response.data);
      
    })
    .catch(() => {
      console.log("Error");
      
    });

  };

 
  render(){

    console.log("State: ", this.state);
    
      
    const styles = {
      floatingLabelFocusStyle: {
          color: '#2196F3'
      },
      underlineStyle: {
        borderColor: '#2196F3'
      },
      underlineFocusStyle: {
        borderColor: '#2196F3'
      }
    }

    console.log("Text Register: ", this.props);
    

    return (

      <div>
        <TextField
          hintText="Enter First Name"
          floatingLabelText="Enter First Name"
          id="firstName"
          name = "firstName"
          value={this.props.firstName}
          onChange={this.inputChange}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
        
       <br />
        <TextField
        hintText="Enter Email"
        floatingLabelText="Enter Email"
        name = "email"
        id="email"
        value={this.props.email}
        onChange={this.inputChange}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        underlineStyle={styles.underlineStyle}
        underlineFocusStyle={styles.underlineFocusStyle}
         />
         <br />
         
      <TextField
      hintText="Enter Zip Code"
      floatingLabelText="Enter Zip Code"
      name = "zipCode"
      id="zipCode"
      value={this.props.zipCode}
      onChange={this.inputChange}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineStyle={styles.underlineStyle}
      underlineFocusStyle={styles.underlineFocusStyle}
         />
         <br />
       
        <TextField
          hintText="Create Password"
          floatingLabelText="Password"
          type="password"
          name = "password"
          id="password"
          value={this.props.password}
          onChange={this.inputChange}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
       
       
        
       
        </div>
    );
  }
}