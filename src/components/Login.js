import React from "react"
import { Link, navigate} from 'gatsby'
import { setUser, isLoggedIn } from '../utils/auth'
import Error from './Error'
import { Auth } from 'aws-amplify'

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
    error: ``
  }

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  login = async() => {
    const { username, password } = this.state
    try {
      await Auth.signIn(username, password)
      const user = await Auth.currentAuthenticatedUser()
      const userInfo = {
        ...user.attributes,
        username: user.username
      }
      setUser(userInfo)
      navigate("/")
    } catch (err) {
      this.setState({ error: "Bad Username Or Password" })
    }
  }

  render() {
    if (isLoggedIn()) navigate('/app/profile')
    return (
      <div>
        <h1>Sign In</h1>
        {this.state.error && <Error errorMessage={this.state.error}/>}
        <div style={styles.formContainer}>
         <input
            onChange={this.handleUpdate}
            placeholder='Username'
            name='username'
            value={this.state.username}
            style={styles.input}
          />
          <input
            onChange={this.handleUpdate}
            placeholder='Password'
            name='password'
            value={this.state.password}
            type='password'
            style={styles.input}
          />
          <div style={styles.button} onClick={this.login}>
            <span style={styles.buttonText}>Sign In</span>
          </div>
          <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Open Google</button>
        </div>
        <Link to="/app/signup">Sign Up</Link><br />
      </div>
    )
  }
}

const styles = {
  input: {
    height: 40, margin: '10px 0px', padding: 7
  },
  formContainer: {
    display: 'flex', flexDirection: 'column'
  },
  button: {
    backgroundColor: '#5ab4ac', padding: '15px 7px', cursor: 'pointer', textAlign: 'center', marginBottom: 10
  },
  buttonText: {
    color: 'white'
  }
}

export default Login