'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import {
  MapPin,
  Users,
  BarChart3,
  Zap,
  FileText,
  Share2,
  MousePointer,
  Brain,
  TrendingUp,
  Palette,
  Download,
  MessageSquare
} from 'lucide-react'

export function Features() {
  const mainFeatures = [
    {
      title: 'Visual Journey Mapping',
      description: 'Intuitive drag-and-drop editor to create comprehensive customer journey maps with touchpoints, emotions, and pain points.',
      icon: MapPin,
      badge: 'Core',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Customer Personas',
      description: 'Build detailed customer profiles with demographics, behaviors, goals, and motivations to guide your journey mapping.',
      icon: Users,
      badge: 'Essential',
      gradient: 'from-green-500 to-green-600',
    },
    {
      title: 'Analytics & Insights',
      description: 'Get data-driven insights about customer behavior, conversion rates, and optimization opportunities.',
      icon: BarChart3,
      badge: 'Pro',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time, share feedback, and iterate on journey maps collaboratively.',
      icon: Zap,
      badge: 'Team',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Template Library',
      description: 'Start fast with 50+ pre-built templates for different industries, use cases, and customer types.',
      icon: FileText,
      badge: 'Popular',
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      title: 'Export & Share',
      description: 'Export your journey maps as PDFs, PNGs, or share interactive links with stakeholders and clients.',
      icon: Share2,
      badge: 'Standard',
      gradient: 'from-teal-500 to-teal-600',
    },
  ]

  const additionalFeatures = [
    { name: 'Drag & Drop Interface', icon: MousePointer },
    { name: 'AI-Powered Suggestions', icon: Brain },
    { name: 'Performance Metrics', icon: TrendingUp },
    { name: 'Custom Branding', icon: Palette },
    { name: 'Bulk Export', icon: Download },
    { name: 'Comment System', icon: MessageSquare },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Everything you need to understand
            <span className="block text-slate-600">your customers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powerful tools to map, analyze, and optimize every step of your customer&apos;s journey.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-slate-200 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Plus many more features
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <Icon size={24} className="text-slate-600 mb-2" />
                  <span className="text-sm text-slate-700 text-center font-medium">
                    {feature.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to transform your customer experience?
          </h3>
          <p className="text-xl text-slate-300 mb-6">
            Join thousands of teams already using Kustra to improve their customer journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-slate-700 rounded-lg font-semibold hover:bg-slate-50 hover:text-slate-800 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border border-slate-400 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              Book a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}