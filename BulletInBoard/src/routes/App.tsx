import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../components/Bienvenida/Inicio";
import Screen2 from "../components/Bienvenida/Screen2";
import Screen3 from "../components/Bienvenida/Screen3";
import SingIn from "../components/Registro/SingIn";
import SingUp from "../components/Registro/SingUp";
import Home from "../components/Home";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";


function App() {

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/screen_2" element={<Screen2 />} />
            <Route path="/screen_3" element={<Screen3 />} />
            <Route path="/singin" element={<SingIn />} />
            <Route path="/singup" element={<SingUp />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
