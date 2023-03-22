import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "손흥민",
        comment: "토트넘",
    },
    {
        name: "김민재",
        comment: "나폴리",
    },
    {
        name: "이강인",
        comment: "마요르카",
    },
];


function CommentList (props) {
    return (
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    )
}

export default CommentList;