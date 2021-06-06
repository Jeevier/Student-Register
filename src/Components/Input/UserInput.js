import React from 'react';
import Card from '../UI/Card.style';
import UserForm from './UserForm';

function UserInput(props) {
    return (
        <Card>
           <UserForm onSubmit={props.onSubmit}/>
        </Card>
    )
}

export default UserInput
