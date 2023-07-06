import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./pages/Login";
import Register  from "./pages/Register";
import Posts from './pages/Posts';
import Home from "./pages/Home";
import Layout from './pages/Layout';
function Main (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Login/>} />
                    <Route path='/home' element={<Home/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path='/posts' element={<Posts/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Main;