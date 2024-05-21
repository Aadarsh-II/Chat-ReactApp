import { useState } from "react";
import "./list.css";

const List = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="list">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./add.png" : "./minus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="./user.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./user.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./user.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./user.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./user.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};
export default List;
