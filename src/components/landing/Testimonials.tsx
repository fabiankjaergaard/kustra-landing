'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Head of CX, TechCorp',
      company: 'TechCorp',
      avatar: '/avatars/sarah.jpg',
      rating: 5,
      quote: 'Kustra transformed how we understand our customers. The visual journey maps helped us identify pain points we never knew existed and increase our conversion rate by 40%.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Product Manager',
      company: 'StartupX',
      avatar: '/avatars/marcus.jpg',
      rating: 5,
      quote: 'The collaboration features are incredible. Our entire team can work together in real-time, and the templates saved us weeks of work. Best investment we made this year.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'UX Director',
      company: 'DesignCo',
      avatar: '/avatars/emma.jpg',
      rating: 5,
      quote: 'Finally, a tool that makes customer journey mapping accessible to everyone on our team. The insights we gained led to a complete redesign that doubled our user satisfaction.',
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'GrowthLab',
      avatar: '/avatars/david.jpg',
      rating: 5,
      quote: 'Kustra gives us data-driven insights that actually matter. We reduced customer churn by 35% after implementing the optimizations suggested by the platform.',
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'RetailPlus',
      avatar: '/avatars/lisa.jpg',
      rating: 5,
      quote: 'The export features are fantastic. We can easily share journey maps with stakeholders and clients. The professional output helps us win more business.',
    },
    {
      name: 'Alex Foster',
      role: 'Operations Manager',
      company: 'ServicePro',
      avatar: '/avatars/alex.jpg',
      rating: 5,
      quote: 'Implementation was seamless, and the support team is outstanding. Within a week, we had comprehensive journey maps for all our key customer segments.',
    },
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
    <section className="py-20 bg-slate-50">
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
            Trusted by teams at leading companies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of teams who have transformed their customer experience with Kustra.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-700 mb-6 italic leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full flex items-center justify-center mr-4">
                      <span className="text-slate-600 font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-slate-200"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">4.9/5</div>
            <div className="text-slate-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">10,000+</div>
            <div className="text-slate-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">50,000+</div>
            <div className="text-slate-600">Journey Maps</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">99.9%</div>
            <div className="text-slate-600">Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}