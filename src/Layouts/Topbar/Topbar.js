import React from 'react';
import {useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useSelector} from 'react-redux';
import { authenticationService } from '../../Services/authentication.service';
import { history } from '../../_helpers/history';
class Topbar extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
        currentUser: null
    };
}

componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
}

logout() {
    authenticationService.logout();
    history.push('/login');
}

render() {
  const { currentUser } = this.state;
    return (
    <div>
        <AppBar position="static" color="error">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" >
            Home
          </Typography>
          {!currentUser ? (
          <Button color="inherit" href="/login">Login</Button>
           
        ) : (
          <>
          <p>Hi, <span>
            {currentUser}
            </span>
            </p>
          <Button color="inherit" onClick={this.Logout}>
            Logout
          </Button>
          </>
        )}
         
        </Toolbar>
      </AppBar>
    </div>  
    );
}
}
export default {Topbar};