
// const words = [
//   "Perfidious - धोखेबाज, बेईमान, विश्वासघाती",
//   "Kinship - संबंध, रिश्ता, बंधन",
//   "Magnanimous - उदार, दयालु, महानुभाव",
//   "Nefarious - दुर्जन, दुष्ट, अनैतिक",
//   "Lethargy - सुस्ती, आलस्य, अव्यावर्तिकता",
//   "Omnipotent - सर्वशक्तिमान, सर्वव्यापी, सर्वाधिकारी",
//   "Hierarchy - श्रेणीबद्धता, अधिकार व अधिकृतता की श्रेणी विभाजन",
//   "Intrepid - निडर, निर्भीक, दिलेर",
//   "Juxtaposition - एक साथ रखना, साथ-साथ रखना, विरोधाभास में रखना",
//   "Eloquent - प्रवक्ता, बोलचाल कुशलता से सम्बंधित"
// ];

// let index = 0;

// const wordElement = document.getElementById("word");

// const nextButton = document.getElementById("nextButton");

// function changeWord() {
//   wordElement.innerText = words[index];
//   index = (index + 1) % words.length;

// }

// nextButton.addEventListener("click", changeWord);
// changeWord();

const words = [" Chatty - बातूनी ", " Kinship - संबंध, रिश्ता", " Magnanimous - उदार, दयालु, ", " Nefarious - दुर्जन, दुष्ट,", " Stingy- कंजूस ", " Fearless -निडर ", " Slim - दुबला-पतला, ", " Diligent - मेहनती", " Candid - मासूम"," Docile - विनम्र","  Silently - दिल ही दिल में", " Get Annoyed - नाराज़ होना", " Back out - मुकर जाना", "  Make promises - वादे करना:", " Guide - मार्गदर्शक"," Cunning - चालाक", " Hoodwink - आंख में धूल झोंकना"," Befool - मूर्ख बनाना"," Creep - रेंगना"," Carve - नक़्क़ाशी करना"," Chew - चबाना"," Dance - नृत्य"," Desire - इच्छा"," Dip - डुबोना"," Cultivate - खेती करना","  Civilize - सभ्य बनाना"," Deceive - धोखा देना"," Defeat - हराना"," Be - होना"," Behold - निहारना"," Bend - झुकना"," Cross - पार करना","  Beg - भीख मांगना"," Believe - विश्वास करना"," Behave - व्यवहार करना"," Bleed - खून बहाना"," Boast - डींग मारना"," Borrow - उधार मांगना"," Breed - जनना"," Elect - चुनना"," Feed - खिलाना"," Threaten - धमकी देना","  Drool - लार"," Biting Nails - नाखून चबाना"," Hate - घृणा"," Hire - किराये पर लेना"," Harass - उत्पीड़ित करना"," Insult - अपमान करना"," Instigate - उकसाना"," Interfere - दखल देना" ];



// const words = [
//   "Perfidious - धोखेबाज, बेईमान, विश्वासघाती",
//   "Kinship - संबंध, रिश्ता, बंधन",
//   "Magnanimous - उदार, दयालु, महानुभाव",
//   "Nefarious - दुर्जन, दुष्ट, अनैतिक",
//   "Lethargy - सुस्ती, आलस्य, अव्यावर्तिकता",
//   "Omnipotent - सर्वशक्तिमान, सर्वव्यापी, सर्वाधिकारी",
//   "Hierarchy - श्रेणीबद्धता, अधिकार व अधिकृतता की श्रेणी विभाजन",
//   "Intrepid - निडर, निर्भीक, दिलेर",
//   "Juxtaposition - एक साथ रखना, साथ-साथ रखना, विरोधाभास में रखना",
//   "Eloquent - प्रवक्ता, बोलचाल कुशलता से सम्बंधित"
// ];

let index = 0;
let index1 = 0;
const wordElement = document.getElementById("word");
const wordElement1 = document.getElementById("word1");
const nextButton = document.getElementById("nextButton");

function changeWord() {
  wordElement.innerText = words[index];
  index = (index + 1) % words.length;
}

function changeWord1() {
  wordElement1.innerText = words[index1];
  index1 = (index1 + 1) % words.length;
}

nextButton.addEventListener("click", () => {
  changeWord();
  changeWord1();
});

changeWord();
setInterval(changeWord1, 3000);









// // Get references to the word display div and next button
// var wordDisplay = document.getElementById("word-display");
// var nextButton = document.getElementById("next-button");

// // Initialize the current word index to 0
// var currentWordIndex = 0;

// // Function to display the current word on the page
// function displayCurrentWord() {
// 	wordDisplay.textContent = words[currentWordIndex].word;
// }

// // Function to advance to the next word
// function goToNextWord() {
// 	// Increment the current word index
// 	currentWordIndex++;

// 	// If we've gone past the end of the array, reset to 0
// 	if (currentWordIndex >= words.length) {
// 		currentWordIndex = 0;
// 	}

// 	// Display the new current word
// 	displayCurrentWord();
// }

// Attach an event listener to the next button
// nextButton.addEventListener("click", goToNextWord);

// // Display the initial word
//  changeWord()
// displayCurrentWord();
