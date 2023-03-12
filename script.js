function updateImage() {
  // Get the current date object
  const currentDate = new Date();

  // Get the time (in milliseconds) since the start of the current day
  const timeSinceStartOfDay = currentDate.getTime() - new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()).getTime();

  // Convert the time to minutes
  const minutesSinceStartOfDay = timeSinceStartOfDay / 1000 / 60;

  // Check if the current time is between 2000 and 3000 (inclusive)
  if (minutesSinceStartOfDay >= 330 && minutesSinceStartOfDay < 360) {
    // If it is, set the "src" attribute of an <img> element to "x.jpg"
    const img = document.querySelector('img');
    img.setAttribute('src', 'images/330-360.png');
  }  
  // Check if the current time is between 3000 and 4000 (inclusive)
  else if (minutesSinceStartOfDay >= 420 && minutesSinceStartOfDay < 450) {
    // If it is, set the "src" attribute of an <img> element to "y.jpg"
    const img = document.querySelector('img');
    img.setAttribute('src', 'images/420-450.png');
  }
    // Check if the current time is between 3000 and 4000 (inclusive)
    else if (minutesSinceStartOfDay >= 450 && minutesSinceStartOfDay < 510) {
      // If it is, set the "src" attribute of an <img> element to "y.jpg"
      const img = document.querySelector('img');
      img.setAttribute('src', 'images/450-510.png');
    }  
    // Check if the current time is between 3000 and 4000 (inclusive)
    else if (minutesSinceStartOfDay >= 540 && minutesSinceStartOfDay < 600) {
      // If it is, set the "src" attribute of an <img> element to "y.jpg"
      const img = document.querySelector('img');
      img.setAttribute('src', 'images/540-600.png');
    }  
    // Check if the current time is between 3000 and 4000 (inclusive)
    else if (minutesSinceStartOfDay >= 600 && minutesSinceStartOfDay < 660) {
      // If it is, set the "src" attribute of an <img> element to "y.jpg"
      const img = document.querySelector('img');
      img.setAttribute('src', 'images/600-660.png');
    }
  // Check if the current time is between 3000 and 4000 (inclusive)
  else if (minutesSinceStartOfDay >= 720 && minutesSinceStartOfDay < 810) {
    // If it is, set the "src" attribute of an <img> element to "y.jpg"
    const img = document.querySelector('img');
    img.setAttribute('src', 'images/720-810.png');
  }
  // Check if the current time is between 4000 and 5000 (inclusive)
  else if (minutesSinceStartOfDay >= 840 && minutesSinceStartOfDay < 960) {
    // If it is, set the "src" attribute of an <img> element to "z.jpg"
    const img = document.querySelector('img');
    img.setAttribute('src', 'images/840-960.png');
  }  
  // Check if the current time is between 4000 and 5000 (inclusive)
  else if (minutesSinceStartOfDay >= 1020 && minutesSinceStartOfDay < 1065) {
    // If it is, set the "src" attribute of an <img> element to "z.jpg"
    const img = document.querySelector('img');
    img.setAttribute('src', 'images/1020-1065.png');
  }  
  // Check if the current time is between 4000 and 5000 (inclusive)
  else if (minutesSinceStartOfDay >= 1065 && minutesSinceStartOfDay < 1080) {
    // If it is, set the "src" attribute of an <img> element to "z.jpg"
    const img = document.querySelector('img');
    img.setAttribute('src', 'images/1065-1080.png');
  }  
  // Check if the current time is between 4000 and 5000 (inclusive)
  else if (minutesSinceStartOfDay >= 1200 && minutesSinceStartOfDay < 1260) {
    // If it is, set the "src" attribute of an <img> element to "z.jpg"
    const img = document.querySelector('img');
    img.setAttribute('src', 'images/1200-1260.png');
  }  
  // Check if the current time is between 4000 and 5000 (inclusive)
  else if (minutesSinceStartOfDay >= 1290 && minutesSinceStartOfDay < 1350) {
    // If it is, set the "src" attribute of an <img> element to "z.jpg"
    const img = document.querySelector('img');
    img.setAttribute('src', 'images/1290-1320.png');
  }  
  // Check if the current time is between 4000 and 5000 (inclusive)
  else if (minutesSinceStartOfDay >= 1365 && minutesSinceStartOfDay < 1380) {
    // If it is, set the "src" attribute of an <img> element to "z.jpg"
    const img = document.querySelector('img');
    img.setAttribute('src', 'images/1365-1380.png');
  }  
  // Check if the current time is between 4000 and 5000 (inclusive)
  else if (minutesSinceStartOfDay >= 1380 && minutesSinceStartOfDay < 1440) {
    // If it is, set the "src" attribute of an <img> element to "z.jpg"
    const img = document.querySelector('img');
    img.setAttribute('src', 'images/1380-1440.png');
  }
    // Check if the current time is between 4000 and 5000 (inclusive)
    else if (minutesSinceStartOfDay >= 0 && minutesSinceStartOfDay < 60) {
      // If it is, set the "src" attribute of an <img> element to "z.jpg"
      const img = document.querySelector('img');
      img.setAttribute('src', 'images/1380-1440.png');
    }
    // Check if the current time is between 4000 and 5000 (inclusive)
    else if (minutesSinceStartOfDay >= 60 && minutesSinceStartOfDay < 300) {
      // If it is, set the "src" attribute of an <img> element to "z.jpg"
      const img = document.querySelector('img');
      img.setAttribute('src', 'images/60-300.png');
    }
    // Check if the current time is between 4000 and 5000 (inclusive)
    else if (minutesSinceStartOfDay >= 300 && minutesSinceStartOfDay < 330) {
      // If it is, set the "src" attribute of an <img> element to "z.jpg"
      const img = document.querySelector('img');
      img.setAttribute('src', 'images/1380-1440.png');
    }
     // Check if the current time is between 4000 and 5000 (inclusive)
     else if (minutesSinceStartOfDay >= 360 && minutesSinceStartOfDay < 420) {
      // If it is, set the "src" attribute of an <img> element to "z.jpg"
      const img = document.querySelector('img');
      img.setAttribute('src', 'images/360-420.png');
    }
     // Check if the current time is between 4000 and 5000 (inclusive)
     else if (minutesSinceStartOfDay >= 510 && minutesSinceStartOfDay < 540) {
      // If it is, set the "src" attribute of an <img> element to "z.jpg"
      const img = document.querySelector('img');
      img.setAttribute('src', 'images/360-420.png');
    }
  // If the current time is outside of any of these ranges
  else {
    // Set the "src" attribute of the <img> element to "a.jpg"
    const img = document.querySelector('img');
    img.setAttribute('src', 'images/a.png');
  }
}

// Call the updateImage function every second
setInterval(updateImage, 100);

// Set the initial image to "a.jpg"
const img = document.querySelector('img');
img.setAttribute('src', 'images/a.png');

