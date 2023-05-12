import Header from "@/components/header";
import "@/styles/globals.css";
import { AuthenticationProvider } from "../context/AuthenticationContext";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <AuthenticationProvider>
        <Header />
        <Component {...pageProps} />
      </AuthenticationProvider>
    </div>
  );
}
