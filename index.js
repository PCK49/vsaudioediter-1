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

    // Append the player once
    if (!document.body.contains(audio)) {
      document.body.appendChild(audio);
    }
  }
});

function handleAction(action) {
  if (!audioLoaded) {
    document.getElementById('audioUpload').click(); // Ask to upload audio
    return;
  }

  if (action === 'pitch') {
    let pitchSpeed = prompt("What pitch speed do you want? ");
    alert(`Pitch adjustment to speed: ${pitchSpeed}`);
    audio.playbackRate=pitchSpeed;
  } else if (action === 'volume') {
    let volume = prompt("How loud do you want the audio to be? ");
    if (volume !== null && !isNaN(volume)) {
      audio.volume = Math.min(Math.max(parseFloat(volume), 0), 1);
    }
  } else if (action === 'reverse') {
    alert('Reverse effect (coming soon)');
  }
}
