import React, { useState } from 'react';
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

  const handleWaitlistSubmit = (e: React.FormEvent, emailValue: string, setEmailValue: React.Dispatch<React.SetStateAction<string>>) => {
    e.preventDefault();
    if (emailValue.trim()) {
      alert('Thank you! You\'ve been added to the waitlist. We\'ll notify you when Sayar is ready.');
      setEmailValue('');
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2325D366%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Turn WhatsApp chats into sales 
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
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                🔒 Free to join • No spam • Early access guaranteed
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-gray-800 rounded-[2rem] p-4">
                    <div className="bg-white rounded-[1.5rem] w-80 h-96 p-4 overflow-hidden">
                      {/* WhatsApp Interface Mockup */}
                      <div className="bg-green-600 text-white p-3 rounded-t-lg flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <ShoppingCart className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">Your Store</div>
                          <div className="text-xs opacity-90">Online</div>
                        </div>
                      </div>
                      
                      <div className="p-3 space-y-3 bg-gray-50 h-80">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-sm font-medium mb-2">Browse Our Catalog</div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-100 rounded h-16 flex items-center justify-center text-xs">Product 1</div>
                            <div className="bg-gray-100 rounded h-16 flex items-center justify-center text-xs">Product 2</div>
                          </div>
                        </div>
                        
                        <div className="bg-green-100 p-3 rounded-lg ml-8">
                          <div className="text-sm">I want to order the blue shirt</div>
                        </div>
                        
                        <div className="bg-white p-3 rounded-lg mr-8">
                          <div className="text-sm mb-2">Perfect! Here's your instant checkout:</div>
                          <div className="bg-green-600 text-white text-center py-2 rounded text-xs font-medium">
                            Pay ₦15,000 - Complete Order
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                More Sales, Less Stress
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Always-up-to-date catalog",
                    description: "Your products automatically appear in every WhatsApp chat. No manual sending of pictures or price lists."
                  },
                  {
                    title: "Instant checkout links",
                    description: "No more 'let me check stock' or 'send your account details.' Customers pay immediately."
                  },
                  {
                    title: "Automatic confirmations",
                    description: "Order details, payment confirmation, and tracking info sent automatically. You focus on fulfilling orders."
                  },
                  {
                    title: "Never miss a sale again",
                    description: "Even when you're busy or sleeping, customers can browse, order, and pay. Wake up to new sales."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-8">
                <div className="text-6xl mb-6">📈</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Triple Your WhatsApp Sales</h3>
                <p className="text-gray-600 mb-6">
                  Business owners using automated checkout systems see 3x more completed orders from their social media traffic.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-500 mb-1">40%</div>
                    <div className="text-sm text-gray-600">Orders lost to slow replies</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                    <div className="text-sm text-gray-600">Instant checkout completion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Nigerian Business Owners
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 ml-2">Loved by early users</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Adaora C.",
                business: "Fashion Store Owner",
                quote: "I was losing so many customers because I couldn't reply fast enough. Can't wait to try Sayar!",
                avatar: "👗"
              },
              {
                name: "Ibrahim M.",
                business: "Electronics Seller",
                quote: "My customers always ask 'is this available?' at 2am. This will solve everything.",
                avatar: "📱"
              },
              {
                name: "Blessing O.",
                business: "Food Business",
                quote: "Manual order taking is exhausting. An automated system like this is exactly what I need.",
                avatar: "🍲"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.business}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm">
              <Users className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-900">500+ businesses</span>
              <span className="text-gray-600">already on the waitlist</span>
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
                className="bg-white text-green-600 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Join Waitlist - It's Free
                <ArrowRight className="w-5 h-5" />
              </button>
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
            <h3 className="text-2xl font-bold mb-4">Sayar</h3>
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