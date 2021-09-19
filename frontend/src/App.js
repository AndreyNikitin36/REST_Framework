import React from 'react'
import axios from 'axios'
import AuthorList from './components/Authors.js';
import UserList from './components/Users.js';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'authors': [],
            'users': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/authors/')
        .then(response => {
            const authors = response.data
            this.setState( {
                'authors': authors
            })
        })
        .catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/users/')
        .then(response => {
            const users = response.data
            this.setState( {
                'users': users
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (

            <div>
                <div>
                    <a href="#"></a>
                    <ul>
                        <li><a href="#">главная</a></li>
                        <li><a href="#">мои заметки</a></li>
                        <li><a href="#">расписание</a></li>
                    </ul>
                </div>
                <AuthorList authors = {this.state.authors}/>
                <p><UserList users = {this.state.users}/></p>
                <div>
                    <div>
                        <div>
                            <h3>контакты</h3>
                        </div>
                        <div>
                            <h3>полезная информация</h3>
                        </div>
                        <div>
                            <h3>Оставайтесь на связи</h3>
                        </div>
                    </div>
                    <p>&copy; GB 2021</p>
                    <div>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                    <p>Положения &amp; Условия  /  Конфиденциальность &amp; Cookies</p>
                </div>
            </div>

        )
    }
}

export default App;
