import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registra o service worker para o app funcionar offline e ser instalável
// como PWA (ver "Caminho A" no COMO-GERAR-O-APK.md). Isso não atrapalha o
// Caminho B (Capacitor/APK nativo) — dentro do WebView do app empacotado,
// esse registro simplesmente não faz efeito nenhum, sem causar erro.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {});
  });
}
