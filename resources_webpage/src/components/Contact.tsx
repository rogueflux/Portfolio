import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "priyanshu.sil.201529@gmail.com",
      href: "mailto:priyanshu.sil.201529@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9619808023",
      href: "tel:+919619808023"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Mumbai, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/rogueflux",
      color: "hover:bg-gray-100"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/priyanshu-sil-b0a7551b0",
      color: "hover:bg-blue-50"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* PCB Design GIF Background */}
      <div className="absolute inset-0 opacity-15">
        <img 
          src="/assets/pcb_design_background.gif" 
          alt="PCB Design Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Animated circuit elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/6 w-32 h-32 bg-green-400 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, innovative projects, 
            or collaborations in electronics and embedded systems.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-full">
                      {contact.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-300">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-white hover:text-blue-300 transition-colors duration-200"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-xl">Follow Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105`}
                  >
                    <div className="p-2 bg-white/20 rounded-full">
                      {social.icon}
                    </div>
                    <span className="text-white font-medium">{social.label}</span>
                  </a>
                ))}
                
                <div className="pt-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open('mailto:priyanshu.sil.201529@gmail.com', '_blank')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-6">
              Ready to bring innovative ideas to life through cutting-edge electronics and embedded systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                onClick={() => window.open('mailto:priyanshu.sil.201529@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                onClick={() => window.open('https://github.com/rogueflux', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}