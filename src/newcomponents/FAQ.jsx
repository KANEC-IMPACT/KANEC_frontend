import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: "What is KANEC?",
          answer: "KANEC is a blockchain-based charitable giving platform that uses Hedera's distributed ledger technology to ensure transparency, traceability, and impact verification for all donations."
        },
        {
          question: "How does KANEC ensure transparency?",
          answer: "Every donation is recorded on the Hedera blockchain, creating an immutable and publicly verifiable record of all transactions and fund flows."
        },
        {
          question: "Is KANEC a non-profit organization?",
          answer: "Yes, KANEC operates as a non-profit platform dedicated to revolutionizing charitable giving through blockchain technology."
        }
      ]
    },
    {
      title: "Donation Process",
      items: [
        {
          question: "How do I make a donation?",
          answer: "Simply create an account, browse verified projects, and use our secure payment system to make donations in supported cryptocurrencies or traditional payment methods."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept HBAR, other major cryptocurrencies, and traditional payment methods including credit cards and bank transfers."
        },
        {
          question: "Can I track my donation's impact?",
          answer: "Yes, every donation comes with a transparent impact report showing exactly how funds were used and what outcomes were achieved."
        }
      ]
    },
    {
      title: "Project Verification",
      items: [
        {
          question: "How are projects verified?",
          answer: "All projects undergo a rigorous verification process including background checks, impact assessment, and ongoing monitoring to ensure legitimacy and effectiveness."
        },
        {
          question: "Can anyone submit a project?",
          answer: "Yes, we welcome project submissions from registered non-profits and community organizations that meet our verification criteria."
        },
        {
          question: "How often are projects audited?",
          answer: "Projects undergo quarterly audits and real-time monitoring to ensure continued compliance and impact delivery."
        }
      ]
    },
    {
      title: "Technical & Security",
      items: [
        {
          question: "Why did you choose Hedera blockchain?",
          answer: "Hedera offers fast, secure, and environmentally sustainable blockchain technology with low transaction fees, making it ideal for charitable applications."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we implement industry-leading security measures and privacy protections. Personal data is encrypted and stored securely."
        },
        {
          question: "Can I access my donation history?",
          answer: "Yes, your complete donation history with transaction hashes and impact reports is available in your dashboard at any time."
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="faq-page">
      {/* ---------- HERO SECTION ---------- */}
      <section className="faq-hero">
        <div className="faq-container">
          <motion.div
            className="faq-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="faq-hero-label">Help Center</p>
            <h1 className="faq-hero-title">Frequently Asked Questions</h1>
            <p className="faq-hero-description">
              Find answers to common questions about KANEC, our donation process, 
              project verification, and how we're using blockchain technology to 
              revolutionize charitable giving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- FAQ CATEGORIES ---------- */}
      <section className="faq-categories-section">
        <div className="faq-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="faq-text-title">Browse by Category</h3>
            <p className="faq-section-description">
              Select a category to find answers to your specific questions
            </p>
          </motion.div>

          <div className="faq-categories-grid">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="faq-category-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="faq-category-title">{category.title}</h3>
                <div className="faq-items-list">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="faq-item"
                    >
                      <button
                        className="faq-question"
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                      >
                        <span>{item.question}</span>
                        <motion.span
                          animate={{ rotate: openItems[`${categoryIndex}-${itemIndex}`] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          ▼
                        </motion.span>
                      </button>
                      <motion.div
                        className="faq-answer"
                        initial={false}
                        animate={{
                          height: openItems[`${categoryIndex}-${itemIndex}`] ? "auto" : 0,
                          opacity: openItems[`${categoryIndex}-${itemIndex}`] ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STILL HAVE QUESTIONS ---------- */}
      <section className="faq-contact-section">
        <div className="faq-container">
          <motion.div
            className="faq-contact-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="faq-contact-title">Still have questions?</h3>
            <p className="faq-contact-description">
              Can't find the answer you're looking for? Please reach out to our support team 
              and we'll get back to you as soon as possible.
            </p>
            <div className="faq-contact-buttons">
              <Link to="/contact" className="faq-contact-button faq-primary">
                Contact Support
              </Link>
              <Link to="/projects" className="faq-contact-button faq-secondary">
                Browse Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;