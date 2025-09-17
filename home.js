// Function to handle button clicks
document.addEventListener("DOMContentLoaded", function () {
  // Email Us Button
  document.querySelector(".btn:nth-child(3)").addEventListener("click", function () {
    window.location.href = "mailto:info@stratosedge.com";
  });

  // Corporate Consultation Button
  document.querySelector(".btn:nth-child(4)").addEventListener("click", function () {
    alert("Thanks for your interest in Corporate Consultation! We’ll get in touch shortly.");
  });

  // Academic Consultation Button
  document.querySelector(".btn:nth-child(5)").addEventListener("click", function () {
    alert("Academic Consultation request received! Our team will contact you soon.");
  });
});
