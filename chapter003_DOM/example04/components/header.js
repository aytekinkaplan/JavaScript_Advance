// components/header.js

export const data = {
  Home: "../pages/home.html",
  About: "../pages/about.html",
  Contact: "../pages/contact.html",
  Articles: "../pages/articles.html",
};

export const createHeader = (data) => {
  const header = document.createElement("header");

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = value;
    a.textContent = key;
    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(ul);
  header.appendChild(nav);
  return header;
};

// export default createHeader;
export const initHeader = () => {
  return createHeader(data);
};
