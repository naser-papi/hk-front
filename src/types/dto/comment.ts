export interface Author {
    id: number;
    email: string;
    name: string;
}

export interface CommentDto {
    id: number;
    documentId: string;
    content: string;
    blocked: boolean;
    blockedThread: boolean;
    blockReason?: any;
    isAdminComment?: any;
    removed?: any;
    approvalStatus: string;
    related: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale?: any;
    reports: any[];
    threadOf?: any;
    author: Author;
}
