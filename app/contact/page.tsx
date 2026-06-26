"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Card, Col, Form, Input, Result, Row, Typography } from "antd";
import {
  ArrowLeftOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const info = [
  {
    icon: <EnvironmentOutlined />,
    tint: "bg-[#e8f5ee] text-[#2f855a]",
    label: "Visit us",
    value: "Sheikh Zayed Road, Dubai, United Arab Emirates",
  },
  {
    icon: <PhoneOutlined />,
    tint: "bg-[#e6f0fe] text-[#2563eb]",
    label: "Call us",
    value: "+971 4 000 0000",
    href: "tel:+97140000000",
  },
  {
    icon: <MailOutlined />,
    tint: "bg-[#f1ecfe] text-[#7c3aed]",
    label: "Email us",
    value: "hello@happypaws.vet",
    href: "mailto:hello@happypaws.vet",
  },
  {
    icon: <ClockCircleOutlined />,
    tint: "bg-[#fdeee9] text-[#ff7a66]",
    label: "Opening hours",
    value: "Mon–Fri: 8am – 9pm · Sat–Sun: 9am – 6pm",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form] = Form.useForm();

  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f3f0ff] via-[#fef6f1] to-[#eafaf2]" />
        <div className="absolute -top-20 -left-20 -z-10 h-64 w-64 rounded-full bg-[#c4b5fd]/40 blur-3xl" />
        <div className="absolute top-10 right-0 -z-10 h-72 w-72 rounded-full bg-[#a7f3d0]/40 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2f855a] hover:opacity-80"
          >
            <ArrowLeftOutlined /> Back to Home
          </Link>
          <Title className="!font-display !mt-6 !mb-3 !text-4xl md:!text-5xl">
            Get in touch
          </Title>
          <Paragraph className="mx-auto !max-w-2xl !text-lg !text-slate-600">
            Have a question or want to book a visit? We&apos;d love to hear from
            you — our friendly team will get right back to you.
          </Paragraph>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <Row gutter={[32, 32]}>
          {/* Form */}
          <Col xs={24} md={14}>
            <Card className="h-full rounded-3xl border border-slate-100 shadow-sm">
              {submitted ? (
                <Result
                  status="success"
                  title="Message sent!"
                  subTitle="Thanks for reaching out. We'll reply as soon as possible."
                  extra={
                    <Button
                      type="primary"
                      onClick={() => {
                        form.resetFields();
                        setSubmitted(false);
                      }}
                    >
                      Send another message
                    </Button>
                  }
                />
              ) : (
                <>
                  <Title level={4} className="!font-display !mb-4">
                    Send us a message
                  </Title>
                  <Form
                    form={form}
                    layout="vertical"
                    requiredMark="optional"
                    onFinish={() => setSubmitted(true)}
                  >
                    <Row gutter={16}>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Your name"
                          name="name"
                          rules={[{ required: true, message: "Please enter your name" }]}
                        >
                          <Input placeholder="Full name" size="large" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[
                            { required: true, message: "Please enter your email" },
                            { type: "email", message: "Enter a valid email" },
                          ]}
                        >
                          <Input placeholder="you@email.com" size="large" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item label="Phone" name="phone">
                      <Input placeholder="+971 ..." size="large" />
                    </Form.Item>
                    <Form.Item
                      label="Message"
                      name="message"
                      rules={[{ required: true, message: "Please enter a message" }]}
                    >
                      <TextArea rows={4} placeholder="How can we help you and your pet?" />
                    </Form.Item>
                    <Button type="primary" size="large" htmlType="submit" block>
                      Send Message
                    </Button>
                  </Form>
                </>
              )}
            </Card>
          </Col>

          {/* Info panel */}
          <Col xs={24} md={10}>
            <div className="space-y-4">
              {info.map((item) => (
                <Card
                  key={item.label}
                  className="rounded-2xl border border-slate-100"
                  styles={{ body: { padding: 18 } }}
                >
                  <div className="flex items-start gap-3">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${item.tint}`}>
                      {item.icon}
                    </span>
                    <div>
                      <Text strong className="!text-slate-800 block">
                        {item.label}
                      </Text>
                      {item.href ? (
                        <a href={item.href} className="text-slate-600 hover:text-[#2f855a]">
                          {item.value}
                        </a>
                      ) : (
                        <Text className="!text-slate-600">{item.value}</Text>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              <a
                href="https://wa.me/97140000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
              >
                <WhatsAppOutlined className="text-xl" /> Chat with us on WhatsApp
              </a>
            </div>
          </Col>
        </Row>

        {/* Emergency callout */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-[2rem] bg-gradient-to-r from-[#ff7a66] to-[#e11d6b] px-6 py-6 text-center text-white sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20 text-xl">
              <PhoneOutlined />
            </span>
            <div>
              <Text strong className="!text-white block">
                Pet emergency?
              </Text>
              <Text className="!text-white/90">
                Our team is available 24/7. Call us right away.
              </Text>
            </div>
          </div>
          <a href="tel:+97140000000">
            <Button size="large" className="!border-0 !bg-white !font-semibold !text-[#e11d6b]">
              Call +971 4 000 0000
            </Button>
          </a>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="overflow-hidden rounded-[2rem] shadow-sm ring-1 ring-slate-100">
          <iframe
            title="Happy Paws Veterinary Clinic location"
            src="https://www.google.com/maps?q=Dubai&output=embed"
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
