"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Card, Col, Row, Tag, Typography } from "antd";
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const doctors = [
  {
    name: "Dr. Ayesha Khan",
    title: "DVM, Internal Medicine",
    exp: "12 years",
    img: "/images/doctors/ayesha.jpg",
    bio: "Specialises in preventive care, diagnostics and chronic disease management for dogs and cats.",
    tags: ["Internal Medicine", "Diagnostics"],
  },
  {
    name: "Dr. James Park",
    title: "DVM, Surgery",
    exp: "15 years",
    img: "/images/doctors/james.jpg",
    bio: "Leads our surgical suite, performing both routine and advanced soft-tissue procedures.",
    tags: ["Surgery", "Orthopedics"],
  },
  {
    name: "Dr. Sara Mendoza",
    title: "DVM, Dentistry",
    exp: "9 years",
    img: "/images/doctors/sara.jpg",
    bio: "Focused on oral health, dental cleanings and pain-free treatment for every pet.",
    tags: ["Dental Care", "Wellness"],
  },
  {
    name: "Dr. Omar Farooq",
    title: "DVM, Emergency & Critical Care",
    exp: "11 years",
    img: "/images/doctors/omar.jpg",
    bio: "Heads our 24/7 emergency team, delivering calm, expert care when it matters most.",
    tags: ["Emergency", "Critical Care"],
  },
];

const reasons = [
  "Board-certified, continually trained veterinarians",
  "A gentle, fear-free approach to every patient",
  "Clear communication and honest advice",
];

export default function DoctorsPage() {
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
            Meet our veterinarians
          </Title>
          <Paragraph className="mx-auto !max-w-2xl !text-lg !text-slate-600">
            A caring, highly qualified team dedicated to keeping your companion
            healthy and happy at every stage of life.
          </Paragraph>
        </div>
      </section>

      {/* Doctors grid */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <Row gutter={[24, 24]}>
          {doctors.map((d) => (
            <Col xs={24} sm={12} lg={6} key={d.name}>
              <Card
                hoverable
                className="group h-full overflow-hidden rounded-3xl border border-slate-100"
                styles={{ body: { padding: 20 } }}
                cover={
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={d.img}
                      alt={d.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                }
              >
                <Title level={4} className="!font-display !mb-1">
                  {d.name}
                </Title>
                <Text className="!text-[#2f855a] block !text-sm font-medium">
                  {d.title}
                </Text>
                <Text className="!text-slate-400 block !text-xs mb-3">
                  {d.exp} experience
                </Text>
                <Paragraph className="!text-slate-600 !text-sm">{d.bio}</Paragraph>
                <div className="mb-4 flex flex-wrap gap-2">
                  {d.tags.map((t) => (
                    <Tag key={t} color="green" className="rounded-full">
                      {t}
                    </Tag>
                  ))}
                </div>
                <Link href="/appointment">
                  <Button type="primary" block icon={<CalendarOutlined />}>
                    Book a visit
                  </Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Why our team */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/vet-care.jpg"
                alt="Our veterinary team caring for a pet"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2f855a]">
              Why our team
            </span>
            <Title level={2} className="!font-display !mt-2">
              Expertise you can trust, warmth you can feel
            </Title>
            <Paragraph className="!text-slate-600">
              Our veterinarians bring decades of combined experience — but it&apos;s
              their genuine love for animals that families remember most.
            </Paragraph>
            <div className="mt-5 space-y-3">
              {reasons.map((r) => (
                <div key={r} className="flex items-center gap-3">
                  <CheckCircleFilled className="text-[#2f855a]" />
                  <Text className="!text-slate-700">{r}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2f855a] to-[#276749]">
        <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center text-white">
          <Title level={2} className="!text-white !font-display">
            Book with the right vet for your pet
          </Title>
          <Paragraph className="mx-auto !max-w-lg !text-white/85">
            Choose your preferred doctor and reserve a time that suits you.
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
