"use client";
import { useSnapshot } from "valtio/react";
import BaseState from "@/stores/base";

const CommentForm = () => {
    const { userInfo } = useSnapshot(BaseState);
    if (!userInfo) return null;
    console.log(userInfo);
    return (
        <div>
            <p>your name: {userInfo.fullName}</p>
            <label>your comment:</label>
            <input type="text" placeholder="your comment" />
        </div>
    );
};

export default CommentForm;
