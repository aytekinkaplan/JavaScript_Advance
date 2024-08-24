// components/card.js

export const createCard = (data) => {
  const card = document.createElement("article");
  card.className = "blog-card";

  const title = document.createElement("h2");
  title.textContent = data.title;
  card.appendChild(title);

  const metaInfo = document.createElement("div");
  metaInfo.className = "meta-info";

  const authorInfo = document.createElement("div");
  authorInfo.className = "author-info";

  const authorAvatar = document.createElement("img");
  authorAvatar.src = data.author.avatar;
  authorAvatar.alt = data.author.name;
  authorAvatar.className = "author-avatar";
  authorInfo.appendChild(authorAvatar);

  const authorName = document.createElement("span");
  authorName.textContent = data.author.name;
  authorName.className = "author-name";
  authorInfo.appendChild(authorName);

  metaInfo.appendChild(authorInfo);

  const date = document.createElement("span");
  date.textContent = new Date(data.date).toLocaleDateString();
  date.className = "publish-date";
  metaInfo.appendChild(date);

  card.appendChild(metaInfo);

  const content = document.createElement("p");
  content.textContent = data.content;
  card.appendChild(content);

  const tags = document.createElement("div");
  tags.className = "tags";
  data.tags.forEach((tag) => {
    const tagSpan = document.createElement("span");
    tagSpan.textContent = tag;
    tagSpan.className = "tag";
    tags.appendChild(tagSpan);
  });
  card.appendChild(tags);

  const readingTime = document.createElement("span");
  readingTime.textContent = `${data.readingTime} min read`;
  readingTime.className = "reading-time";
  card.appendChild(readingTime);

  const readMoreButton = document.createElement("a");
  readMoreButton.textContent = "Read More";
  readMoreButton.href = "#"; // Gerçek bir blog post URL'si eklenebilir
  readMoreButton.className = "read-more-button";
  card.appendChild(readMoreButton);

  return card;
};

export const initCard = () => {
  document.body.appendChild(createCard(posts[0]));
};
