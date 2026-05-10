/* ================================================
   main.js — Fatoumata BAH Portfolio
   ================================================ */

/* ── 1. VIEW SWITCHING ── */
function show(id) {
  document.querySelectorAll('.view').forEach(function(v) {
    v.classList.remove('active');
  });
  document.querySelectorAll('.sidebar-nav button').forEach(function(b) {
    b.classList.remove('active');
  });
  document.getElementById('view-' + id).classList.add('active');
  var btn = document.querySelector('.sidebar-nav button[data-view="' + id + '"]');
  if (btn) btn.classList.add('active');
  document.querySelector('.main-content').scrollTop = 0;

  if (id === 'skills') {
    setTimeout(function() {
      document.querySelectorAll('#view-skills .skill-bar').forEach(function(bar) {
        bar.style.width = bar.getAttribute('data-w') + '%';
      });
    }, 100);
  }
}

/* ── 2. TYPING ANIMATION ── */
var typingWords = [
  'Penetration Tester',
  'SIEM / SOC Analyst',
  'AI Security Enthusiast',
  'Full-Stack Developer'
];

var wordIndex = 0;
var charIndex = 0;
var isDeleting = false;
var typedEl = document.getElementById('typed-text');

function typeLoop() {
  var currentWord = typingWords[wordIndex];
  if (!isDeleting) {
    typedEl.textContent = currentWord.slice(0, ++charIndex);
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    typedEl.textContent = currentWord.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typingWords.length;
    }
  }
  setTimeout(typeLoop, isDeleting ? 60 : 100);
}

/* ── 3. INIT ── */
document.addEventListener('DOMContentLoaded', function() {
  typeLoop();

  document.querySelectorAll('.sidebar-nav button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      show(btn.getAttribute('data-view'));
    });
  });

  document.getElementById('btn-projects').addEventListener('click', function() { show('projects'); });
  document.getElementById('btn-contact').addEventListener('click',  function() { show('contact');  });
});
