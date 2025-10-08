import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Package, User, Mail, Phone, MapPin, Calendar, Truck, Barcode } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';

interface Shipment {
  tracking_number: string;
  status: string;
  origin: string;
  destination: string;
  carrier: string;
  carrier_reference: string;
  product: string;
  type_of_shipment: string;
  quantity: number;
  weight: string;
  payment_mode: string;
  shipment_mode: string;
  total_freight: string;
  expected_delivery_date: string;
  departure_date: string;
  departure_time: string;
  delivery_time: string;
  package_description: string;
  shipper_name: string;
  shipper_phone: string;
  shipper_email: string;
  shipper_address: string;
  receiver_name: string;
  receiver_phone: string;
  receiver_email: string;
  receiver_address: string;
  comment: string;
  image_url: string;
}

export default function Track() {
  const [searchParams] = useSearchParams();
  const [trackingNumber, setTrackingNumber] = useState(searchParams.get('tracking') || '');
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const initialTracking = searchParams.get('tracking');
    if (initialTracking) {
      handleTrack(null, initialTracking);
    }
  }, []);

  const handleTrack = async (e: React.FormEvent | null, initialTracking?: string) => {
    if (e) e.preventDefault();

    const tracking = initialTracking || trackingNumber.trim();
    if (!tracking) return;

    setLoading(true);
    setError('');
    setShipment(null);

    try {
      const { data, error: fetchError } = await supabase
        .from('shipments')
        .select('*')
        .eq('tracking_number', tracking)
        .maybeSingle();

      if (fetchError) throw fetchError;

      if (!data) {
        setError('Tracking number not found. Please check and try again.');
      } else {
        setShipment(data);
      }
    } catch (err) {
      setError('An error occurred while tracking your shipment. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Track & Trace Shipment</h1>
          <p className="text-xl text-red-100">Home / Track & Trace</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Enter Tracking Number Here</h2>
            </div>

            <form onSubmit={(e) => handleTrack(e)} className="mb-12">
              <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Enter your tracking number e.g CC-10-751490"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 text-lg"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg whitespace-nowrap disabled:opacity-50"
                >
                  {loading ? 'Tracking...' : 'Track Your Shipment'}
                </button>
              </div>
              {error && (
                <div className="text-center text-red-600 mt-4 font-medium">{error}</div>
              )}
            </form>

            {shipment && (
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="bg-white p-6 border-b-2 border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Tracking Date</p>
                      <p className="text-lg font-bold">{formatDate(shipment.departure_date)}, {shipment.departure_time}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Status</p>
                      <p className="text-lg font-bold text-red-600">{shipment.status}</p>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <p className="text-sm text-gray-500 uppercase mb-2">Package Track</p>
                    <p className="text-2xl font-bold">{shipment.tracking_number}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                      <Barcode size={80} className="text-gray-800" />
                      <p className="text-center text-xs font-bold mt-2">{shipment.carrier_reference}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <User size={24} className="text-red-600" />
                        Shipper Information
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="text-gray-500">Name</p>
                          <p className="font-medium">{shipment.shipper_name}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Address</p>
                          <p className="font-medium">{shipment.shipper_address}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Phone Number</p>
                          <p className="font-medium">{shipment.shipper_phone}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Email</p>
                          <p className="font-medium">{shipment.shipper_email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <User size={24} className="text-red-600" />
                        Receiver Information
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="text-gray-500">Name</p>
                          <p className="font-medium">{shipment.receiver_name}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Address</p>
                          <p className="font-medium">{shipment.receiver_address}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Phone Number</p>
                          <p className="font-medium">{shipment.receiver_phone}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Email</p>
                          <p className="font-medium">{shipment.receiver_email}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                    <h3 className="text-xl font-bold mb-4">Shipment Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Origin</p>
                        <p className="font-medium">{shipment.origin}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Package</p>
                        <p className="font-medium">{shipment.product}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Status</p>
                        <p className="font-medium">{shipment.status}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Destination</p>
                        <p className="font-medium">{shipment.destination}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Carrier</p>
                        <p className="font-medium">{shipment.carrier}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Type of Shipment</p>
                        <p className="font-medium">{shipment.type_of_shipment}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Weight</p>
                        <p className="font-medium">{shipment.weight}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Shipment Mode</p>
                        <p className="font-medium">{shipment.shipment_mode}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Carrier Reference No.</p>
                        <p className="font-medium">{shipment.carrier_reference}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Product</p>
                        <p className="font-medium">{shipment.product}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Qty</p>
                        <p className="font-medium">{shipment.quantity}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Payment Mode</p>
                        <p className="font-medium">{shipment.payment_mode}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Total Freight</p>
                        <p className="font-medium">{shipment.total_freight}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Expected Delivery Date</p>
                        <p className="font-medium">{formatDate(shipment.expected_delivery_date)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Departure Date</p>
                        <p className="font-medium">{formatDate(shipment.departure_date)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Departure Time</p>
                        <p className="font-medium">{shipment.departure_time}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Delivery Time</p>
                        <p className="font-medium">{shipment.delivery_time}</p>
                      </div>
                    </div>
                  </div>

                  {shipment.comment && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                      <p className="font-bold text-yellow-800 mb-2">Important Information</p>
                      <p className="text-yellow-900">{shipment.comment}</p>
                    </div>
                  )}

                  {shipment.image_url && (
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h3 className="text-xl font-bold mb-4">Shipment Image</h3>
                      <img
                        src={shipment.image_url}
                        alt="Shipment"
                        className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}
                </div>

                <div className="bg-red-600 text-white p-6 text-center">
                  <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                    Print Details
                  </button>
                </div>
              </div>
            )}

            {!shipment && !loading && !error && (
              <div className="text-center text-gray-500 mt-8">
                <Package size={64} className="mx-auto mb-4 text-gray-300" />
                <p>Enter a tracking number above to see your shipment status</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
