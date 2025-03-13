import type React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./assets/scss/bootstrap.scss"
import "./fontawesome"
import "./App.css"
import Home from "./components/Home"
import Head from "./components/Head"
import Shop from "./components/Shop"
import Contact from "./components/Contact"
import Cart from "./components/Page/Cart"
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail"
import store from "./app/store"
import { Provider } from "react-redux"
import LoginForm from "./components/LoginForm"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import 'aos/dist/aos.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Spices from "./components/Page/Spices"
import Snacks from "./components/Page/Snacks"
import Pooja from "./components/Page/Pooja"
import Flower from "./components/Page/NoPage"
import Flour from "./components/Page/Flour"
import Leaf from "./components/Page/Leaf"
import Pickle from "./components/Page/Pickle"
import Vegetable from "./components/Page/Vegetable"
import Oil from "./components/Page/Oil"
import Beeda from "./components/Page/Beeda"
import Masala from "./components/Page/Masala"
import Mattarice from "./components/Rice/Mattarice"

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Head title="Home | Koogul Industries " />
              <Home />
            </>
          )}
        />
        <Route
          path="/products"
          element={(
            <>
              <Head title="Products | Koogul Industries" />
              <Products />
            </>
          )}
        />
        <Route
          path="/product/:id"
          element={(
            <>
              <Head title="Product Detail| Koogul Industries" />
              <ProductDetail />
            </>
          )}
        />
        <Route
          path="/shop"
          element={(
            <>
              <Head title="Shop | Koogul Industries" />
              <Shop />
            </>
          )}
        />
        <Route
        // path="/shop-detail"
        // element={(
        //   <>
        //     <Head title="Shop Detail| Koogul Industries" />
        //     <ShopDetail />
        //   </>
        // )}
        />
        <Route
          path="/contact"
          element={(
            <>
              <Head title="Contact| Koogul Industries" />
              <Contact />
            </>
          )}
        />

        <Route
          path="/Rice"
          element={(
            <>
              <Head title="Rice| Koogul Industries" />
              <Cart />
            </>
          )}
        />
        <Route
          path="/Rice/Matta-rice"
          element={(
            <>
              <Head title="Rice | Matta Rice" />
              <Mattarice />
            </>
          )}
        />
        <Route
          path="/spices"
          element={(
            <>
              <Head title="Spices| Koogul Industries" />
              <Spices />
            </>
          )}
        />
        <Route
          path="/snacks"
          element={(
            <>
              <Head title="snacks| Koogul Industries" />
              <Snacks />
            </>
          )}
        />
        <Route
          path="/Flour"
          element={(
            <>
              <Head title="Flour| Koogul Industries" />
              <Flour />
            </>
          )}
        />
        <Route
          path="/Pooja"
          element={(
            <>
              <Head title="Pooja | Koogul Industries" />
              <Pooja />
            </>
          )}
        />
        <Route
          path="/Flower"
          element={(
            <>
              <Head title="Flower | Page not found" />
              <Flower />
            </>
          )}
        />
        <Route
          path="/Leaf"
          element={(
            <>
              <Head title="Leaf | Page not found" />
              <Leaf />
            </>
          )}
        />
        <Route
          path="/Pickle"
          element={(
            <>
              <Head title="Pickle | Page not found" />
              <Pickle />
            </>
          )}
        />
        <Route
          path="/Vegetable"
          element={(
            <>
              <Head title="Vegetable | Page not found" />
              <Vegetable />
            </>
          )}
        />
        <Route
          path="/Oil"
          element={(
            <>
              <Head title="Oil | Page not found" />
              <Oil />
            </>
          )}
        />
        <Route
          path="/Masala"
          element={(
            <>
              <Head title="Masala | Page not found" />
              <Masala />
            </>
          )}
        />
        <Route
          path="/Beeda"
          element={(
            <>
              <Head title="Beeda | Page not found" />
              <Beeda />
            </>
          )}
        />
        <Route
          path=":id"
          element={(
            <>
              <Head title="Shop | Koogul Industries" />
              <Shop />
            </>
          )}
        />
        <Route
          path="/login"
          element={
            <>
              <Head title="Login" />
              <Header />
              <LoginForm />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Head title="Profile " />
              <Header />
              <Profile />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/404.html" />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

// @ts-ignore
export default App
