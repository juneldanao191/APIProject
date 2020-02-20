import React, {useState} from "react";
import { useHistory } from "react-router-dom";


const LogIn = () => {

  const history = useHistory();

 const initialState = {
        email:"",
        password:"",
        loading: false,
    }
    const [userLogIn, setUserLogIn] = useState(initialState)
    

    const handleChange = e => {
      setUserLogIn({
          ...userLogIn,
          [e.target.name]: e.target.value
        });
          console.log(e.target.value)
          console.log(userLogIn)
      };
 
const handleSubmit = async (e) => {
    e.preventDefault()
        alert("Logged in");
        history.push("/home");

     
   
}
  return (
      <div className="container">
          <form onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-content">
          <div className="card-title">
            <p className="title has-text-centered">
              Log-in
            </p>
            
            <div className="field">
            <label className="label">Email Address</label>
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input "
                  type="text"
                  value={userLogIn.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />

                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right"></span>
              </p>

            </div>

            <div className="field is-medium">
              <label className="label">Password</label>
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  value={userLogIn.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                  Remember Me
                </label>
              </div>
            </div>

            <div className="field">
              <p className="control">
                <button
                  className="button is-success is-fullwidth is-medium"
                  type="submit"
                >
                  Login
                </button>
              </p>
            </div>

            <div className="field">
              <div className="control">
                <a href="#"> Forgot Password</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
      </div>
  );
};

export default LogIn;
