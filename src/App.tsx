import {
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  matchRoutes,
} from "react-router-dom";
import "./App.css";
import Post from "./components/posts/post";
import Todo from "./components/todo/todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="todo" element={<Todo />} />
          <Route path="post" element={<Post />} />
        </Route>
      </Routes>

      {/* <TodoList /> */}
    </div>
  );
}

function Layout() {
  const location = useLocation();
  const { pathname } = location;
  const homeRoute = [{ path: "/" }];
  const matches = matchRoutes(homeRoute, location);
  console.log(matches);
  return (
    <>
      <header className="App-header">
        {matches !== null && (
          <>
            <h1>Redux-toolkit Todolist</h1>

            <div className="card__wrapper">
              <div className="card">
                <Link to="/todo">Todo</Link>
              </div>
              <div className="card">
                <Link to="/post">Post</Link>
              </div>
            </div>
          </>
        )}

        {matches === null && (
          <nav>
            <ul className="nav__ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
              <li>
                <Link to="/post">Post</Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
