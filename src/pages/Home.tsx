import { Header } from "../components/header/header";
import { MainContent } from "../components/main/main-content";
import { Footer } from "../components/footer/footer";
import { FloatingButtons } from "../components/floating-buttons/floating-buttons";

export function Home() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
