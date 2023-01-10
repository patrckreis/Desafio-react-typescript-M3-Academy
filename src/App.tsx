import { Header } from "./components/header/header";
import { MainContent } from "./components/main/main-content";
import { HeaderMenu } from "./components/header-menu/header-menu";

import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderMenu />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
