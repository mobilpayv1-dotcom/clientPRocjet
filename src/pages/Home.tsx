import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, CloudRain, Clock, Plane, Ship, Truck, TrainFront, PackageCheck, Zap, MapPin, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CounterAnimation from '../components/CounterAnimation';

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const navigate = useNavigate();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/track?tracking=${trackingNumber.trim()}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">WE DELIVER ON TIME</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Join the millions getting bargain deals on shipping cars, furniture, freight, and more..
          </p>
          <form onSubmit={handleTrack} className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter your tracking number (e.g., CC-10-751490)"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg flex items-center justify-center gap-2"
              >
                <Search size={24} />
                Track
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <Shield size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Safe Delivery</h3>
              <p className="text-gray-600">Your cargo is fully protected with our comprehensive insurance coverage</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <CloudRain size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Weather Insurance</h3>
              <p className="text-gray-600">Complete protection against weather-related delays and damages</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <Clock size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast & On Time Delivery</h3>
              <p className="text-gray-600">Guaranteed delivery within the promised timeframe</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Welcome to Chine Cargo Logistique</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Chine Cargo Logistique is a global supplier of transport and logistics solutions.
              We ensure the safe delivery of packages is our top priority.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <CounterAnimation end={61} suffix="+" />
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <CounterAnimation end={2500} suffix="+" />
              <div className="text-gray-600 text-sm">Professional Workers</div>
            </div>
            <div className="text-center">
              <CounterAnimation end={79} suffix="%" />
              <div className="text-gray-600 text-sm">Areas Covered</div>
            </div>
            <div className="text-center">
              <CounterAnimation end={207} suffix="+" />
              <div className="text-gray-600 text-sm">Countries Covered</div>
            </div>
            <div className="text-center">
              <CounterAnimation end={186} suffix="+" />
              <div className="text-gray-600 text-sm">Corporate Clients</div>
            </div>
            <div className="text-center">
              <CounterAnimation end={450} suffix="+" />
              <div className="text-gray-600 text-sm">Owned Vehicles</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive logistics solutions tailored to meet your shipping needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-xl transition duration-300">
              <Plane size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Air Freight</h3>
              <p className="text-gray-600 mb-4">
                Fast and reliable air cargo services for urgent shipments worldwide
              </p>
              <button className="text-red-600 font-semibold hover:text-red-700">Learn More →</button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-xl transition duration-300">
              <Ship size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Sea Freight</h3>
              <p className="text-gray-600 mb-4">
                Cost-effective ocean freight solutions for large volume shipments
              </p>
              <button className="text-red-600 font-semibold hover:text-red-700">Learn More →</button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-xl transition duration-300">
              <Truck size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Road Freight</h3>
              <p className="text-gray-600 mb-4">
                Flexible ground transportation for regional and cross-border delivery
              </p>
              <button className="text-red-600 font-semibold hover:text-red-700">Learn More →</button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-xl transition duration-300">
              <TrainFront size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Train Freight</h3>
              <p className="text-gray-600 mb-4">
                Efficient rail transport connecting China to Europe and beyond
              </p>
              <button className="text-red-600 font-semibold hover:text-red-700">Learn More →</button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-xl transition duration-300">
              <PackageCheck size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Courier Services</h3>
              <p className="text-gray-600 mb-4">
                Express door-to-door delivery for documents and small packages
              </p>
              <button className="text-red-600 font-semibold hover:text-red-700">Learn More →</button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-xl transition duration-300">
              <Zap size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Fast Freight</h3>
              <p className="text-gray-600 mb-4">
                Expedited shipping solutions with guaranteed delivery times
              </p>
              <button className="text-red-600 font-semibold hover:text-red-700">Learn More →</button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-xl transition duration-300">
              <MapPin size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Track Cargo</h3>
              <p className="text-gray-600 mb-4">
                Real-time tracking system to monitor your shipment 24/7
              </p>
              <button className="text-red-600 font-semibold hover:text-red-700">Learn More →</button>
            </div>

            <div className="bg-red-600 text-white rounded-lg p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-3 text-center">Need Custom Solutions?</h3>
              <p className="text-center mb-4">Contact us for tailored logistics services</p>
              <button className="bg-white text-red-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Trusted by businesses worldwide for reliable shipping solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Excellent service! My cargo arrived on time and in perfect condition.
                Highly recommend for anyone shipping from China."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  WJ
                </div>
                <div>
                  <div className="font-bold">William John</div>
                  <div className="text-sm text-gray-500">Business Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Professional team with great customer support. They handled my shipment
                with care and kept me updated throughout the process."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  KH
                </div>
                <div>
                  <div className="font-bold">Kristie Hans</div>
                  <div className="text-sm text-gray-500">Import Manager</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Best logistics company I've worked with. Competitive rates and
                reliable delivery times. Will definitely use again."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div>
                  <div className="font-bold">Mylie Joseph</div>
                  <div className="text-sm text-gray-500">E-commerce Entrepreneur</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Outstanding service from start to finish. Their tracking system
                is excellent and communication is top-notch."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  DM
                </div>
                <div>
                  <div className="font-bold">David Mark</div>
                  <div className="text-sm text-gray-500">Retail Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
