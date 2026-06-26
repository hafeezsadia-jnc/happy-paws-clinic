"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Result,
  Row,
  Select,
  Typography,
} from "antd";
import {
  ArrowLeftOutlined,
  HeartFilled,
  PhoneOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form] = Form.useForm();

  const onFinish = () => {
    // No backend yet — just show a success confirmation.
    setSubmitted(true);
  };

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
            Book an appointment
          </Title>
          <Paragraph className="!text-lg !text-slate-600 max-w-2xl">
            Fill in a few details and we&apos;ll confirm your visit. It takes
            less than two minutes.
          </Paragraph>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        {submitted ? (
          <Card className="border border-slate-100">
            <Result
              status="success"
              title="Appointment request received!"
              subTitle="Thank you. Our team will call you shortly to confirm your preferred date and time."
              extra={[
                <Link href="/" key="home">
                  <Button type="primary" size="large">
                    Back to Home
                  </Button>
                </Link>,
                <Button
                  key="another"
                  size="large"
                  onClick={() => {
                    form.resetFields();
                    setSubmitted(false);
                  }}
                >
                  Book another
                </Button>,
              ]}
            />
          </Card>
        ) : (
          <Card className="border border-slate-100 shadow-sm">
            <Form
              form={form}
              layout="vertical"
              requiredMark="optional"
              onFinish={onFinish}
            >
              <Title level={4} className="!font-display !mb-4">
                Pet details
              </Title>
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Pet name"
                    name="petName"
                    rules={[{ required: true, message: "Please enter your pet's name" }]}
                  >
                    <Input placeholder="e.g. Luna" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Species"
                    name="species"
                    rules={[{ required: true, message: "Please select a species" }]}
                  >
                    <Select
                      size="large"
                      placeholder="Select"
                      options={[
                        { value: "dog", label: "Dog" },
                        { value: "cat", label: "Cat" },
                        { value: "other", label: "Other" },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Title level={4} className="!font-display !mt-2 !mb-4">
                Visit details
              </Title>
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Service"
                    name="service"
                    rules={[{ required: true, message: "Please select a service" }]}
                  >
                    <Select
                      size="large"
                      placeholder="Select a service"
                      options={[
                        { value: "wellness", label: "Wellness Exam" },
                        { value: "vaccination", label: "Vaccination" },
                        { value: "dental", label: "Dental Care" },
                        { value: "surgery", label: "Surgery" },
                        { value: "emergency", label: "Emergency Care" },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label="Preferred doctor" name="doctor">
                    <Select
                      size="large"
                      placeholder="No preference"
                      allowClear
                      options={[
                        { value: "khan", label: "Dr. Ayesha Khan" },
                        { value: "park", label: "Dr. James Park" },
                        { value: "mendoza", label: "Dr. Sara Mendoza" },
                        { value: "farooq", label: "Dr. Omar Farooq" },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Preferred date"
                    name="date"
                    rules={[{ required: true, message: "Please choose a date" }]}
                  >
                    <DatePicker size="large" className="w-full" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Preferred time"
                    name="time"
                    rules={[{ required: true, message: "Please choose a time slot" }]}
                  >
                    <Select
                      size="large"
                      placeholder="Select a slot"
                      options={[
                        { value: "morning", label: "Morning (9am – 12pm)" },
                        { value: "afternoon", label: "Afternoon (12pm – 4pm)" },
                        { value: "evening", label: "Evening (4pm – 8pm)" },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Reason for visit" name="reason">
                <TextArea
                  rows={3}
                  placeholder="Tell us briefly what's going on (optional)"
                />
              </Form.Item>

              <Title level={4} className="!font-display !mt-2 !mb-4">
                Your contact details
              </Title>
              <Row gutter={16}>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="Your name"
                    name="ownerName"
                    rules={[{ required: true, message: "Please enter your name" }]}
                  >
                    <Input placeholder="Full name" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: "Please enter your phone number" }]}
                  >
                    <Input placeholder="+971 ..." size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ type: "email", message: "Enter a valid email" }]}
                  >
                    <Input placeholder="you@email.com" size="large" />
                  </Form.Item>
                </Col>
              </Row>

              <Button type="primary" size="large" htmlType="submit" block>
                Request Appointment
              </Button>
            </Form>
          </Card>
        )}

        {/* Emergency note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-slate-600">
          <PhoneOutlined className="text-[#ff7a66]" />
          <Text className="!text-slate-600">
            Emergency? Call us now at{" "}
            <a href="tel:+97140000000" className="font-semibold text-[#2f855a]">
              +971 4 000 0000
            </a>
          </Text>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <div className="flex items-center justify-center gap-2 font-display text-lg font-extrabold text-white mb-3">
            <HeartFilled className="text-[#ff7a66]" /> Happy Paws
          </div>
          <Text className="!text-slate-400">
            © 2026 Happy Paws Veterinary Clinic. All rights reserved.
          </Text>
        </div>
      </footer>
    </main>
  );
}
