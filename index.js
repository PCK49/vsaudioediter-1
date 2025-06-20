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
    let pitchSpeed = prompt("What pitch speed do you want?");
  } else if (action === 'volume') {
    let volume = prompt("How loud do you want the audio to be?");
    alert('Reverse effect (coming soon)');
  }
}

