import { useState, useEffect } from "react";
import Layout from "./src/layout";
import Loader from "./src/components/Loader";
import Login from "./src/screen/Login";
import { useFonts } from "expo-font";
const Font = require("./src/assets/fonts/font");

export default function App() {
  const [FontLoade] = useFonts(Font);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Layout>
      <Login />
    </Layout>
  );
}
