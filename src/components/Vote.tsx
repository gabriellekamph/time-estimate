import React from 'react';
import Form from './Form';
import { Navbar, Container } from 'react-bootstrap';

interface IPost {
    id: number;
    title: string;
  }

interface Props {
    handleSaveEstimate: () => void;
    estimate: number;
    posts: IPost[],
    selectedIssue: number | undefined,
}

const Vote = (props: Props) => {

    const {handleSaveEstimate, posts, selectedIssue} = props; 
    const [issue, setIssue]: [any, (issue: any) => void] = React.useState(undefined);


    React.useEffect(() => {
        for(let post in posts){
           if(posts[post].id == selectedIssue){
               setIssue(posts[post])
           }
        }
      }, [selectedIssue]);
    
        return (
            <div className="vote-issue">
                <Navbar>
                    <Container fluid>
                        <div className="issue">
                            Voting for: <span className="fw-bold">
                            {issue !== undefined  && (
                            <>{issue.title}</>
                            )}
                            {issue === undefined  && (
                            <>Inget issue valt</>
                            )}
                            </span>
                        </div>
                        <div className="name-list">
                            
                        </div>
                    </Container>
                </Navbar>
                {issue !== undefined  && (
                <div className="current-issue">
                    <h1 className="mb-2">{issue.title}</h1>
                    <Form estimate={1} handleSaveEstimate={handleSaveEstimate} /> 
                </div>
                )}
            </div>
        )
}

export default Vote;