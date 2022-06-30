import { Provider } from "react-redux";
import TmboRoutes from "./Routes/TmboRoutes";
import store from "./store";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <TmboRoutes />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </Provider>
    </>
  );
}

export default App;
