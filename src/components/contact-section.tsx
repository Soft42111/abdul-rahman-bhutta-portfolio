"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Mail, Phone, MapPin, Loader2, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/integrations/supabase/client"
import { Link } from "react-router-dom"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert([{
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          subject: formData.subject.trim(),
          message: formData.message.trim()
        }])

      if (error) {
        console.error("Supabase insert error:", error)
        throw new Error("Failed to send message")
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error submitting contact form:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted relative overflow-hidden">
      {/* Brutalist background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-foreground" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-foreground" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-foreground rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
            Get In{" "}
            <span className="bg-foreground text-background px-3 py-1">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 font-mono">
            Ready to discuss your next community initiative or collaboration opportunity? 
            I'd love to hear from you.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center text-foreground hover:bg-foreground hover:text-background border-2 border-foreground px-4 py-2 font-bold uppercase text-sm transition-colors"
          >
            Open full contact page
            <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="border-4 border-foreground bg-card p-6 shadow-[6px_6px_0px_0px_hsl(var(--foreground))]">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed font-mono">
                Whether you're looking to scale your community, plan an engaging event, 
                or explore Web3 opportunities, I'm here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "aliabdulibrahim52@gmail.com",
                  href: "mailto:aliabdulibrahim52@gmail.com"
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+92-330-2710066",
                  href: "tel:+923302710066"
                },
                {
                  icon: MapPin,
                  label: "Based in",
                  value: "Sialkot, Pakistan (UTC+5)",
                  href: null
                }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 border-4 border-foreground bg-background p-4 hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-shadow"
                >
                  <div className="w-12 h-12 border-2 border-foreground bg-accent flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-foreground font-bold hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-bold">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="border-4 border-foreground bg-card p-6 shadow-[8px_8px_0px_0px_hsl(var(--foreground))]">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2 uppercase">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-4 border-foreground bg-background px-4 py-3 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-shadow"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2 uppercase">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-4 border-foreground bg-background px-4 py-3 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-shadow"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2 uppercase">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full border-4 border-foreground bg-background px-4 py-3 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-shadow"
                  placeholder="What would you like to discuss?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2 uppercase">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border-4 border-foreground bg-background px-4 py-3 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-shadow min-h-[120px] resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background border-4 border-foreground px-6 py-4 font-bold uppercase tracking-wide hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
