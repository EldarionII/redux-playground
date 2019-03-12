import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import {MainHeader} from "./MainHeader";
import {UsersReduxApi} from "../redux/api";

class Home extends React.Component {
    componentDidMount() {
        UsersReduxApi.usersGet();
    }

    createNewUser = e => {
        e.preventDefault()

        const form = e.target;
        const inputs = form.querySelectorAll('input, select');

        let newUserData = {}

        inputs.forEach(input => newUserData[input.name] = input.value);

        UsersReduxApi.userCreate(newUserData)
            .then(()=> UsersReduxApi.usersGet())
    };

    renderUserForm = () => {
      return (
          <form onSubmit={this.createNewUser}>
              <input placeholder={'email'} name={'email'}/>
              <input placeholder={'password'} name={'password'}/>
              <select defaultValue={2} name={'role'}>
                  <option value={1}>admin</option>
                  <option value={2}>user</option>
              </select>
              <button>Create new user</button>
          </form>
      )
    };

    renderUsers = () => {
        const {users} = this.props;

        return users.users.map(user =>
            <div key={user.id}>
                <p>{user.email}</p>
                <p>{user.id}</p>
                <p>{user.password}</p>
            </div>
        )
    };

    render() {
        const {users} = this.props;

        return (
            <React.Fragment>
                <MainHeader/>
                <main>
                    <header>
                        <h1>
                            Это главная страница.
                        </h1>
                    </header>
                    <main>
                        <section>
                            <h2>Ссылки</h2>
                            <div>
                                Имя текущего пользователя - {users.current.name}
                            </div>
                            {this.renderUserForm()}
                            <ul>
                                <li>
                                    <Link to={'/profile'}>Профиль пользователя</Link>
                                </li>
                            </ul>
                            {this.renderUsers()}
                        </section>
                    </main>
                </main>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
});

export default withRouter(connect(mapStateToProps)(Home))