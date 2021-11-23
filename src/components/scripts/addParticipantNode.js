import VoxeetSDK from "@voxeet/voxeet-web-sdk";
  export const addParticipantNode = (participant) => {
    // If the participant is the current session user, don't add them to the list
    if (participant.id === VoxeetSDK.session.participant.id) return;
  
    let participantNode = document.createElement('li');
    participantNode.setAttribute('id', 'participant-' + participant.id);
    participantNode.innerText = `${participant.info.name}`;
  
    const participantsList = document.getElementById('participants-list');
    participantsList.appendChild(participantNode);
  };