window.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const video = document.getElementById('videoPlayer');
  const audio = document.getElementById('audioPlayer');

  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
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
