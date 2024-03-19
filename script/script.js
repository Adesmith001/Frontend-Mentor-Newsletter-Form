document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); 
    var email = document.getElementById("emailInput").value;
    var validEmail = validateEmail(email);

    if (validEmail) {
      window.location.href = "success.html?email=" + encodeURIComponent(email);
    } else {
      alert("Please enter a valid email address ending with @gmail.com, @yahoo.com, @outlook.com, .edu, or at least containing @.");
    }
  });
  function validateEmail(email) {
    var emailPattern = /^[\w-\.]+@(gmail\.com|yahoo\.com|outlook\.com|[\w-]+\.[a-z]{2,}|edu)$/i;
    return emailPattern.test(email);
  }