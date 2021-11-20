import React from 'react';
import ReactPlayer from 'react-player'

const PostList = ({ posts, title }) => {
    if (!posts.length) {
        return <h3>No Posts Yet</h3>;
    }

    return (
        <div>
            <div className="flex-row justify-space-between my-4">
                {posts &&
                    posts.map((post) => (
                        <div key={post._id} className="col-12 col-xl-6">
                        
                            <div className="card mb-3">
                            <h3 className="text-primary">{post.title}</h3>
                                <h4 className="card-header bg-dark text-light p-2 m-0">
                                    {post.genre} <br />
                                </h4>
                                <ReactPlayer url={post.url} />
                                <p>{post.body}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
export default PostList;