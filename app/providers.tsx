"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider, theme } from "antd";
import type { ReactNode } from "react";

/**
 * Central Ant Design configuration. The brand palette mirrors the
 * Happy Paws design brief: Forest Green as the trust-building primary,
 * Warm Coral reserved as an accent for emergency/urgent actions.
 */
const happyPawsTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#2F855A", // Forest Green
    colorInfo: "#2F855A",
    colorLink: "#2F855A",
    borderRadius: 12,
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSizeHeading1: 48,
    fontSizeHeading2: 34,
    controlHeight: 42,
  },
  components: {
    Button: {
      controlHeightLG: 50,
      fontWeight: 600,
      primaryShadow: "0 8px 20px rgba(47,133,90,0.25)",
    },
    Card: {
      borderRadiusLG: 18,
    },
  },
};

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={happyPawsTheme}>
        <App>{children}</App>
      </ConfigProvider>
    </AntdRegistry>
  );
}
