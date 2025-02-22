import { IAPIInfo } from "@/types/base";

export const CommentAPIPath = {
    addComment: {
        url: "api/user-comments",
        method: "POST",
        body: {
            data: {
                comment: "",
                blogDocumentId: "",
            },
        },
    },
    updateComment: {
        url: "api/user-comments/{id}",
        method: "PUT",
        params: {
            id: "",
        },
        body: {
            data: {
                comment: "",
            },
        },
    },
    removeComment: {
        url: "api/user-comments/{id}",
        method: "DELETE",
        params: {
            id: "",
        },
    },
    getBlogComments: {
        url: "api/user-comments/blogComments/{id}",
        params: {
            id: "",
        },
        method: "GET",
    },
} satisfies { [key: string]: IAPIInfo };
