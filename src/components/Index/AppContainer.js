import React, { Component } from 'react'
import {main} from "../scripts/client";

import { withStyles } from "@material-ui/core/styles";
import { Container, AppBar, Typography, TextField, Button } from '@material-ui/core';
// import { styles } from './styles';
  

const styles = theme => ({
  root: {
    backgroundColor: "red"
    },
    container: {
        padding: "132px 43px 103px 32px",
    },
    appBar: {
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#21557C;'
    },
    heading: {
        color: 'rgb(199, 211, 215)'
    },

});


class AppContainer extends Component {
    

    
    componentDidMount(){
        main()
    };

    state = {
        name: "",
        showHome: true,
        meetingCode: "",
    }

    handleSubmit = () => {
        main(this.state.name);
        this.setState({showHome: false});
    }
    
    render() {
        const { classes } = this.props;

        return (this.state.showHome?(
            
            <Container maxWidth="xs" className={classes.container}>
                <div>
                    <AppBar position="relative" color="primary" className={classes.appBar} gutterBottom>
                        <Typography variant="h2" align="center" className={classes.heading}>Gozzip</Typography>
                    </AppBar>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <Typography variant="h5" align="center" gutterBottom>Enter your name</Typography>
                            <TextField id="filled-basic" label="UserName" variant="filled"  gutterBottom/>
                            <Typography variant="h5" align="center" gutterBottom >Create/Enter meeting code</Typography>
                            <TextField id="filled-basic" label="Meeting Code" variant="filled" gutterBottom />
                            <br/><br/>
                        </div>
                        
                        <Button variant="contained" type="submit" color="secondary">Submit</Button>

                    </form>
                    </div>
            </Container>
        ):(
            <div>
                Gozzip
                <div id="app">
        <h1 id="name-message">Logging in...</h1>

        {/* <!-- Join or Leave a Conference --> */}
        <div id="form">
            <label>Conference alias :</label>
            <input id="alias-input" value={this.state.meetingCode} />
            <button id="join-btn" disabled>Join</button>
            <button id="leave-btn" disabled>Leave</button>
            <label id="label-dolby-voice"></label>
        </div>
        
        {/* <!-- Actions on Video and Screen Share --> */}
        <div id="actions">
            <button id="start-video-btn" disabled>Start video</button>
            <button id="stop-video-btn" disabled>Stop video</button>
            <button id="start-audio-btn" disabled>Start audio</button>
            <button id="stop-audio-btn" disabled>Stop audio</button>
            <button id="start-screenshare-btn" disabled>Start screen share</button>
            <button id="stop-screenshare-btn" disabled>Stop screen share</button>
        </div>

        {/* <!-- Recording Actions and Status --> */}
        <div id="recording">
            <button id="start-recording-btn" disabled>Start recording</button>
            <button id="stop-recording-btn" disabled>Stop recording</button>
            <p id="record-status" style={{color: "red"}}></p>
        </div>

        {/* <!-- Display the list of participants --> */}
        <div id="participants">
            <h3>Participants</h3>
            <ul id="participants-list"></ul>
        </div>

        {/* <!-- Container for the video streams --> */}
        <div id="video-container"></div>

        {/* <!-- Container for the Screen Share --> */}
        <div id="screenshare-container"></div>
    </div>
            </div>
        ))
    }
}
export default withStyles(styles)(AppContainer);








 // <input required type="text" value={this.state.name} onChange={(event)=>{this.setState({name: event.target.value})}} />
// <input required type="text" value={this.state.meetingCode} onChange={(event)=>{this.setState({meetingCode: event.target.value})}} />