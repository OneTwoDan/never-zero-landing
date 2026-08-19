import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] p-8 sm:p-16 font-mono text-gray-300 max-w-4xl mx-auto border-x-8 border-[#1a1a1a]">
      <Link href="/" className="text-[#6366F1] font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4 mb-12 inline-block">
        &larr; Back to Home
      </Link>
      
      <h1 className="text-4xl sm:text-6xl font-black uppercase text-white mb-12 tracking-tight">
        Privacy Policy
      </h1>
      
      <div className="space-y-8 text-sm sm:text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-[#6366F1] mb-4 uppercase">1. Introduction</h2>
          <p>Welcome to Never Zero: Push-Ups. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application. We believe in minimal data collection and complete transparency.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#6366F1] mb-4 uppercase">2. Information We Collect</h2>
          <p>When you log in using Google Sign-In, we collect and store only the absolute minimum information required for the app to function:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
            <li><strong>Email Address:</strong> Used as your unique account identifier.</li>
            <li><strong>Name:</strong> Used to personalize your experience.</li>
            <li><strong>Push-Up Logs:</strong> Dates and counts of your completed push-ups.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#6366F1] mb-4 uppercase">3. Third-Party Services</h2>
          <p>We use trusted third-party services to securely handle your data:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
            <li><strong>Supabase:</strong> Used for secure database storage and backend infrastructure.</li>
            <li><strong>Google:</strong> Used exclusively for secure authentication (Google OAuth).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#6366F1] mb-4 uppercase">4. Data Retention and Deletion</h2>
          <p>Your data is kept as long as your account is active. You have the right to request the complete deletion of your account and all associated data at any time. For instructions, please visit our <Link href="/delete-account" className="text-[#6366F1] underline">Data Deletion Request</Link> page.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#6366F1] mb-4 uppercase">5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:support@yourdomain.com" className="text-white hover:text-[#6366F1] font-bold">support@yourdomain.com</a></p>
        </section>
      </div>
    </main>
  );
}
