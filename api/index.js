// Streamlined Vercel serverless function - No SendGrid required
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/consultation') {
    try {
      const consultation = req.body;
      
      // Log consultation request to Vercel dashboard
      console.log('=== NEW CONSULTATION REQUEST ===');
      console.log(`Name: ${consultation.name}`);
      console.log(`Email: ${consultation.email}`);
      console.log(`Phone: ${consultation.phone}`);
      console.log(`Legal Matter: ${consultation.legalMatter}`);
      console.log(`Preferred Date: ${consultation.preferredDate}`);
      console.log(`Preferred Time: ${consultation.preferredTime}`);
      console.log(`Message: ${consultation.message}`);
      console.log(`Status: TO BE CONFIRMED`);
      console.log(`Submitted: ${new Date().toLocaleString()}`);
      console.log('==================================');

      // Generate WhatsApp notification URL
      const whatsappMessage = encodeURIComponent(
        `🏛️ *OCTAGON LEGAL - New Consultation*\n\n` +
        `👤 *Name:* ${consultation.name}\n` +
        `📧 *Email:* ${consultation.email}\n` +
        `📱 *Phone:* ${consultation.phone}\n` +
        `⚖️ *Legal Matter:* ${consultation.legalMatter}\n` +
        `📅 *Date:* ${consultation.preferredDate}\n` +
        `🕐 *Time:* ${consultation.preferredTime}\n` +
        `💬 *Message:* ${consultation.message}\n\n` +
        `⏰ *Submitted:* ${new Date().toLocaleString()}`
      );
      
      const whatsappUrl = `https://wa.me/61391234567?text=${whatsappMessage}`;
      console.log(`📱 WhatsApp URL: ${whatsappUrl}`);

      // Return success response
      res.status(200).json({ 
        success: true,
        message: 'Consultation request logged successfully',
        status: 'TO BE CONFIRMED'
      });
    } catch (error) {
      console.error('Error processing consultation:', error);
      res.status(500).json({ error: 'Failed to process consultation request' });
    }
  } else if (req.method === 'POST' && req.url === '/api/contact-inquiry') {
    try {
      const formData = req.body;
      
      // Log contact inquiry to Vercel dashboard
      console.log('=== NEW CONTACT INQUIRY ===');
      console.log(`Name: ${formData.name}`);
      console.log(`Email: ${formData.email}`);
      console.log(`Phone: ${formData.phone}`);
      console.log(`Practice Area: ${formData.practiceArea}`);
      console.log(`Message: ${formData.message}`);
      console.log(`Submitted: ${new Date().toLocaleString()}`);
      console.log('============================');

      // Return success response
      res.status(200).json({ 
        success: true,
        message: 'Contact inquiry logged successfully'
      });
    } catch (error) {
      console.error('Error processing contact inquiry:', error);
      res.status(500).json({ error: 'Failed to process contact inquiry' });
    }
  } else {
    res.status(404).json({ error: 'Not found' });
  }
}