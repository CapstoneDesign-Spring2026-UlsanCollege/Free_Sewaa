import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { pageRoutes } from './generated-pages/routes.jsx';
import './styles.css';

function routePath() {
  const pathname = window.location.pathname.toLowerCase();
  return pathname === '/' ? '/' : pathname;
}

function removeInjectedAssets() {
  document.querySelectorAll('[data-react-page-asset="true"]').forEach(asset => asset.remove());
}

function setBodyAttributes(attrs = {}) {
  document.body.className = attrs.class || '';

  [...document.body.attributes].forEach(attribute => {
    if (attribute.name.startsWith('data-')) {
      document.body.removeAttribute(attribute.name);
    }
  });

  Object.entries(attrs).forEach(([name, value]) => {
    if (name.startsWith('data-')) {
      document.body.setAttribute(name, value);
    }
  });
}

function applyMeta(meta = {}) {
  document.title = meta.title || 'Free Sewaa';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', meta.description || 'Free Sewaa community giving platform.');
  setBodyAttributes(meta.bodyAttrs || {});
}

function injectLinks(links = []) {
  links.forEach(attrs => {
    if (attrs.href && document.querySelector(`link[rel="stylesheet"][href="${attrs.href}"]`)) {
      return;
    }

    const link = document.createElement('link');
    Object.entries(attrs).forEach(([name, value]) => {
      link.setAttribute(name, value === true ? '' : value);
    });
    link.dataset.reactPageAsset = 'true';
    document.head.appendChild(link);
  });
}

function injectScripts(scripts = []) {
  scripts.reduce((chain, scriptData) => {
    return chain.then(
      () =>
        new Promise(resolve => {
          const script = document.createElement('script');
          Object.entries(scriptData.attrs || {}).forEach(([name, value]) => {
            script.setAttribute(name, value === true ? '' : value);
          });
          script.async = false;
          script.dataset.reactPageAsset = 'true';
          if (scriptData.content) script.textContent = scriptData.content;
          script.onload = resolve;
          script.onerror = resolve;
          document.body.appendChild(script);
          if (!scriptData.attrs?.src) window.setTimeout(resolve, 0);
        })
    );
  }, Promise.resolve());
}

function getRoute() {
  return pageRoutes[routePath()] || pageRoutes['/app.html'] || Object.values(pageRoutes)[0];
}

function FallbackPage() {
  return (
    <main className="react-load-error">
      <h1>Free Sewaa</h1>
      <p>Give what you can. Find what you need.</p>
      <p>The page is recovering. Use the home link below to continue.</p>
      <a href="/app.html">Open Free Sewaa Home</a>
    </main>
  );
}

class PageErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Free Sewaa page render failed:', error);
  }

  render() {
    if (this.state.hasError) return <FallbackPage />;
    return this.props.children;
  }
}

function PageApp() {
  const route = getRoute();
  const Component = route?.Component || FallbackPage;
  const meta = route?.meta || {};

  useEffect(() => {
    removeInjectedAssets();
    applyMeta(meta);
    injectLinks(meta.links || []);
    injectScripts(meta.scripts || []);

    return removeInjectedAssets;
  }, [meta]);

  return <Component />;
}

try {
  createRoot(document.getElementById('root')).render(
    <PageErrorBoundary>
      <PageApp />
    </PageErrorBoundary>
  );
} catch (error) {
  console.error('Free Sewaa app failed to start:', error);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = '<main class="react-load-error"><h1>Free Sewaa</h1><p>Give what you can. Find what you need.</p><p>The page is recovering. Use the home link below to continue.</p><a href="/app.html">Open Free Sewaa Home</a></main>';
  }
}
