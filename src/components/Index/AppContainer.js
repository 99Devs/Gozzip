import React, { Component } from "react";
import { main } from "../scripts/client";

import { Icon } from "semantic-ui-react";
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
      <div>
        <h1>Gozzip</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <p>Enter your name</p>
            <input
              required
              type="text"
              value={this.state.name}
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />
            <p>Create/Enter Meeting Code</p>
            <input
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    ) : (
      <div>
        <Icon name="conversation"/>Gozzip
        <div id="app">
          <h1 id="name-message">Logging in...</h1>

          {/* <!-- Join or Leave a Conference --> */}
          <div id="form">
            <label>Conference alias :</label>
            <input id="alias-input" value={this.state.meetingCode} />
            <button id="join-btn" disabled>
             <span class="material-icons">
video_call
</span>
            </button>
            <button id="leave-btn" disabled>
             <span class="material-icons">
call_end
</span>
            </button>
            <label id="label-dolby-voice"></label>
          </div>

          {/* <!-- Actions on Video and Screen Share --> */}
          <div id="actions">
            <button id="start-video-btn" disabled>
             <span class="material-icons">
videocam
</span>
            </button>
            <button id="stop-video-btn" disabled>

<span class="material-icons">
videocam_off
</span>

            </button>
            <button id="start-audio-btn" disabled>
             <span class="material-icons">
mic
</span>
            </button>

            <button id="stop-audio-btn" disabled>
              {" "}
              <span class="material-icons">
mic_off
</span>
            </button>
            <button id="start-screenshare-btn" disabled>
              <span class="material-icons">screen_share</span>
            </button>
            <button id="stop-screenshare-btn" disabled>
              <span class="material-icons">stop_screen_share</span>
            </button>
          </div>

          {/* <!-- Recording Actions and Status --> */}
          <div id="recording">
            <button id="start-recording-btn" disabled>
              <span class="material-icons">
radio_button_unchecked
</span>
            </button>
            <button id="stop-recording-btn" disabled>
            <span class="material-icons">
radio_button_checked
</span>
            </button>
            <p id="record-status" style={{ color: "red" }}></p>
          </div>

          {/* <!-- Display the list of participants --> */}
          <div id="participants">
            <h3><span class="material-icons">
people_outline
</span>Participants</h3>
            <ul id="participants-list"></ul>
          </div>

          {/* <!-- Container for the video streams --> */}
          <div id="video-container"></div>

          {/* <!-- Container for the Screen Share --> */}
          <div id="screenshare-container"></div>
        </div>
      </div>
    );
  }
}
