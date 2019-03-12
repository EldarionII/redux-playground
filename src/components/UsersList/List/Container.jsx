import React from 'react'
import {connect} from 'react-redux'
import UsersListPresentational from "./Presentational";

class UsersListContainer extends React.Component {
    state = {
        isModalOpen: false
    }

    toggleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    render() {
        const {users} = this.props;

        return (
            <UsersListPresentational users={users}
                                     state={this.state}
                                     toggleModal={this.toggleModal}
            />
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps)(UsersListContainer)