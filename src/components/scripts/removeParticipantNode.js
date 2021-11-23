export const removeParticipantNode = (participant) => {
	let participantNode = document.getElementById('participant-' + participant.id);
  
	if (participantNode) {
	  participantNode.parentNode.removeChild(participantNode);
	}
  };
  