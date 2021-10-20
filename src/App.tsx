import React from 'react';
import Vote from './components/Vote';
import IssuesList from './components/IssuesList';

interface IPost {
  id: number;
  title: string;
}

const defaultPosts: IPost[] = [];

const App = () => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(
    defaultPosts
  );

  // const [loading, setLoading]: [
  //   boolean,
  //   (loading: boolean) => void
  // ] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  );

  // variables for slected user, issue and saved time estimate
  const [selectedIssue, setSelectedIssue] = React.useState(
    undefined
  );

  const [selectedUser, setSelectedUser] = React.useState(
    undefined
  );

  const [estimate, setEstimate]: [number, (estimate: number) => void] = React.useState(
    0
  );

  // users
  const nameList = [
    {
      id: "1",
      name: "Josefine"
    },
    {
      id: "2",
      name: "Isak"
    },
    {
      id: "3",
      name: "Malin"
    },
    {
      id: "4",
      name: "Petter"
    },
    {
      id: "5",
      name: "Gabrielle"
    },
  ]

  //Fetches all issues from server.
  React.useEffect(() => {
    fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      setPosts(data);
    })
  }, []);


  return (
    <div className="App">
      <div className="grid">
          <Vote 
              estimate={estimate} 
              setEstimate={setEstimate}
              selectedIssue={selectedIssue}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              posts={posts} 
              nameList={nameList}
              /> 
          <IssuesList 
              posts={posts}
              setSelectedIssue={setSelectedIssue}
              setEstimate={setEstimate}/>
      </div>
    </div>
   );
}

export default App;

