export enum QuoteTemplateType {
    SIMPLE = "simple",
    BRANDED = "branded"
}

export interface QuoteTemplate {
    id: QuoteTemplateType;
    name: string;
    description: string;
    thumbnail: string;
    component: string;
}

export const QUOTE_TEMPLATES: QuoteTemplate[] = [
    {
        id: QuoteTemplateType.SIMPLE,
        name: "Simple Model",
        description: "Basic quote template",
        thumbnail: "/devis.webp",
        component: "SimpleQuoteTemplate"
    },
    {
        id: QuoteTemplateType.BRANDED,
        name: "Model with Brand",
        description: "Quote template with company branding",
        thumbnail: "/devis.webp",
        component: "BrandedQuoteTemplate"
    }
]; 