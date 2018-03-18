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

    return  (
      <MuiThemeProvider muiTheme={muiTheme}>  
      <AppBar
        showMenuIconButton={false}
        title={<span style={styles.title}>Transparency</span>}
        titleStyle={{ fontFamily: 'EB Garamond' , fontSize: 50}}  
        iconElementRight={ 
          <FlatButton 
            label={"Sign In"}
            onClick={this.handleOpen}/>}
          />
          <SignInModal
            modal={false}
            open={this.handleOpen} />
      </MuiThemeProvider>
    );
  }
}
