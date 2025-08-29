import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap, Shield, Radio, Plane } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "WALRUS 2.0",
      company: "Rugved Systems",
      icon: <Zap className="w-6 h-6" />,
      description: "Curated an autonomous all-terrain bot for DRDO with a custom power and BMS system, STM32-based GPR for landmine detection, Jetson-powered LoRa encrypted communication, and GPS dead-reckoning for warzone navigation.",
      technologies: ["LTSpice", "Cadence", "Ansys", "STM32CubeIDE", "ROS2", "MATLAB Simulink", "Python"],
      highlights: [
        "Custom BMS and power system design",
        "STM32-based Ground Penetrating Radar",
        "Jetson-powered LoRa encrypted communication",
        "GPS dead-reckoning for navigation"
      ]
    },
    {
      title: "Maritime Surveillance System",
      company: "Manipal",
      icon: <Shield className="w-6 h-6" />,
      description: "Designed a low-power, embedded AI system for real-time submarine detection using STM32H750, OV7670 camera, FreeRTOS, and lightweight CNN inference with STM32Cube.AI.",
      technologies: ["Embedded C", "C++", "STM32CubeIDE", "YOLO Object Detection", "DSP Video Segmentation", "FreeRTOS"],
      highlights: [
        "Real-time submarine detection",
        "Low-power embedded AI system",
        "STM32H750 with OV7670 camera",
        "Lightweight CNN inference"
      ]
    },
    {
      title: "Gunshot Detection System using FPGA",
      company: "Rugved Systems",
      icon: <Radio className="w-6 h-6" />,
      description: "Implemented an FPGA-based real-time gunshot detection system using DSP techniques (FFT, filtering, thresholding) to identify gunshots from acoustic signals with low-latency response for smart surveillance or defense integration.",
      technologies: ["System Verilog", "Op-amps", "CNN", "Digital Signal Processing for Audio"],
      highlights: [
        "Real-time acoustic signal processing",
        "FFT and filtering techniques",
        "Low-latency response system",
        "FPGA-based implementation"
      ]
    },
    {
      title: "Human-Tracking Drone",
      company: "Rugved Systems",
      icon: <Plane className="w-6 h-6" />,
      description: "Worked on a drone integrated with Jetson Mini and RealSense camera for human tracking, utilizing MAVLINK protocol and an ESP-32 LoRa system for long-range data transmission up to several kilometers.",
      technologies: ["ROS", "ESP32", "LoRa Communications", "I2C", "SPI", "Mission Planner"],
      highlights: [
        "Jetson Mini and RealSense integration",
        "Human tracking capabilities",
        "MAVLINK protocol implementation",
        "Long-range LoRa communication"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors duration-300">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                        <p className="text-sm text-purple-600 font-medium">{project.company}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Interested in learning more about my projects?</p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              onClick={() => window.open('https://github.com/rogueflux', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}