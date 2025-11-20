// src/pages/ContactPage.jsx  — paste & save (overwrite existing)
import React, { useRef, useState } from "react";

export default function ContactPage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const fallbackMailTo = ({ from_name, from_email, message }) => {
    const to = "chaoslives01@gmail.com";
    const subject = encodeURIComponent(`Portfolio Contact from ${from_name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${from_name || ""}\nEmail: ${from_email || ""}\n\n${message || ""}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    const f = new FormData(formRef.current);
    const from_name = f.get("from_name");
    const from_email = f.get("from_email");
    const message = f.get("message");

    // immediate fallback (no network dependency)
    setTimeout(() => {
      setStatus({ ok: true, msg: "Opening your email client..." });
      fallbackMailTo({ from_name, from_email, message });
      setSending(false);
    }, 250);
  };

  return (
    <div className="card" style={{ padding: 18 }}>
      <h2 style={{ marginTop: 0 }}>Contact Me</h2>

      <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input name="from_name" type="text" placeholder="Your Name" required />
        <input name="from_email" type="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Message" rows={6} required />

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button className="btn-primary" type="submit" disabled={sending}>
            {sending ? "Opening…" : "Send Message"}
          </button>

          <button
            type="button"
            className="btn btn-outline"
            onClick={() => fallbackMailTo({ from_name: "", from_email: "", message: "" })}
          >
            Open Email Client
          </button>
        </div>

        {status && (
          <div style={{ marginTop: 8, color: status.ok ? "green" : "crimson" }}>
            {status.msg}
          </div>
        )}

        <small style={{ color: "#64748b" }}>
          Quick fallback: this opens your email client. (Temporary safe page — EmailJS integration can be restored later.)
        </small>
      </form>
    </div>
  );
}
