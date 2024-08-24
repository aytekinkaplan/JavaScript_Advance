import { createCard } from "./card.js";

export const mainBuilder = () => {
  fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
      const cardsContainer = document.createElement("div");
      cardsContainer.className = "cards-container";

      // Her bir makale verisini kullanarak kart oluştur
      data.articles.forEach((articleData) => {
        const card = createCard(articleData);
        cardsContainer.appendChild(card);
      });

      // Oluşturulan kartları maine ekle
      const main = document.createElement("main");
      main.appendChild(cardsContainer);
      document.body.appendChild(main);
    })
    .catch((error) => console.error("Error loading data:", error));
};

export const initMain = () => {
  mainBuilder();
};
