(function () {
  function loadScript(src, onload) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = onload || null;
    script.onerror = onload || null;
    document.body.appendChild(script);
  }

  loadScript('/api-config.js', () => loadScript('/js/site-core.js'));
})();
