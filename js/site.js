(function () {
  function loadScript(src, onload) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = onload || null;
    script.onerror = onload || null;
    document.body.appendChild(script);
  }

  function loadSiteScripts() {
    loadScript('/js/site-core.js', () => loadScript('/js/language-pages.js'));
  }

  if (window.FREESEWAA_API_BASE_URL) {
    loadSiteScripts();
  } else {
    loadScript('/api-config.js', loadSiteScripts);
  }
})();
