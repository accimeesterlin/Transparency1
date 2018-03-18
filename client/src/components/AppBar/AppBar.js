import React from 'react';
import AppBar from 'material-ui/AppBar';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SignInModal from '../SignInModal';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  labelStyle: {
    color:"#ffffff"
  }
 }

const muiTheme = getMuiTheme({
  palette: {
    color: "#D32F2F",
  },
  appBar: {
    height: 100,
    color: "#D32F2F",
  }
});


export default class AppBarExample extends React.Component {
  state = {
    open: false,
    isLoggedIn: true
  };


  handleOpen = () => { this.setState({ open: true }); }

  handleClose = () => { this.setState({ open: false }); }

  signUp = () => {
    // TODO
    // Register
    // Signin

    this.setState({
      isLoggedIn: false
    });

    // isLoggedIn
    // true = Login
    // false = Register
  };

  signIn = () => {
    // TODO
    // UI Sign in
    this.setState({
      isLoggedIn: true
    });
  };


  render(){

    const handleOpen = () => {
      this.setState(
        {open: true},
        );
    };

    const handleClose = () => {
      this.setState({open: false});
    };

    const username = "accimeesterlin"; // from the api

    return  (
      <MuiThemeProvider muiTheme={muiTheme}>  
      <AppBar
        showMenuIconButton={false}
        title={<span style={styles.title}>Transparency</span>}
        titleStyle={{ fontFamily: 'EB Garamond' , fontSize: 50}}  
        iconElementRight={ 
          <FlatButton 
            label={username ? username : "Sign In"}
            onClick={this.handleOpen}/>}
          />
          <SignInModal
            {...this.state}
            handleOpen = {this.handleOpen}
            handleClose = {this.handleClose}
            signUp = {this.signUp}
            signIn = {this.signIn}
            />
      </MuiThemeProvider>
    );
  }
}




// // 3 differents components

  // // #1 Functional Component
  //   const Header = () => {
      
  //     // NO State
  //     // No functions
  //     // No Ajax

  //   };

  // // #2 Class Component
  // class MainApp extends React.Component{
    
  //   // TODO

  //   render(){

  //     return(
  //       <div>
  //         <Header />
  //       </div>
  //     );
  //   }
  // }

  // // #3 Higher Order Component (Advanced)

  // const MainClassComponent = () => class SubComponent extends React.Component{
  //   // TODO
  // };