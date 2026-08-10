export interface Project {
    id: string;
    slug: string;
    titleRu: string;
    titleUs: string;
    descriptionRu: string;
    descriptionUs: string;
    previewUrl?: string;
    arrayImgUrls?: string[];
}