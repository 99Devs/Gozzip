
  export const removeScreenShareNode = () => {
    let screenShareNode = document.getElementById('screenshare');
  
    if (screenShareNode) {
      screenShareNode.srcObject = null; // Prevent memory leak in Chrome
      screenShareNode.parentNode.removeChild(screenShareNode);
    }
    
    const startScreenShareBtn = document.getElementById('start-screenshare-btn');
    startScreenShareBtn.disabled = false;
    
    const stopScreenShareBtn = document.getElementById('stop-screenshare-btn');
    stopScreenShareBtn.disabled = true;
  }