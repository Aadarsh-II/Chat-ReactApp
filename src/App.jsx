import Users from "./components/users/Users.jsx";
import Chats from "./components/chats/Chats.jsx";
import Details from "./components/details/Details.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Users />
        <Chats />
        <Details />
      </div>
    </>
  );
}

export default App;
