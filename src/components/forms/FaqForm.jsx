const questions = [
  {
    id: '01',
    question: '1. What is your sizing guide and how do I find the right fit?',
    answer:
      'We provide detailed size charts for each product category (tops, bottoms, dresses, etc.) with measurements in both inches and centimeters. To find your perfect fit: measure yourself using our measurement guide. Compare your measurements to our size chart, Check the product description for fit details (slim, regular, oversized). Read customer reviews for fit feedback. Contact our style experts for personalized sizing advice.',
  },
  {
    id: '02',
    question: '2. What is your return and exchange policy?',
    answer: '',
  },
  {
    id: '03',
    question: '3. How long does shipping take and what are the costs?',
    answer: '',
  },
  {
    id: '04',
    question: '4. How do I care for my garments to maintain quality?',
    answer: '',
  },
  {
    id: '05',
    question: '5. Do you restock sold-out items and how can I be notified?',
    answer: '',
  },
  {
    id: '06',
    question: '6. What payment methods do you accept and is my information secure?',
    answer: '',
  },
  {
    id: '07',
    question: '7. Do you offer discounts for students, military, or first-time customers?',
    answer: '',
  },
  {
    id: '08',
    question: '8. What makes your clothing sustainable and ethically made?',
    answer: '',
  },
];

const FAQform = () => {
  return (
    <div className="form-container mx-auto">
      <div className="row justify-content-center">
        <div className="col-lg-12 px-5 py-5">
          <div className="contact-wrapper">
            <div className="row g-5">
              <div className="questions-column col-md-6 mx-auto">
                <p className="question">
                  1. What is your sizing guide and how do I find the right fit?
                </p>
                <p className="question">2. What is your return and exchange policy?</p>
                <p className="question">3. How long does shipping take and what are the costs?</p>
                <p className="question">4. How do I care for my garments to maintain quality?</p>
                <p className="question">
                  5. Do you restock sold-out items and how can I be notified?
                </p>
                <p className="question">
                  6. What payment methods do you accept and is my information secure?
                </p>
                <p className="question">
                  7. Do you offer discounts for students, military, or first-time customers?
                </p>
                <p className="question">
                  8. What makes your clothing sustainable and ethically made?
                </p>
              </div>
              <div className="answers-column col-md-6 mx-auto">
                <p className="answer">
                  We provide detailed size charts for each product category (tops, bottoms, dresses,
                  etc.) with measurements in both inches and centimeters. To find your perfect fit:
                  <br />
                  <br />
                  Measure yourself using our measurement guide Compare your measurements to our size
                  chart Check the product description for fit details (slim, regular, oversized)
                  Read customer reviews for fit feedback Contact our style experts for personalized
                  sizing advice.
                  <br />
                  <br />
                  Still unsure? We offer free exchanges within 30 days if the size doesn't fit
                  perfectly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQform;
