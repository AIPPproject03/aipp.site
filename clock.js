function rotateClockHands() {
    // Get the current time
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Calculate the rotation angles for each clock hand
    var hourRotation = 360 / 12 * (hours % 12) + 360 / 12 * (minutes / 60);
    var minuteRotation = 360 / 60 * minutes + 360 / 60 * (seconds / 60);
    var secondRotation = 360 / 60 * seconds;

    // Apply the rotation to the clock hands using CSS transform property
    document.getElementById('hr').style.transform = 'rotate(' + hourRotation + 'deg)';
    document.getElementById('mn').style.transform = 'rotate(' + minuteRotation + 'deg)';
    document.getElementById('sc').style.transform = 'rotate(' + secondRotation + 'deg)';

    // Call the rotateClockHands function every 1000ms (1 second)
    setTimeout(rotateClockHands, 1000);
  }

  // Start the clock rotation when the page loads
  window.onload = function() {
    rotateClockHands();
  };