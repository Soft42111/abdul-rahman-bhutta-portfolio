"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "VP of Marketing, TechCorp",
    company: "TechCorp",
    image: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png",
    rating: 5,
    text: "Abdul Rehman transformed our community engagement strategy completely. Under his leadership, our Discord community grew by 400% in just 6 months. His strategic approach to Web3 community building is unmatched.",
  },
  {
    id: 2,
    name: "Michael Chen", 
    role: "CEO, Blockchain Ventures",
    company: "Blockchain Ventures",
    image: "/lovable-uploads/4f10758a-777b-4380-9ff1-496936661dfb.png",
    rating: 5,
    text: "Working with Abdul Rehman was a game-changer for our project launch. His ability to coordinate 120+ team members and execute flawless events with 700+ attendees shows exceptional leadership skills.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Community Manager, DeFi Protocol",
    company: "DeFi Protocol",
    image: "/lovable-uploads/975906f0-0df2-47b2-935e-39578a484dfe.png",
    rating: 5,
    text: "Abdul Rehman's mentorship elevated my community management skills to the next level. His deep understanding of Web3 ecosystems and engagement strategies is truly impressive.",
  },
  {
    id: 4,
    name: "David Park",
    role: "Head of Operations, GameFi Studio",
    company: "GameFi Studio", 
    image: "/lovable-uploads/ba906a73-dba9-4a93-9c26-7aba9ea2f320.png",
    rating: 5,
    text: "The events Abdul Rehman organized for us were phenomenal. His attention to detail and ability to create engaging experiences for our community members is outstanding.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Leaders Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from industry leaders, team members, and collaborators who have experienced 
            the impact of exceptional community leadership firsthand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-premium">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-accent mr-4" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-foreground mb-6 leading-relaxed font-medium">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4 ring-2 ring-accent/20">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-accent text-primary font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-accent font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}