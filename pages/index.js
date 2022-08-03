import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TDMB</title>
      </Head>

      {/* =========HEADER ======= */}
      <Header />
      {/* ===== NAVBAR ============= */}
      <Navbar />
      {/* ======= RESULTS =============== */}
      <Results />
    </div>
  );
}
