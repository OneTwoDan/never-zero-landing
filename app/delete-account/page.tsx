import Link from "next/link";

export default function DeleteAccount() {
  const email = "support@yourdomain.com"; // TODO: Reemplazar con tu correo real
  const subject = encodeURIComponent("Data Deletion Request - Never Zero");
  const body = encodeURIComponent(
    "Hello,\n\nPlease delete my account and all associated data from the Never Zero: Push-Ups database.\n\nMy Google Account Email: [INSERT YOUR EMAIL HERE]\n\nThank you."
  );

  return (
    <main className="min-h-screen bg-[#0a0a0a] p-8 sm:p-16 flex flex-col max-w-4xl mx-auto border-x-8 border-[#1a1a1a]">
      <Link href="/" className="text-[#6366F1] font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4 mb-12 inline-block">
        &larr; Back to Home
      </Link>

      <div className="flex-grow flex flex-col justify-center max-w-2xl">
        <h1 className="text-5xl sm:text-7xl font-black uppercase text-white mb-6 tracking-tight">
          Data Deletion
        </h1>
        
        <p className="text-xl text-gray-400 font-bold mb-8 uppercase tracking-wide">
          Your data belongs to you.
        </p>

        <div className="bg-[#111] p-8 border-4 border-gray-800 space-y-6">
          <p className="text-gray-300 font-mono text-sm leading-relaxed">
            In compliance with Google Play Store policies, you can request the complete and permanent removal of your account, name, email, and push-up history from our Supabase servers.
          </p>
          
          <div className="space-y-2">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">How to proceed:</h3>
            <ol className="list-decimal list-inside text-gray-400 font-mono text-sm space-y-2">
              <li>Click the button below to draft an email to our support team.</li>
              <li>Ensure you send the email from the Google account you used to log in.</li>
              <li>We will wipe your data within 48 hours and send a confirmation reply.</li>
            </ol>
          </div>

          <div className="pt-6">
            <a 
              href={`mailto:${email}?subject=${subject}&body=${body}`}
              className="inline-block bg-[#6366F1] text-white font-black uppercase tracking-widest py-4 px-8 hover:bg-white hover:text-black transition-colors"
            >
              Request Deletion via Email
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
