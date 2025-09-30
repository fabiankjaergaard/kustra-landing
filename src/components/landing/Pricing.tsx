'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Check, Star, Zap, Crown } from 'lucide-react'

export function Pricing() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001'

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for individuals and small teams getting started',
      icon: Star,
      features: [
        '1 team member',
        '3 journey maps',
        'Basic templates',
        'Export to PDF',
        'Community support',
        'Basic analytics'
      ],
      limitations: [
        'Limited storage (100MB)',
        'Basic templates only',
        'No team collaboration'
      ],
      cta: 'Start Free',
      popular: false,
      gradient: 'from-slate-500 to-slate-600'
    },
    {
      name: 'Professional',
      price: '$29',
      period: 'per month',
      description: 'For growing teams that need advanced features',
      icon: Zap,
      features: [
        'Up to 5 team members',
        'Unlimited journey maps',
        'All premium templates',
        'Export to PDF, PNG, SVG',
        'Priority support',
        'Advanced analytics',
        'Custom branding',
        'Real-time collaboration',
        'Comment system',
        'Version history'
      ],
      limitations: [],
      cta: 'Start 14-day trial',
      popular: true,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'per month',
      description: 'For large organizations with specific requirements',
      icon: Crown,
      features: [
        'Unlimited team members',
        'Unlimited everything',
        'Custom templates',
        'All export formats',
        'Dedicated support',
        'Custom analytics',
        'White-label solution',
        'SSO/SAML integration',
        'API access',
        'Custom integrations',
        'Training sessions',
        'SLA guarantee'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-purple-500 to-purple-600'
    }
  ]

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Professional plan comes with a 14-day free trial. No credit card required.'
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer: 'Yes, we offer 50% discount for qualified nonprofit organizations. Contact us for details.'
    }
  ]

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
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the plan that fits your team. Start free, scale as you grow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card className={`h-full ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-slate-200'} transition-all duration-300 hover:shadow-lg`}>
                  <CardHeader className="text-center pb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      {plan.price !== 'Free' && plan.price !== 'Custom' && (
                        <span className="text-slate-600 ml-1">/{plan.period}</span>
                      )}
                      {plan.price === 'Free' && (
                        <span className="text-slate-600 ml-1">{plan.period}</span>
                      )}
                    </div>
                    <p className="text-slate-600 mt-2">{plan.description}</p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="flex items-center opacity-60">
                          <div className="w-4 h-4 mr-3 flex-shrink-0 rounded-full border border-slate-300" />
                          <span className="text-slate-500 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={plan.popular ? 'primary' : 'outline'}
                      size="lg"
                      href={plan.name === 'Enterprise' ? '/contact' : `${appUrl}/auth/register`}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently asked questions
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
              >
                <h4 className="font-semibold text-slate-900 mb-2">{faq.question}</h4>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-xl text-slate-300 mb-6">
              Our team is here to help you choose the right plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                href="/contact"
              >
                Contact Sales
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/help"
                className="border-slate-400 text-slate-300 hover:bg-slate-800"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}