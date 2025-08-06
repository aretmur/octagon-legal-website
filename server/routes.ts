import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { z } from "zod";
const consultationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  legalMatter: z.string().min(1),
  message: z.string().min(10),
  preferredContact: z.enum(["phone", "email"]),
  preferredDate: z.string().min(1),
  preferredTime: z.string().min(1),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Consultation booking endpoint
  app.post("/api/consultation", async (req, res) => {
    try {
      const validatedData = consultationSchema.parse(req.body);
      
      const emailContent = `
        New Consultation Request - TBC
        
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Phone: ${validatedData.phone}
        Legal Matter: ${validatedData.legalMatter}
        Preferred Contact: ${validatedData.preferredContact}
        Preferred Date: ${validatedData.preferredDate}
        Preferred Time: ${validatedData.preferredTime}
        
        Message:
        ${validatedData.message}
        
        Status: TO BE CONFIRMED
        Action Required: SMS confirmation to be sent to ${validatedData.phone}
        
        Submitted at: ${new Date().toLocaleString()}
      `;

      // Log consultation request for review in Vercel dashboard
      console.log("=== NEW CONSULTATION REQUEST ===");
      console.log(`To: aret@murco.au`);
      console.log(`Subject: New Consultation Request - ${validatedData.name}`);
      console.log(emailContent);
      console.log("==================================");
      
      // Generate WhatsApp notification URL
      const whatsappNumber = "+61391234567"; // Update this to your actual WhatsApp number
      const whatsappMessage = encodeURIComponent(
        `🏛️ *OCTAGON LEGAL - New Consultation Request*\n\n` +
        `👤 *Name:* ${validatedData.name}\n` +
        `📧 *Email:* ${validatedData.email}\n` +
        `📱 *Phone:* ${validatedData.phone}\n` +
        `⚖️ *Legal Matter:* ${validatedData.legalMatter}\n` +
        `📅 *Preferred Date:* ${validatedData.preferredDate}\n` +
        `🕐 *Preferred Time:* ${validatedData.preferredTime}\n` +
        `📞 *Contact Method:* ${validatedData.preferredContact}\n\n` +
        `💬 *Message:*\n${validatedData.message}\n\n` +
        `⏰ *Submitted:* ${new Date().toLocaleString()}\n\n` +
        `🔔 *Status:* TO BE CONFIRMED`
      );
      
      const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappMessage}`;
      console.log(`📱 WhatsApp notification URL: ${whatsappUrl}`);
      console.log(`📱 Ready to send WhatsApp to ${whatsappNumber}`);

      res.json({ success: true, message: "Consultation request sent successfully" });
    } catch (error) {
      console.error("Error sending consultation email:", error);
      res.status(500).json({ success: false, message: "Failed to send consultation request" });
    }
  });

  // Contact inquiry endpoint - sends to both email and WhatsApp
  app.post("/api/contact-inquiry", async (req, res) => {
    try {
      const formData = req.body;
      
      if (!formData.name || !formData.email || !formData.phone || !formData.practiceArea || !formData.message) {
        return res.status(400).json({ error: "All required fields must be provided" });
      }

      const consultationType = formData.consultationType === "paid" ? "Paid 30-minute consultation ($75)" : "Free 10-minute consultation";
      const urgencyText = formData.urgency ? formData.urgency.charAt(0).toUpperCase() + formData.urgency.slice(1) : "Not specified";
      
      // Log client inquiry for review in Vercel dashboard
      const emailContent = `
NEW CLIENT INQUIRY - ${formData.practiceArea}

Client Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Legal Matter:
Practice Area: ${formData.practiceArea}
Consultation Type: ${consultationType}
Urgency: ${urgencyText}

${formData.selectedDate && formData.selectedTime ? `Preferred Date/Time: ${formData.selectedDate} at ${formData.selectedTime}` : ''}

Client Message:
${formData.message}

Submitted: ${new Date().toLocaleString()}
      `;

      console.log("=== NEW CLIENT INQUIRY ===");
      console.log(`To: aret@murco.au`);
      console.log(`Subject: New Client Inquiry - ${formData.name} (${formData.practiceArea})`);
      console.log(emailContent);
      console.log("==========================");

      // 2. Send WhatsApp notification (background)
      const whatsappMessage = `🏛️ *NEW CLIENT INQUIRY* - ${formData.practiceArea}

👤 *Client:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}

⚖️ *Type:* ${consultationType}
🚨 *Urgency:* ${urgencyText}

${formData.selectedDate && formData.selectedTime ? `📅 *Preferred:* ${formData.selectedDate} at ${formData.selectedTime}` : ''}

💬 *Message:* ${formData.message}

⏰ *Submitted:* ${new Date().toLocaleString()}`;

      // Generate WhatsApp notification
      console.log(`📱 WhatsApp notification ready for +61391234567:`);
      console.log(whatsappMessage);
      
      res.json({ 
        success: true, 
        message: "Inquiry logged successfully and WhatsApp notification ready",
        services: {
          console_log: "logged",
          whatsapp: "ready"
        }
      });
      
    } catch (error) {
      console.error("Contact inquiry error:", error);
      res.status(500).json({ error: "Failed to send inquiry" });
    }
  });

  // Serve video files
  app.get("/api/video/:filename", (req, res) => {
    const filename = req.params.filename;
    const videoPath = path.join(process.cwd(), "public", "videos", filename);
    res.sendFile(videoPath);
  });

  // Serve attached assets (images, etc.)
  app.get("/attached_assets/:filename", (req, res) => {
    const filename = req.params.filename;
    const assetPath = path.join(process.cwd(), "attached_assets", filename);
    res.sendFile(assetPath);
  });

  const httpServer = createServer(app);

  return httpServer;
}
