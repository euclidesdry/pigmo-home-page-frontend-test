import CasinoSection from "~/components/CasinoSection";

import CriptoCoinsSection from "~/components/CryptoCoinsSection";
import HeroSection from "~/components/HeroSection";
import Layout from "~/components/Layout";
import SportsSection from "~/components/SportsSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Layout.Container>
        <CriptoCoinsSection />
        <CasinoSection />
        <SportsSection />
      </Layout.Container>
    </Layout>
  );
}
