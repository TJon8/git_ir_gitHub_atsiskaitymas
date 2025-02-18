const overlay = document.getElementById('overlay');
const openTabButtons = document.querySelectorAll('.open-tab');
const tabs = document.querySelectorAll('.tab');
const closeTabButtons = document.querySelectorAll('.close-tab');

openTabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');
    const tabToOpen = document.getElementById(tabId);
    overlay.classList.add('active');
    tabs.forEach(t => t.classList.remove('active'));
    tabToOpen.classList.add('active');
  });
});

closeTabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.closest('.tab');
    tab.classList.remove('active');
    const anyTabOpen = Array.from(tabs).some(t => t.classList.contains('active'));
    if (!anyTabOpen) {
      overlay.classList.remove('active');
    }
  });
});
overlay.addEventListener('click', () => {
  tabs.forEach(t => t.classList.remove('active'));
  overlay.classList.remove('active');
});