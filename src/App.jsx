import "./style/app.scss";
import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./Layout/Header/Header";
import { useSelector } from "react-redux";
import { ScrollRestoration } from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <ScrollRestoration/>
      <AppWithTheme />
    </Provider>
  );
}

function AppWithTheme() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`App ${theme}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
