import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import FAQform from '../../components/forms/FaqForm.jsx';
import './Faq.scss';

function FAQ() {
  return (
    <div className="App">
      <Header />
      <FAQform />
      <Footer />
    </div>
  );
}

export default FAQ;
