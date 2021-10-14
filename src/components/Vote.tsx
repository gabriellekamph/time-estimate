import React from 'react';
import Form from './Form';
import { Navbar, Container } from 'react-bootstrap';
import NameList from './NameList';

interface IPost {
    id: number;
    title: string;
  }

interface Props {
    handleSaveEstimate: () => void;
    estimate: number;
    posts: IPost[],
    selectedIssue: any,
    nameList: any,
    selectedUser: any,
    setSelectedUser: any
}

const Vote = (props: Props) => {

    const {handleSaveEstimate, posts, selectedIssue, nameList, selectedUser, setSelectedUser} = props; 
    
    React.useEffect(() => {
        console.log(selectedUser)
        console.log(selectedIssue)
      }, [selectedIssue, selectedUser]);
    
        return (
            <div className="vote-issue">
                <Navbar>
                    <Container fluid>
                        <div className="voteing-info">
                        <div className="user">
                            User voting: <span className="fw-bold">
                            {selectedUser !== undefined  && (
                            <>{selectedUser?.name}</>
                            )}
                            {selectedUser === undefined  && (
                            <>Ingen användare vald</>
                            )}
                            </span>
                        </div>
                        <div className="issue">
                            Voting for: <span className="fw-bold">
                            {selectedIssue !== undefined  && (
                            <>{selectedIssue?.title}</>
                            )}
                            {selectedIssue === undefined  && (
                            <>Inget issue valt</>
                            )}
                            </span>
                        </div>
                        </div>
                        <div className="name-list">
                            <NameList 
                                nameList={nameList}
                                setSelectedUser={setSelectedUser} />
                        </div>
                    </Container>
                </Navbar>
                {selectedIssue !== undefined  && (
                <div className="current-issue">
                    <h1 className="mb-2">{selectedIssue?.title}</h1>
                    <Form estimate={1} handleSaveEstimate={handleSaveEstimate} /> 
                </div>
                )}
            </div>
        )
}

export default Vote;