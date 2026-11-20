// import Dashboard from "./Dashboard/page";
import Dashboard from "./Dashboard/page";
import "./globals.css";
import Data from "./Context/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Data>
          <Dashboard/>
        {children}
        </Data> */}

        {children}
      </body>
    </html>
  );
}
