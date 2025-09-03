import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Mail, MapPin, Phone, CheckCircle, MessageCircle, Send, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practiceArea: "",
    urgency: "",
    message: "",
    consultationType: "inquiry" // "inquiry" or "paid"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { toast } = useToast();

  // Generate next 14 business days
  const getBusinessDays = () => {
    const days = [];
    const today = new Date();
    let addedDays = 0;
    let currentDate = new Date(today);

    while (addedDays < 14) {
      currentDate.setDate(currentDate.getDate() + 1);
      const dayOfWeek = currentDate.getDay();
      
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        days.push(new Date(currentDate));
        addedDays++;
      }
    }
    return days;
  };

  const businessDays = getBusinessDays();

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "2:00 PM", "3:00 PM", "4:00 PM"
  ];



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.practiceArea || !formData.message) {
      toast({
        title: "Please complete all required fields",
        description: "All fields marked with * are required",
        variant: "destructive",
      });
      return;
    }

    if (formData.consultationType === "paid" && (!selectedDate || !selectedTime)) {
      toast({
        title: "Date and time required",
        description: "Please select your preferred date and time for the paid consultation",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to both email (SendGrid) and WhatsApp
      const response = await fetch('/api/contact-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedDate,
          selectedTime,
          submittedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        toast({
          title: "Inquiry submitted successfully!",
          description: "Your inquiry has been sent to our team.",
        });
      } else {
        throw new Error('Failed to send inquiry');
      }
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        practiceArea: "",
        urgency: "",
        message: "",
        consultationType: "inquiry"
      });
      setSelectedDate("");
      setSelectedTime("");
      
    } catch (error) {
      toast({
        title: "Error submitting inquiry",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none">
              <div className="text-2xl md:text-3xl font-bold tracking-wider" style={{ 
                fontFamily: 'Lato, sans-serif',
                color: '#2d3748',
                letterSpacing: '0.15em'
              }}>
                <span style={{ color: '#f5b841' }}>O</span>CTAGON
              </div>
              <div className="text-2xl md:text-3xl font-bold tracking-wider" style={{ 
                fontFamily: 'Lato, sans-serif',
                color: '#2d3748',
                letterSpacing: '0.15em',
                marginLeft: '1.2em'
              }}>
                LEGAL
              </div>
            </Link>
            
            {/* Home Link */}
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2 hover:bg-gray-50">
                <Home size={18} />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Header Section */}
      <div className="bg-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get expert legal advice when you need it most. <>HR>We're here to help with your criminal, family, immigration, and workplace law matters.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-navy mb-6">
                  Schedule Your Consultation
                </h2>

                {/* Consultation Type Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, consultationType: "inquiry"})}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      formData.consultationType === "inquiry" 
                        ? "border-gold bg-gold/10" 
                        : "border-gray-200 hover:border-gold/50"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-bold">Free Consultation</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      10-minute phone consultation to discuss your matter and next steps
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({...formData, consultationType: "paid"})}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      formData.consultationType === "paid" 
                        ? "border-gold bg-gold/10" 
                        : "border-gray-200 hover:border-gold/50"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-gold" />
                      <span className="font-bold">Legal Assessment</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      30-minute Legal Assessment - $75 payable prior to consultation to confirm booking
                    </p>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Your phone number"
                    />
                  </div>

                  {/* Practice Area */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Practice Area *
                    </label>
                    <Select value={formData.practiceArea} onValueChange={(value) => setFormData({...formData, practiceArea: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the area of law" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="criminal">Criminal Law</SelectItem>
                        <SelectItem value="family">Family Law</SelectItem>
                        <SelectItem value="immigration">Immigration Law</SelectItem>
                        <SelectItem value="employment">Employment & Workplace Law</SelectItem>
                        <SelectItem value="other">Other Legal Matter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency *
                    </label>
                    <Select value={formData.urgency} onValueChange={(value) => setFormData({...formData, urgency: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="How urgent is your matter?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate - Same day response needed</SelectItem>
                        <SelectItem value="urgent">Urgent - Within 48 hours</SelectItem>
                        <SelectItem value="standard">Standard - Within 1 week</SelectItem>
                        <SelectItem value="planning">Planning ahead</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time Selection for Paid Consultation */}
                  {formData.consultationType === "paid" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <Select value={selectedDate} onValueChange={setSelectedDate}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select date" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessDays.map((date, index) => (
                              <SelectItem key={index} value={date.toISOString().split('T')[0]}>
                                {date.toLocaleDateString('en-AU', { 
                                  weekday: 'long', 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time, index) => (
                              <SelectItem key={index} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your legal matter *
                    </label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please provide details about your legal situation, any deadlines, and how we can help..."
                    />
                  </div>

                  <div className="space-y-3">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 py-3 text-lg font-medium"
                      variant="outline"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Sending..." : 
                       formData.consultationType === "paid" ? "Send Inquiry" : "Send Inquiry"}
                    </Button>


                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Hours & Contact */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold text-navy mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">


                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">(03) 9123 4567</p>
                    </div>
                  </div>



                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Office</h4>
                      <p className="text-gray-600">
                        Level 1, 123 Collins Street<br />
                        Melbourne VIC 3000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 8:30 AM - 5:30 PM</p>
                  
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold text-navy mb-6">
                  What to Expect
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Clear Communication</h4>
                      <p className="text-sm text-gray-600">Legal matters explained in plain English</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Strategic Approach</h4>
                      <p className="text-sm text-gray-600">Tailored legal strategies for your specific situation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Experienced Team</h4>
                      <p className="text-sm text-gray-600">Decades of combined legal experience</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Confidential & Secure</h4>
                      <p className="text-sm text-gray-600">Your privacy and confidentiality guaranteed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Notice */}
            <Card className="shadow-xl border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-red-700 mb-2">
                  Emergency Legal Assistance
                </h3>
                <p className="text-gray-700 text-sm">
                  If you've been arrested, charged, or need immediate legal assistance, 
                  call our emergency line. We provide 24/7 support for urgent criminal matters.
                </p>
                <p className="font-semibold text-navy mt-2">
                  Emergency: (03) 9123 4567
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
