import VoxeetSDK from "@voxeet/voxeet-web-sdk";

export const initUI = (randomName) => {
  const nameMessage = document.getElementById("name-message");
  const joinButton = document.getElementById("join-btn");
  const conferenceAliasInput = document.getElementById("alias-input");
  const leaveButton = document.getElementById("leave-btn");
  const lblDolbyVoice = document.getElementById("label-dolby-voice");
  const startVideoBtn = document.getElementById("start-video-btn");
  const stopVideoBtn = document.getElementById("stop-video-btn");
  const startAudioBtn = document.getElementById("start-audio-btn");
  const stopAudioBtn = document.getElementById("stop-audio-btn");
  const startScreenShareBtn = document.getElementById("start-screenshare-btn");
  const stopScreenShareBtn = document.getElementById("stop-screenshare-btn");
  const startRecordingBtn = document.getElementById("start-recording-btn");
  const stopRecordingBtn = document.getElementById("stop-recording-btn");
  const noOne = document.getElementById("noOne");

  // Update the login message with the name of the user
  nameMessage.innerHTML = `You are logged in as ${randomName}`;
  joinButton.disabled = false;

  joinButton.onclick = () => {
    // Default conference parameters
    // See: https://docs.dolby.io/interactivity/docs/js-client-sdk-model-conferenceparameters
    let conferenceParams = {
      liveRecording: true,
      rtcpMode: "average", // worst, average, max
      ttl: 0,
      videoCodec: "H264", // H264, VP8
      dolbyVoice: true,
    };

    // See: https://docs.dolby.io/interactivity/docs/js-client-sdk-model-conferenceoptions
    let conferenceOptions = {
      alias: conferenceAliasInput.value,
      params: conferenceParams,
    };

    // 1. Create a conference room with an alias
    VoxeetSDK.conference
      .create(conferenceOptions)
      .then((conference) => {
        // See: https://docs.dolby.io/interactivity/docs/js-client-sdk-model-joinoptions
        const joinOptions = {
          constraints: {
            audio: true,
            video: false,
          },
          simulcast: false,
        };

        // 2. Join the conference
        VoxeetSDK.conference
          .join(conference, joinOptions)
          .then((conf) => {
            // lblDolbyVoice.innerHTML = `Dolby Voice is ${
            //   conf.params.dolbyVoice ? "On" : "Off"
            // }.`;

            conferenceAliasInput.disabled = true;
            joinButton.disabled = true;
            leaveButton.disabled = false;
            startVideoBtn.disabled = false;
            startAudioBtn.disabled = true;
            stopAudioBtn.disabled = false;
            startScreenShareBtn.disabled = false;
            startRecordingBtn.disabled = false;
            noOne.hidden = true;

            setInterval(() => {
              let participants = VoxeetSDK.conference.participants;
              for (let participant of participants) {
                VoxeetSDK.conference.isSpeaking(
                  VoxeetSDK.conference.participants.get(participant[0]),
                  (isSpeaking) => {
                    if (isSpeaking) {
                      let cell = document.getElementById(
                        `participant-${participant[0]}`
                      );
                      if (cell) {
                        //cell.style.borderColor = "green";
                        cell.style.boxShadow =
                          "inset 0px 0px 10px 18px #5be043";
                      }
                    } else if (!isSpeaking) {
                      let cell = document.getElementById(
                        `participant-${participant[0]}`
                      );
                      if (cell) {
                        cell.style.boxShadow = "";
                        cell.style.borderColor = "grey";
                      }
                    }
                  }
                );
              }
            }, 100);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  leaveButton.onclick = () => {
    // Leave the conference
    VoxeetSDK.conference
      .leave()
      .then(() => {
        lblDolbyVoice.innerHTML = "";

        conferenceAliasInput.disabled = false;
        joinButton.disabled = false;
        leaveButton.disabled = true;
        startVideoBtn.disabled = true;
        stopVideoBtn.disabled = true;
        startAudioBtn.disabled = true;
        stopAudioBtn.disabled = true;
        startScreenShareBtn.disabled = true;
        stopScreenShareBtn.disabled = true;
        startRecordingBtn.disabled = true;
        stopRecordingBtn.disabled = true;
        noOne.hidden = false;
      })
      .catch((err) => console.error(err));
  };

  startVideoBtn.onclick = () => {
    // Start sharing the video with the other participants
    VoxeetSDK.conference
      .startVideo(VoxeetSDK.session.participant)
      .then(() => {
        startVideoBtn.disabled = true;
        stopVideoBtn.disabled = false;
      })
      .catch((err) => console.error(err));
  };

  stopVideoBtn.onclick = () => {
    // Stop sharing the video with the other participants
    VoxeetSDK.conference
      .stopVideo(VoxeetSDK.session.participant)
      .then(() => {
        stopVideoBtn.disabled = true;
        startVideoBtn.disabled = false;
      })
      .catch((err) => console.error(err));
  };

  startAudioBtn.onclick = () => {
    // Start sharing the Audio with the other participants
    VoxeetSDK.conference
      .startAudio(VoxeetSDK.session.participant)
      .then(() => {
        startAudioBtn.disabled = true;
        stopAudioBtn.disabled = false;
      })
      .catch((err) => console.error(err));
  };

  stopAudioBtn.onclick = () => {
    // Stop sharing the Audio with the other participants
    VoxeetSDK.conference
      .stopAudio(VoxeetSDK.session.participant)
      .then(() => {
        stopAudioBtn.disabled = true;
        startAudioBtn.disabled = false;
      })
      .catch((err) => console.error(err));
  };

  startScreenShareBtn.onclick = () => {
    // Start the Screen Sharing with the other participants
    VoxeetSDK.conference
      .startScreenShare()
      .then(() => {
        startScreenShareBtn.disabled = true;
        stopScreenShareBtn.disabled = false;
      })
      .catch((err) => console.error(err));
  };

  stopScreenShareBtn.onclick = () => {
    // Stop the Screen Sharing
    VoxeetSDK.conference.stopScreenShare().catch((err) => console.error(err));
  };

  startRecordingBtn.onclick = () => {
    let recordStatus = document.getElementById("record-status");

    // Start recording the conference
    VoxeetSDK.recording
      .start()
      .then(() => {
        recordStatus.innerText = "Recording...";
        startRecordingBtn.disabled = true;
        stopRecordingBtn.disabled = false;
      })
      .catch((err) => console.error(err));
  };

  stopRecordingBtn.onclick = () => {
    let recordStatus = document.getElementById("record-status");

    // Stop recording the conference
    VoxeetSDK.recording
      .stop()
      .then(() => {
        recordStatus.innerText = "";
        startRecordingBtn.disabled = false;
        stopRecordingBtn.disabled = true;
      })
      .catch((err) => console.error(err));
  };
};

// Add a video stream to the web page
// Remove the video streem from the web page
// const removeVideoNode = (participant) => {
//   let videoNode = document.getElementById('video-' + participant.id);

//   if (videoNode) {
//     videoNode.srcObject = null; // Prevent memory leak in Chrome
//     videoNode.parentNode.removeChild(videoNode);
//   }
// };

// Add a new participant to the list
// const addParticipantNode = (participant) => {
//   // If the participant is the current session user, don't add them to the list
//   if (participant.id === VoxeetSDK.session.participant.id) return;

//   let participantNode = document.createElement('li');
//   participantNode.setAttribute('id', 'participant-' + participant.id);
//   participantNode.innerText = `${participant.info.name}`;

//   const participantsList = document.getElementById('participants-list');
//   participantsList.appendChild(participantNode);
// };

// Remove a participant from the list

// Add a screen share stream to the web page

// Remove the screen share stream from the web page
