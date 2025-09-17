document.addEventListener("DOMContentLoaded", function () {
  const demoBtn = document.querySelector(".btn");

  if (demoBtn) {
    demoBtn.addEventListener("click", function (event) {
      // Optional: confirm before redirecting
      const confirmBooking = confirm("You are about to be redirected to schedule your demo. Continue?");
      
      if (!confirmBooking) {
        event.preventDefault(); // Cancel navigation if user says no
      } else {
        console.log("User confirmed demo booking and is being redirected.");
      }
    });
  }
});
