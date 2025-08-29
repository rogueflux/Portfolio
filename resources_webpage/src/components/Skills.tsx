import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Code, Wrench, Zap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Engineering",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
      skills: [
        "Embedded System Design",
        "Control Systems & IoT",
        "VLSI & FPGA Development",
        "PCB Design & Hardware Prototyping",
        "Communication Protocols",
        "Signal Processing",
        "Antenna Designing",
        "Analog & Digital Electronics"
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
      skills: [
        "Python",
        "C/C++",
        "System Verilog",
        "Embedded C",
        "Assembly Language"
      ]
    },
    {
      title: "Tools & Software",
      icon: <Wrench className="w-6 h-6" />,
      color: "bg-green-100 text-green-600",
      skills: [
        "KiCad",
        "LTSpice",
        "MATLAB/Simulink",
        "Keil uVision",
        "STM32CubeIDE",
        "Ansys HFSS",
        "Xilinx Vivado",
        "Multisim",
        "EasyEDA",
        "Altium",
        "Proteus"
      ]
    },
    {
      title: "Specialized Technologies",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600",
      skills: [
        "Arduino & ESP32",
        "STM32 Microcontrollers",
        "LoRa Communication",
        "UART/I2C/SPI/CAN Protocols",
        "SCADA Systems",
        "FreeRTOS",
        "ROS2",
        "MAVLINK Protocol",
        "IEC61850/104 Protocols"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${category.color}`}>
                      {category.icon}
                    </div>
                    <span className="text-xl">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}