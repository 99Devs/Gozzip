import React, { Component } from 'react'
import {main} from "../scripts/client";

import { Icon } from 'semantic-ui-react'
export default class AppContainer extends Component {
    
    // componentDidMount(){
    //     main()
    // };

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
        
        return (this.state.showHome?(
        <div>
            <h1>Gozzip</h1>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <p>Enter your name</p>
                    <input required type="text" value={this.state.name} onChange={(event)=>{this.setState({name: event.target.value})}} />
                    <p>Create/Enter Meeting Code</p>
                    <input required type="text" value={this.state.meetingCode} onChange={(event)=>{this.setState({meetingCode: event.target.value})}} />
                    <br/><br/>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
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
            <button id="start-audio-btn" disabled>
                
            <Icon  name='microphone' />
               </button>

          
            <button id="stop-audio-btn" disabled>  <Icon name='microphone slash' /></button>
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
