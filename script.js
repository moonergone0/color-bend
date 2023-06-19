var colorFormat = document.querySelector("p");
var color1Input = document.querySelector(".color1");
var color2Input = document.querySelector(".color2");
const copyButtons = document.querySelectorAll('.copy-button');
var body = document.querySelector(".body");

function setGradient() {
  const color1 = color1Input.value;
  const color2 = color2Input.value;
  body.style.background = `linear-gradient(to right, ${color1}, ${color2})` ;
  colorFormat.textContent = body.style.background + ";" ;
}

color1Input.addEventListener('input', setGradient);
color2Input.addEventListener('input', setGradient);

copyButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const input = this.parentNode.querySelector('input');
    const colorValue = input.value;
    
    navigator.clipboard.writeText(colorValue)
      .then(function() {
        alert('Color value copied to clipboard: ' + colorValue);
      })
      .catch(function(error) {
        console.error('Unable to copy color value: ', error);
      });
  });
});
