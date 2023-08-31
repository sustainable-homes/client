import axios from "axios";
import Hero from "../../components/hero/Hero";
import LandingSection from "../../components/section/LandingSection";
import Objective from "../../components/Objective/Objective";
import Service from "../../components/Service/Service";
import LinkContainer from "../../components/LinkContainer";
import { VISION, MISSION, ABOUTUS, SERVICES,VALUES } from "../../scripts/constants.js";
import { API_URL } from "../../utils/api";
import "./LandingPage.css";
import Map from "../../components/map/Map";
import ImageList from "../../components/imagelist/ImageList";
import Review from "../../components/reviews/Reviews";

const LandingPage = () => {
  const getServices = async () => {
    const response = await axios.get(API_URL + "/services");
    const servicesByCategory = response.data.data.services.reduce((result, service) => {
      const category = service.category;
       
      console.log(service);
    
      if (!result[category]) {
        result[category] = [];
      }

      // Push the service into the corresponding category array
      result[category].push(service);

      return result;
    }, {});

    // console.log(servicesByCategory);
  };

  getServices();
  const onTwitterIconClick = () => {
    window.open(
      "https://twitter.com/shdrltd1/status/1641700159632310277?s=48&t=r-GBVBzTpZjRfn_mV3wpkw"
    );
  };

  return (
    <div className="landingpage">
      <Hero />
      <LandingSection text="Get to know us" number="01">
        <Objective
          MISSION={MISSION}
          VISION={VISION}
          ABOUTUS={ABOUTUS}
          VALUES={VALUES}
        />
      </LandingSection>

      <LandingSection text="Our Services" number="02">
        <Service SERVICES={SERVICES} />
      </LandingSection>

      {/* <LandingSection text="Our projects" number="03">
        <ImageList />
      </LandingSection> */}
      <LandingSection text="Our Reviews" number="04">
        <Review/>
      </LandingSection>
      <LandingSection text="Our Location" number="05">
        <Map />
      </LandingSection>
      <LinkContainer
        dimensions="/facebookicon.svg"
        dimensions89="/shdrremovebgpreview-1@2x.png"
        onTwitterIconClick={onTwitterIconClick}
      />
    </div>
  );
};

export default LandingPage;
