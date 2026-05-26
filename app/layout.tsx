import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webhook Health Monitor — Monitor Webhook Reliability & Failures',
  description: 'Track webhook delivery success rates, retry attempts, and failure patterns across all your endpoints. Built for backend developers and SaaS companies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f881456f-d50a-4be5-815e-66a04558991f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
