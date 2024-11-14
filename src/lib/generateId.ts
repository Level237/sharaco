export function generateRandomId() {  
    return 'Ds-' + Date.now() + '-' + Math.floor(Math.random() * 10000);  
} 