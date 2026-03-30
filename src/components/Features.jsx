import React from "react";
import FeatureCard from "./FeatureCard";
import { 
  Plane, 
  Bitcoin, 
  Globe, 
  Music, 
  Laptop, 
  CreditCard, 
  Server, 
  Store 
} from "lucide-react";

function Services() {
  const services = [
    {
      id: 1,
      icon: <Plane size={32} strokeWidth={1.5} />,
      title: "Flight Ticket Booking",
      headline: "Travel Made Simple",
      description: "Score the best deals on local & international flights. Perfect for students heading to school or planning holiday getaways—hassle-free booking, every time.",
      benefits: ["Student discounts", "Flexible dates", "24/7 support"],
      target: "Students & Travelers",
      lnk: "/flights",
      buttonText: "COMING SOON......."
    },
    {
      id: 2,
      icon: <Bitcoin size={32} strokeWidth={1.5} />,
      title: "Crypto Trading Desk",
      headline: "Your Crypto, Your Control",
      description: "Buy and sell Bitcoin, Ethereum, and USDT with confidence. Fast transactions, competitive rates, and a trusted partner for young traders entering the digital economy.",
      benefits: ["Instant transactions", "Secure wallets", "Best market rates"],
      target: "Crypto Enthusiasts",
      link: "/crypto-desk",
      buttonText: "Trade Now"
    },
    {
      id: 3,
      icon: <Globe size={32} strokeWidth={1.5} />,
      title: "Website Creation",
      headline: "Build Your Digital Presence",
      description: "From stunning portfolios to professional business sites—get a custom website that makes you stand out. Student-friendly packages that don't break the bank.",
      benefits: ["Mobile responsive", "SEO optimized", "Fast delivery"],
      target: "Students & Brands",
      lnk: "/web-design",
      buttonText: "COMING SOON......."
    },
    {
      id: 4,
      icon: <Music size={32} strokeWidth={1.5} />,
      title: "Premium Subscriptions",
      headline: "Entertainment Unlimited",
      description: "Unlock Apple Music, Spotify, Netflix, and more at unbeatable prices. Stream your favorites without the premium price tag—just a small service fee.",
      benefits: ["Instant activation", "Shared family plans", "All platforms"],
      target: "Music & Movie Lovers",
      lnk: "/subscriptions",
      buttonText: "COMING SOON......."
    },
    {
      id: 5,
      icon: <Laptop size={32} strokeWidth={1.5} />,
      title: "Software Solutions",
      headline: "Tools for Success",
      description: "Get legit access to Microsoft Office, Adobe Creative Suite, Canva Pro, and essential student software. Empower your creativity and productivity today.",
      benefits: ["Student pricing", "Full features", "Easy setup"],
      target: "Creators & Students",
      lnk: "/Software",
      buttonText: "COMING SOON......."
    },
    {
      id: 6,
      icon: <CreditCard size={32} strokeWidth={1.5} />,
      title: "Global Payment Gateway",
      headline: "Pay Without Borders",
      description: "Struggling with international payments? We handle course fees, subscription renewals, and foreign purchases smoothly—your bridge to the global digital economy.",
      benefits: ["Naira accepted", "Fast processing", "Secure transactions"],
      target: "Digital Shoppers",
      lnk: "/Payment",
      buttonText: "COMING SOON......."
    },
    {
      id: 7,
      icon: <Server size={32} strokeWidth={1.5} />,
      title: "Domain & Hosting",
      headline: "Claim Your Space Online",
      description: "Secure your perfect domain name and reliable hosting. Set up professional emails (hello@yourbrand.com) and establish credibility from day one.",
      benefits: ["Free SSL included", "99.9% uptime", "Easy management"],
      target: "Entrepreneurs",
      lnk: "/Domain-Hosting",
      buttonText: "COMING SOON......."
    },
    {
      id: 8,
      icon: <Store size={32} strokeWidth={1.5} />,
      title: "Digital Business Launch",
      headline: "Start Selling Today",
      description: "Launch your online business with Instagram store setup, payment integration, and landing pages. Turn your hustle into a professional brand overnight.",
      benefits: ["Complete setup", "Payment links", "Brand identity"],
      target: "Future CEOs",
      lnk: "/Digital",
      buttonText: "COMING SOON......."
      
    }
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <span className="section-tag">What We Do</span>
        <h2 className="section-title">Solutions Built for You</h2>
        <p className="section-subtitle">
          From travel to tech, we provide premium digital services tailored for students, 
          creators, and entrepreneurs. Quality service, student-friendly prices.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <FeatureCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            headline={service.headline}
            description={service.description}
            benefits={service.benefits}
            target={service.target}
            link={service.link} 
            buttonText={service.buttonText}
          />
        ))}
      </div>

      <div className="services-cta">
        <p>Ready to get started?</p>
        <button className="cta-button">View All Services</button>
      </div>
    </section>
  );
}

export default Services;