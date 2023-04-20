const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newH2.innerText = "Welcome to Javascript Language";
newSection.appendChild(newP);

document.body.appendChild(newSection);