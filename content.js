const observer = new MutationObserver(() => {
    // const sendBtn = document.querySelector('[data-testid="send"]');
    // button[aria-label="Send"]
    const sendBtn = document.querySelector("button[aria-label='Send']");
    if (sendBtn) {
      sendBtn.click();
      observer.disconnect();
      console.log("✅ Message sent!");
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  