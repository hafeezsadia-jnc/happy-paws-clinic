"use client";

import Link from "next/link";
import { Button, Card, Col, Collapse, Row, Typography } from "antd";
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  HeartFilled,
  MedicineBoxOutlined,
  SafetyCertificateOutlined,
  ScissorOutlined,
  SmileOutlined,
  ThunderboltOutlined,
  SkinOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const services = [
  {
    icon: <MedicineBoxOutlined />,
    title: "Wellness Exams",
    desc: "Comprehensive head-to-tail check-ups to catch issues early and keep your pet thriving at every life stage.",
    price: "From AED 150",
    includes: ["Full physical exam", "Weight & nutrition review", "Personalised care plan"],
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Vaccinations",
    desc: "Core and lifestyle vaccines tailored to your pet's age, breed and environment for lifelong protection.",
    price: "From AED 120",
    includes: ["Puppy & kitten courses", "Annual boosters", "Travel certificates"],
  },
  {
    icon: <SmileOutlined />,
    title: "Dental Care",
    desc: "Professional cleanings and oral treatments that prevent pain, tooth loss and serious health problems.",
    price: "From AED 300",
    includes: ["Scaling & polishing", "Dental X-rays", "Extractions if needed"],
  },
  {
    icon: <ScissorOutlined />,
    title: "Surgery",
    desc: "Routine and advanced procedures performed in a fully equipped, sterile surgical suite with full monitoring.",
    price: "On consultation",
    includes: ["Spay & neuter", "Soft-tissue surgery", "Pre-op & recovery care"],
  },
  {
    icon: <ThunderboltOutlined />,
    title: "Emergency Care",
    desc: "Round-the-clock urgent care when every minute counts, staffed by our experienced critical-care team.",
    price: "24/7 available",
    includes: ["Immediate triage", "Critical monitoring", "On-site diagnostics"],
  },
  {
    icon: <SkinOutlined />,
    title: "Grooming & Boarding",
    desc: "Pamper and care services in a calm, clean environment — so your pet feels at home while you're away.",
    price: "From AED 80",
    includes: ["Bathing & styling", "Nail & coat care", "Safe overnight boarding"],
  },
];

const faqs = [
  {
    key: "1",
    label: "Do I need an appointment, or can I walk in?",
    children:
      "We welcome both. Walk-ins are accepted during opening hours, but booking ahead means shorter waits and your preferred vet. Emergencies are always seen immediately.",
  },
  {
    key: "2",
    label: "How often should my pet have a wellness exam?",
    children:
      "We recommend at least one check-up a year for healthy adult pets, and twice a year for seniors or those with ongoing conditions.",
  },
  {
    key: "3",
    label: "Are the prices shown final?",
    children:
      "Prices shown are starting points. After examining your pet, we always provide a clear, written estimate before any treatment begins — no surprises.",
  },
  {
    key: "4",
    label: "Do you offer payment plans?",
    children:
      "Yes. For larger procedures we can discuss flexible payment options. Just ask our reception team and we'll find a solution that works for you.",
  },
  {
    key: "5",
    label: "What should I bring to my first visit?",
    children:
      "Any previous medical records, your pet's current food details, and a list of any medications. If your pet is anxious, let us know in advance so we can prepare a calm space.",
  },
];

export default function ServicesPage() {
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
            Our services
          </Title>
          <Paragraph className="!text-lg !text-slate-600 max-w-2xl">
            From routine wellness visits to advanced surgery and 24/7 emergency
            care — everything your pet needs to live a long, healthy and happy
            life, all under one roof.
          </Paragraph>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Row gutter={[24, 24]}>
          {services.map((s) => (
            <Col xs={24} md={12} lg={8} key={s.title}>
              <Card hoverable className="h-full border border-slate-100">
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-[#f0f7f2] text-2xl text-[#2f855a]">
                  {s.icon}
                </div>
                <Title level={4} className="!font-display !mb-2">
                  {s.title}
                </Title>
                <Paragraph className="!text-slate-600 !text-sm">
                  {s.desc}
                </Paragraph>
                <ul className="space-y-2 mb-4">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircleFilled className="text-[#2f855a]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <Text strong className="!text-[#276749]">
                    {s.price}
                  </Text>
                  <Link href="/appointment">
                    <Button type="link" className="!px-0">
                      Book now
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Paragraph className="!text-slate-400 !text-xs text-center mt-8">
          Prices are starting estimates and may vary based on your pet&apos;s
          individual needs. A full quote is always provided before treatment.
        </Paragraph>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="text-center mb-10">
            <Title level={2} className="!font-display">
              Frequently asked questions
            </Title>
            <Paragraph className="!text-slate-600">
              Everything you need to know before your visit.
            </Paragraph>
          </div>
          <Collapse
            items={faqs}
            bordered={false}
            expandIconPosition="end"
            className="bg-transparent"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#2f855a] to-[#276749]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center text-white">
          <Title level={2} className="!text-white !font-display">
            Ready to book your pet&apos;s visit?
          </Title>
          <Paragraph className="!text-white/85 max-w-lg mx-auto">
            Choose a service and a time that suits you — it takes less than two
            minutes.
          </Paragraph>
          <Link href="/appointment">
            <Button
              size="large"
              icon={<CalendarOutlined />}
              className="!bg-white !text-[#276749] !border-0 !font-semibold mt-4"
            >
              Book an Appointment
            </Button>
          </Link>
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
