import { createCard } from "./card.js";

export const menuBuilder = () => {
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

      // Oluşturulan kartları menüye ekle
      document.body.appendChild(cardsContainer);
    })
    .catch((error) => console.error("Error loading data:", error));
};

export const initMain = () => {
  menuBuilder();
};
