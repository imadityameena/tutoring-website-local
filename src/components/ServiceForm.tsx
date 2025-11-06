import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Upload, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Alert, AlertDescription } from './ui/alert';
import React from 'react';

const subjects = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Computer Science',
  'English Literature',
  'History',
  'Economics',
  'Business Studies',
  'Psychology',
  'Other',
];

const serviceTypes = [
  { id: 'tutoring', label: 'One-on-One Tutoring', basePrice: 30 },
  { id: 'assignment', label: 'Assignment Help', basePrice: 50 },
  { id: 'instant', label: 'Instant Help (24hrs)', basePrice: 75 },
];

export function ServiceForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    serviceType: '',
    description: '',
    sessionDate: undefined as Date | undefined,
    fileName: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showPricing, setShowPricing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFormData({ ...formData, fileName: file.name });
    }
  };

  const calculatePrice = () => {
    const service = serviceTypes.find((s) => s.id === formData.serviceType);
    return service?.basePrice || 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPricing(true);
  };

  const handleProceedToPayment = () => {
    navigate('/payment', { 
      state: { 
        formData, 
        price: calculatePrice() 
      } 
    });
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (showPricing) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-6 h-6" />
                Request Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="bg-green-50 border-green-200">
                <AlertDescription>
                  Your request has been received! Here's a summary of your order.
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span>{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span>{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subject:</span>
                  <span>{formData.subject}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Type:</span>
                  <span>
                    {serviceTypes.find((s) => s.id === formData.serviceType)?.label}
                  </span>
                </div>
                {formData.sessionDate && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Scheduled Date:</span>
                    <span>{formatDate(formData.sessionDate)}</span>
                  </div>
                )}
                {formData.fileName && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Uploaded File:</span>
                    <span>{formData.fileName}</span>
                  </div>
                )}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl">Total Price:</span>
                  <span className="text-3xl text-blue-600">${calculatePrice()}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={handleProceedToPayment}
                  className="flex-1"
                  size="lg"
                >
                  Proceed to Payment
                </Button>
                <Button 
                  onClick={() => setShowPricing(false)}
                  variant="outline"
                  size="lg"
                >
                  Edit Request
                </Button>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
          <CardHeader className="items-center text-center">
            <CardTitle>Request Academic Help</CardTitle>
            <p className="text-gray-600">Fill out the form below to get started</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg">Personal Information</h3>
                
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div 
                    className="space-y-2"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="John"
                      className="transition-all focus:ring-2 focus:ring-blue-500"
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      className="transition-all focus:ring-2 focus:ring-blue-500"
                    />
                  </motion.div>
                </div>

                {/* Email */}
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john.doe@example.com"
                    className="transition-all focus:ring-2 focus:ring-blue-500"
                  />
                </motion.div>
              </motion.div>

              {/* Service Details */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg">Service Details</h3>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select
                    required
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  >
                    <SelectTrigger className="transition-all focus:ring-2 focus:ring-blue-500">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Service Type *</Label>
                  <RadioGroup
                    required
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    className="space-y-3"
                  >
                    {serviceTypes.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="group"
                      >
                        <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                          <RadioGroupItem value={service.id} id={service.id} />
                          <Label 
                            htmlFor={service.id} 
                            className="flex-1 cursor-pointer flex justify-between items-center"
                          >
                            <span className="group-hover:text-blue-700 transition-colors">
                              {service.label}
                            </span>
                            <span className="text-blue-600 font-semibold px-3 py-1 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                              ${service.basePrice}
                            </span>
                          </Label>
                        </div>
                      </motion.div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Additional Details</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe what you need help with..."
                    rows={4}
                    className="transition-all focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </motion.div>

              {/* Scheduling */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg">Scheduling</h3>
                
                <div className="space-y-2">
                  <Label>Preferred Session Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left transition-all hover:border-blue-500"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.sessionDate ? formatDate(formData.sessionDate) : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.sessionDate}
                        onSelect={(date) => setFormData({ ...formData, sessionDate: date })}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </motion.div>

              {/* File Upload */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg">Upload Materials (Optional)</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="file">Upload Assignment or Reference Materials</Label>
                  <motion.label
                    htmlFor="file"
                    className="border-2 border-dashed rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer flex flex-col items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Upload className="w-8 h-8 mb-3 text-gray-400" />
                    <Input
                      id="file"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {selectedFile ? (
                      <span className="text-blue-600 font-medium">{selectedFile.name}</span>
                    ) : (
                      <>
                        <span className="text-gray-700">Drop files here or</span>
                        <span className="text-blue-600 font-medium"> click to upload</span>
                      </>
                    )}
                    <p className="text-sm text-gray-500 mt-2">PDF, DOC, DOCX up to 10MB</p>
                  </motion.label>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                >
                  Continue to Review
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
        </motion.div>
      </div>
    </div>
  );
}
