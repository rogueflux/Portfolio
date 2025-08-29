import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Electronics Lead",
      company: "Rugved Systems",
      location: "Manipal, India",
      duration: "Oct 2022 – Aug 2025",
      type: "Full-time",
      achievements: [
        "Led embedded systems projects using Arduino, ESP32, and STM32 (e.g., line follower bot, WALRUS)",
        "Architected a multi-layer PCB using KiCad, EasyEDA, and Altium, optimizing signal integrity and EMI",
        "Developed wireless systems for RC cars and drones with LoRa, ESP32, and UART/I2C/SPI/CAN protocols",
        "Simulated electronic circuits using Multisim, LTSpice, and Proteus to enhance design accuracy",
        "Negotiated contracts with suppliers to secure favorable terms for materials procurement"
      ],
      skills: ["Arduino", "ESP32", "STM32", "PCB Design", "LoRa", "Circuit Simulation"]
    },
    {
      title: "Communications Intern",
      company: "Tata Power Company Ltd",
      location: "Mumbai, India",
      duration: "May 2024 – Jul 2024",
      type: "Internship",
      achievements: [
        "Received a Certificate of Tata Power Company as a communications intern",
        "Gained hands-on experience with SCADA systems, MPLS-TP networks, L2/L3 switches, and firewall setup",
        "Assisted in configuring FRTUs, modems, and secure telephony using IEC61850/104 protocols",
        "Performed real-time data acquisition, OTDR testing, fiber splicing, and antenna installations",
        "Explored substation automation, network management, and cybersecurity practices"
      ],
      skills: ["SCADA", "MPLS-TP", "IEC61850/104", "Network Management", "Cybersecurity"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{exp.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-gray-600 mt-2">
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <Badge variant={exp.type === "Internship" ? "secondary" : "default"}>
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="hover:bg-purple-50 hover:border-purple-300 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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