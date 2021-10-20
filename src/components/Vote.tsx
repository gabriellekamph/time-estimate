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
    let [estimates, setEstimates]: [number[], (estimates:number[]) => void] = React.useState([2,3,4,5,6])


    React.useEffect(() => {
        fetch('http://localhost:3000/')
        .then(res => res.json())
        .then(data => {
          
          let catchEstimates = [];

          if(selectedIssue !== undefined && data !== undefined){
            for(let issue in data){
                if(data[issue].id === selectedIssue.id){

                    let estimateData = data[issue].estimates;
                    console.log(estimateData)

                    for(let estimate in estimateData){
                        catchEstimates.push(parseInt(estimateData[estimate].estimate));
                        console.log(catchEstimates);
                    }
                }
            }
            setEstimates(catchEstimates);
          }
    })


        console.log(selectedUser)
        console.log(selectedIssue)
        console.log(estimates)
      }, [selectedUser, selectedIssue]);


    
    
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
                        selectedUser={selectedUser}
                        selectedIssue={selectedIssue}  
                    />
                    {estimates.length === nameList.length && (
                        <Report 
                        estimates={estimates} /> 
                    )}
                </div>
                )}
            </div>
        )
}

export default Vote;