import { Route, Routes } from "react-router-dom"
import { Main, Todoinput } from "./components"
import Counter from "./components/home/Counter"

const App = () => {
  return (<>
  <h1> 리액트 홈 </h1>
  <Routes>
  <Route path="/" element={<Main/>}></Route>
  <Route path="/counter" element={<Counter/>}></Route>
  <Route path="/todos" element={<Todoinput/>}></Route>
  </Routes>
 
  </>)

}

export default App
