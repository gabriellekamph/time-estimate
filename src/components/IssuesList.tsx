import React from 'react';

interface IPost {
    id: number;
    title: string;
  }

interface Props {
    posts: IPost[],
    setSelectedIssue: (e: any) => void,
}

const IssuesList = (props: Props) => {

    const { posts, setSelectedIssue } = props; 

    const handleSubmit = (e:any) => {
        e.preventDefault();
        for(let post in posts){
            if(posts[post].id == e.target.parentElement.id){
                setSelectedIssue(posts[post])
            }
        }
      }
    

    return (
        <div className="issues-list">
            <h4>Issues List</h4>
            <ul className="posts">
                {posts.map((post:any) => (
                <li key={post.id} id={post.id} className="post">
                    <h3>{post.title}</h3>
                    <button type="submit" onClick={e => handleSubmit(e)}>Vote this issue</button>
                </li>
                ))}
           </ul>
        </div>
    )
}

export default IssuesList;