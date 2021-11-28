import React, { Component } from "react";
import { main } from "../scripts/client";
import moment from 'moment';
import classes from "./styles.module.css";
import { Icon } from "semantic-ui-react";
import {Menu} from 'semantic-ui-react';
export default class AppContainer extends Component {
  // componentDidMount(){
  //     main()
  // };

  state = {
    name: "",
    showHome: true,
    meetingCode: "",
  };

  handleSubmit = () => {
    main(this.state.name);
    this.setState({ showHome: false });
  };

  render() {
    return this.state.showHome ? (
      <div className={classes.parent}>
          <Menu className={classes.menu} secondary>
 <Menu.Item
          name='Gozzip'
          
          onClick={this.handleItemClick}
        />
           <Menu.Menu  position='right'>
        <Menu.Item className={classes.date}
         name={moment().format('MMMM Do YYYY, h:mm:ss a')} 
         position="right"
            onClick={this.handleItemClick}
          /></Menu.Menu>
          </Menu>
        <h1 className={classes.heading}><Icon name="conversation"/>Gozzip</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <p className={classes.para}>Enter your name</p>
            <input
              className={classes.input}
              placeholder="UserName"
              required
              type="text"
              value={this.state.name}
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />
            <p className={classes.para}>Create/Enter Meeting Code</p>
            <input
              className={classes.input}
              placeholder="Meeting Code"
              required
              type="text"
              value={this.state.meetingCode}
              onChange={(event) => {
                this.setState({ meetingCode: event.target.value });
              }}
            />
            <br />
            <br />
          </div>
          <input className={classes.done} type="submit" value="Submit" />
        </form>
      </div>
    ) : (
      <div>
        <h1 className={classes.heading}>
          <Icon name="conversation" />
          Gozzip
        </h1>

        <div style={{ marginTop: "30px" }}>
          <div
            id="name-message"
            style={{
              float: "left",
              width: "50%",
              fontSize: "22px",
              color: "#4671b5",
            }}
          >
            Logging in...
          </div>

          <div
            style={{
              float: "left",
              width: "50%",
              fontSize: "22px",
              color: "#4671b5",
            }}
          >
            Meeting Id:<b>#{this.state.meetingCode}</b>
          </div>
        </div>

        <div id="app" style={{ width: "100%", marginTop: "120px" }}>
          <div style={{ float: "left", width: "80%" }}>
            {/* <!-- Display the list of participants --> */}
            <div id="participants">
              <h3>
                <span class="material-icons">people_outline</span>Participants
              </h3>
              <ul id="participants-list"></ul>
              {/* <!-- Container for the video streams --> */}
              <div id="video-container"></div>

              {/* <!-- Container for the Screen Share --> */}
              <div id="screenshare-container"></div>
            </div>
          </div>

          <div
            style={{
              float: "left",
              width: "20%",
              height: "100%",
            }}
          >
            {/* <!-- Join or Leave a Conference --> */}
            <div style={{ marginTop: "50%" }}>
              <div id="form">
                <input id="alias-input" value={this.state.meetingCode} hidden />
                <button className={classes.tooltip} id="join-btn" disabled>
                  <span class="material-icons">video_call</span>
                  <span className={classes.tooltiptext}>join video call</span>
                </button>

                <button className={classes.tooltip}id="leave-btn" disabled>
                  <span class="material-icons">call_end</span>

                  <span className={classes.tooltiptext}>Leave video call</span>
                </button>
                <label id="label-dolby-voice"></label>
              </div>

              {/* <!-- Actions on Video and Screen Share --> */}
              <div id="actions">
                <button className={classes.tooltip}id="start-video-btn" disabled>
                  <span class="material-icons">videocam</span>

                  <span className={classes.tooltiptext}>Start Video Camera</span>
                </button>
                <button className={classes.tooltip}id="stop-video-btn" disabled>
                  <span class="material-icons">videocam_off</span>

                  <span className={classes.tooltiptext}>Video Camera Off</span>
                </button>
                <br />
                <button className={classes.tooltip}id="start-audio-btn" disabled>
                  <span class="material-icons">mic</span>

                  <span className={classes.tooltiptext}>Microphone On</span>
                </button>

                <button className={classes.tooltip}id="stop-audio-btn" disabled>
                  {" "}
                  <span class="material-icons">mic_off</span>

                  <span className={classes.tooltiptext}>Microphone Off</span>
                </button>
                <br />
                <button className={classes.tooltip}id="start-screenshare-btn" disabled>
                  <span class="material-icons">screen_share</span>

                  <span className={classes.tooltiptext}>Start ScreenShare</span>
                </button>
                <button className={classes.tooltip}id="stop-screenshare-btn" disabled>
                  <span class="material-icons">stop_screen_share</span>

                  <span className={classes.tooltiptext}>Stop ScreenShare</span>
                </button>
              </div>

              {/* <!-- Recording Actions and Status --> */}
              <div id="recording">
                <button className={classes.tooltip}id="start-recording-btn" disabled>
                  <span class="material-icons">radio_button_unchecked</span>

                  <span className={classes.tooltiptext}>Start Recording</span>
                </button>
                <button className={classes.tooltip}id="stop-recording-btn" disabled>
                  <span class="material-icons">radio_button_checked</span>

                  <span className={classes.tooltiptext}>Stop Recording</span>
                </button>
                <p id="record-status" style={{ color: "red" }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
