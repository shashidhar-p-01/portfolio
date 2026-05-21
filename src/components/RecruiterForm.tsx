import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

export default function RecruiterForm() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    roleType: "Full-Time",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const simulateFormDelivery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    setConsoleLogs([]);

    const logSteps = [
      `$ mail --sender=${formState.email.replace(/\s+/g, "")} --to=shashidhar.gowda.p@outlook.com`,
      "Resolving SMTP server outlook-inbound.mail.protection.outlook.com...",
      "Connecting to SMTP endpoint [2a01:111:f400:7c10::10]:25... Connected.",
      "HELO devops.portfolio.shashidhar.local... 250 OK",
      `MAIL FROM: <${formState.email}>... 250 Sender Accepted`,
      "RCPT TO: <shashidhar.gowda.p@outlook.com>... 250 Recipient Accepted",
      "DATA... 354 Start mail input; end with <CRLF>.<CRLF>",
      `Subject: Portfolio Contact [${formState.roleType}] - ${formState.name} (${formState.company || "Independent"})`,
      "Delivering payload packet (size: 2.14 KB)...",
      "Transfer complete. 250 OK Message accepted for delivery.",
      "$ exit"
    ];

    // Print logs progressively
    for (let i = 0; i < logSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 250));
      setConsoleLogs(prev => [...prev, logSteps[i]]);
    }

    setStatus("success");
  };

  const resetForm = () => {
    setFormState({
      name: "",
      company: "",
      email: "",
      roleType: "Full-Time",
      message: ""
    });
    setStatus("idle");
    setConsoleLogs([]);
  };

  return (
    <div className="w-full bg-[#0F172A] border border-brand-border rounded-lg p-6 shadow-xl relative overflow-hidden">
      {status !== "success" ? (
        <form onSubmit={simulateFormDelivery} className="space-y-4 font-mono text-xs">
          {/* Name & Company Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-brand-secondary font-semibold uppercase text-[10px] tracking-wider select-none">
                Recruiter Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={formState.name}
                onChange={handleInputChange}
                className="w-full bg-brand-bg text-brand-primary border border-brand-border focus:border-brand-accent focus:outline-none p-2.5 rounded-none transition-colors"
                placeholder="e.g. John Doe"
                disabled={status === "sending"}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="company" className="text-brand-secondary font-semibold uppercase text-[10px] tracking-wider select-none">
                Company / Organization
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={formState.company}
                onChange={handleInputChange}
                className="w-full bg-brand-bg text-brand-primary border border-brand-border focus:border-brand-accent focus:outline-none p-2.5 rounded-none transition-colors"
                placeholder="e.g. Tech Corp"
                disabled={status === "sending"}
              />
            </div>
          </div>

          {/* Email & Position Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-brand-secondary font-semibold uppercase text-[10px] tracking-wider select-none">
                Contact Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formState.email}
                onChange={handleInputChange}
                className="w-full bg-brand-bg text-brand-primary border border-brand-border focus:border-brand-accent focus:outline-none p-2.5 rounded-none transition-colors"
                placeholder="e.g. john@company.com"
                disabled={status === "sending"}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="roleType" className="text-brand-secondary font-semibold uppercase text-[10px] tracking-wider select-none">
                Position Class
              </label>
              <select
                id="roleType"
                name="roleType"
                value={formState.roleType}
                onChange={handleInputChange}
                className="w-full bg-brand-bg text-brand-primary border border-brand-border focus:border-brand-accent focus:outline-none p-2.5 rounded-none transition-colors cursor-pointer"
                disabled={status === "sending"}
              >
                <option value="Full-Time">Full-Time Hire</option>
                <option value="Contract">Contract / Freelance</option>
                <option value="Internship">Internship Opportunity</option>
                <option value="General Query">General Inquiry</option>
              </select>
            </div>
          </div>

          {/* Message Area */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-brand-secondary font-semibold uppercase text-[10px] tracking-wider select-none">
              Inquiry Brief (Requirement) *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formState.message}
              onChange={handleInputChange}
              className="w-full bg-brand-bg text-brand-primary border border-brand-border focus:border-brand-accent focus:outline-none p-2.5 rounded-none transition-colors resize-none"
              placeholder="Provide a short description of the opportunity or requirements..."
              disabled={status === "sending"}
            />
          </div>

          {/* Error Message */}
          {status === "error" && (
            <div className="flex items-center space-x-2 text-red-400 select-none py-1">
              <AlertCircle size={14} />
              <span>Validation failed. Please fill all required (*) fields.</span>
            </div>
          )}

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto px-5 py-2.5 rounded-none border border-brand-accent text-brand-accent font-bold uppercase hover:bg-brand-accent/10 focus:outline-none disabled:opacity-50 disabled:hover:bg-transparent cursor-pointer flex items-center justify-center gap-2 tracking-widest transition-colors duration-300"
            >
              {status === "sending" ? (
                <>
                  <RefreshCw size={14} className="animate-spin" /> DISPATCHING DATA...
                </>
              ) : (
                <>
                  <Send size={14} /> TRANSMIT MESSAGE
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        /* Success Terminal State */
        <div className="space-y-4 font-mono select-none">
          <div className="flex items-center space-x-3 text-[#10B981] border-b border-brand-border pb-3">
            <CheckCircle2 size={24} />
            <div>
              <h4 className="text-sm font-bold tracking-wider uppercase">Message Dispatched successfully</h4>
              <p className="text-[10px] text-brand-secondary">Payload accepted on SMTP queue</p>
            </div>
          </div>

          {/* Terminal output simulation */}
          <div className="bg-brand-bg border border-brand-border p-4 rounded text-[10px] text-brand-secondary leading-relaxed max-h-[220px] overflow-y-auto space-y-1">
            {consoleLogs.map((log, idx) => {
              const isCommand = log.startsWith("$");
              const isOk = log.includes("OK") || log.includes("Success") || log.includes("accepted") || log.includes("complete");
              return (
                <p 
                  key={idx} 
                  className={
                    isCommand 
                      ? "text-brand-accent font-semibold" 
                      : isOk 
                        ? "text-[#10B981]" 
                        : "text-brand-secondary"
                  }
                >
                  {log}
                </p>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={resetForm}
              className="px-4 py-2 bg-brand-border hover:bg-brand-border/80 border border-brand-border hover:border-brand-border/60 transition-all font-mono text-[11px] uppercase tracking-wider text-brand-primary"
            >
              SEND ANOTHER MESSAGE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
