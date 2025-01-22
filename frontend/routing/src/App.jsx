// The link tab helps maintain a Single Page Application as the site isn't hard reloaded / the data isn't fetched feom the backend when the user redirected
// useNavigate does the same thing but the only difference is that it is a hook 
// Outlet helps us to display the data between the header and a footer, basically like children only

import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/1" element={<Main1 />} />
            <Route path="/2" element={<Main2 />} />
            <Route path="*" element={<Error />} /> { /* The asterik symbol "*" catches all the other routes which are not the part of the web app and then helps us display something */ }
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Error() {
  return <div>
    Page not found
  </div>
}


function Layout() {
  return <div>
    <Link to={"/1"}>1</Link> <Link to={'/2'}>2</Link> <br></br>
    <Outlet /> <br></br>
    Footer
  </div>
}

function Main1() {

  const navigate = useNavigate();

  const redirect2 = () => {
    navigate('/2')
  }

  return <div>
    <button onClick={redirect2}>Page 2</button>
    Is this route working? This is the first Page
  </div>
}

function Main2() {

    const navigate = useNavigate();

  const redirect1 = () => {
    navigate('/1')
  }

  return <div>
    <button onClick={redirect1}>Page 1</button>
    Is this route working? This is the second page
  </div>
}

export default App;