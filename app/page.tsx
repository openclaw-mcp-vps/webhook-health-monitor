export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Monitor Webhook Reliability<br />
          <span className="text-[#58a6ff]">and Failures</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Track delivery success rates, retry attempts, and failure patterns across all your webhook endpoints — in one dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to explore. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          {[
            { label: 'Endpoints Monitored', value: '10,000+' },
            { label: 'Avg. Detection Time', value: '< 30s' },
            { label: 'Uptime SLA', value: '99.9%' }
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
              <div className="text-xs text-[#6e7681] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-medium uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#6e7681] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited webhook endpoints',
              'Real-time failure alerts',
              'Retry attempt tracking',
              'Success rate analytics',
              'Proxy-based monitoring',
              'Email & Slack notifications'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start Monitoring Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the monitoring work?',
              a: 'You register your webhook URLs with our service. We act as a transparent proxy, forwarding all requests to your endpoint while capturing delivery metadata, response codes, and timing — giving you full visibility without changing your existing setup.'
            },
            {
              q: 'Will it slow down my webhooks?',
              a: 'Our proxy adds less than 5ms of latency on average. We run on edge infrastructure globally to keep your webhook delivery fast and reliable.'
            },
            {
              q: 'What happens if my endpoint is down?',
              a: 'We detect failures instantly, alert you via email or Slack, and log all retry attempts with full request/response details so you can diagnose and fix issues quickly.'
            }
          ].map((item) => (
            <div key={item.q} className="border border-[#30363d] rounded-lg bg-[#161b22] p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Webhook Health Monitor. All rights reserved.
      </footer>
    </main>
  )
}
