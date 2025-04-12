document.getElementById("sendBtn").addEventListener("click", async () => {
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;
  
    if (!number || !message) {
      alert("Please enter both number and message!");
      return;
    }

    
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: sendMessageToOpenChat,
          args: ["Hello bhai!"]
        });
      });
      
      
    // const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // chrome.scripting.executeScript({
    //   target: { tabId: tab.id },
    //   func: sendMessageToOpenChat,
    //   args: [number, message]
    // });
  });
  
//   function sendMessage(number, message) {
//     const fullURL = `https://web.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
//     window.location.href = fullURL;
  
//     // Optional auto-send using simulated Enter key can be handled via MutationObserver in content.js
//   }
function sendMessageToOpenChat(message) {
    const interval = setInterval(() => {
      const messageBox = document.querySelector("div[contenteditable='true']");
      const sendBtn = document.querySelector('button[aria-label="Send"]');
  
      if (messageBox && sendBtn) {
        messageBox.innerHTML = message;
  
        const event = new InputEvent('input', { bubbles: true });
        messageBox.dispatchEvent(event);
  
        sendBtn.click();
        clearInterval(interval);
      }
    }, 500);
  }
  
  