import './index.css';
import {useState}from 'react';
import {login} from"./utils";
const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState("");
    const handleLogin = async (event) => {
      event.preventDefault();
      try {
        const result = await login({ username, password });
        console.log({ result });
        setShowModal(false);
      } catch (error) {
        setError("Invalid username or password.");
      }
    };
    const toggleModal = () => {
      setShowModal(!showModal);
    };
    return (
      <div>
        <button onClick={toggleModal}>Login</button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>
                &times;
              </span>
          <form onSubmit={handleLogin}>
          <h2>Login</h2>
         <input placeholder="Enter username" type="text" onChange={(event) => setUserName(event.target.value)} />
        <br />
        <input placeholder="Enter password" type="password" onChange={(event) => setPassword(event.target.value)}/>
         <br />
         <button type="submit">Login</button>
                {error && <p className="error-message">{error}</p>}
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };
  export default Login;