import React from 'react';
const PostPreview = ({post, noImage}) => {
    console.log(noImage)
    return (
        <div className="post-preview">
            <span className="read-more-btn">Read</span>
            <div>
                <h5 className="title">{ post.title }</h5>
                <div className="text-center">
                    <span className="tag">Author</span> <span className="author">{ Array.isArray(post.author) ? post.author.join(", ") : post.author }</span>
                </div>
            </div>
            <div className="body">
                { post.body }
            </div>
        </div>
    );
};
export default PostPreview;