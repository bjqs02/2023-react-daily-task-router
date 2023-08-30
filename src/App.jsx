import './App.css';
import { HashRouter, NavLink, Route, Routes, useNavigate, useParams, Outlet } from 'react-router-dom';

var Logout = () => {
  var isLogin;
  var navigate = useNavigate();

  return (
    <button onClick={() => {
      if (!isLogin) {
        navigate('/login')
      }
    }}>登出</button>
  )
}

const Todo = () => {
  return (<>
    <p>這是 Todo 頁面</p>
    <hr />
    <Logout />
  </>);
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Post = () => {
  return <div>
    <p>這是Post頁面</p>
    <Outlet />
  </div>
};

const Postid = () => {
  var params = useParams();
  return <p>Post ID: {params.postID}</p>
}

function App() {
  return (
    <HashRouter>
      <div className="container">
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
          <NavLink to="/post/Sarah">
            <p>Post ID 範例</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post />} >
            <Route path=":postID" element={<Postid />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </div>
    </HashRouter >
  );
}

export default App;
