/* ==========================================
   SCENE MANAGEMENT
   ========================================== */
function nextScene(sceneNumber) {
  document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`scene-${sceneNumber}`);
  if (target) {
    target.classList.add('active');
  }

  if (sceneNumber === 3) {
    document.getElementById('scene-3').classList.add('scene-cracked');
  }
  if (sceneNumber === 4) {
    runSilentScene();
  }
}

/* ==========================================
   SCENE 1 LOGIC: CHAT SEQUENCE
   ========================================== */
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => document.getElementById('msg-1').classList.add('visible'), 600);
  setTimeout(() => document.getElementById('msg-2').classList.add('visible'), 1800);
  setTimeout(() => document.getElementById('msg-3').classList.add('visible'), 3200);
  setTimeout(() => {
    const btn = document.getElementById('btn-rewind');
    btn.style.display = 'inline-block';
  }, 4200);

  document.getElementById('btn-rewind').addEventListener('click', () => {
    const scene1 = document.getElementById('scene-1');
    scene1.classList.add('rewind-effect');
    setTimeout(() => {
      nextScene(2);
    }, 1100);
  });
});

/* ==========================================
   SCENE 4 LOGIC: SILENT LISTENING
   ========================================== */
function runSilentScene() {
  const messages = [
    "“I'm tired.”",
    "“I don't know if I can do this anymore.”",
    "“Why should I trust you?”",
    "“I'm scared it'll happen again.”",
    "...",
    "For the first time, I stopped trying to defend myself.",
    "I started listening."
  ];

  const box = document.getElementById('silent-text-box');
  const nextBtn = document.getElementById('btn-scene4-next');
  let idx = 0;

  box.innerText = "";
  nextBtn.style.display = "none";

  const interval = setInterval(() => {
    if (idx < messages.length) {
      box.innerText = messages[idx];
      idx++;
    } else {
      clearInterval(interval);
      nextBtn.style.display = "inline-block";
    }
  }, 2200);
}

/* ==========================================
   SCENE 5 LOGIC: THE MIRROR
   ========================================== */
let isChanged = false;
function toggleMirror() {
  const title = document.getElementById('mirror-title');
  const list = document.getElementById('mirror-list');
  const btn = document.getElementById('btn-mirror');
  const nextBtn = document.getElementById('btn-to-box');

  if (!isChanged) {
    title.innerText = "🪞 WHO I WANT TO BECOME";
    list.innerHTML = `
      <li style="color: #6c5ce7;">• Honest</li>
      <li style="color: #6c5ce7;">• Patient</li>
      <li style="color: #6c5ce7;">• Understanding</li>
      <li style="color: #6c5ce7;">• Respectful</li>
      <li style="color: #6c5ce7;">• Trustworthy</li>
      <li style="color: #6c5ce7;">• Comforting</li>
    `;
    btn.style.display = "none";
    nextBtn.style.display = "inline-block";
    isChanged = true;
  }
}

/* ==========================================
   SCENE 9 LOGIC: CHOICE
   ========================================== */
function makeChoice(isSomeday) {
  const buttons = document.getElementById('final-buttons');
  const message = document.getElementById('final-message');

  buttons.style.display = 'none';
  message.style.display = 'block';

  if (isSomeday) {
    message.innerText = "“Then someday, I'll meet you there.”";
    message.style.color = "#ff7675";
  } else {
    message.innerText = "“I'll respect your decision.”";
    message.style.color = "#aaa";
  }
}

/* ==========================================
   MODAL HELPERS
   ========================================== */
function showModal(title, body) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-body').innerText = body;
  document.getElementById('modal').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}
