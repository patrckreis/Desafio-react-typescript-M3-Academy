import { Header } from "./components/header/header";
import { MainContent } from "./components/main/main-content";
import { Footer } from "./components/footer/footer";
import { FloatingButtons } from "./components/floating-buttons/floating-buttons";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
