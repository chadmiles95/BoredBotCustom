/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/

document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      document.getElementById("title").textContent = "🦾 HappyBot🦿"
      document.body.classList.add("fun")
    })
})

const movingButton = document.getElementById("movingButton");

document.addEventListener("mousemove", function(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const buttonRect = movingButton.getBoundingClientRect();
  const buttonX = buttonRect.left + buttonRect.width / 2;
  const buttonY = buttonRect.top + buttonRect.height / 2;

  const deltaX = mouseX - buttonX;
  const deltaY = mouseY - buttonY;

  const angle = Math.atan2(deltaY, deltaX);
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  const moveDistance = 10; // Adjust the distance based on your preference
  const moveX = mouseX - moveDistance * Math.cos(angle);
  const moveY = mouseY - moveDistance * Math.sin(angle);

  movingButton.style.transform = `translate(${moveX - buttonRect.width / 2}px, ${moveY - buttonRect.height / 2}px)`;
});

// Reset button position on mouse leave
document.addEventListener("mouseleave", function() {
  movingButton.style.transform = "translate(-50%, -50%)";
});