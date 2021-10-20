import React from 'react';
import Form from './Form';
import Report from './Report';
import { Navbar, Container } from 'react-bootstrap';
import NameList from './NameList';

interface IPost {
    id: number;
    title: string;
  }

interface Props {
    estimate: number;
    setEstimate: (estimate: number) => void
    posts: IPost[],
    selectedIssue: any,
    nameList: any,
    selectedUser: any,
    setSelectedUser: any
}

const Vote = (props: Props) => {
    const {estimate, setEstimate, selectedIssue, nameList, selectedUser, setSelectedUser} = props; 

    // log current user and issue
    React.useEffect(() => {
        console.log(selectedUser)
        console.log(selectedIssue)
      }, [selectedIssue, selectedUser]);

      
      let estimates : number[] = [2, 5, 43, 7];

      // FETCH FROM BACKEND 
      // If selectedIssue.id is same, get estimates
    
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
                    <Form 
                        estimate={estimate}
                        setEstimate={setEstimate}
                        selectedUser={selectedUser} />
                    {estimates.length === nameList.length  && (
                    <Report 
                        estimates={estimates} /> 
                    )}
                </div>
                )}
            </div>
        )
}

export default Vote;