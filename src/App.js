/** @format */

import "./styles/Modern-normalize.css";
import "./styles/App.css";
import "./styles/Utils.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Landing from "./pages/landing/Landing";
import ItemInfo from "./pages/products/ItemInfo";
import Juice from "./pages/products/Juice";
import Mods from "./pages/products/Mods";
import Pods from "./pages/products/Pods";
import Atomizer from "./pages/products/Atomizer";
import Accessories from "./pages/products/Accessories";
import Contact from "./components/Contact/Contact";
import { products, topProducts, brands } from "./components/data/Data";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard topProducts={topProducts} brands={brands} />} />
          <Route path='/juice' element={<Juice products={products} />} />
          <Route path='/mods-kids' element={<Mods products={products} />} />
          <Route path='/pods' element={<Pods products={products} />} />
          <Route path='/atomizer' element={<Atomizer products={products} />} />
          <Route path='/accessories' element={<Accessories products={products} />} />
          {/* <Route path='/item/id' element={<ItemInfo topProducts={topProducts} />} /> */}
          <Route path='/mods-kids/:id' element={<ItemInfo topProducts={topProducts} />} />
          <Route path='/juice/:id' element={<ItemInfo topProducts={topProducts} />} />
          <Route path='/pods/:id' element={<ItemInfo topProducts={topProducts} />} />
          <Route path='/atomizer/:id' element={<ItemInfo topProducts={topProducts} />} />
          <Route path='/accessories/:id' element={<ItemInfo topProducts={topProducts} />} />
        </Routes>
      </BrowserRouter>
      <Contact />
    </>
  );
}

export default App;
