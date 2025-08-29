import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
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
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Priyanshu Sil
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-gray-300">
            Electronics & Communication Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Specializing in Embedded Systems, IoT, VLSI Design, and PCB Development. 
            Passionate about creating innovative solutions for real-world challenges.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/rogueflux" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/priyanshu-sil-b0a7551b0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:priyanshu.sil.201529@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="tel:+919619808023"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}