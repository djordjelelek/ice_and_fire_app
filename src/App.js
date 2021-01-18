import "./App.css";
import Layout from "./Layout/Layout";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header />
          <Main />
          <Footer />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
