// Fonction pour générer un nombre aléatoire entre min et max
const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Fonction pour générer une lettre aléatoire majuscule
const getRandomLetter = (): string => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[Math.floor(Math.random() * letters.length)];
};

// Fonction pour générer un numéro de devis unique
export const generateQuoteNumber = (): string => {
    const letters = Array.from({ length: 3 }, () => getRandomLetter()).join('');
    const numbers = getRandomNumber(10, 99).toString().padStart(2, '0');
    return `${letters}${numbers}`;
};

// Fonction pour vérifier si le numéro existe déjà (à implémenter avec votre système de stockage)
export const isQuoteNumberUnique = async (number: string): Promise<boolean> => {
    // Ici, vous devriez vérifier dans votre base de données si le numéro existe déjà
    // Pour l'exemple, on retourne toujours true
    return true;
};

// Fonction pour obtenir un numéro de devis unique
export const getUniqueQuoteNumber = async (): Promise<string> => {
    let quoteNumber;
    let isUnique = false;

    while (!isUnique) {
        quoteNumber = generateQuoteNumber();
        isUnique = await isQuoteNumberUnique(quoteNumber);
    }

    return quoteNumber;
}; 