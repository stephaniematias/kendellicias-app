import { useState, useEffect, Component } from "react";
import {
  ChefHat,
  Cookie,
  Banknote,
  Home as HomeIcon,
  Users,
  ShoppingBag,
  Wallet,
  ChevronLeft,
  Plus,
  Minus,
  AlertTriangle,
  Sparkles,
  Trophy,
  TrendingUp,
  Receipt,
  UserPlus,
  Phone,
  Package,
  Tag,
  Check,
  Wallet2,
  CreditCard,
  Pencil,
  Trash2,
  X,
  Paperclip,
  Download,
  QrCode,
  ClipboardList,
  Search,
  NotebookPen,
  Lightbulb,
  ShoppingCart,
  StickyNote,
  ArrowRightCircle,
  Ban,
  Settings,
} from "lucide-react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LOGO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/7QCWUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAF4cAVoAAxslRxwCAAACAAIcAj8ABjIwNDk1OBwCPgAIMjAyNjA5MDQcAm4AFUFwcGxlIFBob3RvcyBDbGVhbiBVcBwCNwAIMjAyNjA5MDQcAjwACzIwNDk1OC0wMzAwOEJJTQQlAAAAAAAQdfs4XKwiKJziXIeJNYng6P/hAXxFeGlmAABNTQAqAAAACAAGARIAAwAAAAEAAQAAARoABQAAAAEAAABWARsABQAAAAEAAABeASgAAwAAAAEAAgAAATIAAgAAABQAAABmh2kABAAAAAEAAAB6AAAAAAAAAEgAAAABAAAASAAAAAEyMDI2OjA5OjA0IDIwOjQ5OjU4AAAPkAAABwAAAAQwMjIxkAMAAgAAABQAAAE0kAQAAgAAABQAAAFIkBAAAgAAAAcAAAFckBEAAgAAAAcAAAFkkBIAAgAAAAcAAAFskQEABwAAAAQBAgMAkpAAAgAAAAQwMDAAkpEAAgAAAAQwMDAAkpIAAgAAAAQwMDAAoAAABwAAAAQwMTAwoAEAAwAAAAH//wAAoAIABAAAAAEAAANmoAMABAAAAAEAAANlpAYAAwAAAAEAAAAAAAAAADIwMjY6MDk6MDQgMjA6NDk6NTgAMjAyNjowOTowNCAyMDo0OTo1OAAtMDM6MDAAAC0wMzowMAAALTAzOjAwAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYYXBwbAQAAABtbnRyUkdCIFhZWiAH5gABAAEAAAAAAABhY3NwQVBQTAAAAABBUFBMAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAADBjcHJ0AAABLAAAAFB3dHB0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAACBjaGFkAAAB7AAAACxiVFJDAAABzAAAACBnVFJDAAABzAAAACBtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABQAAAAcAEQAaQBzAHAAbABhAHkAIABQADNtbHVjAAAAAAAAAAEAAAAMZW5VUwAAADQAAAAcAEMAbwBwAHkAcgBpAGcAaAB0ACAAQQBwAHAAbABlACAASQBuAGMALgAsACAAMgAwADIAMlhZWiAAAAAAAAD21QABAAAAANMsWFlaIAAAAAAAAIPfAAA9v////7tYWVogAAAAAAAASr8AALE3AAAKuVhZWiAAAAAAAAAoOAAAEQsAAMi5cGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltzZjMyAAAAAAABDEIAAAXe///zJgAAB5MAAP2Q///7ov///aMAAAPcAADAbv/hCthodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNi0wOS0wNFQyMDo0OTo1OCIgeG1wOk1vZGlmeURhdGU9IjIwMjYtMDktMDRUMjA6NDk6NTgiIHBob3Rvc2hvcDpDcmVkaXQ9IkFwcGxlIFBob3RvcyBDbGVhbiBVcCIgcGhvdG9zaG9wOkRhdGVDcmVhdGVkPSIyMDI2LTA5LTA0VDIwOjQ5OjU4LTAzOjAwIiBJcHRjNHhtcEV4dDpEaWdpdGFsU291cmNlVHlwZT0iaHR0cDovL2N2LmlwdGMub3JnL25ld3Njb2Rlcy9kaWdpdGFsc291cmNldHlwZS9jb21wb3NpdGVXaXRoVHJhaW5lZEFsZ29yaXRobWljTWVkaWEiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+AP/bAEMABgQEBQQEBgUFBQYGBgcJDgkJCAgJEg0NCg4VEhYWFRIUFBcaIRwXGB8ZFBQdJx0fIiMlJSUWHCksKCQrISQlJP/bAEMBBgYGCQgJEQkJESQYFBgkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJP/AABEIANwA3AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUHBgj/xABFEAABAwMDAgMGAwQHBwMFAAABAgMEAAURBhIhMUEHE1EUIjJhcYEVkbEjQlKhCBYzcsHR4SRDYpKy8PElU4I0NWNzwv/EABoBAQEBAAMBAAAAAAAAAAAAAAABAgMEBQb/xAAjEQEBAAICAgICAwEAAAAAAAAAAQIRAyESMUFRBGEFExQi/9oADAMBAAIRAxEAPwDv9FFFee7oooooCjNJQDQLRRRQFFNWtDaSta0oSOqlHAFRl8lbYbaW4hYB8wYCQPXnr9Klomo5PzqFKZKvMDjjaARhHlpOU/PJ/wAqDCQ40G3S68AScqWcn8sVN1U27HGRk00OtkKPmt4T194cfWqkqbZ4L7K5cq3x3nMJaLzqEKX2G3JyfTiovxywokS4ouNtD8VClyWg4jc0lPxFY7AZ5z0q9ppopdbxkOIIPAIUOadzgnqKx06h0xIgIlfitnXDU4W0OqfbDZWBkpBJxnHJFaCW4bryXUFlbqUgpKFgnbjjgHpjpTtdJ6KhEZTQcCH30lXTed+36A0EyG20+4mQr97adhx8gcj+dTf2J84oJz2qESGi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";

const PALETTE = ["#6B4428", "#C97C3F", "#E3A83B", "#8B1E3F", "#8B5A2B", "#3B2314"];

// Catálogo de produtos: PERMANENTE. Não representa estoque — estoque só existe
// quando a loja é aberta para vender naquele dia (sessão do dia).
const INITIAL_PRODUCTS = [
  { id: 1, name: "Brigadeiro Tradicional", desc: "", category: "", price: 4.5, cost: 1.8, tone: PALETTE[0], active: true },
  { id: 2, name: "Brigadeiro Belga", desc: "", category: "", price: 6.0, cost: 2.6, tone: PALETTE[1], active: true },
  { id: 3, name: "Beijinho", desc: "", category: "", price: 4.5, cost: 1.7, tone: "#EFDFC4", active: true },
  { id: 4, name: "Ninho com Nutella", desc: "", category: "", price: 6.5, cost: 2.9, tone: PALETTE[4], active: true },
  { id: 5, name: "Churros Trufado", desc: "", category: "", price: 7.0, cost: 3.1, tone: PALETTE[2], active: true },
  { id: 6, name: "Bolo de Pote Red Velvet", desc: "", category: "", price: 9.0, cost: 4.0, tone: PALETTE[3], active: true },
];

const CATEGORIAS_DESPESA = ["Ingredientes", "Embalagens", "Transporte", "Outros"];

const MOTIVOS_DIFERENCA = ["Perda", "Produto estragado", "Consumo próprio", "Doação", "Erro de registro", "Outro"];

const STORAGE_KEY = "kendellicias-app-data-v1";

// ============================================================================
// Adaptador de persistência: dentro do Claude.ai (prévia deste protótipo) usa
// window.storage, que só existe aqui. Fora do Claude.ai — por exemplo, dentro
// de um app Android empacotado (Capacitor/WebView) — window.storage não existe,
// então cai automaticamente para IndexedDB, que é um banco local real e
// persistente, padrão de qualquer navegador/WebView, incluindo dentro de um
// app Android instalado. O resto do código chama sempre "AppStorage", nunca
// window.storage diretamente — então o mesmo app funciona nos dois lugares
// sem precisar trocar nada na hora de empacotar para Android.
// ============================================================================
const HAS_CLAUDE_STORAGE = typeof window !== "undefined" && !!window.storage;

function openIndexedDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("kendellicias_db", 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore("kv");
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

const IndexedDbStorage = {
  async get(key) {
    const db = await openIndexedDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("kv", "readonly");
      const req = tx.objectStore("kv").get(key);
      req.onsuccess = () => resolve(req.result !== undefined ? { key, value: req.result } : null);
      req.onerror = () => reject(req.error);
    });
  },
  async set(key, value) {
    const db = await openIndexedDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("kv", "readwrite");
      tx.objectStore("kv").put(value, key);
      tx.oncomplete = () => resolve({ key, value });
      tx.onerror = () => reject(tx.error);
    });
  },
};

const AppStorage = HAS_CLAUDE_STORAGE ? window.storage : IndexedDbStorage;

// ============================================================================
// Ponte de arquivos nativa (Android/Capacitor). No navegador (preview do
// Claude.ai ou build web comum), Blob + <a download> + Web Share API
// funcionam direto. Dentro do APK gerado pelo Capacitor, o WebView do
// Android NÃO tem acesso ao sistema de arquivos nem sabe renderizar PDF via
// blob:, então essas mesmas chamadas silenciosamente não fazem nada — é
// exatamente o bug relatado (comprovante não gera/abre/compartilha no APK).
//
// A correção usa os plugins oficiais @capacitor/filesystem e @capacitor/share:
//   - Filesystem.writeFile grava o PDF em Directory.Cache (armazenamento
//     privado do app), o que respeita o Scoped Storage do Android 10+ sem
//     precisar pedir NENHUMA permissão de armazenamento.
//   - Share.share pega esse arquivo e abre o menu nativo de compartilhamento
//     do Android (WhatsApp, e-mail, "Salvar em Downloads"/Drive, etc.) — e
//     por baixo dos panos usa um FileProvider (content://) que o próprio
//     Capacitor já registra automaticamente no AndroidManifest da pasta
//     android/ (authority "${applicationId}.fileprovider"). Não é preciso
//     escrever XML de FileProvider à mão.
//
// IMPORTANTE (fazer uma vez no projeto, fora deste arquivo):
//   npm install @capacitor/filesystem @capacitor/share
//   npx cap sync android
// ============================================================================
function isNativePlatform() {
  return (
    typeof window !== "undefined" &&
    !!window.Capacitor &&
    typeof window.Capacitor.isNativePlatform === "function" &&
    window.Capacitor.isNativePlatform()
  );
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // reader.result vem como "data:application/pdf;base64,AAAA..."
      const base64 = String(reader.result).split(",")[1] || "";
      resolve(base64);
    };
    reader.onerror = () => reject(reader.error || new Error("Falha ao ler o arquivo."));
    reader.readAsDataURL(blob);
  });
}

// Grava o blob em cache privado do app e abre o menu de compartilhar nativo
// do Android. Usa a ponte window.Capacitor.Plugins (em vez de "import
// @capacitor/filesystem/share") de propósito: essa ponte só depende do
// plugin nativo estar presente no projeto Android (o que "npx cap sync"
// resolve), e não de como o bundler do projeto empacota imports — evita
// quebrar o build por um import não resolvido.
async function saveAndShareNative(blob, filename) {
  const plugins = window.Capacitor && window.Capacitor.Plugins;
  const Filesystem = plugins && plugins.Filesystem;
  const Share = plugins && plugins.Share;

  if (!Filesystem || !Share) {
    throw new Error(
      "Os plugins nativos de arquivo/compartilhamento não estão instalados no app.\n" +
        "No projeto: npm install @capacitor/filesystem @capacitor/share && npx cap sync android — depois gere o APK de novo."
    );
  }

  const base64Data = await blobToBase64(blob);

  await Filesystem.writeFile({
    path: filename,
    data: base64Data,
    directory: "CACHE",
    recursive: true,
  });

  const { uri } = await Filesystem.getUri({ directory: "CACHE", path: filename });

  await Share.share({
    title: filename,
    text: filename,
    url: uri,
    dialogTitle: "Compartilhar ou salvar arquivo",
  });

  return uri;
}

function currency(v) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function initials(name) {
  return name
    .split(" ")
    .filter((w) => !["de", "com"].includes(w.toLowerCase()))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function resizeImage(file, maxSize, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Falha ao ler arquivo"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Falha ao carregar imagem"));
      img.onload = () => {
        let { width, height } = img;
        if (width > height && width > maxSize) {
          height = Math.round((height * maxSize) / width);
          width = maxSize;
        } else if (height >= width && height > maxSize) {
          width = Math.round((width * maxSize) / height);
          height = maxSize;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function ProductAvatar({ photo, tone, name, size = 54 }) {
  if (photo) {
    return (
      <img src={photo} alt={name} className="avatar-photo" style={{ width: size, height: size }} />
    );
  }
  return (
    <span className="chip-circle" style={{ background: tone, width: size, height: size }}>
      {initials(name)}
    </span>
  );
}

// --- Pix (BR Code) — implementação do padrão EMV/Bacen para o Pix "copia e cola" ---
function crc16ccitt(str) {
  let crc = 0xffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function emv(id, value) {
  return `${id}${String(value.length).padStart(2, "0")}${value}`;
}

function buildPixPayload({ key, receiverName, city, amount }) {
  if (!key) return null;
  const merchantAccount = emv("00", "BR.GOV.BCB.PIX") + emv("01", key);
  let payload =
    emv("00", "01") +
    emv("26", merchantAccount) +
    emv("52", "0000") +
    emv("53", "986") +
    (amount > 0 ? emv("54", amount.toFixed(2)) : "") +
    emv("58", "BR") +
    emv("59", (receiverName || "KENDELLICIAS").slice(0, 25).toUpperCase()) +
    emv("60", (city || "SAO PAULO").slice(0, 15).toUpperCase()) +
    emv("62", emv("05", "***")) +
    "6304";
  return payload + crc16ccitt(payload);
}

// ============================================================================
// Gerador de PDF real, em JavaScript puro (sem biblioteca — nenhuma está
// disponível para PDF neste ambiente). Constrói o arquivo .pdf byte a byte
// seguindo o formato documentado (objetos, xref, trailer), com texto em
// Helvetica (fonte padrão do PDF, não precisa embutir) e a logo como imagem
// JPEG embutida diretamente (DCTDecode).
// ============================================================================

function jpegDimensions(binaryStr) {
  let i = 2;
  while (i < binaryStr.length - 8) {
    if (binaryStr.charCodeAt(i) !== 0xff) {
      i++;
      continue;
    }
    const marker = binaryStr.charCodeAt(i + 1);
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      const height = (binaryStr.charCodeAt(i + 5) << 8) | binaryStr.charCodeAt(i + 6);
      const width = (binaryStr.charCodeAt(i + 7) << 8) | binaryStr.charCodeAt(i + 8);
      return { width, height };
    }
    const len = (binaryStr.charCodeAt(i + 2) << 8) | binaryStr.charCodeAt(i + 3);
    i += 2 + len;
  }
  return { width: 200, height: 200 };
}

function dataUriToBinary(dataUri) {
  return atob(dataUri.split(",")[1]);
}

function pdfEscapeText(str) {
  let out = "";
  for (const ch of String(str)) {
    const code = ch.codePointAt(0);
    if (code > 255) {
      out += "?";
      continue;
    }
    if (ch === "(" || ch === ")" || ch === "\\") out += "\\" + ch;
    else out += String.fromCharCode(code);
  }
  return out;
}

class PdfDoc {
  constructor() {
    this.pageWidth = 595;
    this.pageHeight = 842;
    this.pages = []; // content stream strings
    this.images = {}; // dataUri -> { id, width, height, binary }
    this.nextImageId = 500;
  }

  registerImage(dataUri) {
    if (!dataUri) return null;
    if (this.images[dataUri]) return this.images[dataUri];
    try {
      const binary = dataUriToBinary(dataUri);
      const { width, height } = jpegDimensions(binary);
      const info = { id: this.nextImageId++, width, height, binary };
      this.images[dataUri] = info;
      return info;
    } catch (err) {
      return null;
    }
  }

  addPage(ops) {
    this.pages.push(ops);
  }

  build() {
    let out = "%PDF-1.4\n";
    const offsets = {};
    const write = (id, body) => {
      offsets[id] = out.length;
      out += `${id} 0 obj\n${body}\nendobj\n`;
    };

    const catalogId = 1;
    const pagesId = 2;
    const fontId = 3;
    const fontBoldId = 4;
    const firstPageId = 10;
    const firstContentId = 100;
    const imageList = Object.values(this.images);

    const pageIds = this.pages.map((_, i) => firstPageId + i);
    const contentIds = this.pages.map((_, i) => firstContentId + i);
    const imageRefs = imageList.map((img) => `/Im${img.id} ${img.id} 0 R`).join(" ");
    const resources = `<< /Font << /F1 ${fontId} 0 R /F2 ${fontBoldId} 0 R >> /XObject << ${imageRefs} >> >>`;

    write(catalogId, `<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
    write(pagesId, `<< /Type /Pages /Kids [${pageIds.map((id) => id + " 0 R").join(" ")}] /Count ${pageIds.length} >>`);
    write(fontId, `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>`);
    write(fontBoldId, `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>`);

    imageList.forEach((img) => {
      const body =
        `<< /Type /XObject /Subtype /Image /Width ${img.width} /Height ${img.height} ` +
        `/ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${img.binary.length} >>\n` +
        `stream\n${img.binary}\nendstream`;
      write(img.id, body);
    });

    this.pages.forEach((ops, i) => {
      write(contentIds[i], `<< /Length ${ops.length} >>\nstream\n${ops}\nendstream`);
      write(
        pageIds[i],
        `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${this.pageWidth} ${this.pageHeight}] /Resources ${resources} /Contents ${contentIds[i]} 0 R >>`
      );
    });

    const allIds = Object.keys(offsets).map(Number).sort((a, b) => a - b);
    const maxId = allIds[allIds.length - 1];
    let xref = `xref\n0 ${maxId + 1}\n0000000000 65535 f \n`;
    for (let id = 1; id <= maxId; id++) {
      xref += offsets[id] !== undefined ? String(offsets[id]).padStart(10, "0") + " 00000 n \n" : "0000000000 00000 f \n";
    }
    const xrefOffset = out.length;
    out += xref;
    out += `trailer\n<< /Size ${maxId + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
    return out;
  }

  toBlob() {
    const binaryStr = this.build();
    const bytes = new Uint8Array(binaryStr.length);
    for (let i = 0; i < binaryStr.length; i++) bytes[i] = binaryStr.charCodeAt(i) & 0xff;
    return new Blob([bytes], { type: "application/pdf" });
  }
}

function wrapPdfText(str, maxChars) {
  const lines = [];
  let rest = str;
  while (rest.length > maxChars) {
    lines.push(rest.slice(0, maxChars));
    rest = rest.slice(maxChars);
  }
  if (rest) lines.push(rest);
  return lines;
}

function buildCobrancaPdf({ logoDataUri, titulo, clientName, periodo, items, totalComprado, totalPago, pendente, quitada, pixConfig, pixPayload }) {
  const doc = new PdfDoc();
  const logo = doc.registerImage(logoDataUri);
  const marginX = 50;
  const pageW = doc.pageWidth;

  function T(x, y, text, font = "F1", size = 10) {
    return `BT /${font} ${size} Tf 1 0 0 1 ${x.toFixed(1)} ${y.toFixed(1)} Tm (${pdfEscapeText(text)}) Tj ET\n`;
  }
  function line(x1, y1, x2, y2) {
    return `0.8 w 0.75 0.62 0.45 RG ${x1.toFixed(1)} ${y1.toFixed(1)} m ${x2.toFixed(1)} ${y2.toFixed(1)} l S\n`;
  }

  let ops = "";
  let y = 780;

  function newPage() {
    doc.addPage(ops);
    ops = "";
    y = 780;
  }

  if (logo) {
    const boxSize = 55;
    const scale = boxSize / Math.max(logo.width, logo.height);
    const w = logo.width * scale;
    const h = logo.height * scale;
    ops += `q ${w.toFixed(1)} 0 0 ${h.toFixed(1)} ${marginX} ${(y - h + 10).toFixed(1)} cm /Im${logo.id} Do Q\n`;
  }
  ops += T(marginX + 70, y, "Kendellícia's - Brigadeiros & Cia", "F2", 13);
  ops += T(marginX + 70, y - 16, titulo, "F1", 10.5);
  y -= 55;

  ops += T(marginX, y, `Cliente: ${clientName}`, "F2", 11);
  y -= 15;
  ops += T(marginX, y, `Período: ${periodo}`, "F1", 9);
  y -= 12;
  ops += T(marginX, y, `Emitido em: ${new Date().toLocaleString("pt-BR")}`, "F1", 9);
  y -= 16;
  ops += line(marginX, y, pageW - marginX, y);
  y -= 20;

  ops += T(marginX, y, "Data/Hora", "F2", 8.5);
  ops += T(marginX + 90, y, "Produto", "F2", 8.5);
  ops += T(marginX + 300, y, "Unit.", "F2", 8.5);
  ops += T(marginX + 360, y, "Subtotal", "F2", 8.5);
  ops += T(marginX + 430, y, "Situação", "F2", 8.5);
  y -= 14;
  ops += line(marginX, y, pageW - marginX, y);
  y -= 14;

  if (items.length === 0) {
    ops += T(marginX, y, "Nenhuma compra neste filtro.", "F1", 9.5);
    y -= 16;
  }

  items.forEach((s) => {
    if (y < 90) {
      newPage();
    }
    ops += T(marginX, y, `${s.date} ${s.time}`, "F1", 8.5);
    ops += T(marginX + 90, y, `${s.qty}x ${s.name}`.slice(0, 38), "F1", 8.5);
    ops += T(marginX + 300, y, currency(s.price), "F1", 8.5);
    ops += T(marginX + 360, y, currency(s.total), "F1", 8.5);
    ops += T(marginX + 430, y, s.paidNow ? "Pago na hora" : "Na conta", "F1", 8.5);
    y -= 15;
  });

  y -= 8;
  ops += line(marginX, y, pageW - marginX, y);
  y -= 20;

  ops += T(marginX + 300, y, "Total das compras:", "F2", 10);
  ops += T(marginX + 430, y, currency(totalComprado), "F1", 10);
  y -= 16;
  ops += T(marginX + 300, y, "Total pago:", "F2", 10);
  ops += T(marginX + 430, y, currency(totalPago), "F1", 10);
  y -= 16;

  if (quitada) {
    ops += T(marginX + 300, y, "Situação: CONTA QUITADA", "F2", 10.5);
    y -= 22;
  } else {
    ops += T(marginX + 300, y, "Valor em aberto:", "F2", 11);
    ops += T(marginX + 430, y, currency(pendente), "F2", 11);
    y -= 26;

    if (pixConfig?.key) {
      ops += line(marginX, y, pageW - marginX, y);
      y -= 18;
      ops += T(marginX, y, "Pagamento via Pix", "F2", 10.5);
      y -= 15;
      ops += T(marginX, y, `Chave: ${pixConfig.key}`, "F1", 9.5);
      y -= 13;
      if (pixConfig.receiverName) {
        ops += T(marginX, y, `Recebedor: ${pixConfig.receiverName}`, "F1", 9.5);
        y -= 13;
      }
      if (pixPayload) {
        ops += T(marginX, y, "Pix copia e cola:", "F1", 9);
        y -= 12;
        wrapPdfText(pixPayload, 95).forEach((chunk) => {
          if (y < 60) newPage();
          ops += T(marginX, y, chunk, "F1", 7.5);
          y -= 11;
        });
      }
    }
  }

  doc.addPage(ops);
  return doc.toBlob();
}

async function downloadOrShareBlob(blob, filename) {
  if (isNativePlatform()) {
    try {
      await saveAndShareNative(blob, filename);
    } catch (err) {
      console.error("Falha ao salvar/compartilhar arquivo no Android:", err);
      window.alert(`Não foi possível gerar "${filename}".\n\n${err?.message || err}`);
    }
    return;
  }

  const file = new File([blob], filename, { type: blob.type || "application/pdf" });
  if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: filename });
      return;
    } catch (err) {
      // usuária cancelou ou falhou — cai no download abaixo
    }
  }
  triggerDownload(blob, filename);
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

// ============================================================================
// Blindagem contra tela em branco: se uma tela travar durante a
// renderização (por exemplo, algo no WebView do Android que se comporta
// diferente do navegador), o React normalmente desmonta a árvore inteira e
// não sobra nada visível — é exatamente o sintoma de "não abre nada". Este
// componente evita isso: mostra um aviso com o motivo do erro e um botão
// para voltar, em vez de travar a tela em branco.
// ============================================================================
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error("Erro capturado pela ErrorBoundary:", error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div className="screen" style={{ padding: "20px" }}>
          <p className="section-label" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <AlertTriangle size={13} /> Essa tela travou
          </p>
          <p className="empty-hint" style={{ whiteSpace: "pre-line" }}>
            {this.state.error?.message || String(this.state.error)}
          </p>
          <button
            className="register-btn"
            style={{ marginTop: 16 }}
            onClick={() => {
              this.setState({ error: null });
              if (this.props.onReset) this.props.onReset();
            }}
          >
            <HomeIcon size={16} /> Voltar ao início
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function KendelliciasApp() {
  const [loaded, setLoaded] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [screen, setScreen] = useState("home");
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [clients, setClients] = useState([]);
  const [session, setSession] = useState(null); // { date, openedAt, items: [{productId,name,price,cost,tone,initial,sold}] }
  const [closedSessions, setClosedSessions] = useState([]); // histórico de fechamentos de dia
  const [sales, setSales] = useState([]); // {id,date,time,clientId,clientName,productId,name,price,qty,total,cost,paidNow}
  const [payments, setPayments] = useState([]); // {id,clientId,value,date,time,method,note}
  const [expenses, setExpenses] = useState([]); // {id,description,category,value,date,note}
  const [pixConfig, setPixConfig] = useState({ key: "", receiverName: "", city: "", document: "" });
  const [plannedProducts, setPlannedProducts] = useState([]); // Desejo Vender
  const [shoppingList, setShoppingList] = useState([]); // Compras
  const [notes, setNotes] = useState([]); // Anotações gerais
  const [toast, setToast] = useState(null);
  const [flash, setFlash] = useState(false);
  const [viewingClientId, setViewingClientId] = useState(null);
  const [lastReceipt, setLastReceipt] = useState(null);

  // Carrega os dados salvos de verdade (persistem entre sessões, fechar/abrir o app)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await AppStorage.get(STORAGE_KEY, false);
        if (!cancelled && res && res.value) {
          const data = JSON.parse(res.value);
          if (data.products) setProducts(data.products);
          if (data.clients) setClients(data.clients);
          if ("session" in data) setSession(data.session);
          if (data.closedSessions) setClosedSessions(data.closedSessions);
          if (data.sales) setSales(data.sales);
          if (data.payments) setPayments(data.payments);
          if (data.expenses) setExpenses(data.expenses);
          if (data.pixConfig) setPixConfig(data.pixConfig);
          if (data.plannedProducts) setPlannedProducts(data.plannedProducts);
          if (data.shoppingList) setShoppingList(data.shoppingList);
          if (data.notes) setNotes(data.notes);
        }
      } catch (err) {
        // Ainda não existe nada salvo — segue com os valores iniciais.
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Salva de verdade a cada mudança relevante, depois que o carregamento inicial terminou.
  useEffect(() => {
    if (!loaded) return;
    const data = {
      products, clients, session, closedSessions, sales, payments, expenses, pixConfig,
      plannedProducts, shoppingList, notes,
    };
    AppStorage
      .set(STORAGE_KEY, JSON.stringify(data), false)
      .then(() => setSaveError(false))
      .catch(() => setSaveError(true));
  }, [loaded, products, clients, session, closedSessions, sales, payments, expenses, pixConfig, plannedProducts, shoppingList, notes]);

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 2400);
  }

  function openStore(selections) {
    setSession({
      date: new Date().toLocaleDateString("pt-BR"),
      openedAt: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      items: selections.map((s) => ({ ...s, sold: 0 })),
    });
    showToast("Kendellícia's está aberta! ✨");
    setScreen("home");
  }

  function registerSaleCart({ clientId, clientName, cartItems, paidNow, method }) {
    for (const line of cartItems) {
      const item = session.items.find((i) => i.productId === line.productId);
      if (!item || item.initial - item.sold < line.qty) {
        showToast(`Estoque insuficiente para ${line.name}.`);
        return null;
      }
    }
    const groupId = Date.now();
    const time = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    const newSales = cartItems.map((line, idx) => ({
      id: groupId + idx,
      groupId,
      date: session.date,
      time,
      clientId,
      clientName,
      productId: line.productId,
      name: line.name,
      price: line.price,
      qty: line.qty,
      total: line.price * line.qty,
      cost: line.cost * line.qty,
      photo: line.photo || null,
      paidNow: !!paidNow,
      method: paidNow ? method || null : null,
      attachments: [],
    }));
    setSales((s) => [...newSales, ...s]);
    setSession((sess) => ({
      ...sess,
      items: sess.items.map((i) => {
        const line = cartItems.find((l) => l.productId === i.productId);
        return line ? { ...i, sold: i.sold + line.qty } : i;
      }),
    }));
    setFlash(true);
    setTimeout(() => setFlash(false), 900);
    return newSales;
  }

  function closeStore() {
    setSession(null);
    showToast("Kendellícia's fechada por hoje 🌙");
    setScreen("home");
  }

  function addClient(newClient) {
    setClients((cs) => [...cs, { id: Date.now(), tone: PALETTE[cs.length % PALETTE.length], active: true, ...newClient }]);
    showToast("Cliente cadastrado! 🎀");
  }

  function editClient(id, updates) {
    setClients((cs) => cs.map((c) => (c.id === id ? { ...c, ...updates } : c)));
    showToast("Cliente atualizado 🔄");
  }

  function toggleClientActive(id) {
    setClients((cs) => cs.map((c) => (c.id === id ? { ...c, active: !c.active } : c)));
  }

  function deleteClient(id) {
    const hasHistory = sales.some((s) => s.clientId === id) || payments.some((p) => p.clientId === id);
    if (hasHistory) {
      setClients((cs) => cs.map((c) => (c.id === id ? { ...c, active: false } : c)));
      showToast("Cliente tem histórico — foi arquivado, não excluído, para preservar vendas e pagamentos.");
      return false;
    }
    setClients((cs) => cs.filter((c) => c.id !== id));
    showToast("Cliente excluído.");
    return true;
  }

  function addProduct(newProduct) {
    setProducts((ps) => [...ps, { id: Date.now(), tone: PALETTE[ps.length % PALETTE.length], active: true, ...newProduct }]);
    showToast("Produto cadastrado! 🍫");
  }

  function editProduct(id, updates) {
    setProducts((ps) => ps.map((p) => (p.id === id ? { ...p, ...updates } : p)));
    showToast("Produto atualizado 🔄");
  }

  function toggleProductActive(id) {
    setProducts((ps) => ps.map((p) => (p.id === id ? { ...p, active: !p.active } : p)));
  }

  function deleteProduct(id) {
    const hasHistory = sales.some((s) => s.productId === id);
    if (hasHistory) {
      setProducts((ps) => ps.map((p) => (p.id === id ? { ...p, active: false } : p)));
      showToast("Produto tem vendas no histórico — foi arquivado, não excluído, para preservar relatórios.");
      return false;
    }
    setProducts((ps) => ps.filter((p) => p.id !== id));
    showToast("Produto excluído.");
    return true;
  }

  function addPayment(clientId, payment) {
    setPayments((ps) => [
      ...ps,
      { id: Date.now(), clientId, date: new Date().toLocaleDateString("pt-BR"), time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }), ...payment },
    ]);
    showToast("Pagamento registrado! 💚");
  }

  function editSale(id, newQty) {
    const sale = sales.find((s) => s.id === id);
    if (!sale || newQty <= 0) return;
    const unitPrice = sale.price;
    const unitCost = sale.cost / sale.qty;
    const delta = newQty - sale.qty;

    if (session && sale.date === session.date) {
      const item = session.items.find((i) => i.productId === sale.productId);
      if (item) {
        const available = item.initial - item.sold + sale.qty;
        if (newQty > available) {
          showToast("Não é possível: passaria do estoque disponível.");
          return;
        }
        setSession((sess) => ({
          ...sess,
          items: sess.items.map((i) =>
            i.productId === sale.productId ? { ...i, sold: i.sold + delta } : i
          ),
        }));
      }
    }

    setSales((ss) =>
      ss.map((s) =>
        s.id === id ? { ...s, qty: newQty, total: unitPrice * newQty, cost: unitCost * newQty } : s
      )
    );
    showToast("Venda atualizada e recalculada 🔄");
  }

  function deleteSale(id) {
    const sale = sales.find((s) => s.id === id);
    if (!sale) return;
    if (session && sale.date === session.date) {
      setSession((sess) => ({
        ...sess,
        items: sess.items.map((i) =>
          i.productId === sale.productId ? { ...i, sold: Math.max(0, i.sold - sale.qty) } : i
        ),
      }));
    }
    setSales((ss) => ss.filter((s) => s.id !== id));
    showToast("Venda excluída. Estoque e conta atualizados.");
  }

  function editPayment(id, newValue, newMethod) {
    if (newValue <= 0) return;
    setPayments((ps) =>
      ps.map((p) => (p.id === id ? { ...p, value: newValue, method: newMethod } : p))
    );
    showToast("Pagamento atualizado 🔄");
  }

  function deletePayment(id) {
    setPayments((ps) => ps.filter((p) => p.id !== id));
    showToast("Pagamento excluído. Saldo do cliente recalculado.");
  }

  function addExpense(expense) {
    setExpenses((es) => [
      { id: Date.now(), date: new Date().toLocaleDateString("pt-BR"), ...expense },
      ...es,
    ]);
    showToast("Despesa cadastrada 🧾");
  }

  function editExpense(id, updates) {
    setExpenses((es) => es.map((e) => (e.id === id ? { ...e, ...updates } : e)));
    showToast("Despesa atualizada 🔄");
  }

  function deleteExpense(id) {
    setExpenses((es) => es.filter((e) => e.id !== id));
    showToast("Despesa excluída. Financeiro recalculado.");
  }

  function addAttachment(saleId, dataUri) {
    setSales((ss) => ss.map((s) => (s.id === saleId ? { ...s, attachments: [...(s.attachments || []), dataUri] } : s)));
    showToast("Anexo adicionado 📎");
  }

  function deleteAttachment(saleId, index) {
    setSales((ss) =>
      ss.map((s) =>
        s.id === saleId ? { ...s, attachments: s.attachments.filter((_, i) => i !== index) } : s
      )
    );
  }

  function savePixConfig(config) {
    setPixConfig(config);
    showToast("Dados do Pix salvos 💾");
  }

  function clearPixConfig() {
    setPixConfig({ key: "", receiverName: "", city: "", document: "" });
    showToast("Dados do Pix removidos.");
  }

  // --- Anotações: Desejo Vender ---
  function addPlannedProduct(p) {
    setPlannedProducts((ps) => [
      { id: Date.now(), status: "planejando", createdDate: new Date().toLocaleDateString("pt-BR"), ...p },
      ...ps,
    ]);
    showToast("Produto planejado salvo 💡");
  }
  function editPlannedProduct(id, updates) {
    setPlannedProducts((ps) => ps.map((p) => (p.id === id ? { ...p, ...updates } : p)));
    showToast("Planejamento atualizado 🔄");
  }
  function deletePlannedProduct(id) {
    setPlannedProducts((ps) => ps.filter((p) => p.id !== id));
    showToast("Planejamento excluído.");
  }
  function setPlannedStatus(id, status) {
    setPlannedProducts((ps) => ps.map((p) => (p.id === id ? { ...p, status } : p)));
  }
  function transformPlannedIntoProduct(planned) {
    addProduct({
      name: planned.name,
      desc: planned.desc,
      category: planned.category,
      cost: planned.cost,
      costBreakdown: planned.costBreakdown,
      price: planned.price,
      photo: null,
    });
    setPlannedStatus(planned.id, "produto");
    showToast(`${planned.name} agora é um produto da loja! 🎉`);
  }

  // --- Anotações: Compras ---
  function addShoppingItem(item) {
    const nome = item.item.trim().toLowerCase();
    const jaExiste = shoppingList.some((i) => i.status === "pendente" && i.item.trim().toLowerCase() === nome);
    setShoppingList((sl) => [
      { id: Date.now(), status: "pendente", createdDate: new Date().toLocaleDateString("pt-BR"), ...item },
      ...sl,
    ]);
    showToast(jaExiste ? `Já havia "${item.item}" pendente — adicionei outra entrada.` : "Item adicionado à lista 🛒");
  }
  function addShoppingItemsBatch(items) {
    if (!items || items.length === 0) return;
    const nomesPendentes = new Set(shoppingList.filter((i) => i.status === "pendente").map((i) => i.item.trim().toLowerCase()));
    let repetidos = 0;
    const hoje = new Date().toLocaleDateString("pt-BR");
    const novos = items.map((it, idx) => {
      if (nomesPendentes.has(it.name.trim().toLowerCase())) repetidos++;
      return {
        id: Date.now() + idx,
        status: "pendente",
        createdDate: hoje,
        item: it.name.trim(),
        qty: it.qty || "",
        unit: it.unit || "",
        neededDate: "",
        note: "ingrediente de produto planejado",
      };
    });
    setShoppingList((sl) => [...novos, ...sl]);
    showToast(
      repetidos > 0
        ? `${items.length} itens adicionados (${repetidos} já estavam pendentes — reveja duplicados na lista).`
        : `${items.length} itens adicionados à lista de compras 🛒`
    );
  }
  function editShoppingItem(id, updates) {
    setShoppingList((sl) => sl.map((i) => (i.id === id ? { ...i, ...updates } : i)));
  }
  function toggleShoppingStatus(id) {
    setShoppingList((sl) =>
      sl.map((i) => (i.id === id ? { ...i, status: i.status === "pendente" ? "comprado" : "pendente" } : i))
    );
  }
  function deleteShoppingItem(id) {
    setShoppingList((sl) => sl.filter((i) => i.id !== id));
    showToast("Item removido da lista.");
  }

  // --- Anotações: notas gerais ---
  function addNote(note) {
    setNotes((ns) => [{ id: Date.now(), date: new Date().toLocaleDateString("pt-BR"), ...note }, ...ns]);
    showToast("Anotação salva 📝");
  }
  function editNote(id, updates) {
    setNotes((ns) => ns.map((n) => (n.id === id ? { ...n, ...updates } : n)));
  }
  function deleteNote(id) {
    setNotes((ns) => ns.filter((n) => n.id !== id));
    showToast("Anotação excluída.");
  }

  function exportBackup() {
    const data = {
      version: 1,
      exportedAt: new Date().toISOString(),
      products, clients, session, closedSessions, sales, payments, expenses, pixConfig,
      plannedProducts, shoppingList, notes,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    downloadOrShareBlob(blob, `backup-kendellicias-${new Date().toLocaleDateString("pt-BR").replace(/\//g, "-")}.json`);
  }

  function restoreBackup(data) {
    if (!data || typeof data !== "object" || !Array.isArray(data.products) || !Array.isArray(data.sales)) {
      showToast("Arquivo de backup inválido — não parece ser um backup do Kendellícia's.");
      return false;
    }
    setProducts(data.products || []);
    setClients(data.clients || []);
    setSession(data.session ?? null);
    setClosedSessions(data.closedSessions || []);
    setSales(data.sales || []);
    setPayments(data.payments || []);
    setExpenses(data.expenses || []);
    setPixConfig(data.pixConfig || { key: "", receiverName: "", city: "", document: "" });
    setPlannedProducts(data.plannedProducts || []);
    setShoppingList(data.shoppingList || []);
    setNotes(data.notes || []);
    showToast("Backup restaurado com sucesso! 🎉");
    return true;
  }

  function goTo(name) {
    setScreen(name);
  }

  const todaySoldCount = session ? session.items.reduce((sum, i) => sum + i.sold, 0) : 0;
  const viewingClient = clients.find((c) => c.id === viewingClientId) || null;

  if (!loaded) {
    return (
      <div style={styles.page}>
        <style>{css}</style>
        <div className="phone">
          <div className="loading-screen">
            <img src={LOGO} alt="Kendellícia's" className="hero-logo" />
            <p className="loading-text">Carregando seus dados salvos…</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <style>{css}</style>
      <div className="phone">
        {saveError && (
          <div className="save-warning">
            <AlertTriangle size={13} /> Não foi possível salvar agora. Verifique a conexão.
          </div>
        )}
        <ErrorBoundary onReset={() => goTo("home")}>
        {screen === "home" && (
          <Home
            session={session}
            salesCount={todaySoldCount}
            onOpenStore={() => goTo(session ? "vendas" : "abrir")}
            onNeedsProducts={() => goTo("produtos")}
            onCloseDay={() => goTo("fechar")}
          />
        )}
        {screen === "abrir" && (
          <AbrirLoja products={products} onBack={() => goTo("home")} onConfirm={openStore} onGoProdutos={() => goTo("produtos")} />
        )}
        {screen === "vendas" && (
          <Vendas
            session={session}
            clients={clients}
            sales={sales}
            flash={flash}
            onBack={() => goTo("home")}
            onRegisterCart={registerSaleCart}
            onEditSale={editSale}
            onDeleteSale={deleteSale}
            onAddAttachment={addAttachment}
            onDeleteAttachment={deleteAttachment}
            onGoAbrir={() => goTo("abrir")}
            onGoClientes={() => goTo("clientes")}
            onSaleComplete={(receipt) => {
              setLastReceipt(receipt);
              goTo("comprovante");
            }}
          />
        )}
        {screen === "comprovante" && lastReceipt && (
          <Comprovante receipt={lastReceipt} pixConfig={pixConfig} onBack={() => goTo("home")} />
        )}
        {screen === "fechar" && (
          <FecharDia session={session} sales={sales} expenses={expenses} onBack={() => goTo("home")} onClose={closeStore} />
        )}
        {screen === "mensal" && (
          <RelatorioMensal
            sales={sales}
            expenses={expenses}
            clients={clients}
            payments={payments}
            onBack={() => goTo("home")}
            onGoDespesas={() => goTo("despesas")}
            onGoContasAbertas={() => goTo("contas-abertas")}
            onGoHistorico={() => goTo("historico")}
            onGoConfig={() => goTo("config")}
          />
        )}
        {screen === "config" && (
          <Configuracoes onBack={() => goTo("mensal")} onGoPix={() => goTo("pix")} onExportBackup={exportBackup} onRestoreBackup={restoreBackup} />
        )}
        {screen === "historico" && (
          <Historico sales={sales} payments={payments} onBack={() => goTo("mensal")} />
        )}
        {screen === "pix" && (
          <PixConfigScreen pixConfig={pixConfig} onBack={() => goTo("mensal")} onSave={savePixConfig} onClear={clearPixConfig} />
        )}
        {screen === "contas-abertas" && (
          <ContasAbertas
            clients={clients}
            sales={sales}
            payments={payments}
            onBack={() => goTo("mensal")}
            onOpenClient={(id) => {
              setViewingClientId(id);
              goTo("clientes");
            }}
          />
        )}
        {screen === "despesas" && (
          <Despesas
            expenses={expenses}
            onBack={() => goTo("mensal")}
            onAddExpense={addExpense}
            onEditExpense={editExpense}
            onDeleteExpense={deleteExpense}
          />
        )}
        {screen === "clientes" && !viewingClient && (
          <Clientes
            clients={clients}
            sales={sales}
            payments={payments}
            onBack={() => goTo("home")}
            onAddClient={addClient}
            onEditClient={editClient}
            onToggleActive={toggleClientActive}
            onDeleteClient={deleteClient}
            onOpenProfile={setViewingClientId}
          />
        )}
        {screen === "clientes" && viewingClient && (
          <ClientProfile
            client={viewingClient}
            sales={sales}
            payments={payments}
            pixConfig={pixConfig}
            onBack={() => setViewingClientId(null)}
            onAddPayment={(p) => addPayment(viewingClient.id, p)}
            onEditSale={editSale}
            onDeleteSale={deleteSale}
            onEditPayment={editPayment}
            onDeletePayment={deletePayment}
            onAddAttachment={addAttachment}
            onDeleteAttachment={deleteAttachment}
          />
        )}
        {screen === "produtos" && (
          <Produtos
            products={products}
            sales={sales}
            onBack={() => goTo("home")}
            onAddProduct={addProduct}
            onEditProduct={editProduct}
            onToggleActive={toggleProductActive}
            onDeleteProduct={deleteProduct}
          />
        )}
        {screen === "anotacoes" && (
          <Anotacoes
            plannedProducts={plannedProducts}
            shoppingList={shoppingList}
            notes={notes}
            onBack={() => goTo("home")}
            onAddPlanned={addPlannedProduct}
            onEditPlanned={editPlannedProduct}
            onDeletePlanned={deletePlannedProduct}
            onSetPlannedStatus={setPlannedStatus}
            onTransformPlanned={transformPlannedIntoProduct}
            onAddShoppingItem={addShoppingItem}
            onAddShoppingItemsBatch={addShoppingItemsBatch}
            onEditShoppingItem={editShoppingItem}
            onToggleShoppingStatus={toggleShoppingStatus}
            onDeleteShoppingItem={deleteShoppingItem}
            onAddNote={addNote}
            onEditNote={editNote}
            onDeleteNote={deleteNote}
          />
        )}
        </ErrorBoundary>
        <BottomNav
          screen={screen}
          onHome={() => goTo("home")}
          onVendas={() => goTo(session ? "vendas" : "abrir")}
          onFinanceiro={() => goTo("mensal")}
          onClientes={() => {
            setViewingClientId(null);
            goTo("clientes");
          }}
          onAnotacoes={() => goTo("anotacoes")}
        />
        {toast && <div className="toast">{toast}</div>}
      </div>
    </div>
  );
}

function TopLogo() {
  return <img src={LOGO} alt="Kendellícia's" className="top-logo" />;
}

function TopBar({ title, onBack }) {
  return (
    <div className="topbar">
      <button className="icon-btn" onClick={onBack} aria-label="Voltar">
        <ChevronLeft size={22} />
      </button>
      <h2 className="topbar-title">{title}</h2>
      <TopLogo />
    </div>
  );
}

function Home({ session, salesCount, onOpenStore, onNeedsProducts, onCloseDay }) {
  return (
    <div className="screen">
      <div className="hero">
        <div className="hero-arc" />
        <div className="hero-content">
          <img src={LOGO} alt="Kendellícia's - Brigadeiros & Cia" className="hero-logo" />
          <h1 className="hero-title">Olá, Kendellícia!</h1>
          <p className="hero-sub">{session ? "A loja está aberta hoje" : "Vamos começar o dia?"}</p>
          <div className="stat-blob">
            <span className="stat-number">{salesCount}</span>
            <span className="stat-label">Vendas hoje: {salesCount}</span>
          </div>
        </div>
      </div>

      <div className="actions">
        {!session ? (
          <ActionButton
            icon={<ChefHat size={22} />}
            label="Abrir Kendellícia's"
            hint="Escolha o que vai vender e quanto produziu hoje"
            primary
            onClick={onOpenStore}
          />
        ) : (
          <>
            <ActionButton
              icon={<Cookie size={22} />}
              label="Registrar Vendas"
              hint="Atualize o estoque do dia a cada doce vendido"
              primary
              onClick={onOpenStore}
            />
            <ActionButton
              icon={<Banknote size={22} />}
              label="Fechar Kendellícia's"
              hint="Confira o estoque e feche o resumo do dia"
              onClick={onCloseDay}
            />
          </>
        )}
        <ActionButton
          icon={<Package size={22} />}
          label="Cadastrar Produto"
          hint="Produtos ficam no catálogo, independente do estoque do dia"
          onClick={onNeedsProducts}
        />
      </div>
    </div>
  );
}

function ActionButton({ icon, label, hint, onClick, primary }) {
  return (
    <button className={"action" + (primary ? " action-primary" : "")} onClick={onClick}>
      <span className="action-icon">{icon}</span>
      <span className="action-text">
        <span className="action-label">{label}</span>
        <span className="action-hint">{hint}</span>
      </span>
    </button>
  );
}

function AbrirLoja({ products, onBack, onConfirm, onGoProdutos }) {
  const [selected, setSelected] = useState({}); // productId -> qty string
  const activeProducts = products.filter((p) => p.active !== false);

  function toggle(p) {
    setSelected((s) => {
      const copy = { ...s };
      if (copy[p.id] !== undefined) delete copy[p.id];
      else copy[p.id] = "10";
      return copy;
    });
  }

  function setQty(id, v) {
    setSelected((s) => ({ ...s, [id]: v }));
  }

  function confirm() {
    const entries = Object.entries(selected)
      .map(([id, qty]) => {
        const p = products.find((pp) => pp.id === Number(id));
        const n = parseInt(qty, 10);
        if (!p || !n || n <= 0) return null;
        return { productId: p.id, name: p.name, price: p.price, cost: p.cost, tone: p.tone, photo: p.photo || null, initial: n };
      })
      .filter(Boolean);
    if (entries.length === 0) return;
    onConfirm(entries);
  }

  if (activeProducts.length === 0) {
    return (
      <div className="screen">
        <TopBar title="Abrir Kendellícia's" onBack={onBack} />
        <p className="empty-hint" style={{ margin: "20px 20px 0" }}>
          Cadastre (ou reative) pelo menos um produto no catálogo antes de abrir a loja.
        </p>
        <button className="new-btn" onClick={onGoProdutos}>
          <Package size={16} /> Cadastrar produto
        </button>
      </div>
    );
  }

  return (
    <div className="screen">
      <TopBar title="Abrir Kendellícia's" onBack={onBack} />
      <p className="empty-hint" style={{ margin: "12px 20px 0" }}>
        O que vamos vender hoje? Toque nos doces e informe quantas unidades foram produzidas.
      </p>
      <div className="open-list">
        {activeProducts.map((p) => {
          const isOn = selected[p.id] !== undefined;
          return (
            <div className={"open-row" + (isOn ? " open-row-active" : "")} key={p.id}>
              <button className="open-toggle" onClick={() => toggle(p)}>
                {isOn ? (
                  <span className="chip-circle" style={{ background: p.tone }}>
                    <Check size={18} />
                  </span>
                ) : (
                  <ProductAvatar photo={p.photo} tone={p.tone} name={p.name} />
                )}
                <span className="open-name">{p.name}</span>
              </button>
              {isOn && (
                <input
                  className="open-qty"
                  value={selected[p.id]}
                  onChange={(e) => setQty(p.id, e.target.value)}
                  inputMode="numeric"
                  placeholder="Qtd"
                />
              )}
            </div>
          );
        })}
      </div>
      <div style={{ padding: "6px 20px 0" }}>
        <button className="register-btn" onClick={confirm} disabled={Object.keys(selected).length === 0}>
          <Sparkles size={16} />
          Abrir Kendellícia's
        </button>
      </div>
    </div>
  );
}

function Vendas({ session, clients, sales, flash, onBack, onRegisterCart, onEditSale, onDeleteSale, onAddAttachment, onDeleteAttachment, onGoAbrir, onGoClientes, onSaleComplete }) {
  const [clientId, setClientId] = useState(null);
  const [clientQuery, setClientQuery] = useState("");
  const [productId, setProductId] = useState(null);
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState([]); // { productId, name, price, cost, tone, photo, qty }
  const [payMethod, setPayMethod] = useState("Pix");

  if (!session) {
    return (
      <div className="screen">
        <TopBar title="Registrar venda" onBack={onBack} />
        <p className="empty-hint" style={{ margin: "20px 20px 0" }}>
          A Kendellícia's ainda não foi aberta hoje. Abra a loja e informe o que vai vender antes
          de registrar vendas.
        </p>
        <button className="new-btn" onClick={onGoAbrir}>
          <ChefHat size={16} /> Abrir Kendellícia's
        </button>
      </div>
    );
  }

  const activeClients = clients.filter((c) => c.active !== false).slice().sort((a, b) => a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" }));
  const selectedClient = activeClients.find((c) => c.id === clientId) || null;
  const filteredClients = clientQuery.trim()
    ? activeClients.filter((c) => c.name.toLowerCase().includes(clientQuery.trim().toLowerCase()))
    : activeClients;

  function cartQtyFor(pid) {
    return cart.find((l) => l.productId === pid)?.qty || 0;
  }

  const item = session.items.find((i) => i.productId === productId) || null;
  const available = item ? item.initial - item.sold - cartQtyFor(item.productId) : 0;
  const subtotal = item ? item.price * qty : 0;
  const lowStockItems = session.items.filter((i) => i.initial - i.sold > 0 && i.initial - i.sold < 4);
  const soldOut = session.items.filter((i) => i.initial - i.sold === 0);
  const cartTotal = cart.reduce((sum, l) => sum + l.price * l.qty, 0);

  function pick(pid) {
    setProductId(pid);
    setQty(1);
  }

  function addToCart() {
    if (!item || qty <= 0 || qty > available) return;
    setCart((c) => {
      const idx = c.findIndex((l) => l.productId === item.productId);
      if (idx >= 0) {
        const copy = [...c];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [...c, { productId: item.productId, name: item.name, price: item.price, cost: item.cost, tone: item.tone, photo: item.photo, qty }];
    });
    setProductId(null);
    setQty(1);
  }

  function removeFromCart(pid) {
    setCart((c) => c.filter((l) => l.productId !== pid));
  }

  function changeCartQty(pid, delta) {
    setCart((c) =>
      c
        .map((l) => (l.productId === pid ? { ...l, qty: Math.max(1, l.qty + delta) } : l))
        .filter((l) => l.qty > 0)
    );
  }

  function finalize(paidNow) {
    if (!clientId || cart.length === 0) return;
    const c = clients.find((cc) => cc.id === clientId);
    const newSales = onRegisterCart({ clientId, clientName: c.name, cartItems: cart, paidNow, method: paidNow ? payMethod : null });
    if (!newSales) return;
    onSaleComplete({ sales: newSales, total: cartTotal, paidNow, method: payMethod, clientName: c.name, date: session.date });
    setCart([]);
    setClientId(null);
    setClientQuery("");
  }

  const todaySales = sales.filter((s) => s.date === session.date);

  return (
    <div className="screen">
      <TopBar title="Registrar venda" onBack={onBack} />

      {activeClients.length === 0 ? (
        <p className="empty-hint" style={{ margin: "12px 20px 0" }}>
          Cadastre um cliente antes de registrar a venda.{" "}
          <button className="inline-link" onClick={onGoClientes}>
            Cadastrar cliente
          </button>
        </p>
      ) : (
        <>
          <p className="section-label">Cliente</p>
          {selectedClient ? (
            <div className="client-selected-pill">
              <span className="chip-circle" style={{ background: selectedClient.tone, width: 30, height: 30, fontSize: 11 }}>
                {initials(selectedClient.name)}
              </span>
              <span className="client-selected-name">{selectedClient.name}</span>
              <button
                className="row-action-btn"
                onClick={() => {
                  setClientId(null);
                  setClientQuery("");
                }}
                aria-label="Trocar cliente"
              >
                <X size={13} />
              </button>
            </div>
          ) : (
            <div style={{ padding: "0 20px" }}>
              <input
                className="form-input"
                placeholder="🔎 Buscar cliente pelo nome…"
                value={clientQuery}
                onChange={(e) => setClientQuery(e.target.value)}
              />
              {clientQuery.trim() && (
                <div className="client-search-list">
                  {filteredClients.length === 0 ? (
                    <p className="empty-hint" style={{ margin: "8px 4px 0" }}>Nenhum cliente encontrado.</p>
                  ) : (
                    filteredClients.slice(0, 8).map((c) => (
                      <button
                        key={c.id}
                        className="client-search-row"
                        onClick={() => {
                          setClientId(c.id);
                          setClientQuery("");
                        }}
                      >
                        <span className="chip-circle" style={{ background: c.tone, width: 30, height: 30, fontSize: 11 }}>
                          {initials(c.name)}
                        </span>
                        <span>{c.name}</span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          )}
        </>
      )}

      {(lowStockItems.length > 0 || soldOut.length > 0) && (
        <div className="warning-pill">
          <AlertTriangle size={16} />
          <span>
            {soldOut.length > 0 && `Esgotado: ${soldOut.map((i) => i.name).join(", ")}. `}
            {lowStockItems.length > 0 && `Estoque baixo: ${lowStockItems.map((i) => i.name).join(", ")}`}
          </span>
        </div>
      )}

      <p className="section-label">Adicionar produto</p>
      <div className="chip-row">
        {session.items.map((i) => {
          const disp = i.initial - i.sold - cartQtyFor(i.productId);
          return (
            <button
              key={i.productId}
              className={"chip" + (productId === i.productId ? " chip-active" : "")}
              onClick={() => disp > 0 && pick(i.productId)}
              disabled={disp === 0}
              style={disp === 0 ? { opacity: 0.4 } : undefined}
            >
              <ProductAvatar photo={i.photo} tone={i.tone} name={i.name} />
              <span className="chip-name">{i.name}</span>
              <span className="chip-price">{disp} disp.</span>
            </button>
          );
        })}
      </div>

      {item && (
        <div className="compose">
          <ProductAvatar photo={item.photo} tone={item.tone} name={item.name} size={52} />
          <div className="compose-info">
            <p className="compose-name">{item.name}</p>
            <p className="compose-stock">{available} un. disponíveis (após o carrinho)</p>
          </div>
          <div className="stepper">
            <button className="step-btn" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Diminuir">
              <Minus size={16} />
            </button>
            <span className="step-value">{qty}</span>
            <button className="step-btn" onClick={() => setQty(Math.min(available, qty + 1))} aria-label="Aumentar">
              <Plus size={16} />
            </button>
          </div>
          <button className="register-btn" onClick={addToCart} disabled={qty > available}>
            <Plus size={16} /> Adicionar ao carrinho · {currency(subtotal)}
          </button>
        </div>
      )}

      <p className="section-label">Carrinho da venda</p>
      {cart.length === 0 ? (
        <p className="empty-hint">Nenhum produto no carrinho ainda. Escolha acima.</p>
      ) : (
        <div className="cart-list">
          {cart.map((l) => (
            <div className="cart-row" key={l.productId}>
              <ProductAvatar photo={l.photo} tone={l.tone} name={l.name} size={38} />
              <span className="cart-name">{l.name}</span>
              <div className="stepper" style={{ padding: 0 }}>
                <button className="step-btn" style={{ width: 26, height: 26 }} onClick={() => changeCartQty(l.productId, -1)}>
                  <Minus size={12} />
                </button>
                <span className="step-value" style={{ fontSize: 14 }}>{l.qty}</span>
                <button className="step-btn" style={{ width: 26, height: 26 }} onClick={() => changeCartQty(l.productId, 1)}>
                  <Plus size={12} />
                </button>
              </div>
              <span className="cart-subtotal">{currency(l.price * l.qty)}</span>
              <button className="row-action-btn" onClick={() => removeFromCart(l.productId)} aria-label="Remover">
                <X size={13} />
              </button>
            </div>
          ))}
          <div className="cart-total-row">
            <span>Total da venda</span>
            <span>{currency(cartTotal)}</span>
          </div>
          <p className="empty-hint" style={{ margin: "2px 4px 8px", textAlign: "center" }}>
            Como o cliente vai pagar?
          </p>
          <div style={{ padding: "0 20px 8px", display: "flex", gap: 8, justifyContent: "center" }}>
            {["Pix", "Dinheiro", "Cartão"].map((m) => (
              <button
                key={m}
                className={"filter-chip" + (payMethod === m ? " filter-chip-active" : "")}
                onClick={() => setPayMethod(m)}
                type="button"
              >
                {m}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, padding: "0 20px" }}>
            <button
              className={"register-btn" + (flash ? " register-flash" : "")}
              onClick={() => finalize(true)}
              disabled={!clientId}
              style={{ background: "linear-gradient(135deg, #7C9473, #5E7A56)" }}
            >
              💵 Pagou agora
            </button>
            <button
              className={"register-btn" + (flash ? " register-flash" : "")}
              onClick={() => finalize(false)}
              disabled={!clientId}
            >
              📒 Na conta
            </button>
          </div>
        </div>
      )}

      <h3 className="timeline-title">Desempenho do dia</h3>
      <div className="progress-list">
        {session.items.map((i) => {
          const pct = i.initial > 0 ? Math.round((i.sold / i.initial) * 100) : 0;
          return (
            <div className="progress-row" key={i.productId}>
              <div className="progress-top">
                <span className="progress-name">{i.name}</span>
                <span className="progress-count">{i.sold} de {i.initial} vendidos — {pct}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${Math.min(100, pct)}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="timeline-title">Vendas de hoje</h3>
      {todaySales.length === 0 ? (
        <p className="empty-hint">Nenhuma venda registrada ainda hoje.</p>
      ) : (
        <SaleTimeline
          sales={todaySales}
          showClient
          onEdit={onEditSale}
          onDelete={onDeleteSale}
          onAddAttachment={onAddAttachment}
          onDeleteAttachment={onDeleteAttachment}
        />
      )}
    </div>
  );
}

function Comprovante({ receipt, pixConfig, onBack }) {
  const [shareTried, setShareTried] = useState(false);
  const [shareFeedback, setShareFeedback] = useState("");

  const pendente = receipt.paidNow ? 0 : receipt.total;
  const pago = receipt.paidNow ? receipt.total : 0;
  const quitada = receipt.paidNow;
  const pixPayload = !quitada ? buildPixPayload({ ...pixConfig, amount: pendente }) : null;

  // Protegido com try/catch de propósito: se a montagem do PDF falhar por
  // qualquer motivo, a tela do comprovante ainda mostra os dados da venda
  // (que não dependem do PDF) em vez de travar em branco.
  let blob = null;
  let pdfBuildError = null;
  try {
    blob = buildCobrancaPdf({
      logoDataUri: LOGO,
      titulo: "Comprovante de venda",
      clientName: receipt.clientName,
      periodo: `${receipt.date} · ${receipt.time}`,
      items: receipt.sales,
      totalComprado: receipt.total,
      totalPago: pago,
      pendente,
      quitada,
      pixConfig,
      pixPayload,
    });
  } catch (err) {
    console.error("Falha ao montar o PDF do comprovante:", err);
    pdfBuildError = err;
  }
  const fileName = `comprovante-${receipt.clientName.replace(/\s+/g, "-")}.pdf`;
  // Dentro do APK (Capacitor), URLs blob: não são visíveis fora da página —
  // nem outro app consegue abri-las, nem o <embed> abaixo sabe renderizar
  // PDF (o WebView do Android não tem visualizador de PDF embutido). Por
  // isso só criamos essa pré-visualização em ambiente web.
  const pdfUrl = blob && !isNativePlatform() ? URL.createObjectURL(blob) : null;

  useEffect(() => {
    if (!pdfUrl) return;
    return () => URL.revokeObjectURL(pdfUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function compartilhar() {
    setShareTried(true);
    setShareFeedback("");

    if (!blob) {
      const msg = `Não consegui gerar o PDF do comprovante.\n\n${pdfBuildError?.message || pdfBuildError || "Erro desconhecido"}`;
      setShareFeedback(msg);
      window.alert(msg);
      return;
    }

    if (isNativePlatform()) {
      try {
        await saveAndShareNative(blob, fileName);
      } catch (err) {
        console.error("Falha ao gerar/compartilhar comprovante:", err);
        const msg = `Não foi possível gerar o comprovante.\n\n${err?.message || err}`;
        setShareFeedback(msg);
        window.alert(msg);
      }
      return;
    }

    const file = new File([blob], fileName, { type: "application/pdf" });
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: fileName });
        setShareFeedback("");
        return;
      } catch (err) {
        // usuária cancelou ou falhou — cai no fallback abaixo
      }
    }
    const opened = window.open(pdfUrl, "_blank");
    setShareFeedback(
      opened
        ? "Abrimos o PDF em outra aba — use o menu de compartilhar do seu navegador ali."
        : "Não consegui compartilhar automaticamente. Use o botão 'Salvar PDF' abaixo ou o visualizador no final da tela."
    );
  }

  return (
    <div className="screen">
      <TopBar title="Comprovante" onBack={onBack} />
      {pdfBuildError && (
        <p className="empty-hint" style={{ margin: "0 20px 10px", color: "#A85D2A", whiteSpace: "pre-line" }}>
          ⚠️ Não consegui montar o arquivo PDF ({pdfBuildError.message || String(pdfBuildError)}). Os dados
          da venda abaixo estão corretos mesmo assim.
        </p>
      )}
      <div className="boleto-card">
        <img src={LOGO} alt="Kendellícia's" className="boleto-logo" />
        <p className="boleto-brand">Kendellícia's · Brigadeiros &amp; Cia</p>
        <h3 className="boleto-title">
          <Receipt size={16} /> Comprovante de venda
        </h3>
        <p className="boleto-client">Cliente: {receipt.clientName}</p>
        <p className="boleto-period">{receipt.date} · {receipt.time}</p>
        <div className="boleto-divider" />
        <div className="boleto-items">
          {receipt.sales.map((s) => (
            <div className="boleto-item" key={s.id}>
              <div className="boleto-item-top">
                <span className="boleto-item-name">{s.qty}x {s.name} ({currency(s.price)} cada)</span>
                <span className="boleto-item-value">{currency(s.total)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="boleto-divider" />
        <div className="boleto-total">
          <span>Total</span>
          <span>{currency(receipt.total)}</span>
        </div>
        <div className="boleto-total">
          <span>Pago</span>
          <span>{currency(pago)}</span>
        </div>
        <div className="boleto-total" style={{ color: quitada ? "#4C6B44" : "#A85D2A" }}>
          <span>Pendente</span>
          <span>{currency(pendente)}</span>
        </div>
        <p className={quitada ? "quitada-badge" : "warning-pill"} style={{ marginTop: 10, justifyContent: "center" }}>
          {quitada ? `✅ PAGO${receipt.method ? " · " + receipt.method : ""}` : "⚠️ EM ABERTO — na conta do cliente"}
        </p>
      </div>

      <div className="pdf-btn-row" style={{ marginTop: 16 }}>
        <button className="text-btn pdf-btn" onClick={compartilhar}>
          <Paperclip size={13} /> Compartilhar
        </button>
        {isNativePlatform() || !blob ? (
          <button className="text-btn pdf-btn" onClick={compartilhar}>
            <Download size={13} /> Salvar PDF
          </button>
        ) : (
          <a
            className="text-btn pdf-btn"
            href={pdfUrl}
            download={fileName}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Download size={13} /> Salvar PDF
          </a>
        )}
      </div>
      {shareTried && shareFeedback && (
        <p className="empty-hint" style={{ margin: "8px 20px 0", whiteSpace: "pre-line" }}>{shareFeedback}</p>
      )}

      <button className="register-btn" style={{ margin: "18px 20px 0", width: "calc(100% - 40px)" }} onClick={onBack}>
        <HomeIcon size={16} /> Voltar ao início
      </button>

      {!isNativePlatform() && blob && (
        <>
          <p className="section-label" style={{ margin: "20px 20px 6px" }}>
            Não conseguiu salvar pelos botões acima?
          </p>
          <div className="pdf-embed-wrap">
            <embed src={pdfUrl} type="application/pdf" className="pdf-embed" />
          </div>
          <p className="empty-hint" style={{ margin: "6px 20px 20px" }}>
            O PDF real está exibido acima — use o menu do seu navegador (ou toque e segure) para
            salvá-lo diretamente daqui.
          </p>
        </>
      )}
    </div>
  );
}

function FecharDia({ session, sales, expenses, onBack, onClose }) {
  const [step, setStep] = useState("conferir");
  const [informado, setInformado] = useState({});
  const [motivos, setMotivos] = useState({});

  if (!session) {
    return (
      <div className="screen">
        <TopBar title="Fechar Kendellícia's" onBack={onBack} />
        <p className="empty-hint" style={{ margin: "20px 20px 0" }}>
          A loja não está aberta hoje.
        </p>
      </div>
    );
  }

  const todaySales = sales.filter((s) => s.date === session.date);
  const totalVendido = todaySales.reduce((sum, s) => sum + s.total, 0);
  const totalCusto = todaySales.reduce((sum, s) => sum + s.cost, 0);
  const pagoNaHora = todaySales.reduce((sum, s) => sum + (s.paidNow ? s.total : 0), 0);
  const naConta = totalVendido - pagoNaHora;
  const despesasDoDia = expenses.filter((e) => e.date === session.date);
  const totalDespesasDia = despesasDoDia.reduce((sum, e) => sum + e.value, 0);
  const lucro = totalVendido - totalCusto - totalDespesasDia;

  const porProduto = {};
  todaySales.forEach((s) => {
    porProduto[s.name] = (porProduto[s.name] || 0) + s.qty;
  });
  const preferido = Object.entries(porProduto).sort((a, b) => b[1] - a[1])[0];

  function setInf(pid, v) {
    setInformado((s) => ({ ...s, [pid]: v }));
  }

  if (step === "conferir") {
    return (
      <div className="screen">
        <TopBar title="Conferência de estoque" onBack={onBack} />
        <p className="empty-hint" style={{ margin: "12px 20px 0" }}>
          Quanto realmente sobrou de cada produto?
        </p>
        <div className="open-list">
          {session.items.map((i) => {
            const esperado = i.initial - i.sold;
            const inf = informado[i.productId];
            const diff = inf !== undefined && inf !== "" ? parseInt(inf, 10) - esperado : null;
            return (
              <div className="conf-row" key={i.productId}>
                <div className="conf-top">
                  <span className="chip-circle" style={{ background: i.tone }}>
                    {initials(i.name)}
                  </span>
                  <span className="conf-name">{i.name}</span>
                  <span className="conf-expected">Esperado: {esperado}</span>
                </div>
                <input
                  className="open-qty"
                  placeholder={String(esperado)}
                  value={inf ?? ""}
                  onChange={(e) => setInf(i.productId, e.target.value)}
                  inputMode="numeric"
                />
                {diff !== null && diff !== 0 && !isNaN(diff) && (
                  <div className="diff-block">
                    <span className="diff-text">
                      ⚠️ Diferença: {diff > 0 ? "+" : ""}
                      {diff}
                    </span>
                    <select
                      className="form-input"
                      value={motivos[i.productId] || ""}
                      onChange={(e) => setMotivos((m) => ({ ...m, [i.productId]: e.target.value }))}
                    >
                      <option value="">Motivo da diferença…</option>
                      {MOTIVOS_DIFERENCA.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div style={{ padding: "10px 20px 0" }}>
          <button className="register-btn" onClick={() => setStep("resumo")}>
            <Sparkles size={16} />
            Ver resumo do fechamento
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <TopBar title="Fechamento do dia" onBack={() => setStep("conferir")} />
      <div className="report">
        <div className="report-grid">
          <div className="report-card">
            <span className="report-label">Total vendido</span>
            <span className="report-value">{currency(totalVendido)}</span>
          </div>
          <div className="report-card report-card-accent">
            <span className="report-label">{lucro >= 0 ? "Lucro estimado" : "Prejuízo"}</span>
            <span className="report-value">{currency(Math.abs(lucro))}</span>
          </div>
        </div>
        <div className="report-grid" style={{ marginTop: 10 }}>
          <div className="report-card">
            <span className="report-label">Pago na hora</span>
            <span className="report-value">{currency(pagoNaHora)}</span>
          </div>
          <div className="report-card">
            <span className="report-label">Ficou na conta</span>
            <span className="report-value">{currency(naConta)}</span>
          </div>
        </div>
        {totalDespesasDia > 0 && (
          <div className="report-grid" style={{ marginTop: 10 }}>
            <div className="report-card" style={{ gridColumn: "1 / -1" }}>
              <span className="report-label">Despesas lançadas hoje ({despesasDoDia.length})</span>
              <span className="report-value">{currency(totalDespesasDia)}</span>
            </div>
          </div>
        )}

        {preferido && (
          <div className="preference-pill">
            <Trophy size={16} />
            <span>
              Hoje seus clientes preferiram <strong>{preferido[0]}</strong>
            </span>
          </div>
        )}

        <h3 className="timeline-title">Vendas por produto</h3>
        <div className="stock-list">
          {session.items
            .filter((i) => i.sold > 0)
            .map((i) => (
              <div className="stock-row" key={i.productId}>
                <ProductAvatar photo={i.photo} tone={i.tone} name={i.name} size={44} />
                <span className="stock-name">
                  {i.name}
                  <span style={{ display: "block", fontSize: 10.5, opacity: 0.55 }}>Quantidade vendida: {i.sold}</span>
                </span>
                <span className="stock-qty">{currency(i.sold * i.price)}</span>
              </div>
            ))}
          {session.items.every((i) => i.sold === 0) && (
            <p className="empty-hint" style={{ margin: 0 }}>Nenhuma venda registrada hoje.</p>
          )}
        </div>

        <h3 className="timeline-title">Produtos restantes (informado)</h3>
        <div className="stock-list">
          {session.items.map((i) => {
            const esperado = i.initial - i.sold;
            const inf = informado[i.productId];
            const real = inf !== undefined && inf !== "" ? parseInt(inf, 10) : esperado;
            const diff = real - esperado;
            return (
              <div className="stock-row" key={i.productId}>
                <ProductAvatar photo={i.photo} tone={i.tone} name={i.name} size={38} />
                <span className="stock-name">
                  {i.name}
                  <span style={{ display: "block", fontSize: 10.5, opacity: 0.55 }}>
                    Inicial: {i.initial} · Vendido: {i.sold} · Esperado: {esperado}
                  </span>
                </span>
                <span className="stock-qty">
                  {real} un.
                  {diff !== 0 && (
                    <span style={{ display: "block", color: "#A0402A", fontWeight: 700 }}>
                      {diff > 0 ? "+" : ""}
                      {diff} ({motivos[i.productId] || "sem motivo"})
                    </span>
                  )}
                </span>
              </div>
            );
          })}
        </div>

        <button className="register-btn" style={{ marginTop: 16 }} onClick={onClose}>
          <Banknote size={16} />
          Fechar Kendellícia's
        </button>
      </div>
    </div>
  );
}

function parseDateBR(str) {
  const [d, m, y] = str.split("/").map(Number);
  return { day: d, month: m, year: y };
}

function monthKeyOf(dateStr) {
  const { month, year } = parseDateBR(dateStr);
  return `${year}-${String(month).padStart(2, "0")}`;
}

function monthLabelOf(key) {
  const nomes = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const [year, month] = key.split("-");
  return `${nomes[parseInt(month, 10) - 1]}/${year.slice(2)}`;
}

function monthFullLabel(key) {
  const nomes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
  ];
  const [year, month] = key.split("-");
  return `${nomes[parseInt(month, 10) - 1]}/${year}`;
}

function lastNMonthKeys(n) {
  const now = new Date();
  const keys = [];
  for (let i = 0; i < n; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    keys.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`);
  }
  return keys;
}

function toTimestampBR(dateStr, timeStr) {
  const { day, month, year } = parseDateBR(dateStr);
  const [hh, mm] = (timeStr || "00:00").split(":").map(Number);
  return new Date(year, month - 1, day, hh || 0, mm || 0).getTime();
}

function groupSalesByOperation(sales) {
  const map = new Map();
  sales.forEach((s) => {
    const key = s.groupId || s.id;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  });
  return Array.from(map.values()).map((lines) => {
    const first = lines[0];
    const total = lines.reduce((sum, l) => sum + l.total, 0);
    const pagoNaHora = lines.reduce((sum, l) => sum + (l.paidNow ? l.total : 0), 0);
    return {
      key: first.groupId || first.id,
      date: first.date,
      time: first.time,
      clientId: first.clientId,
      clientName: first.clientName,
      lines,
      total,
      pagoNaHora,
    };
  });
}

// Monta o histórico "por venda" (agrupando itens de uma mesma operação) e distribui
// os pagamentos do cliente (que são registrados por cliente, não por venda) nas vendas
// mais antigas em aberto primeiro — assim dá pra mostrar pago/pendente por registro sem
// duplicar nem inventar dinheiro: a soma de tudo continua batendo com a conta do cliente.
function buildHistoricoRecords(sales, payments) {
  const groups = groupSalesByOperation(sales);
  const byClient = {};
  groups.forEach((g) => {
    (byClient[g.clientId] ||= []).push(g);
  });
  const poolByClient = {};
  payments.forEach((p) => {
    poolByClient[p.clientId] = (poolByClient[p.clientId] || 0) + p.value;
  });

  const records = [];
  Object.entries(byClient).forEach(([clientId, list]) => {
    const sorted = list.slice().sort((a, b) => toTimestampBR(a.date, a.time) - toTimestampBR(b.date, b.time));
    let pool = poolByClient[clientId] || 0;
    sorted.forEach((g) => {
      let pago = g.pagoNaHora;
      const abertoInicial = g.total - g.pagoNaHora;
      if (abertoInicial > 0.005 && pool > 0) {
        const usa = Math.min(pool, abertoInicial);
        pago += usa;
        pool -= usa;
      }
      const pendente = Math.max(0, g.total - pago);
      let status;
      if (pendente <= 0.005) status = g.pagoNaHora >= g.total - 0.005 ? "Pago" : "Quitado";
      else if (pago <= 0.005) status = "Em aberto";
      else status = "Pagamento parcial";
      records.push({ ...g, pago, pendente, status });
    });
  });
  return records.sort((a, b) => toTimestampBR(b.date, b.time) - toTimestampBR(a.date, a.time));
}

function RelatorioMensal({ sales, expenses, clients, payments, onBack, onGoDespesas, onGoContasAbertas, onGoHistorico, onGoConfig }) {
  const now = new Date();
  const currentKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  const salesThisMonth = sales.filter((s) => monthKeyOf(s.date) === currentKey);
  const expensesThisMonth = expenses.filter((e) => monthKeyOf(e.date) === currentKey);
  const paymentsThisMonth = payments.filter((p) => monthKeyOf(p.date) === currentKey);

  const faturamento = salesThisMonth.reduce((sum, s) => sum + s.total, 0);
  const custoVendido = salesThisMonth.reduce((sum, s) => sum + s.cost, 0);
  const totalRecebidoMes =
    salesThisMonth.reduce((sum, s) => sum + (s.paidNow ? s.total : 0), 0) +
    paymentsThisMonth.reduce((sum, p) => sum + p.value, 0);
  const totalDespesasMes = expensesThisMonth.reduce((sum, e) => sum + e.value, 0);
  const lucroLiquido = faturamento - custoVendido - totalDespesasMes;

  const totalPendenteGlobal = clients.reduce((sum, c) => {
    const compras = sales.filter((s) => s.clientId === c.id);
    const comprado = compras.reduce((s2, s) => s2 + s.total, 0);
    const pagoHora = compras.reduce((s2, s) => s2 + (s.paidNow ? s.total : 0), 0);
    const pagoDepois = payments.filter((p) => p.clientId === c.id).reduce((s2, p) => s2 + p.value, 0);
    return sum + Math.max(0, comprado - pagoHora - pagoDepois);
  }, 0);

  const porProdutoMes = {};
  salesThisMonth.forEach((s) => {
    porProdutoMes[s.name] = (porProdutoMes[s.name] || 0) + s.qty;
  });
  const entradasMes = Object.entries(porProdutoMes).sort((a, b) => b[1] - a[1]);
  const maisVendido = entradasMes[0];
  const pieData = entradasMes.map(([name, value]) => ({ name, value }));

  const porMes = {};
  sales.forEach((s) => {
    const k = monthKeyOf(s.date);
    porMes[k] = (porMes[k] || 0) + s.total;
  });
  const monthKeys = Object.keys(porMes).sort();
  const barData = monthKeys.map((k) => ({ mes: monthLabelOf(k), total: Math.round(porMes[k]) }));
  const prevKey = monthKeys[monthKeys.length - 2];
  const variacao = prevKey && porMes[prevKey] > 0 ? ((faturamento - porMes[prevKey]) / porMes[prevKey]) * 100 : null;

  return (
    <div className="screen">
      <TopBar title="Relatório Mensal" onBack={onBack} />
      <div className="report" style={{ paddingTop: 6 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="text-btn" style={{ flex: 1, background: "#EFDFC4", borderRadius: 16, padding: 10, fontSize: 11 }} onClick={onGoDespesas}>
            <Wallet2 size={13} /> Despesas
          </button>
          <button className="text-btn" style={{ flex: 1, background: "#EFDFC4", borderRadius: 16, padding: 10, fontSize: 11 }} onClick={onGoContasAbertas}>
            <Receipt size={13} /> Em aberto
          </button>
          <button className="text-btn" style={{ flex: 1, background: "#EFDFC4", borderRadius: 16, padding: 10, fontSize: 11 }} onClick={onGoHistorico}>
            <ClipboardList size={13} /> Histórico
          </button>
          <button className="text-btn" style={{ flex: 1, background: "#EFDFC4", borderRadius: 16, padding: 10, fontSize: 11 }} onClick={onGoConfig}>
            <Settings size={13} /> Config
          </button>
        </div>

        <p className="section-label" style={{ margin: "16px 2px 0" }}>Este mês</p>
        <div className="report-grid" style={{ marginTop: 6 }}>
          <div className="report-card">
            <span className="report-label">Faturamento</span>
            <span className="report-value">{currency(faturamento)}</span>
          </div>
          <div className="report-card">
            <span className="report-label">Total recebido</span>
            <span className="report-value">{currency(totalRecebidoMes)}</span>
          </div>
        </div>
        <div className="report-grid" style={{ marginTop: 10 }}>
          <div className="report-card">
            <span className="report-label">Despesas</span>
            <span className="report-value">{currency(totalDespesasMes)}</span>
          </div>
          <div className="report-card report-card-accent">
            <span className="report-label">{lucroLiquido >= 0 ? "Lucro líquido" : "Prejuízo"}</span>
            <span className="report-value">{currency(Math.abs(lucroLiquido))}</span>
          </div>
        </div>
        <div className="report-grid" style={{ marginTop: 10 }}>
          <div className="report-card" style={{ gridColumn: "1 / -1" }}>
            <span className="report-label">Total pendente (todos os clientes, acumulado)</span>
            <span className="report-value">{currency(totalPendenteGlobal)}</span>
          </div>
        </div>

        {maisVendido ? (
          <div className="preference-pill" style={{ marginTop: 14 }}>
            <Trophy size={16} />
            <span>
              Neste mês, <strong>{maisVendido[0]}</strong> foi o mais vendido ({maisVendido[1]} unidades)
            </span>
          </div>
        ) : (
          <p className="empty-hint" style={{ margin: "14px 2px 0" }}>
            Ainda não há vendas registradas neste mês.
          </p>
        )}

        <h3 className="timeline-title" style={{ margin: "24px 2px 4px" }}>Comparativo mensal</h3>
        {barData.length === 0 ? (
          <p className="empty-hint" style={{ margin: "0 2px" }}>
            Ainda não há vendas suficientes para montar o comparativo entre meses.
          </p>
        ) : (
          <div className="chart-card">
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={barData} barSize={26}>
                <XAxis dataKey="mes" axisLine={false} tickLine={false} tick={{ fill: "#8A6E4E", fontSize: 11 }} />
                <YAxis hide />
                <Tooltip formatter={(v) => currency(v)} contentStyle={{ borderRadius: 12, border: "none", fontSize: 12 }} />
                <Bar dataKey="total" radius={[10, 10, 10, 10]} fill="#C97C3F" />
              </BarChart>
            </ResponsiveContainer>
            {variacao !== null && (
              <div className="chart-note">
                <TrendingUp size={14} />
                <span>
                  {variacao >= 0 ? "+" : ""}
                  {variacao.toFixed(0)}% frente ao mês anterior
                </span>
              </div>
            )}
            <p className="chart-caption">Dados reais, calculados a partir das vendas registradas no aplicativo.</p>
          </div>
        )}

        <h3 className="timeline-title" style={{ margin: "24px 2px 4px" }}>Produtos mais vendidos no mês</h3>
        {pieData.length === 0 ? (
          <p className="empty-hint" style={{ margin: "0 2px" }}>Sem vendas neste mês ainda.</p>
        ) : (
          <div className="chart-card">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={45} outerRadius={75} paddingAngle={3}>
                  {pieData.map((entry, i) => (
                    <Cell key={entry.name} fill={PALETTE[i % PALETTE.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="pie-legend">
              {pieData.map((entry, i) => (
                <div className="pie-legend-item" key={entry.name}>
                  <span className="pie-dot" style={{ background: PALETTE[i % PALETTE.length] }} />
                  <span>{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Configuracoes({ onBack, onGoPix, onExportBackup, onRestoreBackup }) {
  const [pendingFile, setPendingFile] = useState(null);
  const [confirming, setConfirming] = useState(false);
  const [feedback, setFeedback] = useState("");

  function handleFile(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        setPendingFile(data);
        setConfirming(true);
        setFeedback("");
      } catch (err) {
        setFeedback("Não consegui ler esse arquivo — ele não parece ser um backup válido (JSON corrompido).");
      }
    };
    reader.readAsText(file);
  }

  function confirmRestore() {
    const ok = onRestoreBackup(pendingFile);
    setConfirming(false);
    setPendingFile(null);
    if (!ok) setFeedback("Esse arquivo não parece ser um backup do Kendellícia's — nada foi alterado.");
  }

  return (
    <div className="screen">
      <TopBar title="Configurações" onBack={onBack} />

      <p className="section-label" style={{ margin: "16px 20px 6px" }}>Cobrança</p>
      <button className="new-btn" onClick={onGoPix}>
        <CreditCard size={16} /> Configurar Pix
      </button>

      <p className="section-label" style={{ margin: "20px 20px 6px" }}>💾 Backup e restauração</p>
      <div className="form-card">
        <p className="empty-hint" style={{ margin: "0 0 4px" }}>
          O backup gera um arquivo com todos os dados: produtos, fotos, clientes, vendas,
          pagamentos, estoque, despesas, anotações, planejamentos, lista de compras, notas e
          configurações do Pix.
        </p>
        <button className="register-btn" onClick={onExportBackup}>
          <Download size={16} /> Fazer backup agora
        </button>

        <label className="text-btn photo-upload-btn" style={{ justifyContent: "center", background: "#F4E9D8", borderRadius: 14, padding: 10 }}>
          <Search size={13} /> Selecionar arquivo de backup para restaurar
          <input type="file" accept="application/json" hidden onChange={handleFile} />
        </label>

        {feedback && <p className="empty-hint" style={{ margin: 0, color: "#A0402A" }}>{feedback}</p>}

        {confirming && (
          <div className="edit-block">
            <span className="confirm-text">
              ⚠️ Restaurar backup? Isso vai substituir todos os dados atuais do Kendellícia's pelos
              dados desse arquivo. Essa ação não pode ser desfeita.
            </span>
            <div className="edit-actions">
              <button className="text-btn danger" onClick={confirmRestore}>
                <Check size={13} /> Restaurar
              </button>
              <button className="text-btn" onClick={() => { setConfirming(false); setPendingFile(null); }}>
                <X size={13} /> Cancelar
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="empty-hint" style={{ margin: "16px 20px 20px" }}>
        Para trocar de celular: faça o backup no aparelho antigo, transfira o arquivo (por
        WhatsApp, e-mail ou cabo) e restaure aqui no aparelho novo.
      </p>
    </div>
  );
}

function PixConfigScreen({ pixConfig, onBack, onSave, onClear }) {
  const [key, setKey] = useState(pixConfig.key || "");
  const [receiverName, setReceiverName] = useState(pixConfig.receiverName || "");
  const [city, setCity] = useState(pixConfig.city || "");
  const [taxDoc, setTaxDoc] = useState(pixConfig.document || "");
  const [confirmingClear, setConfirmingClear] = useState(false);

  function save() {
    if (!key.trim()) return;
    onSave({ key: key.trim(), receiverName: receiverName.trim(), city: city.trim(), document: taxDoc.trim() });
  }

  return (
    <div className="screen">
      <TopBar title="Configurar Pix" onBack={onBack} />
      <p className="empty-hint" style={{ margin: "10px 20px 0" }}>
        Esses dados serão usados para montar o código Pix "copia e cola" e o QR Code nas cobranças
        dos clientes.
      </p>
      <div className="form-card">
        <input className="form-input" placeholder="Chave Pix" value={key} onChange={(e) => setKey(e.target.value)} />
        <input
          className="form-input"
          placeholder="Nome do recebedor"
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
        />
        <input className="form-input" placeholder="Cidade" value={city} onChange={(e) => setCity(e.target.value)} />
        <input
          className="form-input"
          placeholder="CPF/CNPJ (opcional, apenas para sua referência)"
          value={taxDoc}
          onChange={(e) => setTaxDoc(e.target.value)}
        />
        <button className="register-btn" onClick={save} disabled={!key.trim()}>
          <Wallet2 size={16} />
          Salvar dados do Pix
        </button>

        {(pixConfig.key || pixConfig.receiverName) &&
          (confirmingClear ? (
            <div className="edit-block">
              <span className="confirm-text">⚠️ Limpar todos os dados do Pix cadastrados?</span>
              <div className="edit-actions">
                <button
                  className="text-btn danger"
                  onClick={() => {
                    onClear();
                    setKey("");
                    setReceiverName("");
                    setCity("");
                    setTaxDoc("");
                    setConfirmingClear(false);
                  }}
                >
                  <Trash2 size={13} /> Limpar
                </button>
                <button className="text-btn" onClick={() => setConfirmingClear(false)}>
                  <X size={13} /> Cancelar
                </button>
              </div>
            </div>
          ) : (
            <button className="text-btn" onClick={() => setConfirmingClear(true)}>
              <Trash2 size={13} /> Limpar dados do Pix
            </button>
          ))}
      </div>
    </div>
  );
}

function Despesas({ expenses, onBack, onAddExpense, onEditExpense, onDeleteExpense }) {
  const [showForm, setShowForm] = useState(expenses.length === 0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(CATEGORIAS_DESPESA[0]);
  const [value, setValue] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [eDescription, setEDescription] = useState("");
  const [eCategory, setECategory] = useState(CATEGORIAS_DESPESA[0]);
  const [eValue, setEValue] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const total = expenses.reduce((sum, e) => sum + e.value, 0);

  function submit() {
    const v = parseFloat(value.replace(",", "."));
    if (!description.trim() || !v || v <= 0) return;
    onAddExpense({ description: description.trim(), category, value: v });
    setDescription("");
    setValue("");
    setShowForm(false);
  }

  function startEdit(e) {
    setEditingId(e.id);
    setEDescription(e.description);
    setECategory(e.category);
    setEValue(String(e.value));
    setDeletingId(null);
  }

  function saveEdit(id) {
    const v = parseFloat(String(eValue).replace(",", "."));
    if (!eDescription.trim() || !v || v <= 0) return;
    onEditExpense(id, { description: eDescription.trim(), category: eCategory, value: v });
    setEditingId(null);
  }

  return (
    <div className="screen">
      <TopBar title="Despesas" onBack={onBack} />

      <div className="report-grid" style={{ margin: "10px 20px 0" }}>
        <div className="report-card report-card-accent" style={{ gridColumn: "1 / -1" }}>
          <span className="report-label">Total em despesas</span>
          <span className="report-value">{currency(total)}</span>
        </div>
      </div>

      {showForm ? (
        <div className="form-card">
          <input className="form-input" placeholder="Descrição (ex: farinha, potinhos...)" value={description} onChange={(e) => setDescription(e.target.value)} />
          <select className="form-input" value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIAS_DESPESA.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <input className="form-input" placeholder="Valor (R$)" value={value} onChange={(e) => setValue(e.target.value)} inputMode="decimal" />
          <button className="register-btn" onClick={submit} disabled={!description.trim() || !value}>
            <Wallet2 size={16} />
            Cadastrar despesa
          </button>
          {expenses.length > 0 && (
            <button className="text-btn" onClick={() => setShowForm(false)}>Ver despesas cadastradas</button>
          )}
        </div>
      ) : (
        <button className="new-btn" onClick={() => setShowForm(true)}>
          <Wallet2 size={16} />
          Nova despesa
        </button>
      )}

      {!showForm && (
        <div className="people-list">
          {expenses.length === 0 && <p className="empty-hint">Nenhuma despesa cadastrada ainda.</p>}
          {expenses.map((e) =>
            editingId === e.id ? (
              <div className="form-card" key={e.id} style={{ margin: 0 }}>
                <input className="form-input" value={eDescription} onChange={(ev) => setEDescription(ev.target.value)} />
                <select className="form-input" value={eCategory} onChange={(ev) => setECategory(ev.target.value)}>
                  {CATEGORIAS_DESPESA.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <input className="form-input" value={eValue} onChange={(ev) => setEValue(ev.target.value)} inputMode="decimal" />
                <div className="edit-actions">
                  <button className="text-btn" onClick={() => saveEdit(e.id)}>
                    <Check size={13} /> Salvar
                  </button>
                  <button className="text-btn" onClick={() => setEditingId(null)}>
                    <X size={13} /> Cancelar
                  </button>
                </div>
              </div>
            ) : deletingId === e.id ? (
              <div className="form-card" key={e.id} style={{ margin: 0 }}>
                <span className="confirm-text">⚠️ Excluir esta despesa? O financeiro será recalculado.</span>
                <div className="edit-actions">
                  <button className="text-btn danger" onClick={() => { onDeleteExpense(e.id); setDeletingId(null); }}>
                    <Trash2 size={13} /> Excluir
                  </button>
                  <button className="text-btn" onClick={() => setDeletingId(null)}>
                    <X size={13} /> Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div className="people-row people-row-static" key={e.id}>
                <span className="chip-circle people-avatar" style={{ background: "#6B4428" }}>
                  <Wallet2 size={16} />
                </span>
                <span className="people-info">
                  <span className="people-name">{e.description}</span>
                  <span className="people-meta">{e.category} · {e.date}</span>
                </span>
                <span className="people-cta">{currency(e.value)}</span>
                <div className="row-actions">
                  <button className="row-action-btn" onClick={() => startEdit(e)} aria-label="Editar despesa">
                    <Pencil size={13} />
                  </button>
                  <button className="row-action-btn" onClick={() => setDeletingId(e.id)} aria-label="Excluir despesa">
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

function Historico({ sales, payments, onBack }) {
  const [periodo, setPeriodo] = useState("mes");
  const [customStart, setCustomStart] = useState("");
  const [customEnd, setCustomEnd] = useState("");
  const [clientQuery, setClientQuery] = useState("");
  const [situacao, setSituacao] = useState("todos");

  const allRecords = buildHistoricoRecords(sales, payments);

  function inPeriod(record) {
    if (periodo === "todos") return true;
    const now = new Date();
    if (periodo === "hoje") {
      return record.date === now.toLocaleDateString("pt-BR");
    }
    if (periodo === "mes") {
      const curKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
      return monthKeyOf(record.date) === curKey;
    }
    if (periodo === "mesAnterior") {
      const d = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      const prevKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      return monthKeyOf(record.date) === prevKey;
    }
    if (periodo === "personalizado") {
      if (!customStart || !customEnd) return true;
      const ts = toTimestampBR(record.date, record.time);
      const startTs = new Date(customStart + "T00:00:00").getTime();
      const endTs = new Date(customEnd + "T23:59:59").getTime();
      return ts >= startTs && ts <= endTs;
    }
    return true;
  }

  function matchesSituacao(record) {
    if (situacao === "todos") return true;
    if (situacao === "pagos") return record.status === "Pago" || record.status === "Quitado";
    if (situacao === "aberto") return record.status === "Em aberto";
    if (situacao === "parcial") return record.status === "Pagamento parcial";
    return true;
  }

  const filtered = allRecords.filter(
    (r) =>
      inPeriod(r) &&
      matchesSituacao(r) &&
      (!clientQuery.trim() || r.clientName.toLowerCase().includes(clientQuery.trim().toLowerCase()))
  );

  const totalVendas = filtered.length;
  const faturamento = filtered.reduce((sum, r) => sum + r.total, 0);
  const recebido = filtered.reduce((sum, r) => sum + r.pago, 0);
  const aReceber = filtered.reduce((sum, r) => sum + r.pendente, 0);

  const periodos = [
    { key: "hoje", label: "Hoje" },
    { key: "mes", label: "Este mês" },
    { key: "mesAnterior", label: "Mês anterior" },
    { key: "personalizado", label: "Personalizado" },
    { key: "todos", label: "Todos" },
  ];
  const situacoes = [
    { key: "todos", label: "Todos" },
    { key: "pagos", label: "Pagos" },
    { key: "aberto", label: "Em aberto" },
    { key: "parcial", label: "Parcialmente pagos" },
  ];

  return (
    <div className="screen">
      <TopBar title="Histórico de Vendas" onBack={onBack} />

      <div className="report-grid" style={{ margin: "10px 20px 0" }}>
        <div className="report-card">
          <span className="report-label">Vendas</span>
          <span className="report-value">{totalVendas}</span>
        </div>
        <div className="report-card">
          <span className="report-label">Faturamento</span>
          <span className="report-value">{currency(faturamento)}</span>
        </div>
      </div>
      <div className="report-grid" style={{ margin: "10px 20px 0" }}>
        <div className="report-card">
          <span className="report-label">Recebido</span>
          <span className="report-value">{currency(recebido)}</span>
        </div>
        <div className="report-card report-card-accent">
          <span className="report-label">A receber</span>
          <span className="report-value">{currency(aReceber)}</span>
        </div>
      </div>

      <p className="section-label" style={{ margin: "16px 20px 6px" }}>Período</p>
      <div className="filter-chip-row">
        {periodos.map((p) => (
          <button
            key={p.key}
            className={"filter-chip" + (periodo === p.key ? " filter-chip-active" : "")}
            onClick={() => setPeriodo(p.key)}
          >
            {p.label}
          </button>
        ))}
      </div>
      {periodo === "personalizado" && (
        <div className="form-row" style={{ padding: "8px 20px 0" }}>
          <input className="form-input" type="date" value={customStart} onChange={(e) => setCustomStart(e.target.value)} />
          <input className="form-input" type="date" value={customEnd} onChange={(e) => setCustomEnd(e.target.value)} />
        </div>
      )}

      <p className="section-label" style={{ margin: "14px 20px 6px" }}>Situação</p>
      <div className="filter-chip-row">
        {situacoes.map((s) => (
          <button
            key={s.key}
            className={"filter-chip" + (situacao === s.key ? " filter-chip-active" : "")}
            onClick={() => setSituacao(s.key)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div style={{ padding: "12px 20px 0" }}>
        <input
          className="form-input"
          placeholder="🔎 Filtrar por cliente…"
          value={clientQuery}
          onChange={(e) => setClientQuery(e.target.value)}
        />
      </div>

      <h3 className="timeline-title">Registros</h3>
      {filtered.length === 0 ? (
        <p className="empty-hint" style={{ margin: "0 20px" }}>
          Nenhuma movimentação encontrada neste período.
        </p>
      ) : (
        <div className="historico-list">
          {filtered.map((r) => (
            <div className="historico-card" key={r.key}>
              <div className="historico-top">
                <span className="historico-date">{r.date} — {r.time}</span>
                <span className={"historico-status status-" + r.status.replace(/\s+/g, "-").toLowerCase()}>{r.status}</span>
              </div>
              <p className="historico-client">{r.clientName}</p>
              {r.lines.map((l) => (
                <p className="historico-line" key={l.id}>
                  {l.name} — {l.qty} × {currency(l.price)}
                </p>
              ))}
              <div className="historico-totals">
                <span>Total: {currency(r.total)}</span>
                <span>Pago: {currency(r.pago)}</span>
                <span>Pendente: {currency(r.pendente)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ContasAbertas({ clients, sales, payments, onBack, onOpenClient }) {
  const rows = clients
    .map((c) => {
      const compras = sales.filter((s) => s.clientId === c.id);
      const totalComprado = compras.reduce((sum, s) => sum + s.total, 0);
      const pagoNaHora = compras.reduce((sum, s) => sum + (s.paidNow ? s.total : 0), 0);
      const pagoDepois = payments.filter((p) => p.clientId === c.id).reduce((sum, p) => sum + p.value, 0);
      const pendente = totalComprado - pagoNaHora - pagoDepois;
      return { client: c, pendente };
    })
    .filter((r) => r.pendente > 0.005)
    .sort((a, b) => a.client.name.localeCompare(b.client.name, "pt-BR", { sensitivity: "base" }));

  const total = rows.reduce((sum, r) => sum + r.pendente, 0);

  return (
    <div className="screen">
      <TopBar title="Contas em aberto" onBack={onBack} />

      <div className="report-grid" style={{ margin: "10px 20px 0" }}>
        <div className="report-card report-card-accent" style={{ gridColumn: "1 / -1" }}>
          <span className="report-label">Total pendente de todos os clientes</span>
          <span className="report-value">{currency(total)}</span>
        </div>
      </div>

      {rows.length === 0 ? (
        <p className="empty-hint" style={{ margin: "16px 20px 0" }}>
          Nenhum cliente com saldo pendente no momento. 🎉
        </p>
      ) : (
        <div className="people-list">
          {rows.map((r) => (
            <button className="people-row" key={r.client.id} onClick={() => onOpenClient(r.client.id)}>
              <span className="chip-circle people-avatar" style={{ background: r.client.tone }}>
                {initials(r.client.name)}
              </span>
              <span className="people-info">
                <span className="people-name">{r.client.name}</span>
              </span>
              <span className="people-cta" style={{ color: "#A0402A" }}>{currency(r.pendente)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Clientes({ clients, sales, payments, onBack, onAddClient, onEditClient, onToggleActive, onDeleteClient, onOpenProfile }) {
  const [showForm, setShowForm] = useState(clients.length === 0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  function submit() {
    if (!name.trim()) return;
    onAddClient({ name: name.trim(), phone: phone.trim(), email: email.trim() });
    setName("");
    setPhone("");
    setEmail("");
    setShowForm(false);
  }

  function startEdit(c) {
    setEditingId(c.id);
    setEditName(c.name);
    setEditPhone(c.phone || "");
    setEditEmail(c.email || "");
    setDeletingId(null);
  }

  function saveEdit(id) {
    if (!editName.trim()) return;
    onEditClient(id, { name: editName.trim(), phone: editPhone.trim(), email: editEmail.trim() });
    setEditingId(null);
  }

  function hasHistory(c) {
    return sales.some((s) => s.clientId === c.id) || payments.some((p) => p.clientId === c.id);
  }

  const byName = (a, b) => a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" });
  const active = clients.filter((c) => c.active !== false).slice().sort(byName);
  const archived = clients.filter((c) => c.active === false).slice().sort(byName);

  return (
    <div className="screen">
      <TopBar title="Clientes" onBack={onBack} />

      {showForm ? (
        <div className="form-card">
          <input className="form-input" placeholder="Nome do cliente" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="form-input" placeholder="Telefone (opcional)" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input className="form-input" placeholder="E-mail (opcional)" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="register-btn" onClick={submit} disabled={!name.trim()}>
            <UserPlus size={16} />
            Cadastrar cliente
          </button>
          {clients.length > 0 && (
            <button className="text-btn" onClick={() => setShowForm(false)}>
              Ver clientes cadastrados
            </button>
          )}
        </div>
      ) : (
        <button className="new-btn" onClick={() => setShowForm(true)}>
          <UserPlus size={16} />
          Novo cliente
        </button>
      )}

      {!showForm && (
        <div className="people-list">
          {active.map((c) =>
            editingId === c.id ? (
              <div className="form-card" key={c.id} style={{ margin: 0 }}>
                <input className="form-input" value={editName} onChange={(e) => setEditName(e.target.value)} />
                <input className="form-input" value={editPhone} onChange={(e) => setEditPhone(e.target.value)} placeholder="Telefone" />
                <input className="form-input" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} placeholder="E-mail" />
                <div className="edit-actions">
                  <button className="text-btn" onClick={() => saveEdit(c.id)}>
                    <Check size={13} /> Salvar
                  </button>
                  <button className="text-btn" onClick={() => setEditingId(null)}>
                    <X size={13} /> Cancelar
                  </button>
                </div>
              </div>
            ) : deletingId === c.id ? (
              <div className="form-card" key={c.id} style={{ margin: 0 }}>
                <span className="confirm-text">
                  ⚠️ {hasHistory(c)
                    ? `Excluir ${c.name}? Como já existe histórico de compras/pagamentos, ele será arquivado em vez de apagado, para preservar os dados financeiros.`
                    : `Excluir ${c.name}? Essa ação não pode ser desfeita.`}
                </span>
                <div className="edit-actions">
                  <button className="text-btn danger" onClick={() => { onDeleteClient(c.id); setDeletingId(null); }}>
                    <Trash2 size={13} /> Excluir
                  </button>
                  <button className="text-btn" onClick={() => setDeletingId(null)}>
                    <X size={13} /> Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div className="people-row" key={c.id}>
                <button className="people-row-click" onClick={() => onOpenProfile(c.id)}>
                  <span className="chip-circle people-avatar" style={{ background: c.tone }}>
                    {initials(c.name)}
                  </span>
                  <span className="people-info">
                    <span className="people-name">{c.name}</span>
                    {c.phone && (
                      <span className="people-meta">
                        <Phone size={11} /> {c.phone}
                      </span>
                    )}
                  </span>
                  <span className="people-cta">Ver conta</span>
                </button>
                <div className="row-actions">
                  <button className="row-action-btn" onClick={() => startEdit(c)} aria-label="Editar cliente">
                    <Pencil size={13} />
                  </button>
                  <button className="row-action-btn" onClick={() => onToggleActive(c.id)} aria-label="Desativar cliente">
                    <AlertTriangle size={13} />
                  </button>
                  <button className="row-action-btn" onClick={() => setDeletingId(c.id)} aria-label="Excluir cliente">
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            )
          )}

          {archived.length > 0 && (
            <>
              <p className="section-label" style={{ margin: "18px 0 0" }}>Arquivados</p>
              {archived.map((c) => (
                <div className="people-row people-row-archived" key={c.id}>
                  <span className="chip-circle people-avatar" style={{ background: c.tone, opacity: 0.5 }}>
                    {initials(c.name)}
                  </span>
                  <span className="people-info">
                    <span className="people-name">{c.name}</span>
                    <span className="people-meta">Arquivado — histórico preservado</span>
                  </span>
                  <button className="text-btn" onClick={() => onToggleActive(c.id)}>
                    Reativar
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

function ClientProfile({ client, sales, payments, pixConfig, onBack, onAddPayment, onEditSale, onDeleteSale, onEditPayment, onDeletePayment, onAddAttachment, onDeleteAttachment }) {
  const [showPay, setShowPay] = useState(false);
  const [showBoleto, setShowBoleto] = useState(false);
  const [value, setValue] = useState("");
  const [method, setMethod] = useState("Pix");
  const [showQr, setShowQr] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  const [mesSelecionado, setMesSelecionado] = useState(lastNMonthKeys(12)[0]);
  const [semMovimentoMes, setSemMovimentoMes] = useState(false);

  const compras = sales.filter((s) => s.clientId === client.id).slice().reverse();
  const pagamentos = payments.filter((p) => p.clientId === client.id).slice().reverse();
  const totalComprado = compras.reduce((sum, s) => sum + s.total, 0);
  const pagoNaHora = compras.reduce((sum, s) => sum + (s.paidNow ? s.total : 0), 0);
  const pagoDepois = pagamentos.reduce((sum, p) => sum + p.value, 0);
  const totalPago = pagoNaHora + pagoDepois;
  const pendente = totalComprado - totalPago;

  function submitPay() {
    const v = parseFloat(value.replace(",", "."));
    if (!v || v <= 0) return;
    onAddPayment({ value: v, method });
    setValue("");
    setShowPay(false);
  }

  if (showBoleto) {
    const quitada = pendente <= 0.005;
    const pixPayload = !quitada ? buildPixPayload({ ...pixConfig, amount: Math.max(0, pendente) }) : null;
    const datas = compras.map((s) => s.date);
    const periodo = datas.length ? `${datas[datas.length - 1]} a ${datas[0]}` : "—";

    function gerarPdf(tipo) {
      try {
        gerarPdfInterno(tipo);
      } catch (err) {
        console.error("Falha ao gerar PDF:", err);
        window.alert(`Não foi possível gerar o PDF.\n\n${err?.message || err}`);
      }
    }

    function gerarPdfInterno(tipo) {
      let items = compras;
      let total = totalComprado;
      let pago = totalPago;
      let saldo = pendente;
      let titulo = "Conta completa";
      let quitadaVariante = quitada;

      if (tipo === "pendente") {
        items = compras.filter((s) => !s.paidNow);
        total = items.reduce((sum, s) => sum + s.total, 0);
        saldo = Math.max(0, total - pagoDepois);
        pago = total - saldo;
        titulo = "Boleto — valor pendente";
        quitadaVariante = saldo <= 0.005;
      } else if (tipo === "pago") {
        items = compras.filter((s) => s.paidNow);
        total = items.reduce((sum, s) => sum + s.total, 0);
        pago = total;
        saldo = 0;
        titulo = "Comprovante — compras pagas";
        quitadaVariante = true;
      }

      const payload = !quitadaVariante ? buildPixPayload({ ...pixConfig, amount: Math.max(0, saldo) }) : null;
      const blob = buildCobrancaPdf({
        logoDataUri: LOGO,
        titulo,
        clientName: client.name,
        periodo,
        items,
        totalComprado: total,
        totalPago: pago,
        pendente: saldo,
        quitada: quitadaVariante,
        pixConfig,
        pixPayload: payload,
      });
      downloadOrShareBlob(blob, `${tipo}-${client.name.replace(/\s+/g, "-")}.pdf`);
    }

    function gerarPdfMensal() {
      try {
        gerarPdfMensalInterno();
      } catch (err) {
        console.error("Falha ao gerar PDF mensal:", err);
        window.alert(`Não foi possível gerar o PDF.\n\n${err?.message || err}`);
      }
    }

    function gerarPdfMensalInterno() {
      const key = mesSelecionado;
      const vendasMes = compras.filter((s) => monthKeyOf(s.date) === key);
      const pagamentosMes = pagamentos.filter((p) => monthKeyOf(p.date) === key);

      const totalMes = vendasMes.reduce((sum, s) => sum + s.total, 0);
      const pagoNaHoraMes = vendasMes.reduce((sum, s) => sum + (s.paidNow ? s.total : 0), 0);
      const pagoDepoisMes = pagamentosMes.reduce((sum, p) => sum + p.value, 0);
      const pagoMes = pagoNaHoraMes + pagoDepoisMes;
      const pendenteMes = Math.max(0, totalMes - pagoMes);
      const quitadaMes = pendenteMes <= 0.005;

      if (vendasMes.length === 0 && pagamentosMes.length === 0) {
        setSemMovimentoMes(true);
        return;
      }
      setSemMovimentoMes(false);

      const payload = !quitadaMes ? buildPixPayload({ ...pixConfig, amount: pendenteMes }) : null;
      const blob = buildCobrancaPdf({
        logoDataUri: LOGO,
        titulo: `Boleto mensal — ${monthFullLabel(key)}`,
        clientName: client.name,
        periodo: monthFullLabel(key),
        items: vendasMes,
        totalComprado: totalMes,
        totalPago: pagoMes,
        pendente: pendenteMes,
        quitada: quitadaMes,
        pixConfig,
        pixPayload: payload,
      });
      downloadOrShareBlob(blob, `boleto-${monthFullLabel(key).replace("/", "-")}-${client.name.replace(/\s+/g, "-")}.pdf`);
    }

    return (
      <div className="screen">
        <TopBar title="Conta do cliente" onBack={() => setShowBoleto(false)} />
        <div className="boleto-card">
          <img src={LOGO} alt="Kendellícia's" className="boleto-logo" />
          <p className="boleto-brand">Kendellícia's · Brigadeiros &amp; Cia</p>
          <h3 className="boleto-title">
            <Receipt size={16} /> Conta da Kendellícia's
          </h3>
          <p className="boleto-client">Cliente: {client.name}</p>
          <p className="boleto-period">Período: {periodo} · emitido em {new Date().toLocaleDateString("pt-BR")}</p>
          <div className="boleto-divider" />
          {compras.length === 0 ? (
            <p className="empty-hint" style={{ margin: 0 }}>Sem compras registradas ainda.</p>
          ) : (
            <div className="boleto-items">
              {compras.map((s) => (
                <div className="boleto-item" key={s.id}>
                  <div className="boleto-item-top">
                    <span className="boleto-item-name">{s.qty}x {s.name} ({currency(s.price)} cada)</span>
                    <span className="boleto-item-value">{currency(s.total)}</span>
                  </div>
                  <span className="boleto-item-date">
                    {s.date} · {s.time} · {s.paidNow ? "pago na hora" : "na conta"}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div className="boleto-divider" />
          <div className="boleto-total">
            <span>Total das compras</span>
            <span>{currency(totalComprado)}</span>
          </div>
          <div className="boleto-total">
            <span>Pago</span>
            <span>{currency(totalPago)}</span>
          </div>
          {quitada ? (
            <p className="quitada-badge">✅ Conta quitada — não há cobrança pendente.</p>
          ) : (
            <>
              <div className="boleto-total" style={{ color: "#A85D2A" }}>
                <span>Valor em aberto</span>
                <span>{currency(pendente)}</span>
              </div>

              {pixConfig.key ? (
                <div className="pix-block">
                  <div className="boleto-divider" />
                  <p className="pix-label">Pagamento via Pix</p>
                  <p className="pix-key">Chave: {pixConfig.key}</p>
                  {pixConfig.receiverName && <p className="pix-key">Recebedor: {pixConfig.receiverName}</p>}
                  <button
                    className="text-btn"
                    onClick={() => {
                      navigator.clipboard?.writeText(pixPayload || pixConfig.key);
                      setCopiedPix(true);
                      setTimeout(() => setCopiedPix(false), 1800);
                    }}
                  >
                    <CreditCard size={13} /> {copiedPix ? "Copiado!" : "Copiar código Pix (copia e cola)"}
                  </button>
                  <button className="text-btn" onClick={() => setShowQr((v) => !v)}>
                    <QrCode size={13} /> {showQr ? "Ocultar QR Code" : "Mostrar QR Code"}
                  </button>
                  {showQr && pixPayload && (
                    <div className="qr-block">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixPayload)}`}
                        alt="QR Code Pix"
                        className="qr-image"
                      />
                      <p className="qr-disclaimer">
                        ⚠️ Este QR é gerado enviando o código Pix acima para um serviço externo
                        (qrserver.com) só para desenhar a imagem — a chave e o valor saem do seu
                        aparelho. Teste escaneando com seu próprio app do banco antes de confiar
                        nele com clientes; não foi possível validar o escaneamento a partir daqui.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <p className="empty-hint" style={{ margin: "10px 2px 0" }}>
                  Nenhuma chave Pix configurada ainda. Configure em Financeiro → Configurar Pix
                  para incluir aqui.
                </p>
              )}
            </>
          )}
        </div>

        <p className="section-label" style={{ margin: "16px 20px 6px" }}>Gerar PDF real</p>
        <div className="pdf-btn-row">
          <button className="text-btn pdf-btn" onClick={() => gerarPdf("pendente")} disabled={quitada}>
            <Download size={13} /> Pendente
          </button>
          <button className="text-btn pdf-btn" onClick={() => gerarPdf("pago")} disabled={pagoNaHora <= 0}>
            <Download size={13} /> Pago
          </button>
          <button className="text-btn pdf-btn" onClick={() => gerarPdf("completo")}>
            <Download size={13} /> Completo
          </button>
        </div>
        <p className="empty-hint" style={{ margin: "6px 20px 0" }}>
          Gera um arquivo .pdf de verdade — no celular deve abrir a opção de compartilhar direto
          pelo WhatsApp; no computador, faz o download do arquivo.
        </p>

        <p className="section-label" style={{ margin: "18px 20px 6px" }}>Boleto mensal</p>
        <div className="form-card" style={{ margin: "0 20px" }}>
          <select
            className="form-input"
            value={mesSelecionado}
            onChange={(e) => {
              setMesSelecionado(e.target.value);
              setSemMovimentoMes(false);
            }}
          >
            {lastNMonthKeys(12).map((k) => (
              <option key={k} value={k}>{monthFullLabel(k)}</option>
            ))}
          </select>
          <button className="register-btn" onClick={gerarPdfMensal}>
            <Download size={16} /> Gerar boleto de {monthFullLabel(mesSelecionado)}
          </button>
          {semMovimentoMes && (
            <p className="empty-hint" style={{ margin: 0 }}>
              Nenhuma movimentação encontrada neste período.
            </p>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="screen">
      <TopBar title={client.name} onBack={onBack} />

      <div className="report-grid" style={{ margin: "10px 20px 0" }}>
        <div className="report-card">
          <span className="report-label">Total comprado</span>
          <span className="report-value">{currency(totalComprado)}</span>
        </div>
        <div className="report-card">
          <span className="report-label">Total pago</span>
          <span className="report-value">{currency(totalPago)}</span>
        </div>
      </div>
      <div className="report-grid" style={{ margin: "10px 20px 0" }}>
        <div className="report-card report-card-accent" style={{ gridColumn: "1 / -1" }}>
          <span className="report-label">Em aberto</span>
          <span className="report-value">{currency(Math.max(0, pendente))}</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, padding: "14px 20px 0" }}>
        <button className="text-btn" style={{ flex: 1, background: "#EFDFC4", borderRadius: 16, padding: 10 }} onClick={() => setShowPay((v) => !v)}>
          <Wallet2 size={14} /> Registrar pagamento
        </button>
        <button className="text-btn" style={{ flex: 1, background: "#EFDFC4", borderRadius: 16, padding: 10 }} onClick={() => setShowBoleto(true)}>
          <Receipt size={14} /> Gerar conta
        </button>
      </div>

      {showPay && (
        <div className="form-card">
          <input className="form-input" placeholder="Valor (R$)" value={value} onChange={(e) => setValue(e.target.value)} inputMode="decimal" />
          <select className="form-input" value={method} onChange={(e) => setMethod(e.target.value)}>
            <option>Pix</option>
            <option>Dinheiro</option>
            <option>Cartão</option>
            <option>Outro</option>
          </select>
          <button className="register-btn" onClick={submitPay} disabled={!value}>
            <CreditCard size={16} />
            Confirmar pagamento
          </button>
        </div>
      )}

      <h3 className="timeline-title">Histórico de compras</h3>
      {compras.length === 0 ? (
        <p className="empty-hint">Nenhuma compra registrada ainda.</p>
      ) : (
        <SaleTimeline
          sales={compras}
          onEdit={onEditSale}
          onDelete={onDeleteSale}
          onAddAttachment={onAddAttachment}
          onDeleteAttachment={onDeleteAttachment}
        />
      )}

      {pagamentos.length > 0 && (
        <>
          <h3 className="timeline-title">Histórico de pagamentos</h3>
          <PaymentTimeline payments={pagamentos} onEdit={onEditPayment} onDelete={onDeletePayment} />
        </>
      )}
    </div>
  );
}

function SaleTimeline({ sales, showClient, onEdit, onDelete, onAddAttachment, onDeleteAttachment }) {
  const [editingId, setEditingId] = useState(null);
  const [editQty, setEditQty] = useState(1);
  const [deletingId, setDeletingId] = useState(null);
  const [viewingPhoto, setViewingPhoto] = useState(null);
  const [attachBusy, setAttachBusy] = useState(null);

  async function handleAttach(saleId, e) {
    const file = e.target.files?.[0];
    if (!file || !onAddAttachment) return;
    setAttachBusy(saleId);
    try {
      const dataUri = await resizeImage(file, 500, 0.7);
      onAddAttachment(saleId, dataUri);
    } catch (err) {
      // falha silenciosa
    } finally {
      setAttachBusy(null);
      e.target.value = "";
    }
  }

  function startEdit(s) {
    setEditingId(s.id);
    setEditQty(s.qty);
    setDeletingId(null);
  }

  function saveEdit(id) {
    onEdit(id, editQty);
    setEditingId(null);
  }

  return (
    <div className="timeline">
      {sales.map((s, i) => (
        <div className="timeline-row" key={s.id}>
          <div className="timeline-marker">
            <span className="timeline-dot" />
            {i < sales.length - 1 && <span className="timeline-line" />}
          </div>
          <div className="timeline-content">
            {editingId === s.id ? (
              <div className="edit-block">
                <span className="timeline-name">{s.name}</span>
                <div className="stepper" style={{ padding: "4px 0" }}>
                  <button className="step-btn" onClick={() => setEditQty((q) => Math.max(1, q - 1))}>
                    <Minus size={14} />
                  </button>
                  <span className="step-value">{editQty}</span>
                  <button className="step-btn" onClick={() => setEditQty((q) => q + 1)}>
                    <Plus size={14} />
                  </button>
                </div>
                <div className="edit-actions">
                  <button className="text-btn" onClick={() => saveEdit(s.id)}>
                    <Check size={13} /> Salvar
                  </button>
                  <button className="text-btn" onClick={() => setEditingId(null)}>
                    <X size={13} /> Cancelar
                  </button>
                </div>
              </div>
            ) : deletingId === s.id ? (
              <div className="edit-block">
                <span className="confirm-text">
                  ⚠️ Excluir esta venda? Isso vai atualizar estoque, conta do cliente e financeiro.
                </span>
                <div className="edit-actions">
                  <button className="text-btn danger" onClick={() => onDelete(s.id)}>
                    <Trash2 size={13} /> Excluir
                  </button>
                  <button className="text-btn" onClick={() => setDeletingId(null)}>
                    <X size={13} /> Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="timeline-top">
                  <span className="timeline-name">
                    {s.qty}x {s.name}
                  </span>
                  <span className="timeline-total">{currency(s.total)}</span>
                </div>
                <span className="timeline-meta">
                  {s.date} · {s.time}
                  {showClient ? ` · ${s.clientName}` : ""}
                  {" · "}
                  <span className={s.paidNow ? "badge-paid" : "badge-open"}>
                    {s.paidNow ? "Pago na hora" : "Na conta"}
                  </span>
                </span>
                <div className="row-actions">
                  <button className="row-action-btn" onClick={() => startEdit(s)} aria-label="Editar venda">
                    <Pencil size={13} />
                  </button>
                  <button
                    className="row-action-btn"
                    onClick={() => setDeletingId(s.id)}
                    aria-label="Excluir venda"
                  >
                    <Trash2 size={13} />
                  </button>
                  {onAddAttachment && (
                    <label className="row-action-btn" aria-label="Anexar comprovante">
                      <Paperclip size={13} />
                      <input type="file" accept="image/*" hidden onChange={(e) => handleAttach(s.id, e)} />
                    </label>
                  )}
                </div>
                {attachBusy === s.id && <span className="empty-hint" style={{ margin: "4px 0 0" }}>Carregando anexo…</span>}
                {s.attachments && s.attachments.length > 0 && (
                  <div className="attachment-row">
                    {s.attachments.map((src, idx) => (
                      <div className="attachment-thumb" key={idx}>
                        <img src={src} alt="Comprovante" onClick={() => setViewingPhoto(src)} />
                        {onDeleteAttachment && (
                          <button
                            className="attachment-remove"
                            onClick={() => onDeleteAttachment(s.id, idx)}
                            aria-label="Excluir anexo"
                          >
                            <X size={10} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ))}
      {viewingPhoto && (
        <div className="photo-lightbox" onClick={() => setViewingPhoto(null)}>
          <img src={viewingPhoto} alt="Comprovante ampliado" />
        </div>
      )}
    </div>
  );
}

function PaymentTimeline({ payments, onEdit, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [editMethod, setEditMethod] = useState("Pix");
  const [deletingId, setDeletingId] = useState(null);

  function startEdit(p) {
    setEditingId(p.id);
    setEditValue(String(p.value));
    setEditMethod(p.method);
    setDeletingId(null);
  }

  function saveEdit(id) {
    const v = parseFloat(editValue.replace(",", "."));
    if (!v || v <= 0) return;
    onEdit(id, v, editMethod);
    setEditingId(null);
  }

  return (
    <div className="timeline">
      {payments.map((p, i) => (
        <div className="timeline-row" key={p.id}>
          <div className="timeline-marker">
            <span className="timeline-dot" style={{ background: "#7C9473" }} />
            {i < payments.length - 1 && <span className="timeline-line" />}
          </div>
          <div className="timeline-content">
            {editingId === p.id ? (
              <div className="edit-block">
                <input
                  className="form-input"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  inputMode="decimal"
                />
                <select className="form-input" value={editMethod} onChange={(e) => setEditMethod(e.target.value)}>
                  <option>Pix</option>
                  <option>Dinheiro</option>
                  <option>Cartão</option>
                  <option>Outro</option>
                </select>
                <div className="edit-actions">
                  <button className="text-btn" onClick={() => saveEdit(p.id)}>
                    <Check size={13} /> Salvar
                  </button>
                  <button className="text-btn" onClick={() => setEditingId(null)}>
                    <X size={13} /> Cancelar
                  </button>
                </div>
              </div>
            ) : deletingId === p.id ? (
              <div className="edit-block">
                <span className="confirm-text">
                  ⚠️ Excluir este pagamento? O saldo em aberto do cliente será recalculado.
                </span>
                <div className="edit-actions">
                  <button className="text-btn danger" onClick={() => onDelete(p.id)}>
                    <Trash2 size={13} /> Excluir
                  </button>
                  <button className="text-btn" onClick={() => setDeletingId(null)}>
                    <X size={13} /> Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="timeline-top">
                  <span className="timeline-name">{p.method}</span>
                  <span className="timeline-total" style={{ color: "#7C9473" }}>
                    {currency(p.value)}
                  </span>
                </div>
                <span className="timeline-meta">
                  {p.date} · {p.time}
                </span>
                <div className="row-actions">
                  <button className="row-action-btn" onClick={() => startEdit(p)} aria-label="Editar pagamento">
                    <Pencil size={13} />
                  </button>
                  <button
                    className="row-action-btn"
                    onClick={() => setDeletingId(p.id)}
                    aria-label="Excluir pagamento"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function parseNum(v) {
  const n = parseFloat(String(v).replace(",", "."));
  return isNaN(n) ? 0 : n;
}

function ProductForm({ initial, onCancel, onSubmit, submitLabel }) {
  const [name, setName] = useState(initial?.name || "");
  const [desc, setDesc] = useState(initial?.desc || "");
  const [category, setCategory] = useState(initial?.category || "");
  const [ingredientes, setIngredientes] = useState(
    initial?.costBreakdown?.ingredientes != null ? String(initial.costBreakdown.ingredientes) : ""
  );
  const [embalagem, setEmbalagem] = useState(
    initial?.costBreakdown?.embalagem != null ? String(initial.costBreakdown.embalagem) : ""
  );
  const [outros, setOutros] = useState(
    initial?.costBreakdown?.outros != null ? String(initial.costBreakdown.outros) : ""
  );
  const [priceMode, setPriceMode] = useState(initial ? "custom" : "suggested");
  const [customPrice, setCustomPrice] = useState(initial?.price != null ? String(initial.price) : "");
  const [photo, setPhoto] = useState(initial?.photo || null);
  const [photoBusy, setPhotoBusy] = useState(false);

  const costTotal = parseNum(ingredientes) + parseNum(embalagem) + parseNum(outros);
  const suggested = costTotal * 2;
  const finalPrice = priceMode === "suggested" ? suggested : parseNum(customPrice);

  async function handlePhoto(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoBusy(true);
    try {
      const dataUri = await resizeImage(file, 300, 0.75);
      setPhoto(dataUri);
    } catch (err) {
      // falha silenciosa — foto simplesmente não é definida
    } finally {
      setPhotoBusy(false);
      e.target.value = "";
    }
  }

  function submit() {
    if (!name.trim() || !finalPrice) return;
    onSubmit({
      name: name.trim(),
      desc: desc.trim(),
      category: category.trim(),
      cost: costTotal,
      costBreakdown: {
        ingredientes: parseNum(ingredientes),
        embalagem: parseNum(embalagem),
        outros: parseNum(outros),
      },
      price: finalPrice,
      photo,
    });
  }

  return (
    <div className="form-card" style={initial ? { margin: 0 } : undefined}>
      <div className="photo-picker">
        {photo ? (
          <img src={photo} alt="Foto do produto" className="photo-preview" />
        ) : (
          <div className="photo-placeholder">
            <Package size={20} />
          </div>
        )}
        <div className="photo-picker-actions">
          <label className="text-btn photo-upload-btn">
            {photoBusy ? "Carregando…" : photo ? "Substituir foto" : "Adicionar foto"}
            <input type="file" accept="image/*" onChange={handlePhoto} hidden disabled={photoBusy} />
          </label>
          {photo && (
            <button className="text-btn" type="button" onClick={() => setPhoto(null)}>
              <X size={13} /> Remover
            </button>
          )}
        </div>
      </div>
      <input className="form-input" placeholder="Nome do produto" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="form-input" placeholder="Descrição (opcional)" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <input className="form-input" placeholder="Categoria (opcional)" value={category} onChange={(e) => setCategory(e.target.value)} />

      <p className="section-label" style={{ margin: "6px 0 0" }}>Custo de produção</p>
      <div className="form-row">
        <input className="form-input" placeholder="Ingredientes (R$)" value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} inputMode="decimal" />
        <input className="form-input" placeholder="Embalagem (R$)" value={embalagem} onChange={(e) => setEmbalagem(e.target.value)} inputMode="decimal" />
      </div>
      <input className="form-input" placeholder="Outros custos (opcional, R$)" value={outros} onChange={(e) => setOutros(e.target.value)} inputMode="decimal" />

      <div className="cost-summary">
        <span>Custo total: <strong>{currency(costTotal)}</strong></span>
        <span>Preço sugerido (100% de acréscimo): <strong>{currency(suggested)}</strong></span>
      </div>

      {priceMode === "suggested" ? (
        <button className="text-btn" onClick={() => { setPriceMode("custom"); setCustomPrice(suggested.toFixed(2)); }} type="button">
          <Pencil size={13} /> Modificar preço
        </button>
      ) : (
        <>
          <input className="form-input" placeholder="Seu preço de venda (R$)" value={customPrice} onChange={(e) => setCustomPrice(e.target.value)} inputMode="decimal" />
          <button className="text-btn" onClick={() => setPriceMode("suggested")} type="button">
            <Check size={13} /> Aprovar preço sugerido
          </button>
        </>
      )}

      <p className="empty-hint" style={{ margin: "2px 2px 0" }}>
        Preço de venda final: <strong>{currency(finalPrice)}</strong>
      </p>

      <button className="register-btn" onClick={submit} disabled={!name.trim() || !finalPrice}>
        <Package size={16} />
        {submitLabel}
      </button>
      <button className="text-btn" onClick={onCancel}>Cancelar</button>
    </div>
  );
}

function Produtos({ products, sales, onBack, onAddProduct, onEditProduct, onToggleActive, onDeleteProduct }) {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  function hasHistory(p) {
    return sales.some((s) => s.productId === p.id);
  }

  const active = products.filter((p) => p.active !== false);
  const archived = products.filter((p) => p.active === false);

  return (
    <div className="screen">
      <TopBar title="Catálogo de Produtos" onBack={onBack} />
      <p className="empty-hint" style={{ margin: "10px 20px 0" }}>
        O cadastro aqui é permanente — o estoque de cada dia é definido separadamente, ao abrir a
        Kendellícia's.
      </p>

      {showForm ? (
        <ProductForm
          submitLabel="Cadastrar produto"
          onCancel={() => setShowForm(false)}
          onSubmit={(data) => {
            onAddProduct(data);
            setShowForm(false);
          }}
        />
      ) : (
        <button className="new-btn" onClick={() => setShowForm(true)}>
          <Package size={16} />
          Novo produto
        </button>
      )}

      {!showForm && (
        <div className="people-list">
          {active.map((p) =>
            editingId === p.id ? (
              <ProductForm
                key={p.id}
                initial={p}
                submitLabel="Salvar alterações"
                onCancel={() => setEditingId(null)}
                onSubmit={(data) => {
                  onEditProduct(p.id, data);
                  setEditingId(null);
                }}
              />
            ) : deletingId === p.id ? (
              <div className="form-card" key={p.id} style={{ margin: 0 }}>
                <span className="confirm-text">
                  ⚠️ {hasHistory(p)
                    ? `Excluir ${p.name}? Como já existe venda vinculada, ele será arquivado em vez de apagado, para preservar o histórico e os relatórios.`
                    : `Excluir ${p.name}? Essa ação não pode ser desfeita.`}
                </span>
                <div className="edit-actions">
                  <button className="text-btn danger" onClick={() => { onDeleteProduct(p.id); setDeletingId(null); }}>
                    <Trash2 size={13} /> Excluir
                  </button>
                  <button className="text-btn" onClick={() => setDeletingId(null)}>
                    <X size={13} /> Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div className="people-row people-row-static" key={p.id}>
                <ProductAvatar photo={p.photo} tone={p.tone} name={p.name} size={42} />
                <span className="people-info">
                  <span className="people-name">{p.name}</span>
                  <span className="people-meta">{currency(p.price)} · custo {currency(p.cost)}</span>
                </span>
                <div className="row-actions">
                  <button className="row-action-btn" onClick={() => setEditingId(p.id)} aria-label="Editar produto">
                    <Pencil size={13} />
                  </button>
                  <button className="row-action-btn" onClick={() => onToggleActive(p.id)} aria-label="Desativar produto">
                    <AlertTriangle size={13} />
                  </button>
                  <button className="row-action-btn" onClick={() => setDeletingId(p.id)} aria-label="Excluir produto">
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            )
          )}

          {archived.length > 0 && (
            <>
              <p className="section-label" style={{ margin: "18px 0 0" }}>Arquivados</p>
              {archived.map((p) => (
                <div className="people-row people-row-archived" key={p.id}>
                  <span style={{ opacity: 0.5 }}>
                    <ProductAvatar photo={p.photo} tone={p.tone} name={p.name} size={42} />
                  </span>
                  <span className="people-info">
                    <span className="people-name">{p.name}</span>
                    <span className="people-meta">Arquivado — não aparece para novas vendas</span>
                  </span>
                  <button className="text-btn" onClick={() => onToggleActive(p.id)}>
                    Reativar
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

function PlannedProductForm({ initial, onCancel, onSubmit, submitLabel }) {
  const [name, setName] = useState(initial?.name || "");
  const [desc, setDesc] = useState(initial?.desc || "");
  const [category, setCategory] = useState(initial?.category || "");
  const [ingredients, setIngredients] = useState(
    initial?.ingredients || (initial?.ingredientsText ? [{ name: initial.ingredientsText, qty: "", unit: "" }] : [])
  );
  const [ingName, setIngName] = useState("");
  const [ingQty, setIngQty] = useState("");
  const [ingUnit, setIngUnit] = useState("");
  const [ingredientes, setIngredientes] = useState(
    initial?.costBreakdown?.ingredientes != null ? String(initial.costBreakdown.ingredientes) : ""
  );
  const [embalagem, setEmbalagem] = useState(
    initial?.costBreakdown?.embalagem != null ? String(initial.costBreakdown.embalagem) : ""
  );
  const [outros, setOutros] = useState(
    initial?.costBreakdown?.outros != null ? String(initial.costBreakdown.outros) : ""
  );
  const [priceMode, setPriceMode] = useState(initial ? "custom" : "suggested");
  const [customPrice, setCustomPrice] = useState(initial?.price != null ? String(initial.price) : "");
  const [obs, setObs] = useState(initial?.obs || "");

  const costTotal = parseNum(ingredientes) + parseNum(embalagem) + parseNum(outros);
  const suggested = costTotal * 2;
  const finalPrice = priceMode === "suggested" ? suggested : parseNum(customPrice);

  function addIngredient() {
    if (!ingName.trim()) return;
    setIngredients((list) => [...list, { name: ingName.trim(), qty: ingQty.trim(), unit: ingUnit.trim() }]);
    setIngName("");
    setIngQty("");
    setIngUnit("");
  }

  function removeIngredient(idx) {
    setIngredients((list) => list.filter((_, i) => i !== idx));
  }

  function submit() {
    if (!name.trim() || !finalPrice) return;
    onSubmit({
      name: name.trim(),
      desc: desc.trim(),
      category: category.trim(),
      ingredients,
      cost: costTotal,
      costBreakdown: { ingredientes: parseNum(ingredientes), embalagem: parseNum(embalagem), outros: parseNum(outros) },
      price: finalPrice,
      obs: obs.trim(),
    });
  }

  return (
    <div className="form-card" style={initial ? { margin: 0 } : undefined}>
      <input className="form-input" placeholder="Nome do produto desejado" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="form-input" placeholder="Descrição (opcional)" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <input className="form-input" placeholder="Categoria (opcional)" value={category} onChange={(e) => setCategory(e.target.value)} />

      <p className="section-label" style={{ margin: "6px 0 0" }}>Ingredientes necessários</p>
      {ingredients.length > 0 && (
        <div className="ingredient-list">
          {ingredients.map((ing, idx) => (
            <div className="ingredient-chip" key={idx}>
              <span>
                {ing.name}{ing.qty ? ` — ${ing.qty}${ing.unit ? " " + ing.unit : ""}` : ""}
              </span>
              <button className="row-action-btn" onClick={() => removeIngredient(idx)} type="button" aria-label="Remover ingrediente">
                <X size={11} />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="form-row">
        <input className="form-input" placeholder="Ingrediente" value={ingName} onChange={(e) => setIngName(e.target.value)} />
        <input className="form-input" placeholder="Qtd" value={ingQty} onChange={(e) => setIngQty(e.target.value)} style={{ maxWidth: 70 }} />
        <input className="form-input" placeholder="Un." value={ingUnit} onChange={(e) => setIngUnit(e.target.value)} style={{ maxWidth: 70 }} />
      </div>
      <button className="text-btn" onClick={addIngredient} type="button">
        <Plus size={13} /> Adicionar ingrediente
      </button>

      <p className="section-label" style={{ margin: "6px 0 0" }}>Custo estimado</p>
      <div className="form-row">
        <input className="form-input" placeholder="Ingredientes (R$)" value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} inputMode="decimal" />
        <input className="form-input" placeholder="Embalagem (R$)" value={embalagem} onChange={(e) => setEmbalagem(e.target.value)} inputMode="decimal" />
      </div>
      <input className="form-input" placeholder="Outros custos (opcional, R$)" value={outros} onChange={(e) => setOutros(e.target.value)} inputMode="decimal" />

      <div className="cost-summary">
        <span>Custo total: <strong>{currency(costTotal)}</strong></span>
        <span>Preço sugerido (100% de acréscimo): <strong>{currency(suggested)}</strong></span>
      </div>

      {priceMode === "suggested" ? (
        <button className="text-btn" onClick={() => { setPriceMode("custom"); setCustomPrice(suggested.toFixed(2)); }} type="button">
          <Pencil size={13} /> Modificar preço
        </button>
      ) : (
        <>
          <input className="form-input" placeholder="Preço pretendido (R$)" value={customPrice} onChange={(e) => setCustomPrice(e.target.value)} inputMode="decimal" />
          <button className="text-btn" onClick={() => setPriceMode("suggested")} type="button">
            <Check size={13} /> Aprovar sugestão
          </button>
        </>
      )}

      <p className="empty-hint" style={{ margin: "2px 2px 0" }}>
        Preço pretendido: <strong>{currency(finalPrice)}</strong>
      </p>

      <input className="form-input" placeholder="Observações (opcional)" value={obs} onChange={(e) => setObs(e.target.value)} />

      <button className="register-btn" onClick={submit} disabled={!name.trim() || !finalPrice}>
        <Lightbulb size={16} />
        {submitLabel}
      </button>
      <button className="text-btn" onClick={onCancel}>Cancelar</button>
    </div>
  );
}

const STATUS_LABEL = { planejando: "Quero vender futuramente", descartado: "Não vou vender", produto: "Virou produto da loja" };

function DesejoVenderSection({ plannedProducts, onAdd, onEdit, onDelete, onSetStatus, onTransform, onQuickShopping }) {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  return (
    <div>
      {showForm ? (
        <PlannedProductForm
          submitLabel="Salvar planejamento"
          onCancel={() => setShowForm(false)}
          onSubmit={(data) => { onAdd(data); setShowForm(false); }}
        />
      ) : (
        <button className="new-btn" onClick={() => setShowForm(true)}>
          <Lightbulb size={16} /> Novo produto desejado
        </button>
      )}

      <h3 className="timeline-title">Histórico de planejamento</h3>
      {plannedProducts.length === 0 ? (
        <p className="empty-hint" style={{ margin: "0 20px" }}>Nenhum produto planejado ainda.</p>
      ) : (
        <div className="people-list">
          {plannedProducts.map((p) =>
            editingId === p.id ? (
              <PlannedProductForm
                key={p.id}
                initial={p}
                submitLabel="Salvar alterações"
                onCancel={() => setEditingId(null)}
                onSubmit={(data) => { onEdit(p.id, data); setEditingId(null); }}
              />
            ) : deletingId === p.id ? (
              <div className="form-card" key={p.id} style={{ margin: 0 }}>
                <span className="confirm-text">⚠️ Excluir o planejamento de "{p.name}"?</span>
                <div className="edit-actions">
                  <button className="text-btn danger" onClick={() => { onDelete(p.id); setDeletingId(null); }}>
                    <Trash2 size={13} /> Excluir
                  </button>
                  <button className="text-btn" onClick={() => setDeletingId(null)}>
                    <X size={13} /> Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div className="planned-card" key={p.id}>
                <div className="planned-top">
                  <span className="people-name">{p.name}</span>
                  <span className={"historico-status status-" + p.status}>{STATUS_LABEL[p.status]}</span>
                </div>
                <span className="people-meta">
                  Planejado em {p.createdDate} · custo {currency(p.cost)} · preço {currency(p.price)}
                </span>
                {(() => {
                  const list = p.ingredients || (p.ingredientsText ? [{ name: p.ingredientsText }] : []);
                  return (
                    list.length > 0 && (
                      <span className="people-meta">
                        Ingredientes: {list.map((i) => i.name + (i.qty ? ` (${i.qty}${i.unit ? " " + i.unit : ""})` : "")).join(", ")}
                      </span>
                    )
                  );
                })()}
                <div className="planned-actions">
                  <button className="row-action-btn" onClick={() => setEditingId(p.id)} aria-label="Editar">
                    <Pencil size={13} />
                  </button>
                  <button className="row-action-btn" onClick={() => setDeletingId(p.id)} aria-label="Excluir">
                    <Trash2 size={13} />
                  </button>
                  {p.status !== "produto" && (
                    <>
                      <button className="text-btn" onClick={() => onSetStatus(p.id, "planejando")}>Quero vender futuramente</button>
                      <button className="text-btn" onClick={() => onSetStatus(p.id, "descartado")}>
                        <Ban size={12} /> Não vou vender
                      </button>
                      <button className="text-btn" onClick={() => onTransform(p)}>
                        <ArrowRightCircle size={13} /> Transformar em produto
                      </button>
                      {(p.ingredients?.length > 0 || p.ingredientsText) && (
                        <button className="text-btn" onClick={() => onQuickShopping(p.ingredients || [{ name: p.ingredientsText }])}>
                          <ShoppingCart size={13} /> Adicionar ingredientes à lista de compras
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

function ComprasSection({ shoppingList, onAdd, onEdit, onToggle, onDelete }) {
  const [showForm, setShowForm] = useState(false);
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [unit, setUnit] = useState("");
  const [neededDate, setNeededDate] = useState("");
  const [note, setNote] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  function submit() {
    if (!item.trim()) return;
    onAdd({ item: item.trim(), qty: qty.trim(), unit: unit.trim(), neededDate: neededDate.trim(), note: note.trim() });
    setItem("");
    setQty("");
    setUnit("");
    setNeededDate("");
    setNote("");
    setShowForm(false);
  }

  const pendentes = shoppingList.filter((i) => i.status === "pendente");
  const comprados = shoppingList.filter((i) => i.status === "comprado");

  return (
    <div>
      {showForm ? (
        <div className="form-card">
          <input className="form-input" placeholder="Item (ex: leite condensado)" value={item} onChange={(e) => setItem(e.target.value)} />
          <div className="form-row">
            <input className="form-input" placeholder="Quantidade" value={qty} onChange={(e) => setQty(e.target.value)} />
            <input className="form-input" placeholder="Unidade (un, kg, cx...)" value={unit} onChange={(e) => setUnit(e.target.value)} />
          </div>
          <input className="form-input" type="date" value={neededDate} onChange={(e) => setNeededDate(e.target.value)} />
          <input className="form-input" placeholder="Observação (opcional)" value={note} onChange={(e) => setNote(e.target.value)} />
          <button className="register-btn" onClick={submit} disabled={!item.trim()}>
            <ShoppingCart size={16} /> Adicionar à lista
          </button>
          <button className="text-btn" onClick={() => setShowForm(false)}>Cancelar</button>
        </div>
      ) : (
        <button className="new-btn" onClick={() => setShowForm(true)}>
          <ShoppingCart size={16} /> Novo item
        </button>
      )}

      <h3 className="timeline-title">Pendentes</h3>
      {pendentes.length === 0 ? (
        <p className="empty-hint" style={{ margin: "0 20px" }}>Nada pendente na lista de compras.</p>
      ) : (
        <div className="people-list">
          {pendentes.map((i) => (
            <ShoppingRow key={i.id} i={i} editingId={editingId} setEditingId={setEditingId} deletingId={deletingId} setDeletingId={setDeletingId} onEdit={onEdit} onToggle={onToggle} onDelete={onDelete} />
          ))}
        </div>
      )}

      {comprados.length > 0 && (
        <>
          <h3 className="timeline-title">Já comprados</h3>
          <div className="people-list">
            {comprados.map((i) => (
              <ShoppingRow key={i.id} i={i} editingId={editingId} setEditingId={setEditingId} deletingId={deletingId} setDeletingId={setDeletingId} onEdit={onEdit} onToggle={onToggle} onDelete={onDelete} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ShoppingRow({ i, editingId, setEditingId, deletingId, setDeletingId, onEdit, onToggle, onDelete }) {
  const [val, setVal] = useState(i.item);
  const isEditing = editingId === i.id;
  const isDeleting = deletingId === i.id;

  if (isEditing) {
    return (
      <div className="form-card" style={{ margin: 0 }}>
        <input className="form-input" value={val} onChange={(e) => setVal(e.target.value)} />
        <div className="edit-actions">
          <button className="text-btn" onClick={() => { onEdit(i.id, { item: val }); setEditingId(null); }}>
            <Check size={13} /> Salvar
          </button>
          <button className="text-btn" onClick={() => setEditingId(null)}>
            <X size={13} /> Cancelar
          </button>
        </div>
      </div>
    );
  }
  if (isDeleting) {
    return (
      <div className="form-card" style={{ margin: 0 }}>
        <span className="confirm-text">⚠️ Excluir "{i.item}" da lista de compras?</span>
        <div className="edit-actions">
          <button className="text-btn danger" onClick={() => { onDelete(i.id); setDeletingId(null); }}>
            <Trash2 size={13} /> Excluir
          </button>
          <button className="text-btn" onClick={() => setDeletingId(null)}>
            <X size={13} /> Cancelar
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="people-row people-row-static">
      <button className="shopping-check" onClick={() => onToggle(i.id)} aria-label="Marcar como comprado">
        {i.status === "comprado" ? <Check size={16} /> : <span className="shopping-empty-box" />}
      </button>
      <span className="people-info">
        <span className={"people-name" + (i.status === "comprado" ? " strike" : "")}>
          {i.item} {i.qty && `— ${i.qty}${i.unit ? " " + i.unit : ""}`}
        </span>
        {(i.neededDate || i.note) && (
          <span className="people-meta">{i.neededDate && `Até ${i.neededDate}`} {i.note}</span>
        )}
      </span>
      <div className="row-actions">
        <button className="row-action-btn" onClick={() => setEditingId(i.id)} aria-label="Editar">
          <Pencil size={13} />
        </button>
        <button className="row-action-btn" onClick={() => setDeletingId(i.id)} aria-label="Excluir">
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  );
}

function NotasSection({ notes, onAdd, onEdit, onDelete }) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [eTitle, setETitle] = useState("");
  const [eText, setEText] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  function submit() {
    if (!text.trim()) return;
    onAdd({ title: title.trim(), text: text.trim() });
    setTitle("");
    setText("");
    setShowForm(false);
  }

  return (
    <div>
      {showForm ? (
        <div className="form-card">
          <input className="form-input" placeholder="Título (opcional)" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea className="form-input" style={{ minHeight: 80, resize: "vertical" }} placeholder="Escreva sua anotação…" value={text} onChange={(e) => setText(e.target.value)} />
          <button className="register-btn" onClick={submit} disabled={!text.trim()}>
            <StickyNote size={16} /> Salvar anotação
          </button>
          <button className="text-btn" onClick={() => setShowForm(false)}>Cancelar</button>
        </div>
      ) : (
        <button className="new-btn" onClick={() => setShowForm(true)}>
          <StickyNote size={16} /> Nova anotação
        </button>
      )}

      {notes.length === 0 ? (
        <p className="empty-hint" style={{ margin: "16px 20px 0" }}>Nenhuma anotação ainda.</p>
      ) : (
        <div className="people-list">
          {notes.map((n) =>
            editingId === n.id ? (
              <div className="form-card" key={n.id} style={{ margin: 0 }}>
                <input className="form-input" value={eTitle} onChange={(e) => setETitle(e.target.value)} placeholder="Título" />
                <textarea className="form-input" style={{ minHeight: 80 }} value={eText} onChange={(e) => setEText(e.target.value)} />
                <div className="edit-actions">
                  <button className="text-btn" onClick={() => { onEdit(n.id, { title: eTitle, text: eText }); setEditingId(null); }}>
                    <Check size={13} /> Salvar
                  </button>
                  <button className="text-btn" onClick={() => setEditingId(null)}>
                    <X size={13} /> Cancelar
                  </button>
                </div>
              </div>
            ) : deletingId === n.id ? (
              <div className="form-card" key={n.id} style={{ margin: 0 }}>
                <span className="confirm-text">⚠️ Excluir esta anotação?</span>
                <div className="edit-actions">
                  <button className="text-btn danger" onClick={() => { onDelete(n.id); setDeletingId(null); }}>
                    <Trash2 size={13} /> Excluir
                  </button>
                  <button className="text-btn" onClick={() => setDeletingId(null)}>
                    <X size={13} /> Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div className="note-card" key={n.id}>
                {n.title && <p className="note-title">{n.title}</p>}
                <p className="note-text">{n.text}</p>
                <div className="historico-top">
                  <span className="historico-date">{n.date}</span>
                  <div className="row-actions">
                    <button
                      className="row-action-btn"
                      onClick={() => { setEditingId(n.id); setETitle(n.title || ""); setEText(n.text); }}
                      aria-label="Editar"
                    >
                      <Pencil size={13} />
                    </button>
                    <button className="row-action-btn" onClick={() => setDeletingId(n.id)} aria-label="Excluir">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

function Anotacoes({
  plannedProducts, shoppingList, notes, onBack,
  onAddPlanned, onEditPlanned, onDeletePlanned, onSetPlannedStatus, onTransformPlanned,
  onAddShoppingItem, onEditShoppingItem, onToggleShoppingStatus, onDeleteShoppingItem, onAddShoppingItemsBatch,
  onAddNote, onEditNote, onDeleteNote,
}) {
  const [tab, setTab] = useState("desejo");

  function quickShopping(ingredientsList) {
    onAddShoppingItemsBatch(ingredientsList.map((i) => ({ name: i.name, qty: i.qty || "", unit: i.unit || "" })));
  }

  const tabs = [
    { key: "desejo", label: "Desejo vender", icon: <Lightbulb size={14} /> },
    { key: "compras", label: "Compras", icon: <ShoppingCart size={14} /> },
    { key: "notas", label: "Notas gerais", icon: <StickyNote size={14} /> },
  ];

  return (
    <div className="screen">
      <TopBar title="Anotações" onBack={onBack} />
      <div className="filter-chip-row" style={{ padding: "6px 20px 4px" }}>
        {tabs.map((t) => (
          <button key={t.key} className={"filter-chip" + (tab === t.key ? " filter-chip-active" : "")} onClick={() => setTab(t.key)}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {tab === "desejo" && (
        <DesejoVenderSection
          plannedProducts={plannedProducts}
          onAdd={onAddPlanned}
          onEdit={onEditPlanned}
          onDelete={onDeletePlanned}
          onSetStatus={onSetPlannedStatus}
          onTransform={onTransformPlanned}
          onQuickShopping={quickShopping}
        />
      )}
      {tab === "compras" && (
        <ComprasSection
          shoppingList={shoppingList}
          onAdd={onAddShoppingItem}
          onEdit={onEditShoppingItem}
          onToggle={onToggleShoppingStatus}
          onDelete={onDeleteShoppingItem}
        />
      )}
      {tab === "notas" && <NotasSection notes={notes} onAdd={onAddNote} onEdit={onEditNote} onDelete={onDeleteNote} />}
    </div>
  );
}

function BottomNav({ screen, onHome, onVendas, onFinanceiro, onClientes, onAnotacoes }) {
  const items = [
    { key: "home", label: "Início", icon: <HomeIcon size={20} />, onClick: onHome },
    { key: "clientes", label: "Clientes", icon: <Users size={20} />, onClick: onClientes },
    { key: "vendas", label: "Vendas", icon: <ShoppingBag size={20} />, onClick: onVendas },
    { key: "mensal", label: "Financeiro", icon: <Wallet size={20} />, onClick: onFinanceiro },
    { key: "anotacoes", label: "Notas", icon: <NotebookPen size={20} />, onClick: onAnotacoes },
  ];
  return (
    <nav className="bottom-nav">
      {items.map((it) => (
        <button
          key={it.key}
          className={"nav-item" + (screen === it.key || (it.key === "vendas" && screen === "abrir") ? " nav-item-active" : "")}
          onClick={it.onClick}
        >
          {it.icon}
          <span>{it.label}</span>
        </button>
      ))}
    </nav>
  );
}

const styles = {
  page: { minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "flex-start", background: "#F4E9D8" },
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Quicksand:wght@500;600;700&family=Caveat:wght@600&display=swap');

* { box-sizing: border-box; }

html, body, #root { height: 100%; margin: 0; }

.phone {
  position: relative;
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  background: #F4E9D8;
  overflow: hidden;
  font-family: 'Quicksand', sans-serif;
  color: #3B2314;
  display: flex;
  flex-direction: column;
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}

/* Dentro do preview de navegador (tela larga), mantém o visual de "celular
   emoldurado" para ficar bonito na demonstração — mas dentro do app Android
   de verdade (tela estreita, é a tela toda) isso não se aplica, ele preenche
   a tela inteira sem moldura. */
@media (min-width: 560px) {
  .page { padding: 24px 12px; background: #E7DCC8; }
  .phone {
    min-height: 800px;
    border-radius: 40px;
    box-shadow: 0 30px 60px -20px rgba(59, 35, 20, 0.35);
  }
}

.screen { flex: 1; overflow-y: auto; padding-bottom: 100px; }
.loading-screen { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; }
.loading-text { font-family: 'Fraunces', serif; font-size: 14px; opacity: 0.7; }
.save-warning { position: absolute; top: 0; left: 0; right: 0; background: #C0392B; color: white; font-size: 10.5px; padding: 6px 14px; display: flex; align-items: center; gap: 6px; justify-content: center; z-index: 20; }

.hero { position: relative; background: linear-gradient(160deg, #6B4428 0%, #3B2314 100%); padding: 30px 24px 34px; color: #F4E9D8; border-radius: 0 0 46% 46% / 0 0 60px 60px; overflow: hidden; }
.hero-arc { position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border: 1px dashed rgba(244, 233, 216, 0.35); border-radius: 50%; }
.hero-content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; text-align: center; }
.hero-logo { width: 88px; height: 88px; border-radius: 50%; object-fit: cover; border: 3px solid rgba(244, 233, 216, 0.5); box-shadow: 0 10px 22px -6px rgba(0,0,0,0.4); margin-bottom: 12px; }
.hero-title { font-family: 'Caveat', cursive; font-size: 40px; line-height: 1; margin: 0 0 4px; color: #F4E9D8; }
.hero-sub { font-family: 'Fraunces', serif; font-size: 15px; margin: 0 0 18px; opacity: 0.9; }
.stat-blob { width: 168px; border-radius: 44px; background: #E3A83B; color: #3B2314; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 16px; box-shadow: 0 14px 24px -8px rgba(59,35,20,0.45); }
.stat-number { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 700; line-height: 1; }
.stat-label { font-size: 11.5px; font-weight: 700; white-space: nowrap; }

.top-logo { width: 34px; height: 34px; border-radius: 50%; object-fit: cover; margin-left: auto; border: 2px solid #EFDFC4; }

.actions { padding: 30px 20px 10px; display: flex; flex-direction: column; gap: 14px; }
.action { display: flex; align-items: center; gap: 14px; padding: 16px 18px; border: none; border-radius: 24px; background: #EFDFC4; cursor: pointer; text-align: left; transition: transform 0.15s ease; }
.action:hover { transform: translateY(-2px); }
.action-primary { background: linear-gradient(135deg, #C97C3F, #A85D2A); color: #F4E9D8; }
.action-icon { width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(59, 35, 20, 0.08); flex-shrink: 0; }
.action-primary .action-icon { background: rgba(244, 233, 216, 0.2); }
.action-text { display: flex; flex-direction: column; gap: 2px; }
.action-label { font-weight: 700; font-size: 15.5px; }
.action-hint { font-size: 12px; opacity: 0.75; }

.topbar { display: flex; align-items: center; gap: 10px; padding: 22px 18px 8px; }
.icon-btn { width: 36px; height: 36px; border-radius: 50%; border: none; background: #EFDFC4; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.topbar-title { font-family: 'Fraunces', serif; font-size: 20px; margin: 0; }

.section-label { font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; opacity: 0.55; margin: 14px 20px 0; }

.warning-pill { margin: 10px 18px 0; display: flex; align-items: center; gap: 8px; background: #F3D9CE; color: #7A2E1D; padding: 10px 14px; border-radius: 20px; font-size: 12px; }

.chip-row { display: flex; gap: 12px; overflow-x: auto; padding: 10px 18px 6px; scrollbar-width: none; }
.chip-row::-webkit-scrollbar { display: none; }
.chip { flex: 0 0 auto; width: 84px; border: none; background: transparent; display: flex; flex-direction: column; align-items: center; gap: 6px; cursor: pointer; padding: 4px; border-radius: 18px; }
.chip-active { background: rgba(201, 124, 63, 0.15); }
.chip-circle { width: 54px; height: 54px; border-radius: 50%; color: #F4E9D8; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; border: 3px solid transparent; }
.chip-active .chip-circle { border-color: #C97C3F; }
.chip-name { font-size: 10.5px; text-align: center; line-height: 1.2; }
.chip-price { font-size: 10.5px; font-weight: 700; opacity: 0.7; }

.client-chip { flex: 0 0 auto; border: 1.5px solid #D9C6A3; background: #F4E9D8; color: #3B2314; padding: 9px 16px; border-radius: 999px; font-size: 12.5px; font-weight: 600; cursor: pointer; }
.client-chip-active { background: #3B2314; color: #F4E9D8; border-color: #3B2314; }
.client-selected-pill { display: flex; align-items: center; gap: 10px; margin: 0 20px; background: #EFDFC4; border-radius: 18px; padding: 8px 12px; }
.client-selected-name { flex: 1; font-size: 13px; font-weight: 700; }
.client-search-list { display: flex; flex-direction: column; gap: 6px; margin-top: 8px; max-height: 220px; overflow-y: auto; }
.client-search-row { display: flex; align-items: center; gap: 10px; border: none; background: #F4E9D8; border-radius: 14px; padding: 8px 10px; cursor: pointer; text-align: left; font-size: 13px; }

.compose { margin: 14px 18px 0; background: #EFDFC4; border-radius: 26px; padding: 18px; display: grid; grid-template-columns: 52px 1fr auto; gap: 10px 14px; align-items: center; }
.compose-preview { width: 52px; height: 52px; border-radius: 50%; color: #F4E9D8; display: flex; align-items: center; justify-content: center; font-weight: 700; }
.compose-info { display: flex; flex-direction: column; }
.compose-name { margin: 0; font-weight: 700; font-size: 14.5px; }
.compose-stock { margin: 0; font-size: 11px; opacity: 0.65; }
.stepper { grid-column: 1 / -1; display: flex; align-items: center; justify-content: center; gap: 16px; padding: 6px 0; }
.step-btn { width: 34px; height: 34px; border-radius: 50%; border: none; background: #3B2314; color: #F4E9D8; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.step-value { font-family: 'Fraunces', serif; font-size: 20px; min-width: 24px; text-align: center; }
.client-input { grid-column: 1 / -1; border: none; background: #F4E9D8; border-radius: 16px; padding: 11px 14px; font-family: 'Quicksand', sans-serif; font-size: 13.5px; outline: none; }
.register-btn { grid-column: 1 / -1; border: none; background: linear-gradient(135deg, #C97C3F, #A85D2A); color: #F4E9D8; padding: 13px 16px; border-radius: 18px; font-weight: 700; font-size: 13.5px; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; width: 100%; }
.register-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.register-flash { transform: scale(1.03); box-shadow: 0 10px 20px -6px rgba(169, 93, 42, 0.6); }

.empty-hint { margin: 16px 20px 0; font-size: 13px; opacity: 0.6; line-height: 1.5; }
.inline-link { border: none; background: none; color: #A85D2A; font-weight: 700; text-decoration: underline; cursor: pointer; padding: 0; font-size: 13px; }

.timeline-title { font-family: 'Fraunces', serif; font-size: 16px; margin: 26px 20px 10px; }
.timeline { padding: 0 20px; }
.timeline-row { display: flex; gap: 12px; }
.timeline-marker { display: flex; flex-direction: column; align-items: center; }
.timeline-dot { width: 9px; height: 9px; border-radius: 50%; background: #C97C3F; margin-top: 5px; }
.timeline-line { flex: 1; width: 1.5px; background: #D9C6A3; margin: 2px 0; }
.timeline-content { flex: 1; padding-bottom: 16px; }
.timeline-top { display: flex; justify-content: space-between; gap: 8px; }
.timeline-name { font-weight: 700; font-size: 13.5px; }
.timeline-total { font-weight: 700; font-size: 13.5px; color: #A85D2A; }
.timeline-meta { font-size: 11.5px; opacity: 0.6; }
.badge-paid { color: #5E7A56; font-weight: 700; }
.badge-open { color: #A85D2A; font-weight: 700; }
.row-actions { display: flex; gap: 8px; margin-top: 4px; }
.row-action-btn { border: none; background: #EFDFC4; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #6B4428; }
.edit-block { display: flex; flex-direction: column; gap: 8px; background: #F4E9D8; border-radius: 16px; padding: 10px; }
.edit-actions { display: flex; gap: 10px; }
.confirm-text { font-size: 12px; color: #7A2E1D; line-height: 1.5; }
.text-btn.danger { color: #A0402A; }

.open-list { display: flex; flex-direction: column; gap: 12px; padding: 14px 20px 4px; }
.open-row { display: flex; flex-direction: column; gap: 8px; background: #F4E9D8; border-radius: 20px; padding: 10px 14px; }
.open-row-active { background: #EFDFC4; }
.open-toggle { display: flex; align-items: center; gap: 12px; border: none; background: none; cursor: pointer; padding: 0; text-align: left; }
.open-name { font-size: 13.5px; font-weight: 700; }
.open-qty { border: none; background: #FFFFFFAA; border-radius: 14px; padding: 9px 12px; font-size: 13px; font-family: 'Quicksand', sans-serif; outline: none; width: 100%; }

.conf-row { background: #F4E9D8; border-radius: 20px; padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; }
.conf-top { display: flex; align-items: center; gap: 10px; }
.conf-name { flex: 1; font-size: 13px; font-weight: 700; }
.conf-expected { font-size: 11px; opacity: 0.6; }
.diff-block { display: flex; flex-direction: column; gap: 6px; }
.diff-text { font-size: 12px; font-weight: 700; color: #A0402A; }

.close-btn { width: 100%; }

.report { padding: 10px 20px 0; }
.report-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 6px; }
.report-card { background: #EFDFC4; border-radius: 22px; padding: 16px; display: flex; flex-direction: column; gap: 6px; }
.report-card-accent { background: linear-gradient(135deg, #C97C3F, #A85D2A); color: #F4E9D8; }
.report-label { font-size: 11.5px; opacity: 0.8; }
.report-value { font-family: 'Fraunces', serif; font-size: 19px; font-weight: 700; }

.preference-pill { margin-top: 14px; display: flex; align-items: center; gap: 8px; background: #F4E9D8; border: 1.5px dashed #C97C3F; padding: 12px 16px; border-radius: 20px; font-size: 12.5px; }

.stock-list { display: flex; flex-direction: column; gap: 10px; padding: 0 20px 10px; }
.stock-row { display: flex; align-items: center; gap: 12px; }
.stock-circle { width: 38px; height: 38px; font-size: 11px; }
.stock-name { flex: 1; font-size: 13px; font-weight: 600; }
.stock-qty { font-size: 12px; opacity: 0.65; }

.chart-card { background: #EFDFC4; border-radius: 26px; padding: 16px 12px 14px; margin: 0 0 16px; }
.chart-note { display: flex; align-items: center; gap: 6px; justify-content: center; font-size: 12px; font-weight: 700; color: #A85D2A; margin-top: 4px; }
.chart-caption { font-size: 10.5px; opacity: 0.55; text-align: center; margin: 6px 6px 0; line-height: 1.4; }
.pie-legend { display: flex; flex-wrap: wrap; gap: 8px 14px; justify-content: center; margin-top: 6px; }
.pie-legend-item { display: flex; align-items: center; gap: 6px; font-size: 11px; }
.pie-dot { width: 8px; height: 8px; border-radius: 50%; }

.form-card { margin: 16px 20px 0; background: #EFDFC4; border-radius: 26px; padding: 18px; display: flex; flex-direction: column; gap: 10px; }
.form-row { display: flex; gap: 10px; }
.form-row .form-input { flex: 1; }
.form-input { border: none; background: #F4E9D8; border-radius: 16px; padding: 12px 14px; font-family: 'Quicksand', sans-serif; font-size: 13.5px; outline: none; width: 100%; }
.text-btn { border: none; background: transparent; color: #A85D2A; font-weight: 700; font-size: 12.5px; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer; padding: 6px; }
.cost-summary { display: flex; flex-direction: column; gap: 2px; background: #F4E9D8; border-radius: 14px; padding: 10px 12px; font-size: 11.5px; }
.avatar-photo { border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.photo-picker { display: flex; align-items: center; gap: 12px; }
.photo-preview { width: 56px; height: 56px; border-radius: 16px; object-fit: cover; }
.photo-placeholder { width: 56px; height: 56px; border-radius: 16px; background: #F4E9D8; display: flex; align-items: center; justify-content: center; color: #6B4428; flex-shrink: 0; }
.photo-picker-actions { display: flex; flex-direction: column; gap: 4px; }
.photo-upload-btn { cursor: pointer; }
.attachment-row { display: flex; gap: 8px; margin-top: 6px; flex-wrap: wrap; }
.attachment-thumb { position: relative; width: 46px; height: 46px; }
.attachment-thumb img { width: 100%; height: 100%; object-fit: cover; border-radius: 10px; cursor: pointer; }
.attachment-remove { position: absolute; top: -5px; right: -5px; width: 16px; height: 16px; border-radius: 50%; background: #3B2314; color: white; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.photo-lightbox { position: fixed; inset: 0; background: rgba(0,0,0,0.75); display: flex; align-items: center; justify-content: center; z-index: 100; padding: 20px; }
.photo-lightbox img { max-width: 100%; max-height: 100%; border-radius: 12px; }
.progress-list { display: flex; flex-direction: column; gap: 10px; padding: 0 20px; }
.progress-row { display: flex; flex-direction: column; gap: 4px; }
.progress-top { display: flex; justify-content: space-between; font-size: 12px; }
.progress-name { font-weight: 700; }
.progress-count { opacity: 0.65; }
.progress-track { height: 8px; background: #EFDFC4; border-radius: 6px; overflow: hidden; }
.progress-fill { height: 100%; background: linear-gradient(90deg, #C97C3F, #E3A83B); border-radius: 6px; }
.new-btn { margin: 16px 20px 0; border: 1.5px dashed #C97C3F; background: transparent; color: #A85D2A; font-weight: 700; font-size: 13px; padding: 13px; border-radius: 20px; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; width: calc(100% - 40px); }

.people-list { display: flex; flex-direction: column; gap: 10px; padding: 16px 20px 10px; }
.people-row { display: flex; align-items: center; gap: 12px; background: #F4E9D8; border: none; border-radius: 20px; padding: 10px 14px; cursor: pointer; text-align: left; }
.people-row-click { display: flex; align-items: center; gap: 12px; flex: 1; border: none; background: none; cursor: pointer; text-align: left; padding: 0; min-width: 0; }
.people-row-archived { opacity: 0.75; cursor: default; }
.people-row-static { cursor: default; }
.people-avatar { width: 42px; height: 42px; font-size: 12px; flex-shrink: 0; }
.people-info { display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0; }
.people-name { font-size: 13.5px; font-weight: 700; }
.people-meta { font-size: 11px; opacity: 0.6; display: flex; align-items: center; gap: 4px; }
.people-cta { font-size: 11px; font-weight: 700; color: #A85D2A; white-space: nowrap; }

.boleto-card { margin: 18px 20px 0; background: #EFDFC4; border-radius: 28px; padding: 26px 22px; display: flex; flex-direction: column; align-items: center; text-align: center; }
.boleto-logo { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; margin-bottom: 8px; border: 2px solid #3B2314; }
.boleto-brand { font-size: 11px; opacity: 0.7; margin: 0 0 14px; }
.boleto-title { font-family: 'Fraunces', serif; font-size: 17px; margin: 0 0 6px; display: flex; align-items: center; gap: 6px; }
.boleto-client { font-size: 13px; font-weight: 700; margin: 0; }
.boleto-divider { width: 100%; border-top: 1.5px dashed #C9A876; margin: 16px 0; }
.boleto-items { width: 100%; display: flex; flex-direction: column; gap: 12px; text-align: left; }
.boleto-item-top { display: flex; justify-content: space-between; gap: 10px; }
.boleto-item-name { font-size: 13px; font-weight: 600; }
.boleto-item-value { font-size: 13px; font-weight: 700; color: #A85D2A; }
.boleto-item-date { font-size: 10.5px; opacity: 0.55; }
.boleto-total { width: 100%; display: flex; justify-content: space-between; font-family: 'Fraunces', serif; font-size: 16px; font-weight: 700; margin-top: 4px; }
.boleto-period { font-size: 10.5px; opacity: 0.6; margin: 0 0 4px; }
.quitada-badge { margin-top: 10px; background: #E4EEDF; color: #4C6B44; font-size: 12.5px; font-weight: 700; padding: 10px 14px; border-radius: 16px; text-align: center; width: 100%; }
.pix-block { width: 100%; display: flex; flex-direction: column; gap: 4px; align-items: flex-start; margin-top: 6px; }
.pix-label { font-size: 11.5px; font-weight: 700; opacity: 0.7; margin: 4px 0 0; }
.pix-key { font-size: 12px; margin: 0; word-break: break-all; }
.qr-block { display: flex; flex-direction: column; align-items: center; gap: 8px; margin-top: 8px; width: 100%; }
.qr-image { width: 160px; height: 160px; border-radius: 12px; background: white; padding: 8px; }
.qr-disclaimer { font-size: 10px; opacity: 0.6; line-height: 1.5; text-align: left; }
.pdf-btn-row { display: flex; gap: 8px; padding: 0 20px; }
.pdf-btn { flex: 1; background: #EFDFC4; border-radius: 14px; padding: 10px; }
.pdf-btn:disabled { opacity: 0.4; }
.pdf-embed-wrap { padding: 0 20px; }
.pdf-embed { width: 100%; height: 360px; border-radius: 16px; border: 1px solid #D9C6A3; }
.confirm-overlay { position: absolute; inset: 0; background: rgba(59,35,20,0.55); display: flex; align-items: center; justify-content: center; z-index: 50; padding: 24px; }
.confirm-card { background: #F4E9D8; border-radius: 26px; padding: 28px 22px; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; width: 100%; max-width: 300px; }
.confirm-card h3 { font-family: 'Fraunces', serif; font-size: 17px; margin: 6px 0 0; }
.confirm-card p { font-size: 12.5px; opacity: 0.75; margin: 0; }
.confirm-actions { display: flex; gap: 10px; width: 100%; margin-top: 10px; }
.cart-list { padding: 0 20px; display: flex; flex-direction: column; gap: 10px; }
.cart-row { display: flex; align-items: center; gap: 10px; background: #F4E9D8; border-radius: 16px; padding: 8px 10px; }
.cart-name { flex: 1; font-size: 12.5px; font-weight: 600; }
.cart-subtotal { font-size: 12.5px; font-weight: 700; color: #A85D2A; min-width: 62px; text-align: right; }
.cart-total-row { display: flex; justify-content: space-between; font-family: 'Fraunces', serif; font-size: 17px; font-weight: 700; padding: 8px 4px 4px; }
.filter-chip-row { display: flex; gap: 8px; overflow-x: auto; padding: 0 20px; scrollbar-width: none; }
.filter-chip-row::-webkit-scrollbar { display: none; }
.filter-chip { flex: 0 0 auto; border: 1.5px solid #D9C6A3; background: #F4E9D8; color: #3B2314; padding: 7px 14px; border-radius: 999px; font-size: 11.5px; font-weight: 600; cursor: pointer; white-space: nowrap; }
.filter-chip-active { background: #3B2314; color: #F4E9D8; border-color: #3B2314; }
.historico-list { display: flex; flex-direction: column; gap: 12px; padding: 0 20px 10px; }
.historico-card { background: #EFDFC4; border-radius: 20px; padding: 14px 16px; display: flex; flex-direction: column; gap: 4px; }
.historico-top { display: flex; justify-content: space-between; align-items: center; }
.historico-date { font-size: 11px; opacity: 0.6; }
.historico-status { font-size: 10px; font-weight: 700; padding: 3px 9px; border-radius: 999px; }
.status-pago, .status-quitado { background: #E4EEDF; color: #4C6B44; }
.status-em-aberto { background: #F3D9CE; color: #A0402A; }
.status-pagamento-parcial { background: #FBEBC8; color: #8A6420; }
.status-planejando { background: #E7DCC8; color: #6B4428; }
.status-descartado { background: #EADFDF; color: #8A6A6A; }
.status-produto { background: #E4EEDF; color: #4C6B44; }

.planned-card { background: #EFDFC4; border-radius: 20px; padding: 14px 16px; display: flex; flex-direction: column; gap: 4px; }
.planned-top { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.planned-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; align-items: center; }
.ingredient-list { display: flex; flex-wrap: wrap; gap: 6px; }
.ingredient-chip { display: flex; align-items: center; gap: 6px; background: #F4E9D8; border-radius: 999px; padding: 5px 6px 5px 10px; font-size: 11px; }

.shopping-check { width: 26px; height: 26px; border-radius: 50%; border: none; background: #F4E9D8; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #5E7A56; flex-shrink: 0; }
.shopping-empty-box { width: 14px; height: 14px; border-radius: 4px; border: 1.5px solid #C9A876; display: block; }
.strike { text-decoration: line-through; opacity: 0.55; }

.note-card { background: #EFDFC4; border-radius: 18px; padding: 14px 16px; display: flex; flex-direction: column; gap: 6px; }
.note-title { font-weight: 700; font-size: 13.5px; margin: 0; }
.note-text { font-size: 12.5px; opacity: 0.85; margin: 0; white-space: pre-wrap; }
.historico-client { font-weight: 700; font-size: 13.5px; margin: 2px 0; }
.historico-line { font-size: 12px; opacity: 0.8; margin: 0; }
.historico-totals { display: flex; gap: 14px; font-size: 11.5px; font-weight: 700; margin-top: 6px; flex-wrap: wrap; }

.bottom-nav { position: absolute; left: 12px; right: 12px; bottom: 14px; background: #3B2314; border-radius: 28px; padding: 9px 4px; display: flex; justify-content: space-around; box-shadow: 0 14px 30px -12px rgba(0,0,0,0.5); }
.nav-item { border: none; background: transparent; color: #C9B79A; display: flex; flex-direction: column; align-items: center; gap: 2px; font-size: 8.8px; padding: 5px 6px; border-radius: 14px; cursor: pointer; }
.nav-item-active { color: #F4E9D8; background: rgba(227, 168, 59, 0.25); }

.toast { position: absolute; top: 16px; left: 50%; transform: translateX(-50%); background: #3B2314; color: #F4E9D8; padding: 10px 18px; border-radius: 20px; font-size: 12.5px; z-index: 10; box-shadow: 0 10px 20px -8px rgba(0,0,0,0.5); }
`;
