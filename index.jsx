import { createRoot } from "react-dom/client";
import Header from "./Header";
import MainContent from "./Main";
import Footer from "./Footer";
const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </>
  );
}

root.render(<Page></Page>);
