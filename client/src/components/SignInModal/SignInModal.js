import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextFieldSignin from '../TextFieldSimple';
import TextFieldSignup from '../RegisterModal/TextFieldRegister';


const SignInModal = (props) => {

  const styles = {
    labelStyle: {
      color: '#2196F3'
    }
  }

  

  // isLoggedIn
  // true = Login
  // false = Register

  const {
    isLoggedIn,
    open
  } = props;


  const actions = [
    <FlatButton
      label="Cancel"
      default={true}
      onClick={props.handleClose}
    />,
    <FlatButton
      label={isLoggedIn ? "Sign In" : "Sign up"}
      primary={true}
      keyboardFocused={true}
      onClick={props.handleClose}
      labelStyle={styles.labelStyle}
    />
  ];



  return (
    <div className="container-fluid">
      <FlatButton onClick={props.handleOpen} label="Sign In" />
      <Dialog
        title={isLoggedIn ? "Sign in" : "Sign up"}
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={props.handleClose}
      >

        {isLoggedIn
          ? <p>Don't have an account yet? <FlatButton onClick={props.signUp} label="Register" /> </p>
          :
          <p>Already have an account? <FlatButton onClick={props.signIn} label="Signin" /> </p>}

        {isLoggedIn ? <TextFieldSignin /> : <TextFieldSignup />}



      </Dialog>
    </div>
  );
};

export default SignInModal;