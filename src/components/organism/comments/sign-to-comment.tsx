"use client";
import { useSnapshot } from "valtio/react";
import BaseState from "@/stores/base";

const SignToComment = () => {
    const { userInfo } = useSnapshot(BaseState);
    if (userInfo) return null;

    return <div>please sign in to comment</div>;
};

export default SignToComment;
