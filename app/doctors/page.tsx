"use client";

import Link from "next/link";
import { Button, Card, Col, Row, Tag, Typography } from "antd";
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  HeartFilled,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const doctors = [
  {
    name: "Dr. Ayesha Khan",
    title: "DVM, Internal Medicine",
    exp: "12 years",
    bio: "Specialises in preventive care, diagnostics and chronic disease management for dogs and cats.",
    tags: ["Internal Medicine", "Diagnostics"],
  },
  {
    name: "Dr. James Park",
    title: "DVM, Surgery",
    exp: "15 years",
    bio: "Leads our surgical suite, performing both routine and advanced soft-tissue procedures.",
    tags: ["Surgery", "Orthopedics"],
  },
  {
    name: "Dr. Sara Mendoza",
    title: "DVM, Dentistry",
    exp: "9 years",
    bio: "Focused on oral health, dental cleanings and pain-free treatment for every pet.",
    tags: ["Dental Care", "Wellness"],
  },
  {
    name: "Dr. Omar Farooq",
    title: "DVM, Emergency & Critical Care",
    exp: "11 years",
    bio: "Heads our 24/7 emergency team, delivering calm, expert care when it matters most.",
    tags: ["Emergency", "Critical Care"],
  },
];

export default function DoctorsPage() {
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
            Meet our veterinarians
          </Title>
          <Paragraph className="!text-lg !text-slate-600 max-w-2xl">
            A caring, highly qualified team dedicated to keeping your companion
            healthy and happy at every stage of life.
          </Paragraph>
        </div>
      </section>

      {/* Doctors grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Row gutter={[24, 24]}>
          {doctors.map((d) => (
            <Col xs={24} sm={12} lg={6} key={d.name}>
              <Card hoverable className="h-full border border-slate-100">
                <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-[#f0f7f2] text-3xl text-[#2f855a]">
                  <UserOutlined />
                </div>
                <Title level={4} className="!font-display !mb-1 text-center">
                  {d.name}
                </Title>
                <Text className="!text-[#2f855a] block text-center !text-sm font-medium">
                  {d.title}
                </Text>
                <Text className="!text-slate-400 block text-center !text-xs mb-3">
                  {d.exp} experience
                </Text>
                <Paragraph className="!text-slate-600 !text-sm text-center">
                  {d.bio}
                </Paragraph>
                <div className="flex flex-wrap justify-center gap-2">
                  {d.tags.map((t) => (
                    <Tag key={t} color="green" className="rounded-full">
                      {t}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#2f855a] to-[#276749]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center text-white">
          <Title level={2} className="!text-white !font-display">
            Book with the right vet for your pet
          </Title>
          <Paragraph className="!text-white/85 max-w-lg mx-auto">
            Choose your preferred doctor and reserve a time that suits you.
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
