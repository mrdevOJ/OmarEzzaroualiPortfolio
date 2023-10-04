import { Contact } from "./Contact/contact";
import About from "./about/about";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Nav } from "./header/navbar";
import { Bag } from "./project/background";
import { Cardsinfo } from "./project/cardsinfo";
import "./style.css";
function App() {
  return (
  <div  data-bs-spy="scroll" data-bs-smooth-scroll="true">
    <Nav />
    <Header />
    <Bag />
    <Cardsinfo />
    <About />
    <Bag />
    <Contact />
    <Footer />
  </div>
  );
}

export default App;
