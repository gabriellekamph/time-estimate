import React from 'react';

interface IPost {
    id: number;
    title: string;
  }

interface Props {
    posts: IPost[],
}

const IssuesList = (props: Props) => {

    const {posts} = props; 

    return (
        <div className="issues-list">
            <h4>Issues List</h4>
            <ul className="posts">
                {posts.map((post:any) => (
                <li key={post.id} className="post">
                <h3>{post.title}</h3>
                <button>Vote this issue</button>
                </li>
                ))}
           </ul>
        </div>
    )
}

export default IssuesList;