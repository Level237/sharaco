import { Link } from 'react-router-dom'
import { useState } from 'react'
import hero from '../assets/img/hero.jpg'



import { Sparkles, BarChart3, Users, CheckCircle, ArrowRight, Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import Logo from './ui/logo'

// Types
interface NavItem {
  label: string
  href: string
}

interface Feature {
  title: string
  description: string
  icon: JSX.Element
  bgColor: string
}


// Constants
const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'Enterprise', href: '/enterprise' },
]

const CTA_BUTTONS = {
  primary: { label: 'Start Free Trial', href: '/login', className: 'bg-sky-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-200' },
  secondary: { label: 'Book a Demo', href: '/demo', className: 'bg-transparent text-sky-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-200' }
}

const FEATURES: Feature[] = [
  {
    title: 'AI-Powered Quotes',
    description: 'Generate accurate quotes in seconds with our advanced AI technology',
    icon: <Sparkles className="w-6 h-6" />,
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Real-time Analytics',
    description: 'Track your business performance with detailed insights',
    icon: <BarChart3 className="w-6 h-6" />,
    bgColor: 'bg-green-50'
  },
  {
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team in real-time',
    icon: <Users className="w-6 h-6" />,
    bgColor: 'bg-purple-50'
  }
]



export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <Logo width={52} height={52} />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:gap-x-8">
                <div className="flex items-center space-x-8">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="text-sm font-medium text-gray-700 hover:text-sky-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Desktop CTA Buttons */}
                <div className="flex items-center gap-4">
                  <Link to={CTA_BUTTONS.secondary.href}>
                    <Button className={CTA_BUTTONS.secondary.className} size="default">
                      {CTA_BUTTONS.secondary.label}
                    </Button>
                  </Link>
                  <Link to={CTA_BUTTONS.primary.href}>
                    <Button className={CTA_BUTTONS.primary.className} size="default">
                      {CTA_BUTTONS.primary.label}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="sr-only">Toggle menu</span>
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-x-0 top-16 bottom-0 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
        >
          <div className="h-full overflow-y-auto">
            <div className="space-y-4 px-4 py-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block rounded-lg px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="mt-6 space-y-4 px-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link
                    to={CTA_BUTTONS.secondary.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {CTA_BUTTONS.secondary.label}
                  </Link>
                </Button>
                <Button
                  className={CTA_BUTTONS.primary.className}
                  size="lg"

                  asChild
                >
                  <Link
                    to={CTA_BUTTONS.primary.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {CTA_BUTTONS.primary.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with proper spacing */}
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        {/* Hero section */}
        <section className="relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute right-1/2 -top-96 -translate-x-1/2 transform">
              <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-tr from-sky-200 to-sky-50 opacity-20 blur-3xl" />
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-20 lg:pt-32">
              {/* Left column */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                {/* Announcement banner */}
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-50 px-4 py-1 mb-8">
                  <span className="text-sm font-medium text-sky-600">
                    New Feature Release
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </span>
                </div>

                {/* Hero content */}
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Transform Your
                  <span className="block text-sky-600">Quote Management</span>
                  Into Success
                </h1>

                <p className="mt-6 text-lg text-gray-500">
                  Streamline your quote creation process, close deals faster, and scale your business with our intelligent platform. Join thousands of successful companies already using our solution.
                </p>

                <div className="mt-10 flex gap-4">
                  <Button variant="ghost" size="lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button className={CTA_BUTTONS.primary.className} size="lg">
                    Book a Demo
                  </Button>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-4">
                  {[
                    ['5K+', 'Active Users'],
                    ['98%', 'Customer Satisfaction'],
                    ['2x', 'Faster Quote Creation'],
                  ].map(([stat, label]) => (
                    <div key={label} className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{stat}</div>
                      <div className="text-sm text-gray-500">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column */}
              <div className="lg:col-span-6 mt-12 lg:mt-0">
                <div className="relative">
                  <img
                    src={hero}
                    alt="Dashboard preview"
                    className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                    width={1200}
                    height={675}
                  />
                  {/* Feature cards floating */}
                  <div className="absolute -right-8 top-1/3 animate-float">
                    <div className="rounded-lg bg-white p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-green-100 p-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="font-medium">Quote Approved</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features grid */}
            <div className="mt-32 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className={`rounded-2xl ${feature.bgColor} p-8 transition-transform hover:-translate-y-1`}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
