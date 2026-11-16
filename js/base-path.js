(() => {
  const parts = location.pathname.split('/').filter(Boolean);
  const basePath = location.hostname.endsWith('github.io') && parts.length ? `/${parts[0]}` : '';
  window.NANDI_BASE_PATH = basePath;
  const base = document.createElement('base');
  base.href = `${location.origin}${basePath}/`;
  document.head.prepend(base);
})();
