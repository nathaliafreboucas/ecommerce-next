import "@/styles/Home.module.css";

import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import { FormContactInfos } from "@/components/FormContactInfos";

export default function Home() {
  return (
    <>
      <Header buttonLogin={true}>
        <Banner/>
      </Header>

      <Main>
        <FormContactInfos/>
      </Main>
      
      <Footer/>
    </>
  );
}
