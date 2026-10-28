"use client";
import { useState } from "react";

const ACCESS_KEY = "833fe3a1-43b5-4c1d-aa56-82eeaac8909b";

export default function ContactForm() {
    const [status, setStatus] = useState("idle"); // idle | sending | ok | error

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        setStatus("sending");
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    subject: "New message from your portfolio",
                    from_name: "Portfolio",
                    name: form.name.value,
                    email: form.email.value,
                    message: form.message.value,
                    botcheck: form.botcheck.checked, // spam trap
                }),
            });
            const data = await res.json();
            if (data.success) { setStatus("ok"); form.reset(); } else setStatus("error");
        } catch {
            setStatus("error");
        }
    }

    const input =
        "w-full rounded-[10px] border border-[#243050] bg-[#0B1020] px-3.5 py-3 text-[15px] text-[#E8ECF5] placeholder:text-[#5D6A88] transition duration-200 focus:border-[#5B8CFF] focus:shadow-[0_0_0_3px_rgba(91,140,255,.12)] focus:outline-none";

    return (
        <form onSubmit={handleSubmit} className="mx-auto grid max-w-130 gap-4 text-left">
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <input name="name" type="text" placeholder="Your name" required className={input} />
            <input name="email" type="email" placeholder="you@example.com" required className={input} />
            <textarea name="message" placeholder="Your message..." required className={`${input} min-h-32.5 resize-y`} />
            <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-[10px] bg-[#5B8CFF] px-5 py-3 font-semibold text-[#0B1020] shadow-[0_6px_24px_-6px_rgba(91,140,255,.35)] transition hover:-translate-y-0.5 disabled:opacity-60"
            >
                {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "ok" && <p className="text-center text-[#6EE7B7]">Thanks! Your message was sent.</p>}
            {status === "error" && <p className="text-center text-[#FCA5A5]">Something went wrong. Please email me directly.</p>}
        </form>
    );
}