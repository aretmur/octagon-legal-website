import { useState } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  legalMatter: z.string().min(1, "Please select a legal matter type"),
  message: z.string().min(10, "Please provide more details about your case"),
  preferredContact: z.enum(["phone", "email"], {
    required_error: "Please select your preferred contact method",
  }),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
});

type ConsultationForm = z.infer<typeof consultationSchema>;

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TBCModalProps {
  isOpen: boolean;
  onClose: () => void;
  consultationDetails: {
    name: string;
    date: string;
    time: string;
    phone: string;
  };
}

const legalMatters = [
  "Criminal Law",
  "Family Law",
  "Immigration Law",
  "Employment Law",
  "Administrative Law",
  "Other"
];

const timeSlots = [
  "9:00 AM", "9:45 AM", "10:30 AM", "11:15 AM", "12:00 PM", "12:45 PM",
  "1:30 PM", "2:15 PM", "3:00 PM", "3:45 PM", "4:30 PM", "5:15 PM"
];

// Generate next 14 days (excluding weekends) for date options
const getAvailableDates = () => {
  const dates = [];
  const today = new Date();
  let currentDate = new Date(today);
  currentDate.setDate(currentDate.getDate() + 1); // Start from tomorrow
  
  while (dates.length < 14) {
    const dayOfWeek = currentDate.getDay();
    // Only include weekdays (1-5, Monday-Friday)
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      dates.push({
        value: currentDate.toISOString().split('T')[0],
        label: currentDate.toLocaleDateString('en-AU', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      });
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};

function TBCModal({ isOpen, onClose, consultationDetails }: TBCModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-6 text-center">
          <div className="mb-4">
            <div className="mx-auto w-16 h-16 bg-gold rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-2xl font-serif font-bold text-navy mb-4">
            Consultation Request Received
          </h3>
          
          <div className="text-left bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Name:</strong> {consultationDetails.name}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Requested Date:</strong> {consultationDetails.date}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Requested Time:</strong> {consultationDetails.time}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Contact:</strong> {consultationDetails.phone}
            </p>
          </div>
          
          <div className="mb-6">
            <p className="text-lg font-semibold text-navy mb-2">
              Status: <span className="text-gold">TO BE CONFIRMED</span>
            </p>
            <p className="text-sm text-gray-600">
              We will send you an SMS confirmation within 2 hours to finalize the appointment details.
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-navy text-white rounded-md hover:bg-navy/90 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTBCModal, setShowTBCModal] = useState(false);
  const [tbcDetails, setTbcDetails] = useState({ name: "", date: "", time: "", phone: "" });
  const { toast } = useToast();
  const availableDates = getAvailableDates();

  const form = useForm<ConsultationForm>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      legalMatter: "",
      message: "",
      preferredContact: "email",
      preferredDate: "",
      preferredTime: "",
    },
  });

  const submitConsultation = useMutation({
    mutationFn: async (data: ConsultationForm) => {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit consultation request");
      }

      return response.json();
    },
    onSuccess: (_, variables) => {
      const selectedDate = availableDates.find(d => d.value === variables.preferredDate);
      setTbcDetails({
        name: variables.name,
        date: selectedDate?.label || variables.preferredDate,
        time: variables.preferredTime,
        phone: variables.phone
      });
      form.reset();
      onClose();
      // Show TBC modal after a small delay to ensure the main modal is closed
      setTimeout(() => {
        setShowTBCModal(true);
      }, 100);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send consultation request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ConsultationForm) => {
    submitConsultation.mutate(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-serif font-bold text-navy">Book Your Consultation</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  {...form.register("name")}
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Enter your full name"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  {...form.register("email")}
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Enter your email address"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  {...form.register("phone")}
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Enter your phone number"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Legal Matter Type *
                </label>
                <select
                  {...form.register("legalMatter")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  <option value="">Select legal matter type</option>
                  {legalMatters.map((matter) => (
                    <option key={matter} value={matter}>
                      {matter}
                    </option>
                  ))}
                </select>
                {form.formState.errors.legalMatter && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.legalMatter.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method *
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    {...form.register("preferredContact")}
                    type="radio"
                    value="email"
                    className="mr-2"
                  />
                  Email
                </label>
                <label className="flex items-center">
                  <input
                    {...form.register("preferredContact")}
                    type="radio"
                    value="phone"
                    className="mr-2"
                  />
                  Phone
                </label>
              </div>
              {form.formState.errors.preferredContact && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.preferredContact.message}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <select
                  {...form.register("preferredDate")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  <option value="">Select preferred date</option>
                  {availableDates.map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
                {form.formState.errors.preferredDate && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.preferredDate.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  {...form.register("preferredTime")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  <option value="">Select preferred time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {form.formState.errors.preferredTime && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.preferredTime.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brief Description of Your Case *
              </label>
              <textarea
                {...form.register("message")}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="Please provide details about your legal matter..."
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitConsultation.isPending}
                className="px-6 py-2 bg-navy text-white rounded-md hover:bg-navy/90 transition-colors disabled:opacity-50"
              >
                {submitConsultation.isPending ? "Sending..." : "Request Consultation"}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <TBCModal
        isOpen={showTBCModal}
        onClose={() => setShowTBCModal(false)}
        consultationDetails={tbcDetails}
      />
    </div>
  );
}