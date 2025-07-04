import React from "react";
import { Check, ShieldCheck, User } from "lucide-react";

const WhyChooseUs = () => {
  const steps = [
    {
      logo: <ShieldCheck size={40} color="#4A5568" />,
      heading: "Trustworthy",
      description:
        "We prioritize safety and reliability. Every profile is carefully verified for a secure experience. Your privacy is respected, and your information is never shared without consent.",
    },
    {
      logo: <User size={40} color="#4A5568" />,
      heading: "Beginner Friendly",
      description:
        "Easy onboarding for first-time users with step-by-step profile guidance and intuitive navigation. We’ve designed the platform with simplicity in mind so anyone can start effortlessly.",
    },
    {
      logo: <Check size={40} color="#4A5568" />,
      heading: "Free to Start",
      description:
        "Explore and connect without any upfront cost. Create your profile, browse matches, and send interests freely. Upgrade anytime for access to premium features.",
    },
  ];

  return (
    <section className="why-choose-us">
      <h1>Why Choose Us ?</h1>
      <div className="cards">
        {steps.map((step, index) => (
          <div key={index} className="card">
            <div className="icon">{step.logo}</div>
            <h2>{step.heading}</h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
