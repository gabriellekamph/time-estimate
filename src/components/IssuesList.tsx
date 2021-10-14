import React from 'react';

interface IPost {
    id: number;
    title: string;
  }

interface Props {
    posts: IPost[],
    setSelectedIssue: (e: any) => void,
    setEstimate: (estimate: number) => void,
}

const IssuesList = (props: Props) => {
    const { posts, setSelectedIssue, setEstimate } = props; 

    // select issue to vote for 
    const handleSubmit = (e:any) => {
        e.preventDefault();

        // if issue id matches target id, set as selected issue 
        for(let post in posts){
            if(posts[post].id == e.target.parentElement.id){
                setSelectedIssue(posts[post])
            }
        }

        // reset estimate hours to 0 
        setEstimate(0);
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