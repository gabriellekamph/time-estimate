import React from 'react';
import axios, { CancelTokenSource } from 'axios';
import Form from './components/Form';
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

  React.useEffect(() => {
    axios
      .get<IPost[]>('https://api.github.com/repos/gabriellekamph/time-estimate/issues', {
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

  // Function to handle when new estimated is saved (after button click)

  function handleSaveEstimate() {
    console.log("Estimate (not yet) saved! (but it's supposed to when this function is done :))");
  }

  return (
    <div className="App">
      <div className="grid">
          <Form estimate={1} handleSaveEstimate={handleSaveEstimate} />
          <IssuesList posts={posts}/> 
      </div>
      </div>
);
}

export default App;

