import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTheme } from "@/hooks/use-theme";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_KEY } from "@/lib/emailjs";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { theme } = useTheme();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Log EmailJS configuration (remove in production)
    console.log('Attempting to send email with:');
    console.log('- Service ID:', EMAILJS_SERVICE_ID ? '[Present]' : '[Missing]');
    console.log('- Template ID:', EMAILJS_TEMPLATE_ID ? '[Present]' : '[Missing]');
    console.log('- Public Key:', EMAILJS_KEY ? '[Present]' : '[Missing]');
    
    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_KEY) {
        throw new Error('Email configuration is incomplete. Missing service ID, template ID, or public key.');
      }
      
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID, 
        {
          name: data.name,
          from_name: data.name,
          from_email: data.email,
          email: data.email,
          message: data.message,
          time: new Date().toLocaleString(),
        }, 
        EMAILJS_KEY
      );

      console.log('EmailJS Response:', response);
      
      if (response.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error(`Failed to send message. Status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "mithilamadhusankha@gmail.com",
      href: "mailto:mithilamadhusankha@email.com",
      color: "text-red-500",
    },
    {
      icon: Github,
      label: "github.com/NKDMMadhusankha",
      href: "https://github.com/NKDMMadhusankha",
      color: "text-gray-400",
    },
    {
      icon: Linkedin,
      label: "linkedin.com/in/mithila-madhusankha",
      href: "https://www.linkedin.com/in/mithila-madhusankha/",
      color: "text-blue-500",
    },
  ];

  return (
    <section id="contact" className={`relative py-20 px-4 ${theme === "dark" ? "bg-black/60 text-white" : "bg-slate-100/60 text-gray-900"} font-['Roboto_Mono',monospace] overflow-hidden`}>          <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle className="w-8 h-8 text-gray-400" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
          </motion.div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Contact info with modern styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gray-400 to-transparent"></div>
              <h3 className="text-3xl font-bold mb-6 text-gray-200">Get In Touch</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating on exciting projects, 
                or simply having a conversation about technology and software development.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group flex items-center p-4 rounded-lg bg-gray-900/50 border border-gray-800/50 hover:border-gray-600/50 transition-all duration-300"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <link.icon className={`relative ${link.color} w-6 h-6 mr-4 group-hover:scale-110 transition-transform`} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Right side - Modern form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700/30"></div>
            
            <Card className="relative bg-transparent border-0 shadow-2xl">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-gray-300 text-xs font-medium uppercase tracking-wider">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                {...field}
                                placeholder="Your Name"
                                className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 h-10 rounded-lg focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 transition-all duration-300"
                              />
                              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-gray-600/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-gray-300 text-xs font-medium uppercase tracking-wider">
                            Email
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                {...field}
                                type="email"
                                placeholder="your.email@example.com"
                                className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 h-10 rounded-lg focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 transition-all duration-300"
                              />
                              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-gray-600/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-gray-300 text-xs font-medium uppercase tracking-wider">
                            Message
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Textarea
                                {...field}
                                rows={4}
                                placeholder="Your message..."
                                className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 rounded-lg focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 transition-all duration-300 resize-none"
                              />
                              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-gray-600/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600/30 group"
                      >
                        <div className="flex items-center justify-center gap-3">
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-gray-400 border-t-white rounded-full animate-spin"></div>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              <span>Send Message</span>
                            </>
                          )}
                        </div>
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}