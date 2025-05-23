import React from 'react';

const FaqSection = () => {

 const faqData = [
  {
    question: "What is Roommate Finder?",
    answer: "Roommate Finder is a platform that helps you connect with compatible roommates based on location, lifestyle, and preferences."
  },
  {
    question: "Is creating an account free?",
    answer: "Yes, creating an account and browsing listings is completely free."
  },
  {
    question: "How do I contact a potential roommate?",
    answer: "You can view their profile and send a message through our secure messaging system."
  },
  {
    question: "Is my personal information safe?",
    answer: "Absolutely. We prioritize your privacy and do not share your contact details without your consent."
  },
  {
    question: "Can I update or delete my listing?",
    answer: "Yes, you can easily update or remove your listings from your dashboard."
  },
  {
    question: "What if I receive inappropriate messages?",
    answer: "You can report and block users. Our team will review and take necessary action."
  },
  {
    question: "Do I need to subscribe to access full features?",
    answer: "Some premium features may require a subscription, but basic browsing and listing are free."
  }
];




    return (
        <div className='container mx-auto py-5'>
              <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className=''>
                {
                    faqData.map((item,index) => (

                        <div key={index} className="collapse  collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">{item.question}</div>
                        <div className="collapse-content text-sm">{item.answer}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FaqSection;