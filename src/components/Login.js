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
          <button class="socialButton button" onClick={() => Auth.federatedSignIn({provider: 'Google'})}><span><svg class="social-logo" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path>
    <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path>
    <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path>
    <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EA4335"></path>
</svg></span><span>Continue with Google</span></button>
        </div>
        <Link to="/app/signup">Sign Up with Email</Link><br />
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