import { useState } from 'react';
import { Search, Package, MapPin, Clock, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Track() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Track & Trace</h1>
          <p className="text-xl text-red-100">Home / Track & Trace</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Track Your Shipment</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Enter your tracking number below to get real-time updates on your shipment's location and status.
              Our advanced tracking system provides you with accurate and up-to-date information 24/7.
            </p>

            <form onSubmit={handleTrack} className="mb-12">
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Enter Tracking Number Here"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 text-lg"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                </div>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg whitespace-nowrap"
                >
                  Track Your Shipment
                </button>
              </div>
            </form>

            {showResult && (
              <div className="bg-gray-50 rounded-lg p-8 text-left">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                  <Package size={32} className="text-red-600" />
                  <div>
                    <div className="text-sm text-gray-500">Tracking Number</div>
                    <div className="text-xl font-bold">{trackingNumber}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                        <CheckCircle size={24} />
                      </div>
                      <div className="w-1 h-16 bg-green-500"></div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="font-bold text-lg">Package Delivered</div>
                      <div className="text-gray-600 mb-2">Your package has been successfully delivered</div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={16} />
                        <span>Today, 10:30 AM</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <MapPin size={16} />
                        <span>Delivered to recipient</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                        <CheckCircle size={24} />
                      </div>
                      <div className="w-1 h-16 bg-green-500"></div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="font-bold text-lg">Out for Delivery</div>
                      <div className="text-gray-600 mb-2">Package is on the vehicle for delivery</div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={16} />
                        <span>Today, 8:00 AM</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <MapPin size={16} />
                        <span>Local delivery facility</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                        <CheckCircle size={24} />
                      </div>
                      <div className="w-1 h-16 bg-green-500"></div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="font-bold text-lg">In Transit</div>
                      <div className="text-gray-600 mb-2">Package is on its way to destination</div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={16} />
                        <span>Yesterday, 3:45 PM</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <MapPin size={16} />
                        <span>Regional sorting center</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                        <CheckCircle size={24} />
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="font-bold text-lg">Package Picked Up</div>
                      <div className="text-gray-600 mb-2">Package collected from sender</div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={16} />
                        <span>2 days ago, 11:20 AM</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <MapPin size={16} />
                        <span>China Guangzhou</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Package className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <div className="text-sm">
                      <div className="font-semibold text-blue-900 mb-1">Shipment Details</div>
                      <div className="text-blue-800 space-y-1">
                        <div>Origin: China Guangzhou</div>
                        <div>Destination: Your Location</div>
                        <div>Service: Express Shipping</div>
                        <div>Estimated Delivery: Delivered</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!showResult && (
              <div className="text-center text-gray-500 mt-8">
                <Package size={64} className="mx-auto mb-4 text-gray-300" />
                <p>Enter a tracking number above to see your shipment status</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">How Tracking Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-red-600" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-3">Enter Tracking Number</h3>
                <p className="text-gray-600 text-sm">
                  Input your unique tracking number provided when you shipped your package
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-red-600" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-3">View Real-Time Updates</h3>
                <p className="text-gray-600 text-sm">
                  See your package's current location and status with live tracking
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-red-600" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-3">Confirm Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Get notified when your package is successfully delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              If you're having trouble tracking your shipment or have any questions,
              our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Contact Support
              </a>
              <a href="tel:+85252089745" className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold transition">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
