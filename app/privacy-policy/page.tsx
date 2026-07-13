import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Online Reputation Builder",
  description: "Read the Privacy Policy for Online Reputation Builder. We are committed to protecting your personal and business data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-brand-blue mb-8">Privacy Policy</h1>
            <div className="prose prose-blue max-w-none text-gray-600">
              <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-semibold text-brand-blue mt-8 mb-4">1. Information We Collect</h2>
              <p className="mb-4">At Online Reputation Builder, we are committed to protecting your privacy. We collect information that you provide directly to us when you use our services, including contact details, business information, and any URLs or digital assets related to your reputation management campaign.</p>

              <h2 className="text-2xl font-semibold text-brand-blue mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to provide, maintain, and improve our services. Specifically, we use your data to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Execute online reputation management campaigns on your behalf</li>
                <li>Communicate with you about your campaign progress</li>
                <li>Respond to your requests and support needs</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-brand-blue mt-8 mb-4">3. Data Security & Confidentiality</h2>
              <p className="mb-4">Given the sensitive nature of online reputation management, we employ strict confidentiality protocols. Your personal information, case details, and the strategies we use are kept highly secure. We do not sell your personal data to third parties under any circumstances.</p>

              <h2 className="text-2xl font-semibold text-brand-blue mt-8 mb-4">4. Third-Party Platforms</h2>
              <p className="mb-4">Our services involve interacting with third-party platforms (such as Google, Facebook, Yelp, etc.). While we advocate on your behalf, we do not control the privacy practices of these external platforms.</p>

              <h2 className="text-2xl font-semibold text-brand-blue mt-8 mb-4">5. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="font-semibold text-brand-blue">contact@onlinereputationbuilder.in</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
