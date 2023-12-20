
$(document).ready(function() {
    $("#hides").click(function(){
        $("#hides").show();
    });
});


// Tab Content
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Set default tab
document.querySelector(".flex a").click();

// Tab Border Bottom

function setActive(setNumber) {
    document.getElementById('button1').classList.remove('active');
    document.getElementById('button2').classList.remove('active');
    document.getElementById('button3').classList.remove('active');
    document.getElementById('button4').classList.remove('active');
    document.getElementById('button5').classList.remove('active');
    document.getElementById('button' +setNumber).classList.add('active');
}

// Form Content


function showPopup() {
    document.getElementById('popup').style.display = 'flex';
  }

  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  function submitForm() {
    // Check if the required fields are not empty
    if (validateForm()) {
      // Form is valid, show the popup
      showPopup();
      document.getElementById('myForm').reset();
    } else {
      // Form is not valid, show an alert to the user
      alert('WARNING !! Indicates a warning that might need attention.');
    }
  }

  function validateForm() {
    // Check if the required fields are not empty
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    return name !== '' && email !== '' && subject !== '' && message !== '';
  }





// counter js
$('.counter').counterUp({
  delay: 10,
  time: 1000
});



