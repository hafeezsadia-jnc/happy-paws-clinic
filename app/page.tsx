"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Card, Col, Rate, Row, Typography } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  ClockCircleOutlined,
  HeartFilled,
  MedicineBoxOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
  ScissorOutlined,
  SmileOutlined,
  StarFilled,
  ThunderboltOutlined,
  SkinOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const services = [
  {
    icon: <MedicineBoxOutlined />,
    title: "Wellness Exams",
    desc: "Routine check-ups to keep your companion healthy at every life stage.",
    tint: "bg-[#e8f5ee] text-[#2f855a]",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Vaccinations",
    desc: "Core and lifestyle vaccines tailored to your pet's needs.",
    tint: "bg-[#e6f0fe] text-[#2563eb]",
  },
  {
    icon: <SmileOutlined />,
    title: "Dental Care",
    desc: "Cleanings and oral health treatments for a pain-free smile.",
    tint: "bg-[#fdeee9] text-[#ff7a66]",
  },
  {
    icon: <ScissorOutlined />,
    title: "Surgery",
    desc: "Routine and advanced procedures in a fully equipped suite.",
    tint: "bg-[#f1ecfe] text-[#7c3aed]",
  },
  {
    icon: <ThunderboltOutlined />,
    title: "Emergency Care",
    desc: "Round-the-clock urgent care, whenever your pet needs us most.",
    tint: "bg-[#fde9ee] text-[#e11d6b]",
  },
  {
    icon: <SkinOutlined />,
    title: "Grooming & Boarding",
    desc: "Pampering and safe boarding in a calm, clean environment.",
    tint: "bg-[#eafaf2] text-[#0d9488]",
  },
];

const gallery = [
  { src: "/images/dog-happy.jpg", label: "Buddy" },
  { src: "/images/cat-cute.jpg", label: "Mochi" },
  { src: "/images/puppy.jpg", label: "Rosie" },
  { src: "/images/kitten.jpg", label: "Simba" },
  { src: "/images/dog-outdoor.jpg", label: "Max" },
  { src: "/images/grooming.jpg", label: "Bella" },
];

const tips = [
  {
    src: "/images/dog-happy.jpg",
    category: "Nutrition",
    title: "Feeding Your Dog: A Simple Guide to Balanced Meals",
    readTime: "5 min read",
  },
  {
    src: "/images/kitten.jpg",
    category: "Preventive",
    title: "Vaccination Schedules Explained for New Pet Owners",
    readTime: "6 min read",
  },
  {
    src: "/images/grooming.jpg",
    category: "Grooming",
    title: "Grooming at Home: Tips for a Calm, Happy Pet",
    readTime: "4 min read",
  },
];

const testimonials = [
  {
    name: "Sara A.",
    pet: "Luna (Golden Retriever)",
    avatar: "/images/dog-happy.jpg",
    quote:
      "The team treated Luna like their own. Booking was effortless and the care was outstanding.",
  },
  {
    name: "Omar K.",
    pet: "Milo (Persian Cat)",
    avatar: "/images/cat-cute.jpg",
    quote:
      "Caring, professional and genuinely warm. I won't take Milo anywhere else.",
  },
  {
    name: "Hina R.",
    pet: "Coco (Beagle)",
    avatar: "/images/puppy.jpg",
    quote:
      "From the clean clinic to the gentle vets, Happy Paws earned my full trust.",
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden">
      {/* ===== Hero ===== */}
      <section className="relative">
        {/* soft gradient backdrop */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f3f0ff] via-[#fef6f1] to-[#eafaf2]" />
        {/* decorative blobs */}
        <div className="absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-[#c4b5fd]/40 blur-3xl" />
        <div className="absolute top-20 right-0 -z-10 h-80 w-80 rounded-full bg-[#fed7aa]/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-[#a7f3d0]/40 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="animate-fade-up text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-[#276749] shadow-sm ring-1 ring-black/5 backdrop-blur">
              <span className="flex h-2 w-2 rounded-full bg-[#2f855a]" />
              Trusted by 2,500+ pet families
            </span>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Professionalism &amp; care{" "}
              <span className="text-[#2f855a]">for your pets</span>{" "}
              <HeartFilled className="text-[#ff7a66]" />
            </h1>

            <p className="mx-auto mt-5 max-w-md text-base text-slate-600 sm:text-lg lg:mx-0">
              Our compassionate veterinarians treat your best friend with the
              love and expertise they deserve — from wellness visits to 24/7
              emergencies.
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start justify-center">
              <Link href="/appointment" className="w-full sm:w-auto">
                <Button type="primary" size="large" icon={<CalendarOutlined />} block>
                  Book an Appointment
                </Button>
              </Link>
              <a href="tel:+97140000000" className="w-full sm:w-auto">
                <Button size="large" icon={<PhoneOutlined />} block>
                  Call the Clinic
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 lg:justify-start">
              <span className="flex items-center gap-2">
                <CheckCircleFilled className="text-[#2f855a]" /> Licensed vets
              </span>
              <span className="flex items-center gap-2">
                <CheckCircleFilled className="text-[#2f855a]" /> Same-day visits
              </span>
              <span className="flex items-center gap-2">
                <CheckCircleFilled className="text-[#2f855a]" /> 24/7 emergency
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative animate-fade-up">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-black/5">
              <Image
                src="/images/vet-dog.jpg"
                alt="A friendly veterinarian holding a happy dog"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* floating rating card */}
            <div className="absolute -left-2 top-6 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur animate-floaty sm:-left-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#fff4e5] text-[#f59e0b]">
                <StarFilled />
              </span>
              <div className="leading-tight">
                <div className="font-display text-lg font-bold text-slate-900">4.9</div>
                <div className="text-xs text-slate-500">2,000+ reviews</div>
              </div>
            </div>

            {/* floating emergency card */}
            <div className="absolute -right-2 bottom-8 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur animate-floaty-slow sm:-right-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#fde9ee] text-[#ff7a66]">
                <HeartFilled />
              </span>
              <div className="leading-tight">
                <div className="font-display text-sm font-bold text-slate-900">
                  24/7 Emergency
                </div>
                <div className="text-xs text-slate-500">Always here for you</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats bar ===== */}
      <section className="bg-[#2f855a]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 text-center text-white md:grid-cols-4">
          {[
            ["15+", "Years of care"],
            ["2,500+", "Happy pets"],
            ["12", "Expert vets"],
            ["4.9★", "Google rating"],
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="font-display text-3xl font-extrabold sm:text-4xl">
                {stat}
              </div>
              <div className="text-sm text-white/80">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="font-semibold uppercase tracking-wider text-[#2f855a] text-sm">
            What we do
          </span>
          <Title level={2} className="!font-display !mt-2">
            Complete care, under one roof
          </Title>
          <Paragraph className="!text-slate-600">
            Everything your pet needs to live a long, healthy and happy life.
          </Paragraph>
        </div>
        <Row gutter={[24, 24]}>
          {services.map((s) => (
            <Col xs={24} sm={12} lg={8} key={s.title}>
              <Card hoverable className="h-full border border-slate-100 rounded-3xl">
                <div className={`mb-4 grid h-14 w-14 place-items-center rounded-2xl text-2xl ${s.tint}`}>
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

      {/* ===== Why choose us ===== */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-20 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/vet-care.jpg"
                alt="A veterinarian gently caring for a pet"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-4 rounded-2xl bg-white px-5 py-3 shadow-lg ring-1 ring-black/5">
              <div className="font-display text-2xl font-extrabold text-[#2f855a]">
                98%
              </div>
              <div className="text-xs text-slate-500">Owner satisfaction</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2f855a]">
              Why Happy Paws
            </span>
            <Title level={2} className="!font-display !mt-2">
              Care that feels like family
            </Title>
            <Paragraph className="!text-slate-600">
              We combine modern medicine with genuine warmth, so every visit is
              calm and reassuring — for you and your pet.
            </Paragraph>
            <div className="mt-6 space-y-4">
              {[
                ["Experienced, licensed veterinarians", "A team with 15+ years of combined expertise."],
                ["Modern diagnostic equipment", "In-house lab, digital X-ray and ultrasound."],
                ["Transparent, fair pricing", "Clear estimates before any treatment begins."],
                ["Stress-free environment", "Separate calm spaces for cats and dogs."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-3">
                  <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#2f855a]/10 text-[#2f855a]">
                    <CheckCircleFilled />
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
        </div>
      </section>

      {/* ===== Happy patients gallery ===== */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2f855a]">
            Our happy patients
          </span>
          <Title level={2} className="!font-display !mt-2">
            Wagging tails &amp; happy purrs
          </Title>
          <Paragraph className="!text-slate-600">
            A few of the wonderful companions we&apos;re proud to care for.
          </Paragraph>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {gallery.map((g, i) => (
            <div
              key={g.label}
              className={`group relative aspect-square overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5 ${
                i % 5 === 0 ? "sm:row-span-2 sm:aspect-auto" : ""
              }`}
            >
              <Image
                src={g.src}
                alt={`${g.label}, a happy patient`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute bottom-2 left-2 rounded-full bg-white/85 px-2.5 py-0.5 text-xs font-semibold text-slate-700 backdrop-blur">
                {g.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Emergency banner ===== */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#ff7a66] to-[#e11d6b] px-6 py-10 text-white sm:px-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="relative flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/20 text-2xl">
                <ThunderboltOutlined />
              </span>
              <div>
                <Title level={3} className="!text-white !font-display !mb-1">
                  Pet emergency? We&apos;re here 24/7.
                </Title>
                <Paragraph className="!text-white/90 !mb-0">
                  Our critical-care team is ready day and night. Don&apos;t wait —
                  call us right away.
                </Paragraph>
              </div>
            </div>
            <a href="tel:+97140000000" className="shrink-0">
              <Button size="large" className="!bg-white !text-[#e11d6b] !border-0 !font-semibold">
                <PhoneOutlined /> Call now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ===== Pet care tips ===== */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2f855a]">
              From our vets
            </span>
            <Title level={2} className="!font-display !mt-2 !mb-0">
              Pet care tips &amp; advice
            </Title>
          </div>
          <Link href="/pet-care-tips">
            <Button size="large">
              View all tips <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
        <Row gutter={[24, 24]}>
          {tips.map((p) => (
            <Col xs={24} md={8} key={p.title}>
              <Link href="/pet-care-tips">
                <Card
                  hoverable
                  className="h-full overflow-hidden border border-slate-100 rounded-3xl"
                  styles={{ body: { padding: 20 } }}
                  cover={
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={p.src}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#2f855a] backdrop-blur">
                        {p.category}
                      </span>
                    </div>
                  }
                >
                  <Title level={5} className="!font-display !mb-2">
                    {p.title}
                  </Title>
                  <Text className="!text-slate-400 !text-xs">
                    <ClockCircleOutlined /> {p.readTime}
                  </Text>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2f855a]">
              Loved by pet parents
            </span>
            <Title level={2} className="!font-display !mt-2">
              What our families say
            </Title>
            <Rate disabled defaultValue={5} className="!text-[#f59e0b]" />
          </div>
          <Row gutter={[24, 24]}>
            {testimonials.map((t) => (
              <Col xs={24} md={8} key={t.name}>
                <Card className="h-full border border-slate-100 rounded-3xl">
                  <Rate disabled defaultValue={5} className="!text-[#f59e0b] !text-sm" />
                  <Paragraph className="!text-slate-700 !mt-3 !italic">
                    &ldquo;{t.quote}&rdquo;
                  </Paragraph>
                  <div className="flex items-center gap-3">
                    <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-[#2f855a]/15">
                      <Image src={t.avatar} alt={t.pet} fill sizes="44px" className="object-cover" />
                    </span>
                    <div>
                      <Text strong className="!text-slate-800 block">
                        {t.name}
                      </Text>
                      <Text className="!text-slate-500 !text-sm">{t.pet}</Text>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2f855a] to-[#276749]">
        <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
        <div className="absolute -bottom-12 right-10 h-56 w-56 rounded-full bg-white/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center text-white sm:py-20">
          <HeartFilled className="text-3xl text-[#ff7a66]" />
          <Title level={2} className="!text-white !font-display !mt-3">
            Ready to give your pet the care they deserve?
          </Title>
          <Paragraph className="mx-auto !max-w-lg !text-white/85">
            Book an appointment in under two minutes. Your best friend will thank
            you.
          </Paragraph>
          <Link href="/appointment">
            <Button
              size="large"
              icon={<CalendarOutlined />}
              className="!mt-4 !border-0 !bg-white !font-semibold !text-[#276749]"
            >
              Book Appointment Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
