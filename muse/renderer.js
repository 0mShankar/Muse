window.addEventListener('DOMContentLoaded', () => {
  const fileNameDisplay = document.getElementById('fileName');
  const fileButton = document.getElementById('customFileButton');
  const fileInput = document.getElementById('fileInput');
  const video = document.getElementById('videoPlayer');
  const audio = document.getElementById('audioPlayer');
  const enterAppBtn = document.getElementById('enterApp');
  const welcomeScreen = document.getElementById('welcomeScreen');
  const appContent = document.getElementById('appContent');
  const dropZone = document.getElementById('dropZone');

  // Welcome screen handler
  enterAppBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    appContent.style.display = 'block';
  });

  // File browse button
  fileButton.addEventListener('click', () => {
    fileInput.click();
  });

  // File input via browse
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) handleFile(file);
  });

  // Drag and Drop Support
  ['dragenter', 'dragover'].forEach(eventName => {
    document.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropZone.style.display = 'flex';
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    document.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropZone.style.display = 'none';
    }, false);
  });

  document.addEventListener('drop', (e) => {
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  });

  // Main function to handle playback
  function handleFile(file) {
    fileNameDisplay.textContent = file.name;
    const url = URL.createObjectURL(file);

    if (file.type.startsWith('video/')) {
      audio.pause();
      audio.currentTime = 0;
      audio.style.display = 'none';

      video.src = url;
      video.style.display = 'block';
      video.play();
    } else if (file.type.startsWith('audio/')) {
      video.pause();
      video.currentTime = 0;
      video.style.display = 'none';

      audio.src = url;
      audio.style.display = 'block';
      audio.play();
    }
  }
});
