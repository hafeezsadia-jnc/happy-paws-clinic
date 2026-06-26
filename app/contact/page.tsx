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
    label: "Visit us",
    value: "Sheikh Zayed Road, Dubai, United Arab Emirates",
  },
  {
    icon: <PhoneOutlined />,
    label: "Call us",
    value: "+971 4 000 0000",
    href: "tel:+97140000000",
  },
  {
    icon: <MailOutlined />,
    label: "Email us",
    value: "hello@happypaws.vet",
    href: "mailto:hello@happypaws.vet",
  },
  {
    icon: <ClockCircleOutlined />,
    label: "Opening hours",
    value: "Mon–Fri: 8am – 9pm · Sat–Sun: 9am – 6pm",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form] = Form.useForm();

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f0f7f2] to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#2f855a] font-medium hover:opacity-80"
          >
            <ArrowLeftOutlined /> Back to Home
          </Link>
          <Title className="!font-display !mt-6 !mb-3 !text-4xl md:!text-5xl">
            Get in touch
          </Title>
          <Paragraph className="!text-lg !text-slate-600 max-w-2xl">
            Have a question or want to book a visit? We&apos;d love to hear from
            you — reach out and our friendly team will get right back to you.
          </Paragraph>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <Row gutter={[32, 32]}>
          {/* Form */}
          <Col xs={24} md={14}>
            <Card className="border border-slate-100 shadow-sm h-full">
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
                <Card key={item.label} className="border border-slate-100" styles={{ body: { padding: 18 } }}>
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f0f7f2] text-[#2f855a]">
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

              {/* WhatsApp CTA */}
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
        <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl bg-[#fff1ee] px-6 py-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#ff7a66]/20 text-xl text-[#ff7a66]">
              <PhoneOutlined />
            </span>
            <div>
              <Text strong className="!text-slate-800 block">
                Pet emergency?
              </Text>
              <Text className="!text-slate-600">
                Our team is available 24/7. Call us right away.
              </Text>
            </div>
          </div>
          <a href="tel:+97140000000">
            <Button size="large" className="!bg-[#ff7a66] !text-white !border-0 !font-semibold">
              Call +971 4 000 0000
            </Button>
          </a>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-100">
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
