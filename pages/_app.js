import { NominationsProvider } from "../context/NominationsContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NominationsProvider>
      <Component {...pageProps} />;
    </NominationsProvider>
  );
}

export default MyApp;
