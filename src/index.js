import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import language from i18 next
import global_en from "./tranlations/en/global.json";
import global_fa from "./tranlations/fa/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
// import Font Farsi
import "./fonts/Vazir-Bold.ttf";
import { AuthContextProvider } from "./context/AuthCntext";

// add i18 next
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    fa: {
      global: global_fa,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
