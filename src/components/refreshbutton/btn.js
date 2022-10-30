import React from "react";
import Usersview from "./userview";
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function Btn({users, fetchUsers }){
    
    console.log(users);
    return(
        <>
        <button onClick={fetchUsers}> Kliknmij aby odświeżyć</button>
        <p>hello</p>
        <Usersview dane={users} />
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