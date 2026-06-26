"use client";

import Link from "next/link";
import { Button, Card, Col, Collapse, Row, Typography } from "antd";
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  CheckCircleFilled,
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
    tint: "bg-[#e8f5ee] text-[#2f855a]",
    desc: "Comprehensive head-to-tail check-ups to catch issues early and keep your pet thriving.",
    price: "From AED 150",
    includes: ["Full physical exam", "Weight & nutrition review", "Personalised care plan"],
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Vaccinations",
    tint: "bg-[#e6f0fe] text-[#2563eb]",
    desc: "Core and lifestyle vaccines tailored to your pet's age, breed and environment.",
    price: "From AED 120",
    includes: ["Puppy & kitten courses", "Annual boosters", "Travel certificates"],
  },
  {
    icon: <SmileOutlined />,
    title: "Dental Care",
    tint: "bg-[#fdeee9] text-[#ff7a66]",
    desc: "Professional cleanings and oral treatments that prevent pain and serious problems.",
    price: "From AED 300",
    includes: ["Scaling & polishing", "Dental X-rays", "Extractions if needed"],
  },
  {
    icon: <ScissorOutlined />,
    title: "Surgery",
    tint: "bg-[#f1ecfe] text-[#7c3aed]",
    desc: "Routine and advanced procedures in a fully equipped, sterile surgical suite.",
    price: "On consultation",
    includes: ["Spay & neuter", "Soft-tissue surgery", "Pre-op & recovery care"],
  },
  {
    icon: <ThunderboltOutlined />,
    title: "Emergency Care",
    tint: "bg-[#fde9ee] text-[#e11d6b]",
    desc: "Round-the-clock urgent care when every minute counts, by our critical-care team.",
    price: "24/7 available",
    includes: ["Immediate triage", "Critical monitoring", "On-site diagnostics"],
  },
  {
    icon: <SkinOutlined />,
    title: "Grooming & Boarding",
    tint: "bg-[#eafaf2] text-[#0d9488]",
    desc: "Pamper and care services in a calm, clean environment while you're away.",
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
      "Any previous medical records, your pet's current food details, and a list of any medications. If your pet is anxious, let us know in advance.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f3f0ff] via-[#fef6f1] to-[#eafaf2]" />
        <div className="absolute -top-20 -left-20 -z-10 h-64 w-64 rounded-full bg-[#c4b5fd]/40 blur-3xl" />
        <div className="absolute top-10 right-0 -z-10 h-72 w-72 rounded-full bg-[#a7f3d0]/40 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2f855a] hover:opacity-80"
          >
            <ArrowLeftOutlined /> Back to Home
          </Link>
          <Title className="!font-display !mt-6 !mb-4 !text-4xl md:!text-5xl">
            Our services
          </Title>
          <Paragraph className="mx-auto !max-w-2xl !text-lg !text-slate-600">
            From routine wellness visits to advanced surgery and 24/7 emergency
            care — everything your pet needs, all under one roof.
          </Paragraph>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <Row gutter={[24, 24]}>
          {services.map((s) => (
            <Col xs={24} md={12} lg={8} key={s.title}>
              <Card hoverable className="h-full rounded-3xl border border-slate-100">
                <div className={`mb-4 grid h-14 w-14 place-items-center rounded-2xl text-2xl ${s.tint}`}>
                  {s.icon}
                </div>
                <Title level={4} className="!font-display !mb-2">
                  {s.title}
                </Title>
                <Paragraph className="!text-slate-600 !text-sm">{s.desc}</Paragraph>
                <ul className="mb-4 space-y-2">
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
        <Paragraph className="mt-8 text-center !text-xs !text-slate-400">
          Prices are starting estimates and may vary based on your pet&apos;s
          individual needs. A full quote is always provided before treatment.
        </Paragraph>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2f855a]">
              Good to know
            </span>
            <Title level={2} className="!font-display !mt-2">
              Frequently asked questions
            </Title>
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
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2f855a] to-[#276749]">
        <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center text-white">
          <Title level={2} className="!text-white !font-display">
            Ready to book your pet&apos;s visit?
          </Title>
          <Paragraph className="mx-auto !max-w-lg !text-white/85">
            Choose a service and a time that suits you — it takes less than two
            minutes.
          </Paragraph>
          <Link href="/appointment">
            <Button
              size="large"
              icon={<CalendarOutlined />}
              className="!mt-4 !border-0 !bg-white !font-semibold !text-[#276749]"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
