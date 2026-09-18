// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

```
document.body.classList.toggle("light-mode");

if (document.body.classList.contains("light-mode")) {
    themeBtn.textContent = "☀️";
} else {
    themeBtn.textContent = "🌙";
}
```

});

// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

```
event.preventDefault();

const name = document.getElementById("name").value;

alert("Thank you, " + name + "! Your message has been received.");

contactForm.reset();
```

});
