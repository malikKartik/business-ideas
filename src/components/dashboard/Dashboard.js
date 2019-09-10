import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

export class Dashboard extends Component {
    render() {
        const {auth} = this.props
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div>
                Dashboard
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    // console.log(state);
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Dashboard)