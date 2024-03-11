import "./style/app.scss";
import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Header from "./Layout/Header/Header";

function App() {
  return (
<<<<<<< HEAD
   <>
  <MainPage/>
<Footer/>
 
   </>
=======
    <Provider store={store}>
      <ThemeProvider>
        <div className="App">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
>>>>>>> 2f16d3e17a80d4a9e037d8eb14cb411b0e2c958e
  );
}

export default App;
