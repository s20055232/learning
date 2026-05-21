import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

/**
 * Challenge:
 *
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */

function MainContent() {
  return (
    <main>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be in demand as a developer!</li>
        <li>It's a powerful tool for building user interfaces.</li>
        <li>It has a large and supportive community.</li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      © 20xx {"<last name here>"} development. All rights reserved.
    </footer>
  );
}

function Header() {
  return (
    <header>
      <img src="react.png" width="40px" alt="react-header-img"></img>
    </header>
  );
}

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
