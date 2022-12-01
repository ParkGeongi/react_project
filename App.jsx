

import { Route, Routes } from "react-router-dom"
import Counter from "./compoenets/Counter"

const App = () => {<>
  return (<Routes>

    <Route path="/" element={<Counter/>}> </Route>

  </Routes></>)

}

export default App
