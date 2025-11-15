import { useState } from 'react';
const questions = [
  {
    id: '01',
    question: 'What is your sizing guide and how do I find the right fit?',
    answer: `We provide detailed size charts for each product category (tops, bottoms, dresses, etc.) with measurements in both inches and centimeters. To find your perfect fit:
- Measure yourself using our measurement guide
- Compare your measurements to our size chart
- Check the product description for fit details (slim, regular, oversized)
- Read customer reviews for fit feedback
- Contact our style experts for personalized sizing advice

Still unsure? We offer free exchanges within 30 days if the size doesn't fit perfectly.`,
  },
  {
    id: '02',
    question: 'What is your return and exchange policy?',
    answer: `Returns & Exchanges Made Easy:
- 30-day return window from delivery date
- Items must be unworn, unwashed, with original tags attached
- Free return shipping for exchanges
- Refunds processed within 5-7 business days after we receive your return
- Final sale items (marked as such) cannot be returned

How to Return:
1. Log into your account and select "Return Items"
2. Print the prepaid return label
3. Package items securely and ship back to us

Damaged or defective items? We'll cover all return costs and offer immediate replacement.`,
  },
  {
    id: '03',
    question: 'How long does shipping take and what are the costs?',
    answer: `Domestic Shipping (US):
- Standard Shipping: 5-7 business days - FREE on orders $75+
- Express Shipping: 2-3 business days - $12.95
- Overnight Shipping: Next business day - $24.95

International Shipping:
- Canada: 7-10 business days - $15.95
- Europe: 10-14 business days - $25.95
- Other International: 14-21 business days - $35.95

Orders placed before 2 PM EST ship same day (Monday-Friday). You'll receive tracking information via email once your order ships.`,
  },
  {
    id: '04',
    question: 'How do I care for my garments to maintain quality?',
    answer: `General Care Instructions:
- Always check the care label first - it's your best guide
- Wash in cold water (30°C/86°F) to prevent shrinking and fading
- Turn garments inside out before washing to protect prints and colors
- Use gentle cycle for delicate fabrics like silk, lace, or embellished items
- Air dry when possible - heat from dryers can cause shrinkage and wear

Fabric-Specific Tips:
- Cotton: Can handle regular washing, but may shrink slightly
- Wool: Hand wash or dry clean only
- Denim: Wash infrequently, inside out, hang dry
- Delicates: Use mesh laundry bags and gentle detergent

Proper care extends the life of your clothes and keeps them looking new longer.`,
  },
  {
    id: '05',
    question: 'Do you restock sold-out items and how can I be notified?',
    answer: `Restocking Information:
- Popular items typically restock within 2-4 weeks
- Seasonal collections may have limited restocks
- Limited edition pieces rarely restock once sold out

Get Notified:
1. Click "Notify Me When Available" on any sold-out product page
2. Enter your email address
3. We'll email you immediately when the item is back in stock
4. You'll get 48-hour early access before we announce the restock publicly

Can't find your size?
- Check back weekly - we receive new inventory regularly
- Follow us on social media @[yourhandle] for restock announcements
- Sign up for our newsletter for first access to new arrivals and restocks

Pro tip: Add items to your wishlist so you can easily check on them later!`,
  },
  {
    id: '06',
    question: 'What payment methods do you accept and is my information secure?',
    answer: `Accepted Payment Methods:
- Credit Cards: Visa, Mastercard, American Express, Discover
- Digital Wallets: PayPal, Apple Pay, Google Pay, Shop Pay
- Buy Now, Pay Later: Afterpay, Klarna (split into 4 interest-free payments)
- Gift Cards: Redeemable online and in-store

Your Security is Our Priority:
- SSL Encryption: All transactions are protected with 256-bit SSL encryption
- PCI Compliance: We meet the highest industry standards for payment security
- No Storage: We don't store your credit card information on our servers
- Fraud Protection: Advanced fraud detection systems monitor all transactions

We never share your personal information with third parties. Your privacy and security are guaranteed.`,
  },
  {
    id: '07',
    question: 'Do you offer discounts for students, military, or first-time customers?',
    answer: `Special Discounts Available:

Student Discount:
- 15% off with valid student ID verification
- Verify through SheerID or UNiDAYS
- Applies to regular-priced items only
- Can be combined with free shipping offers

Military & First Responders:
- 20% off for active duty, veterans, police, firefighters, EMTs
- Year-round appreciation discount
- Verify through ID.me
- Valid on all regular-priced merchandise

First-Time Customer:
- 10% off your first order when you sign up for our newsletter
- Plus early access to sales and new collections
- Free shipping on your first order (no minimum)

Seasonal Promotions:
- End-of-season sales up to 50% off
- Black Friday & Cyber Monday exclusive deals
- Birthday month special offers for newsletter subscribers

Discounts cannot be combined unless specifically stated. Sale items excluded from most discount codes.`,
  },
  {
    id: '08',
    question: 'What makes your clothing sustainable and ethically made?',
    answer: `Our Sustainability Commitment:

Ethical Manufacturing:
- Fair Trade Certified factories with safe working conditions
- Living wage paid to all garment workers
- Regular third-party audits of our supply chain
- Long-term partnerships with trusted manufacturers

Sustainable Materials:
- Organic cotton (GOTS certified) used in 70% of our basics
- Recycled polyester made from plastic bottles
- Tencel/Modal from sustainably sourced wood pulp
- Deadstock fabrics to reduce textile waste

Environmental Initiatives:
- Carbon-neutral shipping through certified offset programs
- Plastic-free packaging made from recycled and biodegradable materials
- Take-back program: Send us your worn-out clothes for responsible recycling
- Water conservation: Our suppliers use water-saving dyeing techniques

Transparency:
- View our Supply Chain Map on our website
- Annual Sustainability Report detailing our progress
- Fabric composition and origin information on every product page

We believe fashion should be beautiful inside and out - for you and for the planet.`,
  },
];

const FAQform = () => {
  const [answer, setAnswer] = useState('Select a question to see the answer.');
  const [selectedId, setSelectedId] = useState(null);
  // Function to format the answer text with proper line breaks and styling
  const formatAnswer = (text) => {
    return text.split('\n').map((line, index) => {
      // Check if line is a bullet point
      if (line.trim().startsWith('-')) {
        return (
          <li key={index} style={{ marginLeft: '20px', marginBottom: '8px' }}>
            {line.trim().substring(1).trim()}
          </li>
        );
      }
      // Check if line is a numbered list
      else if (/^\d+\./.test(line.trim())) {
        return (
          <li key={index} style={{ marginLeft: '20px', marginBottom: '8px' }}>
            {line.trim().replace(/^\d+\.\s*/, '')}
          </li>
        );
      }
      // Check if line is a heading (contains colon at the end or is bold)
      else if (line.trim().endsWith(':') && line.trim().length > 0) {
        return (
          <p key={index} style={{ fontWeight: 'bold', marginTop: '15px', marginBottom: '8px' }}>
            {line.trim()}
          </p>
        );
      }
      // Regular paragraph
      else if (line.trim().length > 0) {
        return (
          <p key={index} style={{ marginBottom: '10px' }}>
            {line.trim()}
          </p>
        );
      }
      // Empty line for spacing
      return <br key={index} />;
    });
  };
  return (
    <div className="form-container mx-auto">
      <div className="row justify-content-center">
        <div className="col-lg-12 px-5 py-5">
          <div className="contact-wrapper">
            <div className="row g-5">
              {/* Questions */}
              <div className="questions-column col-md-6 mx-auto">
                {questions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setAnswer(item.answer) & setSelectedId(item.id)}
                    className={selectedId === item.id ? 'question-active' : ''}>
                    <p className="question">{item.question}</p>
                  </div>
                ))}
              </div>
              {/* Answers */}
              <div className="answers-column col-md-6 mx-auto">
                <p className="answer">{formatAnswer(answer)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQform;
