import { initHeader } from "./components/header.js";
import { initFooter } from "./components/footer.js";
import { initMain } from "./components/main.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Header'ı oluştur ve ekle
  const header = initHeader();
  app.appendChild(header);

  // Main content'i oluştur ve ekle
  initMain(); // Bu, `main` öğesini oluşturur ve ekler

  // Footer'ı oluştur ve ekle
  const footer = initFooter();
  app.appendChild(footer);
});
