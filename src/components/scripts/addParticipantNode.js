import VoxeetSDK from "@voxeet/voxeet-web-sdk";
export const addParticipantNode = (participant) => {
  // If the participant is the current session user, don't add them to the list
  //if (participant.id === VoxeetSDK.session.participant.id) return;

  let participantNode = document.createElement("div");
  participantNode.style.display = "flex";
  participantNode.style.flexDirection = "column";
  participantNode.style.justifyContent = "center";
  participantNode.style.width = "325px";
  participantNode.style.height = "260px";
  participantNode.style.alignContent = "center";
  participantNode.style.border = "ridge 3px";
  participantNode.style.borderRadius = "8px";
  participantNode.style.margin = "3px";
  participantNode.style.fontWeight = "600";
  participantNode.style.fontSize = "24px";
  participantNode.setAttribute("id", "participant-" + participant.id);
  participantNode.innerText = `${participant.info.name}`;

  const participantsList = document.getElementById("participants-list");
  participantsList.appendChild(participantNode);
};
