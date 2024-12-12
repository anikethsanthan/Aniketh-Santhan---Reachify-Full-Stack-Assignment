
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body"
import Login from "./Components/Login"
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import List from "./Components/List";
function App() {
  

  return (
    <>
    <Provider store={appStore }>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route path="/login" element={<Login/>}/>
      <Route path="/list" element={<List/>}/>

      </Route>
     
    </Routes>
    </BrowserRouter>
    </Provider>

   
      
    </>
  )
}

export default App
