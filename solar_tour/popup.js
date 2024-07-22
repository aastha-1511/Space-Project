/*// Function to randomize positions of collage items
function randomizeCollagePositions(popupId) {
    var collageItems = document.querySelectorAll(`#${popupId} .item`);
    collageItems.forEach(function(item) {
      var randomTop = Math.floor(Math.random() * 80) + 10; // Random top position (10% to 90%)
      var randomLeft = Math.floor(Math.random() * 80) + 10; // Random left position (10% to 90%)
      item.style.top = randomTop + '%';
      item.style.left = randomLeft + '%';
    });
  }
  
  // Get all moon elements with the popup trigger
  var moons = document.querySelectorAll('.moon .popup');
  
  // Add click event listeners to each moon popup link
  moons.forEach(function(moon) {
    moon.addEventListener('click', function() {
      var popupId = this.getAttribute('data-popup');
      var popup = document.getElementById(popupId);
      popup.style.display = "block";
      randomizeCollagePositions(popupId); // Randomize positions when popup is shown
    });
  });
  
  // Get all <span> elements that close the modal
  var spans = document.getElementsByClassName("close");
  
  // Add click event listeners to close buttons
  for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
      this.parentElement.parentElement.style.display = "none";
    }
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target.classList.contains('box')) {
      event.target.style.display = "none";
    }
  }
  */


 /*
// Function to open the popup with animations
function openPopup(moon) {
  const popupBox = document.getElementById('moonp');
  const popupContent = popupBox.querySelector('.content');
  
  // Display the popup box
  popupBox.style.display = 'flex';
  
  // Animate the popup content
  setTimeout(() => {
      popupContent.style.opacity = '1';
      popupContent.style.transform = 'scale(1)';
  }, 100);
}

// Function to close the popup with animations
function closePopup() {
  const popupBox = document.getElementById('moonp');
  const popupContent = popupBox.querySelector('.content');
  
  popupContent.style.opacity = '0';
  popupContent.style.transform = 'scale(0.9)';
  
  setTimeout(() => {
      popupBox.style.display = 'none';
  }, 500);
}

// Event listeners for opening and closing the popup
document.querySelectorAll('.moon').forEach(moon => {
  moon.addEventListener('click', () => openPopup(moon));
});

document.querySelector('.close').addEventListener('click', closePopup);

// Close popup if clicked outside of the content area
document.getElementById('moonp').addEventListener('click', (e) => {
  if (e.target === document.getElementById('moonp')) {
      closePopup();
  }
});
*/

document.addEventListener('DOMContentLoaded', () => {
  // Function to open the popup with animations
  function openPopup(popupId) {
    const popupBox = document.getElementById(popupId);
    if (popupBox) {
      const popupContent = popupBox.querySelector('.content');

      // Display the popup and animate
      popupBox.style.display = 'flex';
      setTimeout(() => {
        popupContent.style.opacity = '1';
        popupContent.style.transform = 'scale(1)';
      }, 100);
    } else {
      console.error(`No popup found with ID: ${popupId}`);
    }
  }

  // Function to close the popup with animations
  function closePopup(popupBox) {
    const popupContent = popupBox.querySelector('.content');
    popupContent.style.opacity = '0';
    popupContent.style.transform = 'scale(0.9)';

    setTimeout(() => {
      popupBox.style.display = 'none';
    }, 500);
  }

  // Add click event listeners to moon elements to open the popup
  const moonElements = document.querySelectorAll('.moon');
  moonElements.forEach(moon => {
    moon.addEventListener('click', () => {
      const popupId = moon.getAttribute('data-popup');
      console.log(`Moon clicked, opening popup with ID: ${popupId}`);
      openPopup(popupId);
    });
  });

  // Add click event listeners to close buttons to close the popup
  const closeButtons = document.querySelectorAll('.box .close');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popupBox = button.closest('.box');
      console.log(`Close button clicked, closing popup`);
      closePopup(popupBox);
    });
  });

  // Close the popup if clicking outside of the content area
  const popupBoxes = document.querySelectorAll('.box');
  popupBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
      if (e.target === box) {
        console.log(`Clicked outside content, closing popup`);
        closePopup(box);
      }
    });
  });
});
