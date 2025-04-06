import type React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./assets/scss/bootstrap.scss"
import "./fontawesome"
import "./App.css"
import Home from "./components/Home"
import Head from "./components/Head"
import Shop from "./components/Shop"
import Contact from "./components/Contact"
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
import AshokaLeaf from "./components/Leaf/AshokaLeaf"
import BambooLeaf from "./components/Leaf/BambooLeaf"
import BananaLeaf from "./components/Leaf/BananaLeaf"
import BetelLeaf from "./components/Leaf/BetelLeaf"
import EucalytusLeaf from "./components/Leaf/EucalyptusLeaf"
import FigLeaf from "./components/Leaf/FigLeaf"
import GuavaLeaf from "./components/Leaf/GuavaLeaf"
import MangoLeaf from "./components/Leaf/MangoLeaf"
import MoringaLeaf from "./components/Leaf/MoringaLeaf"
import NeemLeaf from "./components/Leaf/NeemLeaf"
import PalmLeaf from "./components/Leaf/PalmLeaf"
import TeakLeaf from "./components/Leaf/TeakLeaf"
import Toran from "./components/Leaf/Toran"
import TulsiLeaf from "./components/Leaf/TulsiLeaf"
import BasmathiRice from "./components/Rice/BasmathiRice"
import BoildeRice from "./components/Rice/BoildeRice"
import IdlyRice from "./components/Rice/IdlyRice"
import RedRice from "./components/Rice/RedRice"
import SeeragasambaRice from "./components/Rice/SeeragasambaRice"
import WhiteRice from "./components/Rice/WhiteRice"
import BottleGourd from "./components/Vegetables/BottleGourd"
import Brinjal from "./components/Vegetables/Brinjal"
import Broccolie from "./components/Vegetables/Broccolie"
import Cabbage from "./components/Vegetables/Cabbage"
import Cauliflower from "./components/Vegetables/Cauliflower"
import Drumstick from "./components/Vegetables/Drumstick"
import Greenchilli from "./components/Vegetables/Greenchilli"
import Ladyfinger from "./components/Vegetables/Ladyfinger"
import Mushroom from "./components/Vegetables/Mushroom"
import Onion from "./components/Vegetables/Onion"
import Potato from "./components/Vegetables/Potato"
import Spinach from "./components/Vegetables/Spinach"
import Peanutoil from "./components/Oil/Peanutoil"
import Ghee from "./components/Oil/Ghee"
import Palm from "./components/Oil/Palm"
import Sunfloweroil from "./components/Oil/Sunfloweroil"
import Sesameoil from "./components/Oil/Sesameoil"
import Coconutoil from "./components/Oil/Coconutoil"
import Mustardoil from "./components/Oil/Mustardoil"
import Sesameballs from "./components/Snacks/Sesameballs"
import Bananachips from "./components/Snacks/Bananachips"
import Peanutpowder from "./components/Snacks/Peanutpowder"
import Garlicmixture from "./components/Snacks/Garlicmixture"
import Channadal from "./components/Snacks/Channadal"
import Hotmixture from "./components/Snacks/Hotmixture"
import Peanutchikkies from "./components/Snacks/Peanutchikkies"
import Peanutchilli from "./components/Snacks/Peanutchilli"
import Peanutpepper from "./components/Snacks/Peanutpepper"
import Peanutsalt from "./components/Snacks/Peanutsalt"
import Tapiocachips from "./components/Snacks/Tapiocachips"
import Tapiocastick from "./components/Snacks/Tapiocastick"
import Thattai from "./components/Snacks/Thattai"
import Whitesesameballs from "./components/Snacks/Whitesesameballs"
import Chikpeas from "./components/Snacks/Chikpeas"
import Sudarshanapooja from "./components/Pooja/Sudarshanapooja"
import VaralakshmiPooja from "./components/Pooja/VaralakshmiPooja"
import ShivaPooja from "./components/Pooja/Shivapooja"
import SatyanarayanaPooja from "./components/Pooja/Satyanarayanapooja"
import HaridarshanPooja from "./components/Pooja/HaridarshanPooja"
import NavgrahaPooja from "./components/Pooja/NavgrahaPooja"
import GanapathiPooja from "./components/Pooja/GanapathiPooja"
import OmThiraviya from "./components/Pooja/OmThiraviya"
import DurgaPooja from "./components/Pooja/DurgaPooja"
import Kalash from "./components/Pooja/Brass/kalash"
import Bell from "./components/Pooja/Brass/Bell"
import Kungumam from "./components/Pooja/Spiritual/Kungumam"
import Agarbatti from "./components/Pooja/Brass/Agarbatti"
import Thalika from "./components/Pooja/Brass/Thalika"
import Lota from "./components/Pooja/Brass/Lota"
import Kunkumplate from "./components/Pooja/Brass/Kunkumplate"
import Kottaipakku from "./components/Pooja/Spiritual/Kottaipakku"
import Cowdung from "./components/Pooja/Spiritual/Cowdung"
import Sivalpakku from "./components/Pooja/Spiritual/Sivalpakku"
import Kopparathenga from "./components/Pooja/Spiritual/Kopparathenga"
import Vettiver from "./components/Pooja/Spiritual/Vettiver"
import Vibuthi from "./components/Pooja/Spiritual/Vibuthi"
import Omamkit from "./components/Pooja/Spiritual/Omamkit"
import Rosewater from "./components/Pooja/Herbal/Rosewater"
import Sambranipowder from "./components/Pooja/Herbal/Sambranipowder"
import Sandhanampowder from "./components/Pooja/Herbal/Sandhanampowder"
import Sandhanamkatti from "./components/Pooja/Herbal/Sandhanamkatti"
import Panchinool from "./components/Pooja/Herbal/Panchinool"
import Sambranicup from "./components/Pooja/Herbal/Sambranicup"
import Kalasanool from "./components/Pooja/Herbal/Kalasanool"
import Karpuram from "./components/Pooja/Herbal/Karpuram"
import Kattimanjal from "./components/Pooja/Herbal/Kattimanjal"
import Naamakatti from "./components/Pooja/Herbal/Naamakatti"
import Kasthurimanjal from "./components/Pooja/Herbal/Kasthurimanjal"
import Navathaniyam from "./components/Pooja/Herbal/Navathaniyam"
import Grass from "./components/Pooja/Natural/Grass"
import Nel from "./components/Pooja/Natural/Nel"
import Mangostick from "./components/Pooja/Natural/Mangostick"
import Nelpori from "./components/Pooja/Natural/Nelpori"
import Arasankattai from "./components/Pooja/Natural/Arasankattai"
import Garammasala from "./components/Masala/Garammasala"
import Currymasala from "./components/Masala/Currymasala"
import Sambarmasala from "./components/Masala/Sambarmasala"
import Rasammasala from "./components/Masala/Rasammasala"
import Pulikuzhambumasala from "./components/Masala/Pulikuzhambumasala"
import Meatcurrymasala from "./components/Masala/Meatcurrymasala"
import Shreddedcoconut from "./components/Beeda/Shreddedcoconut"
import Sweetjeeramittai from "./components/Beeda/Sweetjeeramittai"
import Rosegulkand from "./components/Beeda/Rosegulkand"
import Drytuttifrutti from "./components/Beeda/Drytuttifrutti"
import Dryclove from "./components/Beeda/Dryclove"
import Sweetpanchutni from "./components/Beeda/Sweetpanchutni"
import Cardamomseeds from "./components/Beeda/Cardamomseeds"
import Kanpuribiscuit from "./components/Beeda/Kanpuribiscuit"
import Garlicpickle from "./components/Pickle/Garlicpickle"
import Greenchillipickle from "./components/Pickle/Greenchillipickle"
import Tomatopickle from "./components/Pickle/Tomatopickle"
import Mangopickle from "./components/Pickle/Mangopickle"
import Brinjalpickle from "./components/Pickle/Brinjalpickel"
import Currypickle from "./components/Pickle/Currypickle"
import Corianderpickle from "./components/Pickle/Corianderpickle"
import Gingerpickle from "./components/Pickle/Gingerpickle"
import Mahanipickle from "./components/Pickle/Mahanipickel"
import Vadumangaipickle from "./components/Pickle/Vadumangaipickle"
import Amlapickle from "./components/Pickle/Amlapickle"
import Limepickle from "./components/Pickle/Limepickle"
import WhiteCarnation from "./components/Flowers/WhiteCarnation"
import SoftPinkCarnation from "./components/Flowers/SoftPinkCarnation"
import RedCarnation from "./components/Flowers/RedCarnation"
import PeachCarnation from "./components/Flowers/PeachCarnation"
import OrangeCarnation from "./components/Flowers/OrangeCarnation"
import YellowCarnation from "./components/Flowers/YellowCarnation"
import SoftPurpleCarnation from "./components/Flowers/SoftPurpleCarnation"
import CarnationBacarat from "./components/Flowers/CarnationBacarat"
import PurpleCarnation from "./components/Flowers/PurpleCarnation"
import PinkCarnation from "./components/Flowers/PinkCarnation"
import Tuberose from "./components/Flowers/Tuberose"
import YellowMarigold from "./components/Flowers/YellowMarigold"
import OrangeMarigold from "./components/Flowers/OrangeMarigold"
import PoojaFlower from "./components/Flowers/PoojaFlower"
import RedRose from "./components/Flowers/RedRose"
import YellowRose from "./components/Flowers/YellowRose"
import OrangeRose from "./components/Flowers/OrangeRose"
import CarnationGarland from "./components/Flowers/CarnationGarland"
import RoseGarland from "./components/Flowers/RoseGarland"
import WeddingGarland from "./components/Flowers/WeddingGarland"
import TuberoseGarland from "./components/Flowers/TuberoseGarland"
import RedRosePetals from "./components/Flowers/RedRosePetals"
import YellowRosePetals from "./components/Flowers/YellowRosePetals"
import OrangeRosePetals from "./components/Flowers/OrangeRosePetals"
import MixedRosePetals from "./components/Flowers/MixedRosePetals"
import JasmineString from "./components/Flowers/JasmineString"
import CarnationString from "./components/Flowers/CarnationString"
import BabyBreath from "./components/Flowers/BabyBreath"
import MixedMarigold from "./components/Flowers/MixedMarigold"
import Garlic from "./components/Spices/Garlic"
import Clove from "./components/Spices/Clove"
import MustardSeed from "./components/Spices/MustardSeed"
import BayLeaf from "./components/Spices/BayLeaf"
import Turmeric from "./components/Spices/Turmeric"
import Sukku from "./components/Spices/Sukku"
import StarAnise from "./components/Spices/StarAnise"
import Cinamon from "./components/Spices/Cinamon"
import Nutmeg from "./components/Spices/Nutmeg"
import Cumin from "./components/Spices/Cumin"
import BlackPepper from "./components/Spices/BlackPepper"
import RedChilli from "./components/Spices/RedChilli"
import Coriander from "./components/Spices/Coriander"
import CaromSeed from "./components/Spices/CaromSeed"
import Mace from "./components/Spices/Mace"
import PoppySeed from "./components/Spices/PoppySeed"
import GreenCardamom from "./components/Spices/GreenCardamom"
import PepperCorns from "./components/Spices/PepperCorns"
import BrownCardamam from "./components/Spices/BrownCardamam"
import Saffron from "./components/Spices/Saffron"
import RiceFlour from "./components/Flour/RiceFlour"
import RedRiceFlour from "./components/Flour/RedRiceFlour"
import RagiFlour from "./components/Flour/RagiFlour"
import MoongDalFlour from "./components/Flour/MoongDalFlour"
import UradDalFlour from "./components/Flour/UradDalFlour"
import RedRiceRoastedFlour from "./components/Flour/RedRiceRoastedFlour"
import MoongDalRoastedFlour from "./components/Flour/MoongDalRoastedFlour"
import UradRoastedFlour from "./components/Flour/UradRoastedFlour"
import Rice from "./components/Page/Rice"
import Cart from "./components/Page/Cart"
import LoginRegister from "./components/LoginRegister"
import { ToastContainer } from "react-toastify"

const App = () => (
  <Provider store={store}>
    <ToastContainer position="top-right" autoClose={3000} />
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
          path="/cart"
          element={(
            <>
              <Head title="Cart | Koogul Industries" />
              <Cart />
            </>
          )}
        />
        <Route
          path="/about-us"
          element={(
            <>
              <Head title="About | Koogul Industries" />
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
          path="/certificates"
          element={(
            <>
              <Head title="Certificates | Koogul Industries" />
              <Shop />
            </>
          )}
        />
        <Route
          path="/Contact"
          element={(
            <>
              <Head title="Contact | Koogul Industries" />
              <Contact />
            </>
          )}
        />
        <Route
          path="/Rice"
          element={(
            <>
              <Head title="Rice | Koogul Industries" />
              <Rice />
            </>
          )}
        />
        <Route
          path="/Rice/Matta-rice"
          element={(
            <>
              <Head title="Matta Rice | Koogul Industries" />
              <Mattarice />
            </>
          )}
        />
        <Route
          path="/Rice/Basmati-Rice"
          element={(
            <>
              <Head title="Basmati Rice | Koogul Industries" />
              <BasmathiRice />
            </>
          )}
        />
        <Route
          path="/Rice/Boiled-Rice"
          element={(
            <>
              <Head title="Boiled Rice | Koogul Industries" />
              <BoildeRice />
            </>
          )}
        />
        <Route
          path="/Rice/Idly-Rice"
          element={(
            <>
              <Head title="Idly Rice | Koogul Industries" />
              <IdlyRice />
            </>
          )}
        />
        <Route
          path="/Rice/Red-Rice"
          element={(
            <>
              <Head title="Red Rice | Koogul Industries" />
              <RedRice />
            </>
          )}
        />
        <Route
          path="/Rice/Seeragasamba-Rice"
          element={(
            <>
              <Head title="Seeragasamba Rice | Koogul Industries" />
              <SeeragasambaRice />
            </>
          )}
        />
        <Route
          path="/Rice/White-Rice"
          element={(
            <>
              <Head title="White Rice | Koogul Industries" />
              <WhiteRice />
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
          path="/spices/garlic"
          element={(
            <>
              <Head title="Garlic | Koogul Industries" />
              <Garlic />
            </>
          )}
        />
        <Route
          path="/spices/clove"
          element={(
            <>
              <Head title="Clove | Koogul Industries" />
              <Clove />
            </>
          )}
        />
        <Route
          path="/spices/mustard-seeds"
          element={(
            <>
              <Head title="Mustard Seed| Koogul Industries" />
              <MustardSeed />
            </>
          )}
        />
        <Route
          path="/spices/bay-leaf"
          element={(
            <>
              <Head title="Bay Leaf| Koogul Industries" />
              <BayLeaf />
            </>
          )}
        />
        <Route
          path="/spices/turmeric"
          element={(
            <>
              <Head title="Turmeric | Koogul Industries" />
              <Turmeric />
            </>
          )}
        />
        <Route
          path="/spices/sukku"
          element={(
            <>
              <Head title="Dry Ginger | Koogul Industries" />
              <Sukku />
            </>
          )}
        />
        <Route
          path="/spices/star-anise"
          element={(
            <>
              <Head title="Star-Anise | Koogul Industries" />
              <StarAnise />
            </>
          )}
        />
        <Route
          path="/spices/cinnamon"
          element={(
            <>
              <Head title="Cinnamon | Koogul Industries" />
              <Cinamon />
            </>
          )}
        />
        <Route
          path="/spices/nutmeg"
          element={(
            <>
              <Head title="Nutmeg | Koogul Industries" />
              <Nutmeg />
            </>
          )}
        />
        <Route
          path="/spices/cumin"
          element={(
            <>
              <Head title="Cumin | Koogul Industries" />
              <Cumin />
            </>
          )}
        />
        <Route
          path="/spices/black-pepper"
          element={(
            <>
              <Head title="Black Pepper| Koogul Industries" />
              <BlackPepper />
            </>
          )}
        />
        <Route
          path="/spices/red-chilli"
          element={(
            <>
              <Head title="Red Chilli | Koogul Industries" />
              <RedChilli />
            </>
          )}
        />
        <Route
          path="/spices/coriander"
          element={(
            <>
              <Head title="Coriander | Koogul Industries" />
              <Coriander />
            </>
          )}
        />
        <Route
          path="/spices/carom-seeds"
          element={(
            <>
              <Head title="Carom Seeds | Koogul Industries" />
              <CaromSeed />
            </>
          )}
        />
        <Route
          path="/spices/mace"
          element={(
            <>
              <Head title="Mace | Koogul Industries" />
              <Mace />
            </>
          )}
        />
        <Route
          path="/spices/poppy-seed"
          element={(
            <>
              <Head title="Poppy Seed | Koogul Industries" />
              <PoppySeed />
            </>
          )}
        />
        <Route
          path="/spices/green-cardamom"
          element={(
            <>
              <Head title="Green Cardamom | Koogul Industries" />
              <GreenCardamom />
            </>
          )}
        />
        <Route
          path="/spices/pepper-corns"
          element={(
            <>
              <Head title="Pepper Corns | Koogul Industries" />
              <PepperCorns />
            </>
          )}
        />
        <Route
          path="/spices/brown-cardamam"
          element={(
            <>
              <Head title="Brown Cardamam | Koogul Industries" />
              <BrownCardamam />
            </>
          )}
        />
        <Route
          path="/spices/saffron"
          element={(
            <>
              <Head title="Saffron | Koogul Industries" />
              <Saffron />
            </>
          )}
        />
        <Route
          path="/snacks"
          element={(
            <>
              <Head title="Snacks| Koogul Industries" />
              <Snacks />
            </>
          )}
        />
        <Route
          path="/snacks/black-sesame"
          element={(
            <>
              <Head title="Black Sesame | Koogul Industries" />
              <Sesameballs />
            </>
          )}
        />
        <Route
          path="/snacks/banana-chips"
          element={(
            <>
              <Head title="Banana Chips | Koogul Industries" />
              <Bananachips />
            </>
          )}
        />
        <Route
          path="/snacks/peanut-powder"
          element={(
            <>
              <Head title="Peanut Powder | Koogul Industries" />
              <Peanutpowder />
            </>
          )}
        />
        <Route
          path="/snacks/garlic-mixture"
          element={(
            <>
              <Head title="Garlic Mixture | Koogul Industries" />
              <Garlicmixture />
            </>
          )}
        />
        <Route
          path="/snacks/chana-dal"
          element={(
            <>
              <Head title="Chana Dal | Koogul Industries" />
              <Channadal />
            </>
          )}
        />
        <Route
          path="/snacks/hot-mixture"
          element={(
            <>
              <Head title="Hot Mixture | Koogul Industries" />
              <Hotmixture />
            </>
          )}
        />
        <Route
          path="/snacks/peanut-chikki"
          element={(
            <>
              <Head title="Peanut Chikki | Koogul Industries" />
              <Peanutchikkies />
            </>
          )}
        />
        <Route
          path="/snacks/masala-peanut"
          element={(
            <>
              <Head title="Masala Peanut | Koogul Industries" />
              <Peanutchilli />
            </>
          )}
        />
        <Route
          path="/snacks/pepper-peanut"
          element={(
            <>
              <Head title="Pepper Peanut | Koogul Industries" />
              <Peanutpepper />
            </>
          )}
        />
        <Route
          path="/snacks/salted-peanut"
          element={(
            <>
              <Head title="Salted Peanut | Koogul Industries" />
              <Peanutsalt />
            </>
          )}
        />
        <Route
          path="/snacks/tapioca-chips"
          element={(
            <>
              <Head title="Tapioca Chips | Koogul Industries" />
              <Tapiocachips />
            </>
          )}
        />
        <Route
          path="/snacks/tapioca-stick"
          element={(
            <>
              <Head title="Tapioca Stick | Koogul Industries" />
              <Tapiocastick />
            </>
          )}
        />
        <Route
          path="/snacks/thattai"
          element={(
            <>
              <Head title="Thattai | Koogul Industries" />
              <Thattai />
            </>
          )}
        />
        <Route
          path="/snacks/white-sesame"
          element={(
            <>
              <Head title="White Sesame | Koogul Industries" />
              <Whitesesameballs />
            </>
          )}
        />
        <Route
          path="/snacks/masala-chikpeas"
          element={(
            <>
              <Head title="Masala Chikpeas | Koogul Industries" />
              <Chikpeas />
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
          path="/flour/rice-flour"
          element={(
            <>
              <Head title="Rice Flour | Koogul Industries" />
              <RiceFlour />
            </>
          )}
        />
        <Route
          path="/flour/red-rice-flour"
          element={(
            <>
              <Head title="Red Rice Flour | Koogul Industries" />
              <RedRiceFlour />
            </>
          )}
        />
        <Route
          path="/flour/ragi-flour"
          element={(
            <>
              <Head title="Ragi Flour | Koogul Industries" />
              <RagiFlour />
            </>
          )}
        />
        <Route
          path="/flour/moong-dal-flour"
          element={(
            <>
              <Head title="Moong Dal Flour | Koogul Industries" />
              <MoongDalFlour />
            </>
          )}
        />
        <Route
          path="/flour/urad-dal-flour"
          element={(
            <>
              <Head title="Urad Dal Flour | Koogul Industries" />
              <UradDalFlour />
            </>
          )}
        />
        <Route
          path="/flour/red-rice-roasted-flour"
          element={(
            <>
              <Head title="Red Rice Roasted Flour | Koogul Industries" />
              <RedRiceRoastedFlour />
            </>
          )}
        />
        <Route
          path="/flour/moong-dal-roasted-flour"
          element={(
            <>
              <Head title="Moong Dal Roasted Flour | Koogul Industries" />
              <MoongDalRoastedFlour />
            </>
          )}
        />
        <Route
          path="/flour/urad-roasted-flour"
          element={(
            <>
              <Head title="Urad Roasted Flour | Koogul Industries" />
              <UradRoastedFlour />
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
          path="/pooja/sudrashana-pooja"
          element={(
            <>
              <Head title="Sudrashana Poja | Koogul Industries" />
              <Sudarshanapooja />
            </>
          )}
        />
        <Route
          path="/pooja/varalakshmi-pooja"
          element={(
            <>
              <Head title="Varalakshmi Pooja | Koogul Industries" />
              <VaralakshmiPooja />
            </>
          )}
        />
        <Route
          path="/pooja/shiva-pooja"
          element={(
            <>
              <Head title="Shiva Pooja | Koogul Industries" />
              <ShivaPooja />
            </>
          )}
        />
        <Route
          path="/pooja/satyanarayana-pooja"
          element={(
            <>
              <Head title="Satyanarayana Pooja | Koogul Industries" />
              <SatyanarayanaPooja />
            </>
          )}
        />
        <Route
          path="/pooja/haridarshan-pooja"
          element={(
            <>
              <Head title="Haridarshan Pooja | Koogul Industries" />
              <HaridarshanPooja />
            </>
          )}
        />
        <Route
          path="/pooja/navgraha-pooja"
          element={(
            <>
              <Head title="Navagraha Pooja | Koogul Industries" />
              <NavgrahaPooja />
            </>
          )}
        />
        <Route
          path="/pooja/ganapathi-pooja"
          element={(
            <>
              <Head title="Ganapathi Pooja | Koogul Industries" />
              <GanapathiPooja />
            </>
          )}
        />
        <Route
          path="/pooja/108-om-thiraviya"
          element={(
            <>
              <Head title="108 Om Thiraviya | Koogul Industries" />
              <OmThiraviya />
            </>
          )}
        />
        <Route
          path="/pooja/durga-pooja"
          element={(
            <>
              <Head title="Durga Pooja | Koogul Industries" />
              <DurgaPooja />
            </>
          )}
        />
        <Route
          path="/pooja/kalash"
          element={(
            <>
              <Head title="Kalash | Koogul Industries" />
              <Kalash />
            </>
          )}
        />
        <Route
          path="/pooja/bell"
          element={(
            <>
              <Head title="Bell | Koogul Industries" />
              <Bell />
            </>
          )}
        />
        <Route
          path="/pooja/kunkum-plate"
          element={(
            <>
              <Head title="Kunkum Plate | Koogul Industries" />
              <Kunkumplate />
            </>
          )}
        />
        <Route
          path="/pooja/agarbatti-holder"
          element={(
            <>
              <Head title="Agarbatti Holder | Koogul Industries" />
              <Agarbatti />
            </>
          )}
        />
        <Route
          path="/pooja/thalika"
          element={(
            <>
              <Head title="Thalika | Koogul Industries" />
              <Thalika />
            </>
          )}
        />
        <Route
          path="/pooja/lota"
          element={(
            <>
              <Head title="Lota | Koogul Industries" />
              <Lota />
            </>
          )}
        />
        <Route
          path="/pooja/kungumam"
          element={(
            <>
              <Head title="Kungumam | Koogul Industries" />
              <Kungumam />
            </>
          )}
        />
        <Route
          path="/pooja/kottai-pakku"
          element={(
            <>
              <Head title="Kottai Pakku | Koogul Industries" />
              <Kottaipakku />
            </>
          )}
        />
        <Route
          path="/pooja/cow-dung-cake"
          element={(
            <>
              <Head title="Cow Dung Cake | Koogul Industries" />
              <Cowdung />
            </>
          )}
        />
        <Route
          path="/pooja/sival-pakku"
          element={(
            <>
              <Head title="Sival Pakku | Koogul Industries" />
              <Sivalpakku />
            </>
          )}
        />
        <Route
          path="/pooja/koppara-thenga"
          element={(
            <>
              <Head title="Koppara Thenga | Koogul Industries" />
              <Kopparathenga />
            </>
          )}
        />
        <Route
          path="/pooja/vetti-ver"
          element={(
            <>
              <Head title="Vetti ver | Koogul Industries" />
              <Vettiver />
            </>
          )}
        />
        <Route
          path="/pooja/vibuthi"
          element={(
            <>
              <Head title="Vibuthi | Koogul Industries" />
              <Vibuthi />
            </>
          )}
        />
        <Route
          path="/pooja/omam-kit-108"
          element={(
            <>
              <Head title="Omam Kit 108 | Koogul Industries" />
              <Omamkit />
            </>
          )}
        />
        <Route
          path="/pooja/paneer-water"
          element={(
            <>
              <Head title="Paneer Water | Koogul Industries" />
              <Rosewater />
            </>
          )}
        />
        <Route
          path="/pooja/sambrani-powder"
          element={(
            <>
              <Head title="Sambrani Powder | Koogul Industries" />
              <Sambranipowder />
            </>
          )}
        />
        <Route
          path="/pooja/sandhanam-powder"
          element={(
            <>
              <Head title="Sandhanam Powder | Koogul Industries" />
              <Sandhanampowder />
            </>
          )}
        />
        <Route
          path="/pooja/sandhanam-katti"
          element={(
            <>
              <Head title="Sandhanam Katti | Koogul Industries" />
              <Sandhanamkatti />
            </>
          )}
        />
        <Route
          path="/pooja/panchi-nool"
          element={(
            <>
              <Head title="Panchi Nool | Koogul Industries" />
              <Panchinool />
            </>
          )}
        />
        <Route
          path="/pooja/sambrani-cup"
          element={(
            <>
              <Head title="Sambrani Cup | Koogul Industries" />
              <Sambranicup />
            </>
          )}
        />
        <Route
          path="/pooja/kalasa-nool"
          element={(
            <>
              <Head title="Kalasa Nool | Koogul Industries" />
              <Kalasanool />
            </>
          )}
        />
        <Route
          path="/pooja/karpuram"
          element={(
            <>
              <Head title="Karpuram | Koogul Industries" />
              <Karpuram />
            </>
          )}
        />
        <Route
          path="/pooja/katti-manjal"
          element={(
            <>
              <Head title="Katti Manjal | Koogul Industries" />
              <Kattimanjal />
            </>
          )}
        />
        <Route
          path="/pooja/namaa-katti"
          element={(
            <>
              <Head title="Naama Katti | Koogul Industries" />
              <Naamakatti />
            </>
          )}
        />
        <Route
          path="/pooja/kasthuri-manjal"
          element={(
            <>
              <Head title="Kasthuri Manjal | Koogul Industries" />
              <Kasthurimanjal />
            </>
          )}
        />
        <Route
          path="/pooja/navathaniyam"
          element={(
            <>
              <Head title="Navathaniyam | Koogul Industries" />
              <Navathaniyam />
            </>
          )}
        />
        <Route
          path="/pooja/grass"
          element={(
            <>
              <Head title="Grass | Koogul Industries" />
              <Grass />
            </>
          )}
        />
        <Route
          path="/pooja/nel"
          element={(
            <>
              <Head title="Nel | Koogul Industries" />
              <Nel />
            </>
          )}
        />
        <Route
          path="/pooja/mango-stick"
          element={(
            <>
              <Head title="Mango Stick | Koogul Industries" />
              <Mangostick />
            </>
          )}
        />
        <Route
          path="/pooja/nel-pori"
          element={(
            <>
              <Head title="Nel Pori | Koogul Industries" />
              <Nelpori />
            </>
          )}
        />
        <Route
          path="/pooja/arasan-kattai"
          element={(
            <>
              <Head title="Arasan Kattia | Koogul Industries" />
              <Arasankattai />
            </>
          )}
        />
        <Route
          path="/Flower"
          element={(
            <>
              <Head title="Flower | Koogul Industries" />
              <Flower />
            </>
          )}
        />
        <Route
          path="/flower/white-carnation"
          element={(
            <>
              <Head title="White Carnation | Koogul Industries" />
              <WhiteCarnation />
            </>
          )}
        />
        <Route
          path="/flower/soft-pink-carnation"
          element={(
            <>
              <Head title="Soft Pink Carnation | Koogul Industries" />
              <SoftPinkCarnation />
            </>
          )}
        />
        <Route
          path="/flower/red-carnation"
          element={(
            <>
              <Head title="Red Carnation | Koogul Industries" />
              <RedCarnation />
            </>
          )}
        />
        <Route
          path="/flower/peach-carnation"
          element={(
            <>
              <Head title="Peach Carnation | Koogul Industries" />
              <PeachCarnation />
            </>
          )}
        />
        <Route
          path="/flower/orange-carnation"
          element={(
            <>
              <Head title="Orange Carnation | Koogul Industries" />
              <OrangeCarnation />
            </>
          )}
        />
        <Route
          path="/flower/yellow-carnation"
          element={(
            <>
              <Head title="Yellow Carnation | Koogul Industries" />
              <YellowCarnation />
            </>
          )}
        />
        <Route
          path="/flower/soft-purple-carnation"
          element={(
            <>
              <Head title="Soft Purple Carnation | Koogul Industries" />
              <SoftPurpleCarnation />
            </>
          )}
        />
        <Route
          path="/flower/carnation-bacarat"
          element={(
            <>
              <Head title="Carnation Bacarat | Koogul Industries" />
              <CarnationBacarat />
            </>
          )}
        />
        <Route
          path="/flower/purple-carnation"
          element={(
            <>
              <Head title="Purple Carnation | Koogul Industries" />
              <PurpleCarnation />
            </>
          )}
        />
        <Route
          path="/flower/pink-carnation"
          element={(
            <>
              <Head title="Pink Carnation | Koogul Industries" />
              <PinkCarnation />
            </>
          )}
        />
        <Route
          path="/flower/tuberose"
          element={(
            <>
              <Head title="Tuberose | Koogul Industries" />
              <Tuberose />
            </>
          )}
        />
        <Route
          path="/flower/yellow-marigold"
          element={(
            <>
              <Head title="Yellow Marigold | Koogul Industries" />
              <YellowMarigold />
            </>
          )}
        />
        <Route
          path="/flower/orange-marigold"
          element={(
            <>
              <Head title="Orange Marigold | Koogul Industries" />
              <OrangeMarigold />
            </>
          )}
        />
        <Route
          path="/flower/pooja-flower"
          element={(
            <>
              <Head title="Pooja Flower | Koogul Industries" />
              <PoojaFlower />
            </>
          )}
        />
        <Route
          path="/flower/red-rose"
          element={(
            <>
              <Head title="Red Rose | Koogul Industries" />
              <RedRose />
            </>
          )}
        />
        <Route
          path="/flower/yellow-rose"
          element={(
            <>
              <Head title="Yellow Rose | Koogul Industries" />
              <YellowRose />
            </>
          )}
        />
        <Route
          path="/flower/orange-rose"
          element={(
            <>
              <Head title="Orange Rose | Koogul Industries" />
              <OrangeRose />
            </>
          )}
        />
        <Route
          path="/flower/carnation-garland"
          element={(
            <>
              <Head title="Carnation Garland | Koogul Industries" />
              <CarnationGarland />
            </>
          )}
        />
        <Route
          path="/flower/rose-garland"
          element={(
            <>
              <Head title="Rose Garland | Koogul Industries" />
              <RoseGarland />
            </>
          )}
        />
        <Route
          path="/flower/wedding-garland"
          element={(
            <>
              <Head title="Wedding Garland | Koogul Industries" />
              <WeddingGarland />
            </>
          )}
        />
        <Route
          path="/flower/tuberose-garland"
          element={(
            <>
              <Head title="Tuberose Garland | Koogul Industries" />
              <TuberoseGarland />
            </>
          )}
        />
        <Route
          path="/flower/red-rose-petals"
          element={(
            <>
              <Head title="Red Rose Petals | Koogul Industries" />
              <RedRosePetals />
            </>
          )}
        />
        <Route
          path="/flower/yellow-rose-petals"
          element={(
            <>
              <Head title="Yellow Rose Petals | Koogul Industries" />
              <YellowRosePetals />
            </>
          )}
        />
        <Route
          path="/flower/orange-rose-petals"
          element={(
            <>
              <Head title="Orange Rose Petals | Koogul Industries" />
              <OrangeRosePetals />
            </>
          )}
        />
        <Route
          path="/flower/mixed-rose-petals"
          element={(
            <>
              <Head title="Mixed Rose Petals | Koogul Industries" />
              <MixedRosePetals />
            </>
          )}
        />
        <Route
          path="/flower/jasmine-string"
          element={(
            <>
              <Head title="Jasmine String | Koogul Industries" />
              <JasmineString />
            </>
          )}
        />
        <Route
          path="/flower/carnation-string"
          element={(
            <>
              <Head title="Carnation String | Koogul Industries" />
              <CarnationString />
            </>
          )}
        />
        <Route
          path="/flower/baby-breath-string"
          element={(
            <>
              <Head title="Baby Breath String | Koogul Industries" />
              <BabyBreath />
            </>
          )}
        />
        <Route
          path="/flower/mixed-marigold-string"
          element={(
            <>
              <Head title="Mixed Marigold String | Koogul Industries" />
              <MixedMarigold />
            </>
          )}
        />
        <Route
          path="/Leaf"
          element={(
            <>
              <Head title="Leaf | Koogul Industries" />
              <Leaf />
            </>
          )}
        />
        <Route
          path="/Leaf/ashoka-leaf"
          element={(
            <>
              <Head title="Ashoka Leaf | Koogul Industries" />
              <AshokaLeaf />
            </>
          )}
        />
        <Route
          path="/Leaf/bamboo-leaf"
          element={(
            <>
              <Head title="Bamboo Leaf | Koogul Industries" />
              <BambooLeaf />
            </>
          )}
        />
        <Route
          path="/Leaf/banana-leaf"
          element={(
            <>
              <Head title="Banana Leaf | Koogul Industries" />
              <BananaLeaf />
            </>
          )}
        />
        <Route
          path="/Leaf/betel-leaf"
          element={(
            <>
              <Head title="Betel Leaf | Koogul Industries" />
              <BetelLeaf />
            </>
          )}
        />
        <Route
          path="/Leaf/eucalyptus-leaf"
          element={(
            <>
              <Head title="Eucalyptus Leaf | Koogul Industries" />
              <EucalytusLeaf />
            </>
          )}
        />
        <Route
          path="/Leaf/fig-leaf"
          element={(
            <>
              <Head title="Fig Leaf | Koogul Industries" />
              <FigLeaf />
            </>
          )}
        />
        <Route
          path="/Leaf/guava-leaf"
          element={(
            <>
              <Head title="Guava Leaf | Koogul Industries" />
              <GuavaLeaf />
            </>
          )}
        />
        <Route
          path="/Leaf/mango-leaf"
          element={(
            <>
              <Head title="Mango Leaf | Koogul Industries" />
              <MangoLeaf />
            </>
          )}
        />
        <Route
          path="/Leaf/moringa-leaf"
          element={(
            <>
              <Head title="Moringa Leaf | Koogul Industries" />
              <MoringaLeaf />
            </>
          )}
        />
        <Route
          path="/Leaf/neem-leaf"
          element={(
            <>
              <Head title="Neem Leaf | Koogul Industries" />
              <NeemLeaf />
            </>
          )}
        />
        <Route
          path="/Leaf/palm-leaf"
          element={(
            <>
              <Head title="Palm Leaf | Koogul Industries" />
              <PalmLeaf />
            </>
          )}
        />
        <Route
          path="/Leaf/teak-leaf"
          element={(
            <>
              <Head title="Teak Leaf | Koogul Industries" />
              <TeakLeaf />
            </>
          )}
        />
        <Route
          path="/Leaf/toran"
          element={(
            <>
              <Head title="Toran | Koogul Industries" />
              <Toran />
            </>
          )}
        />
        <Route
          path="/Leaf/tulsi-leaf"
          element={(
            <>
              <Head title="Tulsi Leaf | Koogul Industries" />
              <TulsiLeaf />
            </>
          )}
        />
        <Route
          path="/Pickle"
          element={(
            <>
              <Head title="Pickle | Koogul Industries" />
              <Pickle />
            </>
          )}
        />
        <Route
          path="/pickle/garlic-pickle"
          element={(
            <>
              <Head title="Garlic Pickle | Koogul Industries" />
              <Garlicpickle />
            </>
          )}
        />
        <Route
          path="/pickle/green-chilli-pickle"
          element={(
            <>
              <Head title="Green Chilli Pickle | Koogul Industries" />
              <Greenchillipickle />
            </>
          )}
        />
        <Route
          path="/pickle/tomato-pickle"
          element={(
            <>
              <Head title="Tomato Pickle | Koogul Industries" />
              <Tomatopickle />
            </>
          )}
        />
        <Route
          path="/pickle/mango-pickle"
          element={(
            <>
              <Head title="Mango Pickle | Koogul Industries" />
              <Mangopickle />
            </>
          )}
        />
        <Route
          path="/pickle/brinjal-pickle"
          element={(
            <>
              <Head title="Brinjal Pickle | Koogul Industries" />
              <Brinjalpickle />
            </>
          )}
        />
        <Route
          path="/pickle/curry-pickle"
          element={(
            <>
              <Head title="Curry Pickle | Koogul Industries" />
              <Currypickle />
            </>
          )}
        />
        <Route
          path="/pickle/coriander-pickle"
          element={(
            <>
              <Head title="Coriander Pickle | Koogul Industries" />
              <Corianderpickle />
            </>
          )}
        />
        <Route
          path="/pickle/ginger-pickle"
          element={(
            <>
              <Head title="Ginger Pickle | Koogul Industries" />
              <Gingerpickle />
            </>
          )}
        />
        <Route
          path="/pickle/mahani-pickle"
          element={(
            <>
              <Head title="Mahani Pickle | Koogul Industries" />
              <Mahanipickle />
            </>
          )}
        />
        <Route
          path="/pickle/vadu-maangai"
          element={(
            <>
              <Head title="Vadu Maangai Pickle | Koogul Industries" />
              <Vadumangaipickle />
            </>
          )}
        />
        <Route
          path="/pickle/amla-pickle"
          element={(
            <>
              <Head title="Amla Pickle | Koogul Industries" />
              <Amlapickle />
            </>
          )}
        />
        <Route
          path="/pickle/lime-pickle"
          element={(
            <>
              <Head title="Lime Pickle | Koogul Industries" />
              <Limepickle />
            </>
          )}
        />
        <Route
          path="/Vegetables"
          element={(
            <>
              <Head title="Vegetable | Koogul Industries" />
              <Vegetable />
            </>
          )}
        />
        <Route
          path="/Vegetables/Bottle-gourd"
          element={(
            <>
              <Head title="Bootle Gourd | Koogul Industries" />
              <BottleGourd />
            </>
          )}
        />
        <Route
          path="/Vegetables/Brinjal"
          element={(
            <>
              <Head title="Brinjal | Koogul Industries" />
              <Brinjal />
            </>
          )}
        />
        <Route
          path="/Vegetables/Broccolie"
          element={(
            <>
              <Head title="Broccolie | Koogul Industries" />
              <Broccolie />
            </>
          )}
        />
        <Route
          path="/Vegetables/Cabbage"
          element={(
            <>
              <Head title="Cabbage | Koogul Industries" />
              <Cabbage />
            </>
          )}
        />
        <Route
          path="/Vegetables/Cauli-Flower"
          element={(
            <>
              <Head title="Cauli Flower | Koogul Industries" />
              <Cauliflower />
            </>
          )}
        />
        <Route
          path="/Vegetables/Drum-Stick"
          element={(
            <>
              <Head title="Drum Stick | Koogul Industries" />
              <Drumstick />
            </>
          )}
        />
        <Route
          path="/Vegetables/Green-Chilli"
          element={(
            <>
              <Head title="Green Chilli | Koogul Industries" />
              <Greenchilli />
            </>
          )}
        />
        <Route
          path="/Vegetables/Ladyfinger"
          element={(
            <>
              <Head title="Ladyfinger | Koogul Industries" />
              <Ladyfinger />
            </>
          )}
        />
        <Route
          path="/Vegetables/Mushroom"
          element={(
            <>
              <Head title="Mushroom | Koogul Industries" />
              <Mushroom />
            </>
          )}
        />
        <Route
          path="/Vegetables/Onion"
          element={(
            <>
              <Head title="Onion | Koogul Industries" />
              <Onion />
            </>
          )}
        />
        <Route
          path="/Vegetables/Potato"
          element={(
            <>
              <Head title="Potato | Koogul Industries" />
              <Potato />
            </>
          )}
        />
        <Route
          path="/Vegetables/Spinach"
          element={(
            <>
              <Head title="Spinach | Koogul Industries" />
              <Spinach />
            </>
          )}
        />
        <Route
          path="/Oil"
          element={(
            <>
              <Head title="Oil | Koogul Industries" />
              <Oil />
            </>
          )}
        />
        <Route
          path="/Oil/Peanut-oil"
          element={(
            <>
              <Head title="Peanut Oil | Koogul Industries" />
              <Peanutoil />
            </>
          )}
        />
        <Route
          path="/Oil/Ghee"
          element={(
            <>
              <Head title="Ghee | Koogul Industries" />
              <Ghee />
            </>
          )}
        />
        <Route
          path="/Oil/Palm-oil"
          element={(
            <>
              <Head title="Palm Oil | Koogul Industries" />
              <Palm />
            </>
          )}
        />
        <Route
          path="/Oil/Sunflower-oil"
          element={(
            <>
              <Head title="Sunflower Oil | Koogul Industries" />
              <Sunfloweroil />
            </>
          )}
        />
        <Route
          path="/Oil/Sesame-oil"
          element={(
            <>
              <Head title="Sesame Oil | Koogul Industries" />
              <Sesameoil />
            </>
          )}
        />
        <Route
          path="/Oil/Coconut-oil"
          element={(
            <>
              <Head title="Coconut Oil | Koogul Industries" />
              <Coconutoil />
            </>
          )}
        />
        <Route
          path="/Oil/Mustard-oil"
          element={(
            <>
              <Head title="Mustard Oil | Koogul Industries" />
              <Mustardoil />
            </>
          )}
        />
        <Route
          path="/Masala"
          element={(
            <>
              <Head title="Masala | Koogul Industries" />
              <Masala />
            </>
          )}
        />
        <Route
          path="/masala/garam-masala"
          element={(
            <>
              <Head title="Garam Masala | Koogul Industries" />
              <Garammasala />
            </>
          )}
        />
        <Route
          path="/masala/curry-masala"
          element={(
            <>
              <Head title="Curry Masala | Koogul Industries" />
              <Currymasala />
            </>
          )}
        />
        <Route
          path="/masala/sambar-masala"
          element={(
            <>
              <Head title="Sambar Masala | Koogul Industries" />
              <Sambarmasala />
            </>
          )}
        />
        <Route
          path="/masala/rasam-masala"
          element={(
            <>
              <Head title="Rasam Masala | Koogul Industries" />
              <Rasammasala />
            </>
          )}
        />
        <Route
          path="/masala/pulikulambu-masala"
          element={(
            <>
              <Head title="Pulikulambu Masala | Koogul Industries" />
              <Pulikuzhambumasala />
            </>
          )}
        />
        <Route
          path="/masala/meat-curry-masala"
          element={(
            <>
              <Head title="Meat Curry Masala | Koogul Industries" />
              <Meatcurrymasala />
            </>
          )}
        />
        <Route
          path="/Beeda"
          element={(
            <>
              <Head title="Beeda | Koogul Industries" />
              <Beeda />
            </>
          )}
        />
        <Route
          path="/beeda/shredded-coconut"
          element={(
            <>
              <Head title="Shredded Coconut | Koogul Industries" />
              <Shreddedcoconut />
            </>
          )}
        />
        <Route
          path="/beeda/sweet-jeera-mittai"
          element={(
            <>
              <Head title="Sweet Jeera Mittai | Koogul Industries" />
              <Sweetjeeramittai />
            </>
          )}
        />
        <Route
          path="/beeda/rose-gulkand"
          element={(
            <>
              <Head title="Rose Gulkand | Koogul Industries" />
              <Rosegulkand />
            </>
          )}
        />
        <Route
          path="/beeda/dry-tutti-frutti"
          element={(
            <>
              <Head title="Dry Tutti Frutti | Koogul Industries" />
              <Drytuttifrutti />
            </>
          )}
        />
        <Route
          path="/beeda/dry-clove"
          element={(
            <>
              <Head title="Dry Clove | Koogul Industries" />
              <Dryclove />
            </>
          )}
        />
        <Route
          path="/beeda/sweet-pan-chutni"
          element={(
            <>
              <Head title="Sweet Pan Chutni | Koogul Industries" />
              <Sweetpanchutni />
            </>
          )}
        />
        <Route
          path="/beeda/cardamon-seeds"
          element={(
            <>
              <Head title="Cardamon Seeds | Koogul Industries" />
              <Cardamomseeds />
            </>
          )}
        />
        <Route
          path="/beeda/kanpuri-biscuit"
          element={(
            <>
              <Head title=" | Koogul Industries" />
              <Kanpuribiscuit />
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
          path="/LoginRegitser"
          element={
            <>
              <Head title="User Register | Koogul Industries" />
              <LoginRegister />
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
      </Routes>
    </BrowserRouter>
  </Provider>
)

// @ts-ignore
export default App
