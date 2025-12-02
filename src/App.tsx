import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import StaticLayout from "./StaticLayout"
import MainApp from "./pages/MainApp"
function App() {

  return (
    <Routes>
      <Route element={<StaticLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/app" element={<MainApp />} />
    </Routes>
  )
}

export default App
