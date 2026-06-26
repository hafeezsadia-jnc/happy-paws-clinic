"use client";

import Link from "next/link";
import { Button, Card, Col, Row, Typography } from "antd";
import {
  ArrowLeftOutlined,
  HeartFilled,
  SafetyCertificateOutlined,
  TeamOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const values = [
  {
    icon: <HeartFilled />,
    title: "Compassion first",
    desc: "Every pet is treated with the same warmth and patience we'd give our own.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Trusted expertise",
    desc: "Licensed veterinarians with 15+ years of combined clinical experience.",
  },
  {
    icon: <TeamOutlined />,
    title: "Family partnership",
    desc: "We guide you through every decision with honesty and clear communication.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f0f7f2] to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#2f855a] font-medium hover:opacity-80"
          >
            <ArrowLeftOutlined /> Back to Home
          </Link>
          <Title className="!font-display !mt-6 !mb-4 !text-4xl md:!text-5xl">
            About Happy Paws
          </Title>
          <Paragraph className="!text-lg !text-slate-600 max-w-2xl">
            For over 15 years, Happy Paws Veterinary Clinic has been a trusted
            home for compassionate, modern pet care. Our mission is simple — to
            help your companions live longer, healthier, happier lives.
          </Paragraph>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} md={12}>
            <Title level={2} className="!font-display">
              Our story
            </Title>
            <Paragraph className="!text-slate-600">
              What began as a small neighborhood practice has grown into a
              full-service clinic trusted by over 5,000 pet families. Through it
              all, our promise has never changed: treat every animal as if it
              were our own.
            </Paragraph>
            <Paragraph className="!text-slate-600">
              Today our team combines advanced diagnostics, a calm and caring
              environment, and round-the-clock emergency support — all under one
              roof.
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <div className="rounded-3xl bg-gradient-to-br from-[#2f855a] to-[#276749] p-10 text-white">
              <TrophyOutlined className="text-4xl text-[#ff7a66]" />
              <Title level={3} className="!text-white !font-display !mt-4">
                15+ years of trusted care
              </Title>
              <Paragraph className="!text-white/85 !mb-0">
                Recognized for excellence in veterinary medicine and rated 4.9★
                by the families we serve.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </section>

      {/* Values */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Title level={2} className="!font-display">
              What we stand for
            </Title>
            <Paragraph className="!text-slate-600">
              The values that guide every visit, every day.
            </Paragraph>
          </div>
          <Row gutter={[24, 24]}>
            {values.map((v) => (
              <Col xs={24} md={8} key={v.title}>
                <Card className="h-full text-center border border-slate-100">
                  <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-[#f0f7f2] text-2xl text-[#2f855a]">
                    {v.icon}
                  </div>
                  <Title level={4} className="!font-display !mb-2">
                    {v.title}
                  </Title>
                  <Paragraph className="!text-slate-600 !mb-0">
                    {v.desc}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#2f855a] to-[#276749]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center text-white">
          <Title level={2} className="!text-white !font-display">
            Come meet the Happy Paws family
          </Title>
          <Paragraph className="!text-white/85 max-w-lg mx-auto">
            We&apos;d love to welcome you and your pet. Book a visit today.
          </Paragraph>
          <Link href="/">
            <Button
              size="large"
              className="!bg-white !text-[#276749] !border-0 !font-semibold mt-4"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
