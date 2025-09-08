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
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Professional Resume
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download my comprehensive resume showcasing leadership experience, 
              achievements, and expertise in Web3 community building.
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-premium">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Resume Preview */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Resume.pdf</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Updated: {resumeData.lastUpdated}</span>
                        <span>•</span>
                        <span>{resumeData.fileSize}</span>
                        <span>•</span>
                        <span>{resumeData.pages} pages</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {resumeHighlights.map((highlight, index) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      Downloaded {resumeData.downloadCount} times
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      PDF Format
                    </Badge>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      onClick={handleDownload}
                      size="lg" 
                      className="w-full group bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-primary font-semibold"
                    >
                      <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                      Download Resume
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-3"
                  >
                    <Button 
                      onClick={handlePreview}
                      variant="outline" 
                      className="group border-border/50 hover:border-accent/50"
                    >
                      <Eye className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                      Preview
                    </Button>
                    <Button 
                      onClick={handleShare}
                      variant="outline" 
                      className="group border-border/50 hover:border-accent/50"
                    >
                      <Share2 className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                      Share
                    </Button>
                  </motion.div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">
                      Also available on{" "}
                      <a href="https://www.linkedin.com/in/abdul-rehman-194588337" className="text-accent hover:underline">
                        LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}