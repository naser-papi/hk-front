export interface MediaDto {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: string;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
}

export interface CategoryDto {
    id: number;
    title: string;
    parent: CategoryDto;
}

export interface BaseDto {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    publishedAt: string;
}
