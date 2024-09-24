import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/developer"
            element={<div className="h-[50vh]"></div>}
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
