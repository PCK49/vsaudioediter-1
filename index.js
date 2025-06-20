let audio = new Audio();
let audioLoaded = false;

document.getElementById('audioUpload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    audio.src = url;
    audio.controls = true;
    audio.autoplay = true;
    audioLoaded = true;

    // Add the audio player once
    if (!document.body.contains(audio)) {
      document.body.appendChild(audio);
    }
  }
});

function handleAction(action) {
  if (!audioLoaded) {
    document.getElementById('audioUpload').click(); // Prompt file selection
    return;
  }

  if (action === 'pitch') {
    alert('Pitch adjustment (coming soon)');
  } else if (action === 'volume') {
    alert('Volume adjustment (coming soon)');
  } else if (action === 'reverse') {
    alert('Reverse effect (coming soon)');
  }
}
