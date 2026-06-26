"use client";

import Link from "next/link";
import { Button, Card, Col, Row, Tag, Typography } from "antd";
import {
  ArrowLeftOutlined,
  ClockCircleOutlined,
  HeartFilled,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const posts = [
  {
    category: "Nutrition",
    title: "Feeding Your Dog: A Simple Guide to Balanced Meals",
    excerpt:
      "Portion sizes, treats and the nutrients every dog needs to thrive at each life stage.",
    readTime: "5 min read",
  },
  {
    category: "Dental",
    title: "Why Dental Care Matters More Than You Think",
    excerpt:
      "Bad breath can signal bigger problems. Here's how to keep your pet's smile healthy.",
    readTime: "4 min read",
  },
  {
    category: "Preventive",
    title: "Vaccination Schedules Explained for New Pet Owners",
    excerpt:
      "Which vaccines your puppy or kitten needs, and when — a stress-free timeline.",
    readTime: "6 min read",
  },
  {
    category: "Emergency",
    title: "Pet First Aid: What to Do Before You Reach the Vet",
    excerpt:
      "Simple steps that can make a real difference in an emergency situation.",
    readTime: "7 min read",
  },
  {
    category: "Grooming",
    title: "Grooming at Home: Tips for a Calm, Happy Pet",
    excerpt:
      "Brushing, bathing and nail care made easy with these gentle techniques.",
    readTime: "5 min read",
  },
  {
    category: "Nutrition",
    title: "Healthy Treats Your Cat Will Actually Love",
    excerpt:
      "Reward your feline friend without the extra calories — vet-approved ideas inside.",
    readTime: "3 min read",
  },
];

const categoryColors: Record<string, string> = {
  Nutrition: "green",
  Dental: "blue",
  Preventive: "cyan",
  Emergency: "red",
  Grooming: "purple",
};

export default function PetCareTipsPage() {
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
            Pet care tips & advice
          </Title>
          <Paragraph className="!text-lg !text-slate-600 max-w-2xl">
            Expert guidance from our veterinary team on nutrition, dental health,
            preventive care and more — to help your pet live their best life.
          </Paragraph>
        </div>
      </section>

      {/* Blog grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Row gutter={[24, 24]}>
          {posts.map((p) => (
            <Col xs={24} sm={12} lg={8} key={p.title}>
              <Card
                hoverable
                className="h-full border border-slate-100"
                cover={
                  <div className="h-40 bg-gradient-to-br from-[#2f855a] to-[#276749] flex items-center justify-center">
                    <HeartFilled className="text-4xl text-white/80" />
                  </div>
                }
              >
                <Tag
                  color={categoryColors[p.category] ?? "green"}
                  className="rounded-full mb-3"
                >
                  {p.category}
                </Tag>
                <Title level={4} className="!font-display !mb-2 !text-lg">
                  {p.title}
                </Title>
                <Paragraph className="!text-slate-600 !text-sm">
                  {p.excerpt}
                </Paragraph>
                <div className="flex items-center justify-between">
                  <Text className="!text-slate-400 !text-xs">
                    <ClockCircleOutlined /> {p.readTime}
                  </Text>
                  <Button type="link" className="!px-0">
                    Read more
                  </Button>
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
            Have a question about your pet&apos;s health?
          </Title>
          <Paragraph className="!text-white/85 max-w-lg mx-auto">
            Our vets are here to help. Book a visit and get expert, personalised
            advice.
          </Paragraph>
          <Link href="/appointment">
            <Button
              size="large"
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
