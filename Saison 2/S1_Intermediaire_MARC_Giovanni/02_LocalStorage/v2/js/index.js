const themes = ["jour", "nuit", "bleu", "vert", "contraste"];

/* ---------------- THEME ---------------- */

const appliquerTheme = (theme) => {
  document.body.classList.remove(...themes);
  document.body.classList.add(theme);

  localStorage.setItem("theme", theme);
};

/* ---------------- PARAGRAPHE ---------------- */

const enregistrerParagraphe = () => {
  const input = document.getElementById("txtParag");
  const paragraphe = input.value;

  if (!paragraphe.trim()) return;

  localStorage.setItem("paragraphe", paragraphe);

  afficherParagraphe(paragraphe);
};

const afficherParagraphe = (texte) => {
  const p = document.getElementById("p1");
  p.textContent = texte;
};

/* ---------------- INITIALISATION ---------------- */

const initialiser = () => {
  /* Restaurer thème */
  const themeSauvegarde = localStorage.getItem("theme");
  if (themeSauvegarde && themes.includes(themeSauvegarde)) {
    appliquerTheme(themeSauvegarde);
  } else {
    appliquerTheme("jour");
  }

  /* Restaurer paragraphe */
  const paragrapheSauvegarde = localStorage.getItem("paragraphe");

  if (paragrapheSauvegarde) {
    afficherParagraphe(paragrapheSauvegarde);
  }
};