import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Userlist from './Userlist';
import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
import CreateUser from './CreateUser';
import Editid from './Editid';

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
              {/* <Dashboard></Dashboard> */}
              {/* <Userlist></Userlist> */}



              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/users" element={<Userlist/>}></Route>
                <Route path="/Create User" element={<CreateUser/>}></Route>
                <Route path="/user-edit/:id" element={<Editid/>}></Route>


              </Routes>



            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
