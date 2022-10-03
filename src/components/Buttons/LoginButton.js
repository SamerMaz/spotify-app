import { Button, Typography } from "@mui/material";
import React from "react";
import spotifyIcon from "../../assets/images/spotify.png";
import PropTypes from 'prop-types';

const LoginButton = ({onClick}) => {
  return (
    <div style={styles.button}>
    <Button
      variant="outlined"
    //   endIcon={
    //     <img src={spotifyIcon} alt="spotify-icon" width={20} height={20} />
    //   }
    //   size={"large"}
      style={{width:300, height:50,display:"flex", flexDirection:'row', justifyContent:'space-between', color:'black', borderColor:'grey'}}
    onClick={onClick}
    >
        <div> </div>
           Login
        <img src={spotifyIcon} alt="spotify-icon" width={20} height={20} />

    </Button>
    </div>
  );
};

LoginButton.propTypes={
    onClick:PropTypes.func
}

const styles = {
    button:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    }
} 


export default LoginButton;
