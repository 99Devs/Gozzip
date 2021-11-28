export const addVideoNode = (participant, stream) => {
  let videoNode = document.getElementById("video-" + participant.id);

  if (!videoNode) {
    videoNode = document.createElement("video");

    videoNode.setAttribute("id", "video-" + participant.id);
    videoNode.setAttribute("height", 240);
    videoNode.setAttribute("width", 320);
    videoNode.setAttribute("playsinline", true);
    videoNode.muted = true;
    videoNode.setAttribute("autoplay", "autoplay");
    videoNode.style = "background: gray;";

    const videoContainer = document.getElementById(
      "participant-" + participant.id
    );
    // const videoContainer = document.getElementById('video-container');
    videoContainer.appendChild(videoNode);
  }

  navigator.attachMediaStream(videoNode, stream);
};
