export const socialLinks = {
  Facebook: "https://facebook.com",
  Twitter: "https://twitter.com",
  LinkedIn: "https://linkedin.com",
};

export const createFooter = (socialLinks) => {
  const footer = document.createElement("footer");

  const p = document.createElement("p");
  const currentYear = new Date().getFullYear();
  p.textContent = `Copyright ${currentYear}`;
  footer.appendChild(p);

  const ul = document.createElement("ul");
  for (const [key, value] of Object.entries(socialLinks)) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = value;
    a.textContent = key;
    li.appendChild(a);
    ul.appendChild(li);
  }
  footer.appendChild(ul);

  return footer;
};

export const initFooter = () => {
  document.body.appendChild(createFooter(socialLinks));
};
