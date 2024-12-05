import { Helmet } from "react-helmet";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutuscoloredColumnThree from "./AboutuscoloredColumnThree";
import AboutuscoloredColumnTwo from "./AboutuscoloredColumnTwo";
import AboutuscoloredColumnwelcometo from "./AboutuscoloredColumnwelcometo";
import AboutuscoloredRowaboutusone from "./AboutuscoloredRowaboutusOne";
import AboutuscoloredRowtakeonnew from "./AboutuscoloredRowtakeonnew";

import React from "react";

export default function AboutUsColoredPage() {
  return (
    <>
      <div className="w-full bg-gray-50_01">
        <Header />
        <div>
          <AboutuscoloredRowaboutusone />
          <AboutuscoloredColumnwelcometo />
          <AboutuscoloredRowtakeonnew />

          <AboutuscoloredColumnThree />
          <AboutuscoloredColumnTwo />
        </div>
        <Footer className="mt-40" />
      </div>
    </>
  );
}
