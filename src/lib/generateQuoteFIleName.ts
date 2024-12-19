export function generateUniqueQuoteFileName() {
  // Générer un préfixe aléatoire (une lettre majuscule)
  const prefix = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z

  // Générer un nombre aléatoire à 4 chiffres
  const randomNumber = Math.floor(1000 + Math.random() * 9000); // 1000 à 9999

  // Obtenir la date actuelle au format YYYYMMDD-HHMM
  const date = new Date();
  const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, '') + '-' + 
                        date.toTimeString().slice(0, 5).replace(/:/g, '');

  // Générer le nom du fichier au format "quotes-<prefix><random_number>-<date>"
  return `quotes-${prefix}${randomNumber}-${formattedDate}`;
}