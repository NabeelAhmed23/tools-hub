"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  Heart,
  Users,
  HelpCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AdPlaceholder from "@/components/AdPlaceholder";

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        reset();
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactSchema_LD = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.the-tools-hub.com/contact/#contactpage",
    mainEntity: {
      "@type": "Organization",
      "@id": "https://www.the-tools-hub.com/#organization"
    },
    description: "Contact the ToolsHub team for support, feedback, partnerships, or questions about our free online tools.",
    inLanguage: "en-US"
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "General Inquiries",
      description: "Questions about our tools, features, or general support",
      timeframe: "24-48 hours"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Technical Support",
      description: "Bug reports, technical issues, or tool-specific help",
      timeframe: "12-24 hours"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Feedback & Suggestions",
      description: "Ideas for new tools, improvements, or feature requests",
      timeframe: "1-3 days"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnership Inquiries",
      description: "Business partnerships, integrations, or collaboration opportunities",
      timeframe: "3-5 days"
    }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to messages?",
      answer: "We typically respond within 24-48 hours for general inquiries, and 12-24 hours for technical support issues. Complex partnership inquiries may take 3-5 business days."
    },
    {
      question: "Can you add a specific tool I need?",
      answer: "We love hearing about new tool ideas! While we can't guarantee implementation of every request, we carefully consider all suggestions and prioritize tools that would benefit our community."
    },
    {
      question: "Do you offer premium support?",
      answer: "All our tools are completely free, and our support is too! We provide the same high-quality assistance to every user, regardless of their usage level."
    },
    {
      question: "Can I report security issues?",
      answer: "Absolutely! Security is our top priority. If you discover any security concerns, please contact us immediately with detailed information."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema_LD),
        }}
      />

      <AdPlaceholder id="contact-adsense-top" className="mb-8" />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          We&apos;re here to help! Whether you have questions, feedback, suggestions, or need technical support,
          our team is ready to assist you. Your input helps us make ToolsHub better for everyone.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-6 h-6 text-primary" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {submitStatus === 'success' && (
                <Alert className="mb-6 border-green-200 bg-green-50 text-green-800">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>{submitMessage}</AlertDescription>
                </Alert>
              )}

              {submitStatus === 'error' && (
                <Alert className="mb-6 border-red-200 bg-red-50 text-red-800">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{submitMessage}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="Enter your full name"
                    className={errors.name ? 'border-red-500' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="Enter your email address"
                    className={errors.email ? 'border-red-500' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className={errors.message ? 'border-red-500' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Required fields. We typically respond within 24-48 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>We&apos;re Here to Help</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our team is committed to providing excellent support for all ToolsHub users.
                No matter what you need help with, we&apos;re here to assist.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Always Free Support</p>
                    <p className="text-sm text-muted-foreground">No premium tiers - everyone gets the same great service</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Privacy Respected</p>
                    <p className="text-sm text-muted-foreground">Your messages are handled with complete confidentiality</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Real Human Responses</p>
                    <p className="text-sm text-muted-foreground">Every message gets a personal response from our team</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                Quick Answers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Looking for immediate help? Check out these resources:
              </p>
              <div className="space-y-2 text-sm">
                <p>• <strong>Tool Tutorials:</strong> Each tool includes comprehensive guides</p>
                <p>• <strong>FAQ Sections:</strong> Common questions answered on every tool page</p>
                <p>• <strong>Educational Content:</strong> Learn the concepts behind each calculation</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Contact Methods */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-center mb-8">How We Can Help</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    {method.icon}
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Response time: {method.timeframe}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Community Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-16"
      >
        <Card className="bg-muted/30">
          <CardContent className="p-8 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              ToolsHub is built by users, for users. Your feedback, suggestions, and experiences
              help shape the future of our platform. We genuinely appreciate every message and
              use your input to make ToolsHub better for everyone.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <AdPlaceholder id="contact-adsense-bottom" />
    </div>
  );
}