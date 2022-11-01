import React from "react";
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
import { fetchUsers } from '../redux'

function UserInfo({ users }){
    const { userId } = useParams();
    const { name } = users.find((users) => users.login.username === userId );    
    console.log({name})
    console.log({users})
    return(
        <>
            <div>
            <p>Imię: {name.first} </p>
            <p>Nazwisko: {name.last}</p>
            
        </div>
        </>
    )
}




const mapStateToProps = state => ({
    users: state.users.users
})
const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
//Dispatch stanu i funkcji fetch-ującej