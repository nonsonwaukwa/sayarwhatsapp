import React, { useState } from 'react';
import { saveEmailToWaitlist } from './services/airtable';
import { 
  MessageCircle, 
  ShoppingCart, 
  Clock, 
  CheckCircle, 
  Star, 
  Users, 
  Smartphone,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleWaitlistSubmit = async (e: React.FormEvent, emailValue: string, setEmailValue: React.Dispatch<React.SetStateAction<string>>) => {
    e.preventDefault();
    if (!emailValue.trim()) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await saveEmailToWaitlist(emailValue.trim());
      alert('Thank you! You\'ve been added to the waitlist. We\'ll notify you when Sayar is ready.');
      setEmailValue('');
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      setSubmitError('There was an error adding you to the waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of businesses can use Sayar?",
      answer: "Any business that sells products and gets customer messages on WhatsApp - clothing brands, food businesses, cosmetics, electronics, and more. If you sell online and use WhatsApp, Sayar can help you."
    },
    {
      question: "Do I need a website or Shopify?",
      answer: "No, you don't need a website! Sayar works directly inside WhatsApp. But if you already have a website or Shopify store, Sayar connects easily to sync your products."
    },
    {
      question: "How much will it cost?",
      answer: "We're building affordable plans for small businesses, starting under ₦20,000 per month. Early waitlist members will get special pricing when we launch."
    },
    {
      question: "When can I get access?",
      answer: "We're currently in development. Early users on our waitlist will be invited to try Sayar first, likely in the next few months. Join the waitlist to be notified immediately!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="mb-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img 
              src="/Sayar (3).png" 
              alt="Sayar Logo" 
              className="h-20 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Turn WhatsApps chats into sales 
                <span className="text-green-600"> automatically</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                No more lost orders. Customers browse your catalog, pay instantly, and get confirmed—all inside WhatsApp.
              </p>
              
              <form onSubmit={(e) => handleWaitlistSubmit(e, email, setEmail)} className="max-w-md mx-auto lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </button>
                  {submitError && (
                    <p className="text-red-600 text-sm mt-2">{submitError}</p>
                  )}
                </div>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                🔒 Free to join • No spam • Early access guaranteed
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/flow.png" 
                  alt="WhatsApp business interface showing product catalog and ordering flow" 
                  className="rounded-2xl shadow-2xl w-full max-w-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              How Sayar Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, automatic, and works right inside WhatsApp. No apps to download, no complicated setup.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Customer Messages You",
                description: "They click your WhatsApp link or send you a message about your products"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Browse Your Catalog",
                description: "Sayar instantly shows your full product catalog right inside the WhatsApp chat"
              },
              {
                icon: <ShoppingCart className="w-8 h-8" />,
                title: "Instant Checkout",
                description: "Customer picks products, Sayar creates checkout with payment and shipping automatically"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "You Get Paid",
                description: "Order confirmed, payment received, customer gets tracking—all without you typing anything"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-200">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-4">
            More Sales, <span className="text-green-600">Less Stress</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Automate your WhatsApp business and watch your sales grow while you focus on what matters
          </p>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Always-up-to-date catalog",
                description: "Your products automatically appear in every WhatsApp chat. No manual sending of pictures or price lists.",
                highlight: "Automatic Updates"
              },
              {
                icon: "⚡️",
                title: "Instant checkout links",
                description: "No more 'let me check stock' or 'send your account details.' Customers pay immediately.",
                highlight: "Quick Payments"
              },
              {
                icon: "✨",
                title: "Automatic confirmations",
                description: "Order details, payment confirmation, and tracking info sent automatically. You focus on fulfilling orders.",
                highlight: "Zero Manual Work"
              },
              {
                icon: "💫",
                title: "Never miss a sale again",
                description: "Even when you're busy or sleeping, customers can browse, order, and pay. Wake up to new sales.",
                highlight: "24/7 Sales"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <div className="text-sm font-medium text-green-600 mb-3">{benefit.highlight}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white rounded-3xl p-10 shadow-xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Triple Your WhatsApp Sales
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Business owners using automated checkout systems see 3x more completed orders from their social media traffic.
                </p>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Proven Results</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">40%</div>
                  <div className="text-sm text-gray-600">Orders lost to slow replies</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Instant checkout completion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* Waitlist CTA */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Be the First to Use Sayar
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join over 500 Nigerian business owners who are ready to transform their WhatsApp sales. Early access starts soon.
          </p>
          
          <form onSubmit={(e) => handleWaitlistSubmit(e, footerEmail, setFooterEmail)} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-6 py-4 text-lg border-0 rounded-lg focus:ring-2 focus:ring-white focus:ring-opacity-50 outline-none"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-white text-green-600 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist - It\'s Free'}
                <ArrowRight className="w-5 h-5" />
              </button>
              {submitError && (
                <p className="text-red-100 text-sm mt-2">{submitError}</p>
              )}
            </div>
          </form>
          
          <div className="flex items-center justify-center gap-6 mt-8 text-green-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free to join</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Early access</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>Special pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <span>{faq.question}</span>
                    {expandedFaq === index ? (
                      <Minus className="w-5 h-5 text-green-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/Sayar (1).png" 
                alt="Sayar Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Turning WhatsApp chats into sales for Nigerian businesses, one order at a time.
            </p>
            <div className="text-sm text-gray-500">
              © 2025 Sayar. Built for Nigerian entrepreneurs.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;