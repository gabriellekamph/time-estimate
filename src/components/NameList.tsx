import React from 'react';
import { Dropdown } from 'react-bootstrap';

// Interface for NameList component
interface Props {
    nameList: any,
    setSelectedUser: any,
}

// Name list with all users
const NameList = (props: Props) => {
    const { nameList, setSelectedUser } = props;

    // set selected user
    const handleUserClick = (e:any) => {
        e.preventDefault();

        // if id in namelist match target id, set as selected user
        for(let user in nameList){
            if(nameList[user].id == e.target.id){
                setSelectedUser(nameList[user])
            }
         }

        
      }

    return (
        <div className="namelist-container">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Users
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {nameList.map((user:any) => (
                    <li key={user.id}>
                    <Dropdown.Item id={user.id} onClick={e => handleUserClick(e)}>{user.name}</Dropdown.Item>
                    </li>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default NameList;