import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./components/pagenotfound";
import SearchBox from "./components/SearchBox";
import Layout from "./components/layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<>
        <Layout>
          <SearchBox />
        <HomePage />
        </Layout>
        </>
        } />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
