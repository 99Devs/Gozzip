export const removeVideoNode = (participant) => {
	let videoNode = document.getElementById('video-' + participant.id);
  
	if (videoNode) {
	  videoNode.srcObject = null; // Prevent memory leak in Chrome
	  videoNode.parentNode.removeChild(videoNode);
	}
  };