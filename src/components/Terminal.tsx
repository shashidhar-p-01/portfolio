import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-brand-accent font-semibold font-mono">
            shashidhar-gowda-p v2.1.0-release (System initialized)
          </p>
          <p className="text-brand-secondary font-mono">
            Welcome to the interactive DevOps console. Type <span className="text-brand-accent">help</span> to view available operations, or click the quick-run macro badges below.
          </p>
        </div>
      )
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  // Focus terminal input
  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    let response: React.ReactNode = null;

    if (!trimmed) {
      setHistory(prev => [...prev, { command: "", output: null }]);
      return;
    }

    switch (trimmed) {
      case "help":
        response = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono py-1">
            <div><span className="text-brand-accent">about</span> - Brief engineering summary</div>
            <div><span className="text-brand-accent">skills</span> - Grid of technical skills</div>
            <div><span className="text-brand-accent">experience</span> - Internship timeline</div>
            <div><span className="text-brand-accent">certs</span> - Credentials and issuers</div>
            <div><span className="text-brand-accent">contact</span> - Fast channels of communication</div>
            <div><span className="text-brand-accent">clear</span> - Wipe terminal history</div>
          </div>
        );
        break;

      case "about":
        response = (
          <div className="space-y-2 text-xs font-mono leading-relaxed">
            <p>
              <strong className="text-brand-primary">Name:</strong> P. Shashidhar Gowda
            </p>
            <p>
              <strong className="text-brand-primary">Headline:</strong> Cloud & DevOps Engineer specializing in secure, scalable infrastructure, automated workflows, and system networking.
            </p>
            <p>
              <strong className="text-brand-primary">Current:</strong> Trainee Infrastructure & Security Engineer at ATAS.
            </p>
            <p>
              <strong className="text-brand-primary">Core Philosophy:</strong> Treat infrastructure as code, automate relentlessly, and monitor everything.
            </p>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-2 text-xs font-mono">
            <div>
              <span className="text-brand-accent font-semibold">[Cloud Platforms]</span>
              <p className="text-brand-secondary pl-2">Azure (VMs, Storage, App Service, AD, Monitor), AWS (EC2, S3, IAM)</p>
            </div>
            <div>
              <span className="text-brand-accent font-semibold">[DevOps & Automation]</span>
              <p className="text-brand-secondary pl-2">Azure DevOps, Jenkins, Docker, Kubernetes, Terraform, Ansible, Git</p>
            </div>
            <div>
              <span className="text-brand-accent font-semibold">[Networking & Security]</span>
              <p className="text-brand-secondary pl-2">TCP/IP, Azure VNet, Application Gateway, Traffic Manager, Ingress, Threat Detection</p>
            </div>
            <div>
              <span className="text-brand-accent font-semibold">[Scripting & OS]</span>
              <p className="text-brand-secondary pl-2">Python, Bash, PowerShell, Linux (Ubuntu)</p>
            </div>
          </div>
        );
        break;

      case "experience":
        response = (
          <div className="space-y-2 text-xs font-mono">
            <div>
              <span className="text-brand-accent font-semibold">Feb 2026 - Present: ATAS</span>
              <p className="pl-2 text-brand-secondary">Infrastructure & Security Engineer Trainee</p>
            </div>
            <div>
              <span className="text-brand-accent font-semibold">Feb 2025 - Feb 2026: Intellipaat</span>
              <p className="pl-2 text-brand-secondary">Azure Cloud & DevOps Intern</p>
            </div>
            <div>
              <span className="text-brand-accent font-semibold">Nov 2024 - Feb 2025: IBM & IIT Guwahati</span>
              <p className="pl-2 text-brand-secondary">Cloud Application Developer Intern</p>
            </div>
          </div>
        );
        break;

      case "certs":
        response = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-[#10B981]">✔ Advanced Certification in Cloud Azure & DevOps (IIT Roorkee)</p>
            <p className="text-[#10B981]">✔ IBM Cloud Hosting & Auto-Scaling (IBM & IIT Guwahati)</p>
            <p className="text-brand-secondary">✔ Microsoft Azure Administration AZ-104 (Intellipaat)</p>
            <p className="text-brand-secondary">✔ Microsoft Azure DevOps Certification (Intellipaat)</p>
            <p className="text-brand-secondary">✔ Linux System Administration (Udemy)</p>
            <p className="text-brand-secondary">✔ Cloud Application Development (Rooman Technologies)</p>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="space-y-1 text-xs font-mono">
            <p><span className="text-brand-secondary">Email:</span> <a href="mailto:shashidhar.gowda.p@outlook.com" className="text-brand-accent hover:underline">shashidhar.gowda.p@outlook.com</a></p>
            <p><span className="text-brand-secondary">LinkedIn:</span> <a href="https://www.linkedin.com/in/shashidhar-gowda-p" target="_blank" rel="noreferrer" className="text-brand-accent hover:underline">linkedin.com/in/shashidhar-gowda-p</a></p>
            <p><span className="text-brand-secondary">GitHub:</span> <a href="https://github.com/p-shashidhar-gowda" target="_blank" rel="noreferrer" className="text-brand-accent hover:underline">github.com/p-shashidhar-gowda</a></p>
            <p><span className="text-brand-secondary">Phone:</span> <a href="tel:+919019884212" className="text-brand-accent hover:underline">+91 9019884212</a></p>
            <p><span className="text-brand-secondary">Location:</span> Bengaluru, India</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputValue("");
        return;

      default:
        response = (
          <p className="text-red-400 text-xs font-mono">
            bash: command not found: {cmdText}. Type <span className="text-brand-accent underline">help</span> for assistance.
          </p>
        );
    }

    setHistory(prev => [...prev, { command: cmdText, output: response }]);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputValue);
    }
  };

  // Macro click helper
  const runMacro = (cmd: string) => {
    handleCommand(cmd);
  };

  return (
    <div className="flex flex-col w-full max-w-2xl bg-[#0F172A] border border-brand-border rounded-lg shadow-2xl overflow-hidden font-mono" onClick={focusInput}>
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0B0F19] border-b border-brand-border/60 select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#10B981] opacity-80" />
        </div>
        <span className="text-[11px] text-brand-secondary flex items-center gap-1.5 font-medium tracking-wide">
          <TerminalIcon size={12} className="text-brand-accent" /> shashidhar@devops-shell:~
        </span>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Interactive Macros Bar */}
      <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 bg-[#0B0F19]/40 border-b border-brand-border/40 text-[10px] select-none">
        <span className="text-brand-secondary font-semibold uppercase mr-1">Macros:</span>
        <button 
          onClick={(e) => { e.stopPropagation(); runMacro("about"); }}
          className="px-2 py-0.5 bg-brand-border/50 hover:bg-brand-accent/20 hover:text-brand-accent text-brand-secondary border border-brand-border hover:border-brand-accent/40 transition-all cursor-pointer rounded-sm"
        >
          $ run about.sh
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); runMacro("skills"); }}
          className="px-2 py-0.5 bg-brand-border/50 hover:bg-brand-accent/20 hover:text-brand-accent text-brand-secondary border border-brand-border hover:border-brand-accent/40 transition-all cursor-pointer rounded-sm"
        >
          $ run skills.sh
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); runMacro("experience"); }}
          className="px-2 py-0.5 bg-brand-border/50 hover:bg-brand-accent/20 hover:text-brand-accent text-brand-secondary border border-brand-border hover:border-brand-accent/40 transition-all cursor-pointer rounded-sm"
        >
          $ run experience.sh
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); runMacro("certs"); }}
          className="px-2 py-0.5 bg-brand-border/50 hover:bg-brand-accent/20 hover:text-brand-accent text-brand-secondary border border-brand-border hover:border-brand-accent/40 transition-all cursor-pointer rounded-sm"
        >
          $ run certs.sh
        </button>
      </div>

      {/* Terminal Display */}
      <div className="flex-1 p-4 overflow-y-auto min-h-[220px] max-h-[360px] space-y-3 scrollbar-thin scrollbar-thumb-brand-border">
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-1">
            {entry.command !== "welcome" && (
              <div className="flex items-center text-xs">
                <span className="text-[#10B981]">shashidhar@devops-shell</span>
                <span className="text-brand-primary">:</span>
                <span className="text-brand-accent">~</span>
                <span className="text-brand-primary">$</span>
                <span className="text-brand-primary ml-2">{entry.command}</span>
              </div>
            )}
            <div className="text-brand-primary leading-relaxed text-xs">
              {entry.output}
            </div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Prompt Input Line */}
      <div className="flex items-center px-4 py-3 bg-[#0B0F19]/60 border-t border-brand-border/40 select-none">
        <span className="text-[#10B981] text-xs">shashidhar@devops-shell</span>
        <span className="text-brand-primary text-xs">:</span>
        <span className="text-brand-accent text-xs">~</span>
        <span className="text-brand-primary text-xs">$</span>
        <div className="flex-1 flex items-center ml-2 relative">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-brand-primary text-xs focus:outline-none caret-transparent"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
          {/* Custom blinking caret */}
          <div 
            className="absolute pointer-events-none text-xs text-brand-primary"
            style={{ 
              left: `${inputValue.length * 7.2}px`, 
              top: "0px",
              display: "inline-block" 
            }}
          >
            <span className="terminal-cursor" />
          </div>
        </div>
      </div>
    </div>
  );
}
