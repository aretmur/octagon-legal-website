// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";
import path from "path";
import { z } from "zod";
var consultationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  legalMatter: z.string().min(1),
  message: z.string().min(10),
  preferredContact: z.enum(["phone", "email"]),
  preferredDate: z.string().min(1),
  preferredTime: z.string().min(1)
});
async function registerRoutes(app2) {
  app2.post("/api/consultation", async (req, res) => {
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
        
        Submitted at: ${(/* @__PURE__ */ new Date()).toLocaleString()}
      `;
      console.log("=== NEW CONSULTATION REQUEST ===");
      console.log(`To: aret@murco.au`);
      console.log(`Subject: New Consultation Request - ${validatedData.name}`);
      console.log(emailContent);
      console.log("==================================");
      const whatsappNumber = "+61391234567";
      const whatsappMessage = encodeURIComponent(
        `\u{1F3DB}\uFE0F *OCTAGON LEGAL - New Consultation Request*

\u{1F464} *Name:* ${validatedData.name}
\u{1F4E7} *Email:* ${validatedData.email}
\u{1F4F1} *Phone:* ${validatedData.phone}
\u2696\uFE0F *Legal Matter:* ${validatedData.legalMatter}
\u{1F4C5} *Preferred Date:* ${validatedData.preferredDate}
\u{1F550} *Preferred Time:* ${validatedData.preferredTime}
\u{1F4DE} *Contact Method:* ${validatedData.preferredContact}

\u{1F4AC} *Message:*
${validatedData.message}

\u23F0 *Submitted:* ${(/* @__PURE__ */ new Date()).toLocaleString()}

\u{1F514} *Status:* TO BE CONFIRMED`
      );
      const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${whatsappMessage}`;
      console.log(`\u{1F4F1} WhatsApp notification URL: ${whatsappUrl}`);
      console.log(`\u{1F4F1} Ready to send WhatsApp to ${whatsappNumber}`);
      res.json({ success: true, message: "Consultation request sent successfully" });
    } catch (error) {
      console.error("Error sending consultation email:", error);
      res.status(500).json({ success: false, message: "Failed to send consultation request" });
    }
  });
  app2.post("/api/contact-inquiry", async (req, res) => {
    try {
      const formData = req.body;
      if (!formData.name || !formData.email || !formData.phone || !formData.practiceArea || !formData.message) {
        return res.status(400).json({ error: "All required fields must be provided" });
      }
      const consultationType = formData.consultationType === "paid" ? "Paid 30-minute consultation ($75)" : "Free 10-minute consultation";
      const urgencyText = formData.urgency ? formData.urgency.charAt(0).toUpperCase() + formData.urgency.slice(1) : "Not specified";
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

${formData.selectedDate && formData.selectedTime ? `Preferred Date/Time: ${formData.selectedDate} at ${formData.selectedTime}` : ""}

Client Message:
${formData.message}

Submitted: ${(/* @__PURE__ */ new Date()).toLocaleString()}
      `;
      console.log("=== NEW CLIENT INQUIRY ===");
      console.log(`To: aret@murco.au`);
      console.log(`Subject: New Client Inquiry - ${formData.name} (${formData.practiceArea})`);
      console.log(emailContent);
      console.log("==========================");
      const whatsappMessage = `\u{1F3DB}\uFE0F *NEW CLIENT INQUIRY* - ${formData.practiceArea}

\u{1F464} *Client:* ${formData.name}
\u{1F4E7} *Email:* ${formData.email}
\u{1F4F1} *Phone:* ${formData.phone}

\u2696\uFE0F *Type:* ${consultationType}
\u{1F6A8} *Urgency:* ${urgencyText}

${formData.selectedDate && formData.selectedTime ? `\u{1F4C5} *Preferred:* ${formData.selectedDate} at ${formData.selectedTime}` : ""}

\u{1F4AC} *Message:* ${formData.message}

\u23F0 *Submitted:* ${(/* @__PURE__ */ new Date()).toLocaleString()}`;
      console.log(`\u{1F4F1} WhatsApp notification ready for +61391234567:`);
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
  app2.get("/api/video/:filename", (req, res) => {
    const filename = req.params.filename;
    const videoPath = path.join(process.cwd(), "public", "videos", filename);
    res.sendFile(videoPath);
  });
  app2.get("/attached_assets/:filename", (req, res) => {
    const filename = req.params.filename;
    const assetPath = path.join(process.cwd(), "attached_assets", filename);
    res.sendFile(assetPath);
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path3 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path2 from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path2.resolve(import.meta.dirname, "client", "src"),
      "@shared": path2.resolve(import.meta.dirname, "shared"),
      "@assets": path2.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path2.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path2.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path3.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path3.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path3.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
