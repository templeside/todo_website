const images = ["0.png", "1.jpg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);

const bgImage = document.createElement("img");
console.log(bgImage);
bgImage.src = `img/${chosenImage}`;     
document.body.appendChild(bgImage);  // adding image to body 