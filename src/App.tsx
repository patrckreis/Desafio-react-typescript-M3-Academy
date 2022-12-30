import { Header } from "./components/header/header";
import { MainContent } from "./components/main/main-content";
import { HeaderMenu } from "./components/header-menu/header-menu";
import { Newsletter } from "./components/newsletter/newsletter";
import { InfoAgencia } from "./components/info-agencia/info-agencia";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderMenu />
      <MainContent />
      <Newsletter />
      <InfoAgencia />
      <Footer />
    </div>
  );
}

export default App;
