import "./App.css";
import Layout from "./Layout/Layout";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <div>Main</div>
      </Layout>
    </div>
  );
}

export default App;
