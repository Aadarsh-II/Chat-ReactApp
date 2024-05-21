import "./users.css";
import UserInfo from "./userInfo/UserInfo.jsx";
import List from "./list/List.jsx";
const Users = () => {
  return (
    <div className="users">
      <UserInfo />
      <List />
    </div>
  );
};

export default Users;
