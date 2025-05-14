import { Instagram, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/manoejag", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Something went wrong.",
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 px-4 relative bg-secondary/30 min-h-screen flex items-center"
    >
      <div className="container mx-auto max-w-4xl w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Feel free to reach out. I'm always open to discussing new
            opportunities.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Contact Information
            </h3>

            <div className="flex flex-col gap-6 items-center">
              {/* Email */}
              <div className="flex flex-col items-center space-y-1">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Email</h4>
                  <a
                    href="mailto:pmp020601@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    pmp020601@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center space-y-1">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Location</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Toronto, ON, Canada
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4 sm:pt-6 flex flex-col items-center">
                <h4 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  Connect With Me
                </h4>
                <div className="flex space-x-4 sm:space-x-6 items-center justify-center">
                  <a
                    href="https://www.linkedin.com/in/parthkumar-patel-44709224a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 sm:p-2 hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a
                    href="https://x.com/pmp0206?s=11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 sm:p-2 hover:text-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <FaXTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/_paarthp?igsh=ZHIxamtscTAwMmQ1&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 sm:p-2 hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Send a Message
            </h3>

            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-left"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Parthkumar Patel"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-left"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="example@gmail.com"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-left"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 py-2 sm:py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={14} className="sm:w-4 sm:h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
