import { Card, CardContent } from '@/components/ui/card';
import { MapPin, GraduationCap, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm an Electronics and Communication Engineering student at Manipal Institute of Technology, 
                passionate about embedded systems, IoT, and cutting-edge technology solutions. With hands-on 
                experience in PCB design, FPGA development, and wireless communication systems, I thrive on 
                turning complex technical challenges into innovative solutions.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans from low-level embedded programming to high-level system architecture, 
                with a particular focus on real-time systems, signal processing, and autonomous robotics. 
                I've led projects ranging from autonomous terrain bots for DRDO to maritime surveillance systems.
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Education</h3>
                      <p className="text-gray-600">B.Tech in Electronics & Communication</p>
                      <p className="text-sm text-gray-500">Minor in Embedded Systems</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">Mumbai, India</p>
                      <p className="text-sm text-gray-500">Open to opportunities worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <Calendar className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Expected Graduation</h3>
                      <p className="text-gray-600">July 2026</p>
                      <p className="text-sm text-gray-500">Manipal Institute of Technology</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}