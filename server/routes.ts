import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // In a real application, you would:
      // 1. Send an email notification
      // 2. Store the message in a database
      // 3. Send an auto-reply to the sender
      
      console.log("Contact form submission:", validatedData);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data",
        errors: error instanceof z.ZodError ? error.errors : []
      });
    }
  });

  // CV download endpoint
  app.get("/api/download-cv", (req, res) => {
    // In a real application, you would serve the actual CV file
    // For now, we'll create a placeholder response
    const cvPath = path.join(process.cwd(), "public", "cv.pdf");
    
    // Set appropriate headers for file download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Mithila_Madhusankha_CV.pdf');
    
    // For demonstration, we'll send a simple text response
    // In production, you would use res.sendFile(cvPath) with an actual PDF
    res.status(200).send("CV download would be triggered here. Please add your actual CV file to public/cv.pdf");
  });

  const httpServer = createServer(app);
  return httpServer;
}
