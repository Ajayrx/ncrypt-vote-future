import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemStatement from "../components/ProblemStatement";
import SolutionSection from "../components/SolutionSection";
import DemoSection from "../components/DemoSection";
import GovServicesSection from "../components/GovServicesSection";
import TechnologiesSection from "../components/TechnologiesSection";
import SecuritySection from "../components/SecuritySection";
import PrototypeSubmissions from "../components/PrototypeSubmissions";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

const Index = () => {
  // Add scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            // Optional: remove the class when not in viewport
            // entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with appear-animate class
    const animatedElements = document.querySelectorAll(".appear-animate");
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    // Clean up
    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        event.preventDefault();
        const id = target.getAttribute("href")?.replace("#", "");
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-ncrypt-dark text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <ProblemStatement />
      <SolutionSection />
      <DemoSection />
      <GovServicesSection />
      <TechnologiesSection />
      <SecuritySection />
      <PrototypeSubmissions />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
