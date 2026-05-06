// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const pressToTalkButton = document.querySelector('button');
  const faceImg = document.querySelector('img[alt="Smiling face"]');

  let voices = [];

  // Load available voices
  function loadVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = voice.name;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  // Load voices on page load and when voices change
  loadVoices();
  synth.onvoiceschanged = loadVoices;

  // Press to Talk button listener
  pressToTalkButton.addEventListener('click', () => {
    const text = textArea.value;
    const selectedVoiceIndex = voiceSelect.value;

    if (!text || selectedVoiceIndex === 'select') {
      return;
    }

    // Create utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedVoiceIndex];

    // Change face to open mouth while speaking
    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };

    // Change face back to normal when done
    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    // Speak
    synth.speak(utterance);
  });
}