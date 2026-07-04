const themes = ["jour", "nuit", "bleu", "vert", "contraste"];

const appliquerTheme = (theme) => {
  // enlever tous les thèmes existants
  document.body.classList.remove(...themes);

  // ajouter le thème choisi
  document.body.classList.add(theme);

  // sauvegarde
  localStorage.setItem("theme", theme);
};

const initialiser = () => {
  const themeSauvegarde = localStorage.getItem("theme");

  if (themeSauvegarde && themes.includes(themeSauvegarde)) {
    appliquerTheme(themeSauvegarde);
  } else {
    appliquerTheme("jour");
  }
};