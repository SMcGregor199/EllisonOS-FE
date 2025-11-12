import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import StaticLayout from "./StaticLayout"
function App() {

  return (
    <Routes>
      <Route element={<StaticLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
