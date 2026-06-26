"use client";

import { useState } from "react";
import Image from "next/image";
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
  CheckCircleFilled,
  PhoneOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const steps = [
  ["Tell us about your pet", "Share a few details so we can prepare for the visit."],
  ["Pick a time", "Choose the date and slot that works best for you."],
  ["We confirm by phone", "Our team calls to finalise everything — usually within hours."],
];

export default function AppointmentPage() {
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
            Book an appointment
          </Title>
          <Paragraph className="mx-auto !max-w-2xl !text-lg !text-slate-600">
            Fill in a few details and we&apos;ll confirm your visit. It takes less
            than two minutes.
          </Paragraph>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <Row gutter={[32, 32]}>
          {/* Form */}
          <Col xs={24} lg={15}>
            {submitted ? (
              <Card className="rounded-3xl border border-slate-100">
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
              <Card className="rounded-3xl border border-slate-100 shadow-sm">
                <Form
                  form={form}
                  layout="vertical"
                  requiredMark="optional"
                  onFinish={() => setSubmitted(true)}
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
                    <TextArea rows={3} placeholder="Tell us briefly what's going on (optional)" />
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
          </Col>

          {/* What to expect sidebar */}
          <Col xs={24} lg={9}>
            <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5">
              <Image
                src="/images/vet-dog.jpg"
                alt="A vet welcoming a happy dog"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <Card className="rounded-3xl border border-slate-100 bg-[#f8fafc]">
              <Title level={4} className="!font-display !mb-4">
                What to expect
              </Title>
              <div className="space-y-4">
                {steps.map(([t, d], i) => (
                  <div key={t} className="flex gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#2f855a] text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <Text strong className="!text-slate-800 block">
                        {t}
                      </Text>
                      <Text className="!text-slate-600 !text-sm">{d}</Text>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 rounded-2xl bg-[#fff1ee] px-4 py-3">
                <PhoneOutlined className="text-[#ff7a66]" />
                <Text className="!text-slate-700 !text-sm">
                  Emergency? Call{" "}
                  <a href="tel:+97140000000" className="font-semibold text-[#2f855a]">
                    +971 4 000 0000
                  </a>
                </Text>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <CheckCircleFilled className="text-[#2f855a]" /> No payment needed to
                book
              </div>
            </Card>
          </Col>
        </Row>
      </section>
    </main>
  );
}
