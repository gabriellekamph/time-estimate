import React from 'react';
import axios, { CancelTokenSource } from 'axios';
import Vote from './components/Vote';
// import Form from './components/Form';
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

  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

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


  const cancelToken = axios.CancelToken; //create cancel token
  const [cancelTokenSource, setCancelTokenSource]: [
    CancelTokenSource,
    (cancelTokenSource: CancelTokenSource) => void
  ] = React.useState(cancelToken.source());

  const handleCancelClick = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('User cancelled operation');
    }
  };

  React.useEffect(() => {
    axios
      .get<IPost[]>('https://api.github.com/repos/Ant1N/time-estimate/issues', {
        cancelToken: cancelTokenSource.token,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      })
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        let error = axios.isCancel(ex)
          ? 'Request Cancelled'
          : ex.code === 'ECONNABORTED'
          ? 'A timeout has occurred'
          : ex.response.status === 404
          ? 'Resource Not Found'
          : 'An unexpected error has occurred';

        setError(error);
        setLoading(false);
      });
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

