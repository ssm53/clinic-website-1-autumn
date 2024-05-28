"use client";
import styled from "styled-components";
import Hero from "@/components/hero";
import Headings from "@/components/headings";
import ServicesCard from "@/components/services_card";
import OurClinicSlider from "@/components/our_clinic_slider";
import TeamCard from "@/components/team_card";
import Map from "@/components/map";
import Address from "@/components/address";
import FAQS from "@/components/faqs";
import SendUsInquiry from "@/components/send-us-inquiry";
import Partners from "@/components/partners";

const faqs = [
  {
    question: "Do you accept new patients?",
    answer: "Yes, new patients are welcome!",
  },
  {
    question: "Nisl faucibus aliquet tellus tortor sed varius pharetra? ",
    answer: "Yes, new patients are welcome!",
  },
  {
    question: "Do you accept new patients?",
    answer: "Yes, new patients are welcome!",
  },
  {
    question: "Do you accept new patients?",
    answer: "Yes, new patients are welcome!",
  },
  {
    question: "Do you accept new patients?",
    answer: "Yes, new patients are welcome!",
  },
];

export default function Home() {
  return (
    <main style={{ margin: "0 auto" }}>
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Headings
          title="Our Services"
          description=" Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices gravida
        et dictumst duis gravida odio semper. Integer potenti viverra et
        interdum lobortis amet nisi lorem. Amet sed sit risus dictum dolor. Sem
        enim eget ac morbi placerat. interdum lobortis amet nisi lorem. Amet sed"
        />
        <ServicesCard />
      </div>
      <StyledClinicWrapper className="mt-10 pb-12">
        <Headings title="Our Clinic" />
        <OurClinicSlider />
      </StyledClinicWrapper>
      <div id="ourteam">
        <Headings
          title="Meet Our Team"
          description=" Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices gravida
        et dictumst duis gravida odio semper. Integer potenti viverra et
        interdum lobortis amet nisi lorem. Amet sed sit risus dictum dolor. Sem
        enim eget ac morbi placerat. interdum lobortis amet nisi lorem. Amet sed"
        />
        <TeamCard />
      </div>
      <StyledContactUsWrapper id="contactus" className="py-10">
        <Headings title="Contact Us" />
        <StyledMapParent className="flex gap-3 justify-center">
          <StyledMapWrapper>
            <Map />
            <Address />
          </StyledMapWrapper>
          <StyledMapWrapper>
            <Map />
            <Address />
          </StyledMapWrapper>
          <StyledMapWrapper>
            <Map />
            <Address />
          </StyledMapWrapper>
        </StyledMapParent>
      </StyledContactUsWrapper>
      <div id="faqs">
        <Headings title="FAQs" />
        <StyledFaqWrapper>
          {faqs.map((faq, index) => (
            <FAQS key={index} question={faq.question} answer={faq.answer} />
          ))}
        </StyledFaqWrapper>
      </div>
      <div className="mt-20" style={{ background: "rgba(253, 235, 208, 1)" }}>
        <Headings title="Send Us An Inquiry" />
        <SendUsInquiry />
      </div>
      <div>
        <Headings title="Our Trusted Partners" />
        <Partners />
      </div>
    </main>
  );
}

const StyledServicesCardWrapper = styled.div``;
const StyledClinicWrapper = styled.div`
  background-color: rgba(253, 235, 208, 1);
`;

const StyledMapParent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledMapWrapper = styled.div`
  min-width: 30%;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;
const StyledFaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px;
`;

const StyledContactUsWrapper = styled.div`
  background-color: rgba(253, 235, 208, 1);
`;
