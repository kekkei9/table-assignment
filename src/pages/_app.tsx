import "@/styles/globals.css";
import type { AppProps } from "next/app";
import TablePropContext from "@context/TablePropContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TablePropContext.Provider value={["id", "name", "username", "phone"]}>
      <Component {...pageProps} />
    </TablePropContext.Provider>
  );
}
