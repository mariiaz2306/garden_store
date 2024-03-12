import "./style/app.scss";
import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Header from "./Layout/Header/Header";
import { Toaster } from 'react-hot-toast';

function App() {
  return (

    <Provider store={store}>
   
      <ThemeProvider>
        <div className="App">
        <Toaster />
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>

  );
}

export default App;
