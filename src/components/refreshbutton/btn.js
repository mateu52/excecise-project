import React from "react";
import Usersview from "./userview";
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import { Link } from 'react-router-dom';

function Btn({users, fetchUsers }){
    
    console.log(users);
    return(
        <>
        <button onClick={fetchUsers}> Kliknmij aby odświeżyć</button>
        <p>Lista:</p>
        
        {users && users.map((user) => (
            <div key={user.login.uuid}>
                <Link to={`/buttonusers/${user.login.username}`} >
                    <Usersview 
                        name={user.name.first}
                        lastName={user.name.last}
                    />
                </Link>
            </div>
        ))}
        </>
    )
}

const mapStateToProps = state => ({
    users: state.users.users
})
const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Btn);
//Dispatch stanu i funkcji fetch-ującej