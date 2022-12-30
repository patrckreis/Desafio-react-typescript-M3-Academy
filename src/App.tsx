import { Header } from "./components/header/header";
import { MainContent } from "./components/main/main-content";
import { HeaderMenu } from "./components/header-menu/header-menu";
import { Newsletter } from "./components/newsletter/newsletter";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderMenu />
      <MainContent />
      <Newsletter />
    </div>
  );
}

export default App;
