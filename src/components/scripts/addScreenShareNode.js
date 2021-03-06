export const addScreenShareNode = (stream) => {
  let screenShareNode = document.getElementById("screenshare");

  if (screenShareNode) {
    return alert("There is already a participant sharing a screen!");
  }

  screenShareNode = document.createElement("video");
  screenShareNode.setAttribute("height", "600px");
  screenShareNode.setAttribute("width", "86%");
  screenShareNode.style.border = "ridge 6px";
  screenShareNode.style.borderRadius = "8px";
  screenShareNode.style.marginLeft = "80px";
  screenShareNode.setAttribute("id", "screenshare");
  screenShareNode.autoplay = "autoplay";
  navigator.attachMediaStream(screenShareNode, stream);

  const screenShareContainer = document.getElementById("screenshare-container");
  screenShareContainer.appendChild(screenShareNode);
};
