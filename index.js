



const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readButton = document.getElementById("read");
const toggleButton = document.getElementById("toggle");
const closeButton = document.getElementById("close");

const data = [
  {
    image: "drink",
   
  
     text: "Tell me about Yourself ?",
  },
  {
    image: "food",
      text: "What are your strengths and weaknesses?", //What motivates you?   How do you prioritize your tasks?
  },
  {
    image: "tired",
       text: "What is the difference between confidence and over confidence?",
  },
  {
    image: "hurt",
     text: "What are your short term and long term goals ?",
  
  },
  {
    image: "hurt",
     text: "What motivates you to work ?",
  
  },

  
  {
    image: "hurt",
     text: "What was your biggest achievement ?",
  
  },
  {
    image: "hurt",
     text: "Tell me about a time you handled failure.?",
  
  },
  {
    image: "hurt",
     text: "Share a time when you led a team successfully.?",
  
  },
   {
    image: "hurt",
     text: "How do your skills fit into this role ?",
  
  },
   {
    image: "hurt",
     text: "Give an example of solving a workplace problem creatively. ?",
  
  },
   {
    image: "hurt",
     text: "How do you motivate your teammates ?",
  
  },
   {
    image: "hurt",
     text: "Do you prefer working alone or in a team ?",
  
  },
   {
    image: "hurt",
     text: "How do you handle a non-performing team member ?",
  
  },
   {
    image: "hurt",
     text: "How do you analyze a problem before acting ?",
  
  },
  {
    image: "hurt",
     text: "How do you prioritize tasks when everything is urgent ?",
  
  },
  {
    image: "hurt",
     text: "What do you think about AI & automation in the workplace ?",
  
  },
  {
    image: "hurt",
     text: "Suppose your company introduces a new AI tool ,how will you adapt ?",
  
  },
  {
    image: "hurt",
     text: "What are your thoughts on upskilling in 2025 ?",
  
  },
  {
    image: "tired",
       text: "What are your core values? ",
  },
  {
    image: "tired",
       text: "How do you handle stress ?",
  },
  {
    image: "tired",
       text: "What makes you unique compared to other candidates?",
  },
  {
    image: "hurt",
     text: "On a scale of one to ten, rate youself ?",
  
  },
  {
    image: "tired",
       text: "How do you define success?",
  },
  {
    image: "tired",
       text: "Why do you want to work at our company?",
  },
  {
    image: "tired",
       text: "How do you stay updated with industry trends?",
  },

  {
    image: "tired",
       text: "Suppose you are given multiple urgent tasks,how will you manage them ?",
  },
 
  {
    image: "happy",
    text: "Can you work under Pressure ?", 
   
  },
  {
    image: "angry",
    text: "Are you willing to relocate or Travel ?",

  },
  {
    image: "sad",
     text: "What motivate you to do good job ?",
  
  },
  {
    image: "scared",
      text: "Describe your ideal company,location,job ?",

  },
  {
    image: "outside",
     text: "What are your career option right now ?",

  },
  {
    image: "home",
      text: "Where do you see yourself five years from now ?",
  
  },
  {
    image: "home",
      text: "Suppose you receive negative feedback,how will you improve?",
  
  },
  {
    image: "school",
         text: "How do you feel about working night and weekends ?",

  },
  {
    image: "grandma",
      text:"What was the toughest challenge you have ever faced ?",
   
  },
   {
    image: "home",
      text: "How long would you expect to work for us if hired ?",
     
  
  },
  {
    image: "school",
      text: " Who has inspired you in your life and why ?",
   

  },
  {
    image: "grandma",
        text: "How would you adapt to hybrid or remote work culture ?",
  },
  {
    image: "grandma",
        text: "Why should we hire you? ?",
  },
  
  {
    image: "sad",
       text: "Do you have any question for us",
 
  
  },
];

function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;
  box.classList.add("box");
   box.innerHTML = `
    <img src='https://github.com/UmendraBisen2/Photos-/blob/main/hrr.jpg?raw=true' alt="${text}"/>
    <p class="info">${text}</p>
    `; 
  box.addEventListener("click", () => handleSpeech(text, box));
  main.appendChild(box);
}

data.forEach(createBox);

let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voicesSelect.appendChild(option);
  });
}

function handleSpeech(text, box) {
  setTextMessage(text);
  speakText();
  box.classList.add("active");
  setTimeout(() => box.classList.remove("active"), 800);
}

const message = new SpeechSynthesisUtterance();

function setTextMessage(text) {
  message.text = text;
}

function speakText() {
  speechSynthesis.speak(message);
}

function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Event Listeners
toggleButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.toggle("show");
});
closeButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.remove("show");
});
speechSynthesis.addEventListener("voiceschanged", getVoices);
voicesSelect.addEventListener("change", setVoice);
readButton.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();