'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, PlayCircle, Star, Users, TrendingUp } from 'lucide-react'

export function Hero() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001'

  const stats = [
    { label: 'Teams', value: '10,000+', icon: Users },
    { label: 'Journey Maps Created', value: '50,000+', icon: TrendingUp },
    { label: 'Customer Rating', value: '4.9/5', icon: Star },
  ]

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight mt-8"
          >
            Transform Customer
            <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              Experiences
            </span>
            with Journey Mapping
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Visualize, analyze, and optimize every touchpoint in your customer&apos;s journey.
            Create data-driven experiences that convert and retain customers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="md"
              href={`${appUrl}/auth/register`}
              className="group"
            >
              Start Free Trial
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="md"
              variant="outline"
              className="group"
            >
              <PlayCircle size={18} className="mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon size={20} className="text-slate-600 mr-2" />
                    <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                  </div>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              )
            })}
          </motion.div>

          {/* Hero Image/Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />

              {/* Browser frame */}
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                {/* Browser header */}
                <div className="bg-slate-100 p-4 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 mx-4">
                    <span className="text-sm text-slate-500">app.kustra.com/journey-maps</span>
                  </div>
                </div>

                {/* Screenshot placeholder */}
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp size={32} className="text-slate-600" />
                    </div>
                    <p className="text-slate-600 font-medium">Interactive Journey Map Editor</p>
                    <p className="text-sm text-slate-500">Drag & drop interface coming soon</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse" />
              <div className="absolute -top-2 -right-8 w-6 h-6 bg-green-500 rounded-full animate-pulse delay-150" />
              <div className="absolute -bottom-4 -left-8 w-10 h-10 bg-purple-500 rounded-full animate-pulse delay-300" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}