sw.addEventListener('message', async (event) => {
  // Check the event for a specific message
  if (event.data === 'some_message') {
    // Perform actions based on the message
    console.log('Message received:', event.data);
  }
});
