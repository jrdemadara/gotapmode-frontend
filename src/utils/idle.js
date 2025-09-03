export function initIdleLogout({ idleMs = 1800000, onTimeout } = {}) {
  const KEY = 'gtm_last_active';
  const now = () => Date.now();

  function touch() {
    localStorage.setItem(KEY, String(now()));
  }

  function check() {
    const ts = Number(localStorage.getItem(KEY) || 0);
    if (!ts) return touch();
    if (now() - ts > idleMs) {
      cleanup();
      onTimeout?.();
    }
  }

  function cleanup() {
    window.removeEventListener('mousemove', touch);
    window.removeEventListener('keydown', touch);
    window.removeEventListener('click', touch);
    window.removeEventListener('touchstart', touch);
    document.removeEventListener('visibilitychange', touch);
    clearInterval(timer);
  }

  // Always prime last active on load so refresh doesn't force logout
  touch();

  window.addEventListener('mousemove', touch);
  window.addEventListener('keydown', touch);
  window.addEventListener('click', touch);
  window.addEventListener('touchstart', touch);
  document.addEventListener('visibilitychange', touch);

  const timer = setInterval(check, 1000);

  // immediate check on init
  check();

  return { cleanup, touch };
}


