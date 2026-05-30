import { NextResponse } from "next/server";

const CDN = "https://cloudflare.com/cdn-cgi/images";

function rayId(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function utcTime(): string {
  return `${new Date().toISOString().replace("T", " ").slice(0, 19)} UTC`;
}

type StatusNode = {
  icon: "browser" | "cloud" | "server";
  location: string;
  name: string;
  status: "ok" | "error";
  statusText: string;
  isSource: boolean;
};

const STATUS_NODES: StatusNode[] = [
  {
    icon: "browser",
    location: "You",
    name: "Browser",
    status: "ok",
    statusText: "Working",
    isSource: false,
  },
  {
    icon: "cloud",
    location: "Newark",
    name: "Cloudflare",
    status: "ok",
    statusText: "Working",
    isSource: false,
  },
  {
    icon: "server",
    location: "shabad.sbs",
    name: "Host",
    status: "error",
    statusText: "Error",
    isSource: true,
  },
];

function statusNode(node: StatusNode): string {
  const color = node.status === "ok" ? "#9bca3e" : "#bd2426";
  const badge = node.status === "ok" ? "cf-icon-ok" : "cf-icon-error";
  const sourceClass = node.isSource ? " cf-error-source" : "";

  return `
    <div class="status-col">
      <div class="status-icon-wrap${sourceClass}">
        <span class="cf-icon cf-icon-${node.icon}"></span>
        <span class="cf-icon cf-status ${badge}"></span>
      </div>
      <p class="status-label">
        ${node.location}<br />
        <strong>${node.name}</strong>
      </p>
      <span class="status-text" style="color:${color}">${node.statusText}</span>
    </div>`;
}

const html = (id: string, time: string) => `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>shabad.sbs | 503: Service temporarily unavailable</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      min-height: 100%;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 16px;
      color: #404040;
      -webkit-font-smoothing: antialiased;
    }
    a { color: #2f7bbf; text-decoration: none; transition: color .15s; }
    a:hover { color: #f68b1f; }

    #cf-wrapper { width: 100%; }
    #cf-error-details {
      margin-top: 1.5rem;
      background: #fff;
    }
    .cf-inner {
      max-width: 60rem;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .cf-header {
      padding: 2.5rem 0 2rem;
      background-repeat: no-repeat;
      background-position: left top;
      background-size: 5rem 5rem;
      padding-left: 6.5rem;
      min-height: 5rem;
    }
    .cf-header h1 {
      font-size: 2.25rem;
      font-weight: 300;
      line-height: 1.25;
      color: #404040;
      margin-bottom: 0.5rem;
    }
    .cf-header .error-code {
      display: block;
      font-size: 1.5rem;
      font-weight: 300;
      color: #404040;
      margin-bottom: 1rem;
    }
    .cf-header .more-info {
      font-size: 15px;
      line-height: 1.5;
      margin-bottom: 0.5rem;
    }
    .cf-header .timestamp {
      font-size: 15px;
      color: #404040;
    }

    .cf-status-section {
      background: linear-gradient(to bottom, #dedede, #ebebeb 3%, #ebebeb 97%, #dedede);
      border: 1px solid #ebebeb;
      border-radius: 0.25rem;
      padding: 2.5rem 2rem;
      margin-bottom: 2rem;
      overflow: hidden;
    }
    .cf-status-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
    }
    .status-col {
      flex: 1;
      text-align: center;
      min-width: 0;
    }
    .status-icon-wrap {
      position: relative;
      width: 5rem;
      height: 5rem;
      margin: 0 auto 2.5rem;
    }
    .cf-icon {
      display: block;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    .cf-icon-browser { width: 5rem; height: 5rem; background-image: url(${CDN}/cf-icon-browser.png); }
    .cf-icon-cloud   { width: 5rem; height: 5rem; background-image: url(${CDN}/cf-icon-cloud.png); }
    .cf-icon-server  { width: 5rem; height: 5rem; background-image: url(${CDN}/cf-icon-server.png); }
    .cf-status {
      width: 3rem;
      height: 3rem;
      position: absolute;
      left: 50%;
      bottom: -1rem;
      margin-left: -1.5rem;
    }
    .cf-icon-ok    { background-image: url(${CDN}/cf-icon-ok.png); }
    .cf-icon-error { background-image: url(${CDN}/cf-icon-error.png); }

    .cf-error-source::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -1.75rem;
      margin-left: -1.25rem;
      width: 2.5rem;
      height: 2.5rem;
      background: #fff;
      transform: rotate(45deg);
      box-shadow: 0 0 4px 4px #dedede;
    }

    .status-label {
      font-size: 13px;
      line-height: 1.5;
      color: #404040;
      margin-bottom: 0.25rem;
    }
    .status-label strong { font-weight: 600; }
    .status-text {
      font-size: 15px;
      line-height: 1.3;
      font-weight: 400;
    }

    .cf-info-section {
      border-top: 1px solid #ebebeb;
      padding: 2.5rem 0;
      margin-bottom: 2rem;
    }
    .cf-info-row {
      display: flex;
      gap: 2rem;
    }
    .cf-info-col { flex: 1; }
    .cf-info-col h2 {
      font-size: 15px;
      font-weight: 600;
      color: #404040;
      margin-bottom: 0.5rem;
    }
    .cf-info-col p {
      font-size: 15px;
      line-height: 1.5;
      color: #404040;
    }

    .cf-error-footer {
      border-top: 1px solid #ebebeb;
      padding: 1.5rem 0 3rem;
      font-size: 13px;
      color: #999;
      line-height: 1.8;
    }
    .cf-error-footer strong { color: #666; font-weight: 600; }
    .cf-footer-ip-reveal {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: #0051c3;
      cursor: pointer;
    }
    .cf-footer-ip-reveal:hover { color: #ee730a; }
    .hidden { display: none; }

    @media (max-width: 720px) {
      .cf-inner { padding: 0 1rem; }
      .cf-header {
        padding-left: 0;
        background-image: none !important;
      }
      .cf-header h1 { font-size: 1.875rem; }
      .cf-status-row { flex-direction: column; }
      .status-col { padding: 1rem 0; border-bottom: 1px solid #dedede; }
      .status-col:last-child { border-bottom: none; }
      .status-icon-wrap { margin-bottom: 1rem; }
      .cf-error-source::after { display: none; }
      .cf-status {
        top: 0;
        right: 0;
        left: auto;
        bottom: auto;
        margin-left: 0;
      }
      .cf-info-row { flex-direction: column; }
    }
  </style>
</head>
<body>
  <div id="cf-wrapper">
    <div id="cf-error-details">
      <div class="cf-inner">
        <header
          class="cf-header"
          style="background-image:url(${CDN}/cf-icon-error.png)"
        >
          <h1>Service temporarily unavailable</h1>
          <span class="error-code">Error code 503</span>
          <p class="more-info">
            Visit <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">cloudflare.com</a> for more information.
          </p>
          <p class="timestamp">${time}</p>
        </header>

        <section class="cf-status-section">
          <div class="cf-status-row">
            ${STATUS_NODES.map(statusNode).join("")}
          </div>
        </section>

        <section class="cf-info-section">
          <div class="cf-info-row">
            <div class="cf-info-col">
              <h2>What happened?</h2>
              <p>The web server reported a temporary error and could not complete your request.</p>
            </div>
            <div class="cf-info-col">
              <h2>What can I do?</h2>
              <p><strong>If you are a visitor of this website:</strong><br />Please try again in a few minutes.</p>
              <p style="margin-top:0.75rem"><strong>If you are the owner of this website:</strong><br />Check your origin server status and review your hosting configuration for errors.</p>
            </div>
          </div>
        </section>

        <div class="cf-error-footer">
          <span>Cloudflare Ray ID: <strong>${id}</strong></span>
          <span> &bull; </span>
          <span id="cf-footer-item-ip">
            Your IP:
            <button type="button" class="cf-footer-ip-reveal" id="cf-footer-ip-reveal">Click to reveal</button>
            <span class="hidden" id="cf-footer-ip">127.0.0.1</span>
          </span>
          <span> &bull; </span>
          <span>Performance &amp; security by <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare</a></span>
        </div>
      </div>
    </div>
  </div>
  <script>
    document.getElementById("cf-footer-ip-reveal").addEventListener("click", function () {
      this.classList.add("hidden");
      document.getElementById("cf-footer-ip").classList.remove("hidden");
    });
  </script>
</body>
</html>`;

/** Backup Cloudflare-style 503 page — preview at /pqxnlt/error */
export function cloudflareErrorResponse() {
  return new NextResponse(html(rayId(), utcTime()), {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "Retry-After": "3600",
    },
  });
}
