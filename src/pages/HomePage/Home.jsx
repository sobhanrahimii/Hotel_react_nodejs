import React from "react";
import "./home.css"
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import Footer from '../../components/Footer/Footer'
import PropertyList from '../../components/PropertyList/PropertyList'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import MailList from "../../components/MainList/MailList";

const Home = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">{t('home.title2')}</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer />
      </div>
    </>
  );
};

export default Home;
