export function generateQuoteFileName() {
    // Générer un préfixe aléatoire (une lettre majuscule)
    const prefix = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
  
    // Générer un nombre aléatoire à 4 chiffres
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // 1000 à 9999
  
    // Générer le nom du fichier au format "quotes-<prefix><random_number>"
    return `quotes-${prefix}${randomNumber}`;
  }