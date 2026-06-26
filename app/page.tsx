"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Card, Col, Rate, Row, Tag, Typography } from "antd";
import {
  CalendarOutlined,
  HeartFilled,
  MedicineBoxOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
  ScissorOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const services = [
  {
    icon: <MedicineBoxOutlined />,
    title: "Wellness Exams",
    desc: "Routine check-ups to keep your companion healthy at every life stage.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Vaccinations",
    desc: "Core and lifestyle vaccines tailored to your pet's needs.",
  },
  {
    icon: <SmileOutlined />,
    title: "Dental Care",
    desc: "Cleanings and oral health treatments for a pain-free smile.",
  },
  {
    icon: <ScissorOutlined />,
    title: "Surgery",
    desc: "Routine and advanced procedures in a fully equipped suite.",
  },
];

const testimonials = [
  {
    name: "Sara A.",
    pet: "Luna (Golden Retriever)",
    quote:
      "The team treated Luna like their own. Booking was effortless and the care was outstanding.",
  },
  {
    name: "Omar K.",
    pet: "Milo (Persian Cat)",
    quote:
      "Caring, professional and genuinely warm. I won't take Milo anywhere else.",
  },
  {
    name: "Hina R.",
    pet: "Coco (Beagle)",
    quote:
      "From the clean clinic to the gentle vets, Happy Paws earned my full trust.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Top emergency strip */}
      <div className="bg-[#276749] text-white text-sm">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-3">
          <span className="flex items-center gap-2">
            <HeartFilled className="text-[#ff7a66]" />
            Open 7 days a week · Walk-ins welcome
          </span>
          <a
            href="tel:+97140000000"
            className="flex items-center gap-2 font-semibold hover:opacity-90"
          >
            <PhoneOutlined /> 24/7 Emergency: +971 4 000 0000
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-100">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-display text-xl font-extrabold text-[#276749]">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#2f855a] text-white">
              <HeartFilled />
            </span>
            Happy Paws
          </div>
          <div className="hidden md:flex items-center gap-7 text-slate-600 font-medium">
            <a className="hover:text-[#2f855a]" href="#services">
              Services
            </a>
            <a className="hover:text-[#2f855a]" href="#why">
              Why Us
            </a>
            <a className="hover:text-[#2f855a]" href="#reviews">
              Reviews
            </a>
            <Link className="hover:text-[#2f855a]" href="/about">
              About Us
            </Link>
          </div>
          <Button type="primary" size="large" icon={<CalendarOutlined />}>
            Book Appointment
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f0f7f2] to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Tag color="green" className="mb-4 rounded-full px-3 py-1">
              Trusted by 5,000+ pet families
            </Tag>
            <Title className="!font-display !mb-4 !text-4xl md:!text-5xl !leading-tight">
              Compassionate care for every paw
            </Title>
            <Paragraph className="!text-lg !text-slate-600 max-w-md">
              Expert veterinary care in a warm, modern clinic. From wellness
              visits to emergencies, we&apos;re here for your best friend.
            </Paragraph>
            <div className="flex flex-wrap gap-3 mt-6">
              <Button type="primary" size="large" icon={<CalendarOutlined />}>
                Book an Appointment
              </Button>
              <Button size="large" icon={<PhoneOutlined />}>
                Call the Clinic
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <SafetyCertificateOutlined className="text-[#2f855a]" /> Licensed
                Vets
              </span>
              <span className="flex items-center gap-2">
                <HeartFilled className="text-[#ff7a66]" /> 24/7 Emergency
              </span>
            </div>
          </div>

          <div className="relative mt-4 md:mt-0 mb-8 md:mb-0">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-100">
              <Image
                src="/images/pet-clinic-hero.png"
                alt="A caring veterinarian with a happy golden retriever at Happy Paws Veterinary Clinic"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating trust card */}
            <div className="absolute -bottom-5 left-4 sm:left-6 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg ring-1 ring-slate-100 backdrop-blur">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#ff7a66]/15 text-lg text-[#ff7a66]">
                <HeartFilled />
              </span>
              <div>
                <div className="font-display text-sm font-bold text-slate-800">
                  24/7 Emergency Care
                </div>
                <div className="text-xs text-slate-500">
                  Trusted by 2,500+ pet families
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-[#2f855a] text-white">
        <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["15+", "Years of care"],
            ["5,000+", "Happy pets"],
            ["12", "Expert vets"],
            ["4.9★", "Google rating"],
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="font-display text-3xl font-extrabold">{stat}</div>
              <div className="text-white/80 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Title level={2} className="!font-display">
            Complete care, under one roof
          </Title>
          <Paragraph className="!text-slate-600">
            Everything your pet needs to live a long, healthy and happy life.
          </Paragraph>
        </div>
        <Row gutter={[24, 24]}>
          {services.map((s) => (
            <Col xs={24} sm={12} lg={6} key={s.title}>
              <Card
                hoverable
                className="h-full text-center border border-slate-100"
              >
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-[#f0f7f2] text-2xl text-[#2f855a]">
                  {s.icon}
                </div>
                <Title level={4} className="!font-display !mb-2">
                  {s.title}
                </Title>
                <Paragraph className="!text-slate-600 !mb-0">{s.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Why us */}
      <section id="why" className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl bg-gradient-to-br from-[#2f855a] to-[#276749] p-10 text-white">
            <HeartFilled className="text-4xl text-[#ff7a66]" />
            <Title level={3} className="!text-white !font-display !mt-4">
              Care that feels like family
            </Title>
            <Paragraph className="!text-white/85">
              We combine modern medicine with genuine warmth, so every visit is
              calm and reassuring — for you and your pet.
            </Paragraph>
          </div>
          <div className="space-y-5">
            {[
              [
                "Experienced, licensed veterinarians",
                "A team with 15+ years of combined expertise.",
              ],
              [
                "Modern diagnostic equipment",
                "In-house lab, digital X-ray and ultrasound.",
              ],
              [
                "Transparent, fair pricing",
                "Clear estimates before any treatment begins.",
              ],
              [
                "Stress-free environment",
                "Separate cat and dog waiting areas.",
              ],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-4">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#2f855a]/10 text-[#2f855a]">
                  <SafetyCertificateOutlined />
                </span>
                <div>
                  <Text strong className="!text-slate-800 block">
                    {t}
                  </Text>
                  <Text className="!text-slate-600">{d}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Title level={2} className="!font-display">
            Loved by pet parents
          </Title>
          <Rate disabled defaultValue={5} className="!text-[#ff7a66]" />
        </div>
        <Row gutter={[24, 24]}>
          {testimonials.map((t) => (
            <Col xs={24} md={8} key={t.name}>
              <Card className="h-full border border-slate-100">
                <Rate
                  disabled
                  defaultValue={5}
                  className="!text-[#ff7a66] !text-sm"
                />
                <Paragraph className="!text-slate-700 !mt-3 !italic">
                  &ldquo;{t.quote}&rdquo;
                </Paragraph>
                <Text strong className="!text-slate-800 block">
                  {t.name}
                </Text>
                <Text className="!text-slate-500 !text-sm">{t.pet}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#2f855a] to-[#276749]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center text-white">
          <Title level={2} className="!text-white !font-display">
            Ready to give your pet the care they deserve?
          </Title>
          <Paragraph className="!text-white/85 max-w-lg mx-auto">
            Book an appointment in under two minutes. Your best friend will thank
            you.
          </Paragraph>
          <Button
            size="large"
            icon={<CalendarOutlined />}
            className="!bg-white !text-[#276749] !border-0 !font-semibold mt-4"
          >
            Book Appointment Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-extrabold text-white mb-3">
              <HeartFilled className="text-[#ff7a66]" /> Happy Paws
            </div>
            <Text className="!text-slate-400">
              Compassionate veterinary care for every paw, every day.
            </Text>
          </div>
          <div>
            <Text strong className="!text-white block mb-3">
              Hours
            </Text>
            <Text className="!text-slate-400 block">Mon–Fri: 8am – 9pm</Text>
            <Text className="!text-slate-400 block">Sat–Sun: 9am – 6pm</Text>
          </div>
          <div>
            <Text strong className="!text-white block mb-3">
              Contact
            </Text>
            <Text className="!text-slate-400 block">+971 4 000 0000</Text>
            <Text className="!text-slate-400 block">hello@happypaws.vet</Text>
          </div>
        </div>
        <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
          © 2026 Happy Paws Veterinary Clinic. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
