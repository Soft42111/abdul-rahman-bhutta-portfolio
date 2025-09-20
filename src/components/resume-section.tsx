"use client"

import { motion } from "framer-motion"
import { Download, FileText, Eye, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const resumeData = {
  lastUpdated: "December 2024",
  fileSize: "2.4 MB",
  pages: 3,
  downloadCount: 847
}

const resumeHighlights = [
  "5+ Years Web3 Community Leadership",
  "120+ Team Members Managed",
  "700+ Event Attendees Hosted",
  "400% Community Growth Achieved",
  "Multiple Platform Expertise",
  "Strategic Partnership Development"
]

export function ResumeSection() {
  const handleDownload = () => {
    // Create a dummy PDF download for demonstration
    // In a real implementation, this would link to an actual resume file
    const link = document.createElement('a')
    link.href = '#' // Replace with actual resume URL
    link.download = 'Abdul_Rehman_Bhutta_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Show toast notification
    console.log('Resume download initiated')
  }

  const handlePreview = () => {
    // In a real implementation, this would open a PDF preview modal
    console.log('Resume preview opened')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Abdul Rehman Bhutta - Resume',
        text: 'Check out Abdul Rehman Bhutta\'s professional resume',
        url: window.location.href
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      console.log('Resume link copied to clipboard')
    }
  }

  return (
    <section id="resume" className="py-16 md:py-24 relative z-10 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-8 md:mb-12">
            <motion.h2 
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Professional Resume
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Download my comprehensive resume showcasing leadership experience, 
              achievements, and expertise in Web3 community building.
            </motion.p>
          </div>

          <Card className="bg-card border border-border shadow-card hover:shadow-premium transition-all duration-300 relative z-20">
            <CardContent className="p-6 md:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start lg:items-center">
                {/* Resume Preview */}
                <motion.div 
                  className="space-y-4 md:space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start md:items-center space-x-3 md:space-x-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-accent rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg md:text-2xl font-bold text-foreground">Resume.pdf</h3>
                      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground mt-1">
                        <span>Updated: {resumeData.lastUpdated}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{resumeData.fileSize}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{resumeData.pages} pages</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm md:text-base">Key Highlights:</h4>
                    <div className="grid grid-cols-1 gap-1.5 md:gap-2">
                      {resumeHighlights.map((highlight, index) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-2 md:space-x-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm md:text-base leading-relaxed">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Downloaded {resumeData.downloadCount} times
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      PDF Format
                    </Badge>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="space-y-3 md:space-y-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    onClick={handleDownload}
                    size="lg" 
                    className="w-full group bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-primary font-semibold transition-all duration-300 hover:shadow-glow relative z-30"
                  >
                    <Download className="mr-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:scale-110" />
                    Download Resume
                  </Button>

                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <Button 
                      onClick={handlePreview}
                      variant="outline" 
                      className="group border-border hover:border-accent/50 transition-all duration-300 relative z-30"
                      size="sm"
                    >
                      <Eye className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:scale-110" />
                      <span className="text-xs md:text-sm">Preview</span>
                    </Button>
                    <Button 
                      onClick={handleShare}
                      variant="outline" 
                      className="group border-border hover:border-accent/50 transition-all duration-300 relative z-30"
                      size="sm"
                    >
                      <Share2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:scale-110" />
                      <span className="text-xs md:text-sm">Share</span>
                    </Button>
                  </div>

                  <div className="text-center pt-2 md:pt-4">
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Also available on{" "}
                      <a 
                        href="https://www.linkedin.com/in/abdul-rehman-194588337" 
                        className="text-accent hover:underline transition-colors duration-200 relative z-30"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}