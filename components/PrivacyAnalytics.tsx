"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { sanitizeAnalyticsEvent } from "../lib/privacy";

export default function PrivacyAnalytics() {
  return (
    <>
      <Analytics beforeSend={sanitizeAnalyticsEvent} debug={false} />
      <SpeedInsights beforeSend={sanitizeAnalyticsEvent} debug={false} />
    </>
  );
}
