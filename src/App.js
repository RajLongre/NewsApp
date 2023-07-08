import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<News key="general" category="general" />}
            ></Route>
            <Route
              path="/sports"
              element={<News key="sports" category="sports" />}
            ></Route>
            <Route
              path="/health"
              element={<News key="health" category="health" />}
            ></Route>
            <Route
              path="/technology"
              element={<News key="technology" category="technology" />}
            ></Route>
            <Route
              path="/entertainment"
              element={<News key="entertainment" category="entertainment" />}
            ></Route>
            <Route
              path="/science"
              element={<News key="science" category="science" />}
            ></Route>
            <Route
              path="/business"
              element={<News key="business" category="business" />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
