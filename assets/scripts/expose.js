// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  const imgElement = document.querySelector('img[alt="No image selected"]');

  // Horn selection listener
  hornSelect.addEventListener('change', (e) => {
    const hornType = e.target.value;
    const hornData = {
      'air-horn': {
        image: 'assets/images/air-horn.svg',
        audio: 'assets/audio/air-horn.mp3'
      },
      'car-horn': {
        image: 'assets/images/car-horn.svg',
        audio: 'assets/audio/car-horn.mp3'
      },
      'party-horn': {
        image: 'assets/images/party-horn.svg',
        audio: 'assets/audio/party-horn.mp3'
      }
    };

    if (hornData[hornType]) {
      imgElement.src = hornData[hornType].image;
      audioElement.src = hornData[hornType].audio;
    }
  });

  // Volume slider listener
  volumeSlider.addEventListener('input', (e) => {
    const volumeValue = parseInt(e.target.value);

    // Update icon based on volume level
    if (volumeValue === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }

    // Update audio volume (0-100 range maps to 0-1 for audio element)
    audioElement.volume = volumeValue / 100;
  });

  // Play Sound button listener
  playButton.addEventListener('click', () => {
    // Reset audio to beginning before playing
    audioElement.currentTime = 0;
    audioElement.play();

    // If party horn is selected, trigger confetti
    if (hornSelect.value === 'party-horn') {
      const confetti = new JSConfetti();
      confetti.addConfetti();
    }
  });
}