import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

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
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "mithila.madhusankha@email.com",
      href: "mailto:mithila.madhusankha@email.com",
      color: "text-red-500",
    },
    {
      icon: Github,
      label: "github.com/mithila-madhusankha",
      href: "https://github.com/mithila-madhusankha",
      color: "text-gray-400",
    },
    {
      icon: Linkedin,
      label: "linkedin.com/in/mithila-madhusankha",
      href: "https://linkedin.com/in/mithila-madhusankha",
      color: "text-blue-500",
    },
  ];

  return (
    <section id="contact" className={`py-20 px-4 ${theme === "dark" ? "bg-black/60 text-white" : "bg-slate-100/60 text-gray-900"} font-['Roboto_Mono',monospace] overflow-hidden`}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 font-['Roboto_Mono',monospace]"
        >
          <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>Get In Touch</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborating on exciting projects, 
              or simply having a conversation about technology and software development.
            </p>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-muted-foreground hover:text-accent-500 transition-colors group"
                >
                  <link.icon className={`${link.color} mr-4 w-6 h-6 group-hover:text-accent-500 transition-colors`} />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your Name"
                              className="bg-background border-border focus:border-accent-500 transition-colors"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="your.email@example.com"
                              className="bg-background border-border focus:border-accent-500 transition-colors"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={5}
                              placeholder="Your message..."
                              className="bg-background border-border focus:border-accent-500 transition-colors resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent-500 hover:bg-accent-600 text-white glow-on-hover"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
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
