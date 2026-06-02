// "use client";
// import { useState } from "react";

// interface ContactFormProps {
//   dark?: boolean;
// }

// const initialForm = {
//   name: "",
//   email: "",
//   phone: "",
//   country: "India (+91)",
//   service: "Business Solution",
//   message: "",
// };

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabasePublishableKey =
//   process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// const supabaseTable = process.env.NEXT_PUBLIC_SUPABASE_CONTACT_TABLE || "contact_submissions";

// export default function ContactForm({ dark = false }: ContactFormProps) {
//   const [form, setForm] = useState(initialForm);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const inputCls = `form-input ${dark ? "bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-yellow-400" : ""}`;
//   const labelCls = `block text-xs font-semibold mb-1 uppercase tracking-wider ${dark ? "text-white/70" : "text-gray-500"}`;

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       if (!supabaseUrl || !supabasePublishableKey) {
//         throw new Error("Supabase is not configured.");
//       }

//       const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseTable}`, {
//         method: "POST",
//         headers: {
//           apikey: supabasePublishableKey,
//           Authorization: `Bearer ${supabasePublishableKey}`,
//           "Content-Type": "application/json",
//           Prefer: "return=minimal",
//         },
//         body: JSON.stringify({
//           name: form.name.trim(),
//           email: form.email.trim(),
//           phone: form.phone.trim(),
//           country: form.country,
//           service: form.service,
//           message: form.message.trim() || null,
//           page_url: window.location.href,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Unable to submit your request right now.");
//       }

//       setForm(initialForm);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <form className="space-y-4" onSubmit={handleSubmit}>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className={labelCls}>Full Name</label>
//           <input type="text" placeholder="Your name" className={inputCls} value={form.name} onChange={e => setForm({...form, name: e.target.value})} required/>
//         </div>
//         <div>
//           <label className={labelCls}>Email Address</label>
//           <input type="email" placeholder="your@email.com" className={inputCls} value={form.email} onChange={e => setForm({...form, email: e.target.value})} required/>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className={labelCls}>Country</label>
//           <select className={inputCls} value={form.country} onChange={e => setForm({...form, country: e.target.value})} required>
//             {["India (+91)","UK (+44)","USA (+1)","Australia (+61)","UAE (+971)","Singapore (+65)","Canada (+1)","Other Countries"].map(c => (
//               <option key={c}>{c}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className={labelCls}>Phone Number</label>
//           <input type="tel" placeholder="Phone number" className={inputCls} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required/>
//         </div>
//       </div>
//       <div>
//         <label className={labelCls}>Service Required</label>
//         <select className={inputCls} value={form.service} onChange={e => setForm({...form, service: e.target.value})} required>
//           <option>Business Solution</option>
//           <option>Individual Solution</option>
//           <option>Others</option>
//         </select>
//       </div>
//       <div>
//         <label className={labelCls}>Message (optional)</label>
//         <textarea rows={3} placeholder="Describe your situation..." className={inputCls} value={form.message} onChange={e => setForm({...form, message: e.target.value})}/>
//       </div>
//       <button type="submit" className="btn-gold w-full text-center" disabled={isSubmitting}>
//         Get Free Consultation →
//       </button>
//       <p className={`text-center text-xs ${dark ? "text-white/50" : "text-gray-400"}`}>
//         🔒 Your information is 100% secure & confidential
//       </p>
//     </form>
//   );
// }

"use client";
import { useState } from "react";

interface ContactFormProps {
  dark?: boolean;
}

const initialForm = {
  name: "",
  email: "",
  phone: "",
  country: "India (+91)",
  service: "Business Solution",
  message: "",
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseTable = process.env.NEXT_PUBLIC_SUPABASE_CONTACT_TABLE || "contact_submissions";

export default function ContactForm({ dark = false }: ContactFormProps) {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputCls = `form-input ${dark ? "bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-yellow-400" : ""}`;
  const labelCls = `block text-xs font-semibold mb-1 uppercase tracking-wider ${dark ? "text-white/70" : "text-gray-500"}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false); 
    setErrorMessage(""); 

    try {
      if (!supabaseUrl || !supabasePublishableKey) {
        throw new Error("Supabase is not configured.");
      }

      const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseTable}`, {
        method: "POST",
        headers: {
          apikey: supabasePublishableKey,
          Authorization: `Bearer ${supabasePublishableKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          country: form.country,
          service: form.service,
          message: form.message.trim() || null,
          page_url: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit your request right now.");
      }

      setForm(initialForm);
      setIsSuccess(true); 

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.message || "An unexpected error occurred."); 
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      {isSuccess && (
        <div className={`p-4 mb-6 rounded-md text-center border ${dark ? "bg-green-500/10 text-green-400 border-green-500/30" : "bg-green-50 text-green-800 border-green-200"}`}>
          <p className="font-semibold text-sm">Thank you!</p>
          <p className="text-xs mt-1">Your message has been successfully sent. We will get back to you shortly.</p>
        </div>
      )}

      {errorMessage && (
        <div className={`p-4 mb-6 rounded-md text-center border ${dark ? "bg-red-500/10 text-red-400 border-red-500/30" : "bg-red-50 text-red-800 border-red-200"}`}>
          <p className="font-semibold text-sm">Oops!</p>
          <p className="text-xs mt-1">{errorMessage}</p>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Full Name</label>
            <input type="text" placeholder="Your name" className={inputCls} value={form.name} onChange={e => setForm({...form, name: e.target.value})} required/>
          </div>
          <div>
            <label className={labelCls}>Email Address</label>
            <input type="email" placeholder="your@email.com" className={inputCls} value={form.email} onChange={e => setForm({...form, email: e.target.value})} required/>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Country</label>
            <select className={inputCls} value={form.country} onChange={e => setForm({...form, country: e.target.value})} required>
              {["India (+91)","UK (+44)","USA (+1)","Australia (+61)","UAE (+971)","Singapore (+65)","Canada (+1)","Other Countries"].map(c => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Phone Number</label>
            <input type="tel" placeholder="Phone number" className={inputCls} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required/>
          </div>
        </div>
        <div>
          <label className={labelCls}>Service Required</label>
          <select className={inputCls} value={form.service} onChange={e => setForm({...form, service: e.target.value})} required>
            <option>Business Solution</option>
            <option>Individual Solution</option>
            <option>Others</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Message (optional)</label>
          <textarea rows={3} placeholder="Describe your situation..." className={inputCls} value={form.message} onChange={e => setForm({...form, message: e.target.value})}/>
        </div>
        <button type="submit" className="btn-gold w-full text-center" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Get Free Consultation →"}
        </button>
        <p className={`text-center text-xs ${dark ? "text-white/50" : "text-gray-400"}`}>
          🔒 Your information is 100% secure & confidential
        </p>
      </form>
    </div>
  );
}