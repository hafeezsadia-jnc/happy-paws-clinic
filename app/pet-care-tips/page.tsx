"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Card, Col, Row, Tag, Typography } from "antd";
import {
  ArrowRightOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { blogPosts, categoryColors } from "@/lib/blog";

const { Title, Paragraph, Text } = Typography;

export default function PetCareTipsPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f3f0ff] via-[#fef6f1] to-[#eafaf2]" />
        <div className="absolute -top-20 -left-20 -z-10 h-64 w-64 rounded-full bg-[#c4b5fd]/40 blur-3xl" />
        <div className="absolute top-10 right-0 -z-10 h-72 w-72 rounded-full bg-[#a7f3d0]/40 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2f855a]">
            From our vets
          </span>
          <Title className="!font-display !mt-2 !mb-4 !text-4xl md:!text-5xl">
            Pet care tips &amp; advice
          </Title>
          <Paragraph className="mx-auto !max-w-2xl !text-lg !text-slate-600">
            Expert guidance on nutrition, dental health, preventive care and more
            — to help your pet live their best life.
          </Paragraph>
        </div>
      </section>

      {/* Featured post */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <Link href={`/pet-care-tips/${featured.slug}`}>
          <Card
            hoverable
            className="overflow-hidden rounded-3xl border border-slate-100"
            styles={{ body: { padding: 0 } }}
          >
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#2f855a] backdrop-blur">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <Tag color={categoryColors[featured.category]} className="mb-3 w-fit rounded-full">
                  {featured.category}
                </Tag>
                <Title level={2} className="!font-display !mb-3 !text-2xl sm:!text-3xl">
                  {featured.title}
                </Title>
                <Paragraph className="!text-slate-600">{featured.excerpt}</Paragraph>
                <div className="mt-2 flex items-center gap-4 text-sm text-slate-400">
                  <span><UserOutlined /> {featured.author}</span>
                  <span><ClockCircleOutlined /> {featured.readTime}</span>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-[#2f855a]">
                  Read more <ArrowRightOutlined />
                </span>
              </div>
            </div>
          </Card>
        </Link>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <Row gutter={[24, 24]}>
          {rest.map((p) => (
            <Col xs={24} sm={12} lg={8} key={p.slug}>
              <Link href={`/pet-care-tips/${p.slug}`}>
                <Card
                  hoverable
                  className="group h-full overflow-hidden rounded-3xl border border-slate-100"
                  styles={{ body: { padding: 20 } }}
                  cover={
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                  <Paragraph className="!text-slate-600 !text-sm" ellipsis={{ rows: 2 }}>
                    {p.excerpt}
                  </Paragraph>
                  <div className="flex items-center justify-between">
                    <Text className="!text-slate-400 !text-xs">
                      <ClockCircleOutlined /> {p.readTime}
                    </Text>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2f855a]">
                      Read more <ArrowRightOutlined />
                    </span>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2f855a] to-[#276749]">
        <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center text-white">
          <Title level={2} className="!text-white !font-display">
            Have a question about your pet&apos;s health?
          </Title>
          <Paragraph className="mx-auto !max-w-lg !text-white/85">
            Our vets are here to help. Book a visit and get expert, personalised
            advice.
          </Paragraph>
          <Link href="/appointment">
            <Button
              size="large"
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
