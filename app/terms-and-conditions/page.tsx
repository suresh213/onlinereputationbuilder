import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | Online Reputation Builder",
  description: "Read the Terms and Conditions for Online Reputation Builder. Understand the legal framework of our reputation management services.",
};

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-brand-blue mb-8">Terms & Conditions</h1>
            <div className="prose prose-blue max-w-none text-gray-600">
              <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-semibold text-brand-blue mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">By accessing or using the services provided by Online Reputation Builder ("Company", "we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>

              <h2 className="text-2xl font-semibold text-brand-blue mt-8 mb-4">2. Description of Services</h2>
              <p className="mb-4">Online Reputation Builder provides digital marketing and online reputation management (ORM) services. This includes, but is not limited to, content creation, review management, search engine optimization (SEO), and negative content suppression. Due to the nature of third-party platforms (like Google, Facebook, etc.), we cannot guarantee the permanent removal of any specific content unless explicitly stated in a legally binding contract.</p>

              <h2 className="text-2xl font-semibold text-brand-blue mt-8 mb-4">3. Client Responsibilities</h2>
              <p className="mb-4">As a client, you agree to provide accurate and complete information required for us to perform our services. You also confirm that you have the legal right to request the management or removal of the content in question.</p>

              <h2 className="text-2xl font-semibold text-brand-blue mt-8 mb-4">4. Confidentiality</h2>
              <p className="mb-4">Both parties agree to maintain strict confidentiality regarding the terms of service, pricing, and specific strategies deployed during the campaign. We will never publicly disclose you as a client without your explicit written consent.</p>

              <h2 className="text-2xl font-semibold text-brand-blue mt-8 mb-4">5. Limitation of Liability</h2>
              <p className="mb-4">In no event shall Online Reputation Builder, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services or the actions of third-party platforms.</p>

              <h2 className="text-2xl font-semibold text-brand-blue mt-8 mb-4">6. Contact Us</h2>
              <p className="mb-4">For any questions regarding these Terms, please contact us at:</p>
              <p className="font-semibold text-brand-blue">contact@onlinereputationbuilder.in</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
