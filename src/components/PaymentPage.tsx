import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, Wallet, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Alert, AlertDescription } from './ui/alert';

export function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, price } = location.state || { formData: {}, price: 0 };
  
  const [paymentOption, setPaymentOption] = useState<'now' | 'later'>('now');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      
      // Redirect to home after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-4">
              Your request has been confirmed. We'll contact you shortly via email with next steps.
            </p>
            <p className="text-sm text-gray-500">Redirecting to home page...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Payment Form */}
          <div className="md:col-span-8">
            <Card className="shadow-sm">
              <CardHeader className="items-center text-center border-b pb-4">
                <CardTitle className="font-bold">Complete Your Payment</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handlePayment} className="space-y-8">
                  {/* Payment Timing */}
                  <div className="space-y-4">
                    <Label>When would you like to pay?</Label>
                    <RadioGroup
                      value={paymentOption}
                      onValueChange={(value: 'now' | 'later') => setPaymentOption(value)}
                    >
                      <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50">
                        <RadioGroupItem value="now" id="now" />
                        <Label htmlFor="now" className="flex-1 cursor-pointer">
                          <div>
                            <div>Pay Now</div>
                            <div className="text-sm text-gray-500">
                              Complete payment to confirm your booking
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50">
                        <RadioGroupItem value="later" id="later" />
                        <Label htmlFor="later" className="flex-1 cursor-pointer">
                          <div>
                            <div>Pay Later</div>
                            <div className="text-sm text-gray-500">
                              Reserve your spot and pay after the session
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {paymentOption === 'now' && (
                    <>
                      {/* Payment Method */}
                      <div className="space-y-4">
                        <Label>Payment Method</Label>
                        <RadioGroup
                          value={paymentMethod}
                          onValueChange={setPaymentMethod}
                        >
                          <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex-1 cursor-pointer flex items-center gap-2">
                              <CreditCard className="w-5 h-5" />
                              Credit/Debit Card
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal" className="flex-1 cursor-pointer flex items-center gap-2">
                              <Wallet className="w-5 h-5" />
                              PayPal
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Card Details */}
                      {paymentMethod === 'card' && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input
                                id="expiry"
                                placeholder="MM/YY"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input
                                id="cvv"
                                placeholder="123"
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Cardholder Name</Label>
                            <Input
                              id="cardName"
                              placeholder="John Doe"
                              required
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {paymentOption === 'later' && (
                    <Alert>
                      <AlertDescription>
                        Your booking will be confirmed, and you'll receive payment instructions via email. Payment is due within 24 hours of your scheduled session.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      'Processing...'
                    ) : paymentOption === 'now' ? (
                      `Pay $${price}`
                    ) : (
                      'Confirm Booking'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-4">
            <Card className="md:sticky md:top-24 shadow-sm">
              <CardHeader className="items-center text-center border-b pb-4">
                <CardTitle className="font-bold">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Service</span>
                    <span>{formData.serviceType}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subject</span>
                    <span>{formData.subject}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span>Total</span>
                    <span className="text-2xl text-blue-600">${price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
