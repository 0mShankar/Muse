window.addEventListener('DOMContentLoaded', () => {
  const fileNameDisplay=document.getElementById('fileName');
  const fileButton = document.getElementById('customFileButton');
  const fileInput = document.getElementById('fileInput');
  const video = document.getElementById('videoPlayer');
  const audio = document.getElementById('audioPlayer');
  const enterAppBtn = document.getElementById('enterApp');
const welcomeScreen = document.getElementById('welcomeScreen');
const appContent = document.getElementById('appContent');


enterAppBtn.addEventListener('click', () => {
  welcomeScreen.style.display = 'none';
  appContent.style.display = 'block';
});




  fileButton.addEventListener('click', () => {
    fileInput.click();
  });


  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    fileNameDisplay.textContent=file?file.name:"No File Selected";
    const url = URL.createObjectURL(file);

    if (file.type.startsWith('video/')) {
      audio.style.display = 'none';
      video.style.display = 'block';
      video.src = url;
      video.play();
    } else if (file.type.startsWith('audio/')) {
      video.style.display = 'none';
      audio.style.display = 'block';
      audio.src = url;
      audio.play();
    }
  });
});