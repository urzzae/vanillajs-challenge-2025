const images = ["bg_1.jpg", "bg_2.jpg", "bg_3.jpg", "bg_4.jpg", "bg_5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImage}`;
bgImage.classList.add("bgImg");
document.body.appendChild(bgImage);