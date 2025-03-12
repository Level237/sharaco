export enum QuoteTemplateType {
    SIMPLE = "simple",
    BRANDED = "branded",
    DEVELOPER = "developer",
    CREATIVE = "creative"
}

export enum QuoteTemplateCategory {
    BUSINESS = "business",
    CREATIVE = "creative",
    TECHNICAL = "technical"
}

export interface QuoteTemplate {
    id: QuoteTemplateType;
    name: string;
    description: string;
    thumbnail: string;
    component: string;
    category: QuoteTemplateCategory;
}

export const QUOTE_TEMPLATES: QuoteTemplate[] = [
    {
        id: QuoteTemplateType.SIMPLE,
        name: "Simple Model",
        description: "Basic quote template",
        thumbnail: "/devis.webp",
        component: "SimpleQuoteTemplate",
        category: QuoteTemplateCategory.BUSINESS
    },
    {
        id: QuoteTemplateType.BRANDED,
        name: "Model with Brand",
        description: "Quote template with company branding",
        thumbnail: "/brand.png",
        component: "BrandedQuoteTemplate",
        category: QuoteTemplateCategory.CREATIVE
    },
    {
        id: QuoteTemplateType.DEVELOPER,
        name: "Developer Model",
        description: "Code-themed quote template",
        thumbnail: "/dev.png",
        component: "DeveloperQuoteTemplate",
        category: QuoteTemplateCategory.TECHNICAL
    },
    {
        id: QuoteTemplateType.CREATIVE,
        name: "Creative Model",
        description: "Creative quote template",
        thumbnail: "/devis-creative.webp",
        component: "CreativeQuoteTemplate",
        category: QuoteTemplateCategory.CREATIVE
    }
]; 