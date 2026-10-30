"use client";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { label: "Project", href: "#project" },
        { label: "Skills", href: "#skill" },
        { label: "About", href: "#about" },
    ];

    return (
        <div className="sticky top-0 z-20 border-b border-[#243050] bg-[#0B1020]/75 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between p-4 text-white">
                <a href="#top" className="text-xl font-bold">
                    Ahmad<span className="text-[#5B8CFF]">Mehboob</span>
                </a>

                {/* Desktop menu (md and up) */}
                <ul className="hidden items-center gap-7 text-center text-[#9AA6C0] md:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a className="transition-colors hover:text-[#E8ECF5]" href={l.href}>
                                {l.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            className="rounded-xl border border-[#5B8CFF] px-4 py-2 font-semibold text-[#5B8CFF] transition-[transform,box-shadow,background-color] duration-200 hover:bg-[#5B8CFF]/12"
                            href="#contact"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Menu button (phones only) */}
                <button
                    className="rounded-lg border border-[#243050] px-3 py-2 text-[#E8ECF5] md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Phone dropdown */}
            {open && (
                <ul className="flex flex-col gap-1 border-t border-[#243050] px-4 pb-4 pt-2 md:hidden">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                className="block rounded-lg px-3 py-2 text-[#9AA6C0] hover:bg-[#131A2E] hover:text-[#E8ECF5]"
                                href={l.href}
                                onClick={() => setOpen(false)}
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            className="mt-1 block rounded-lg border border-[#5B8CFF] px-3 py-2 text-center font-semibold text-[#5B8CFF]"
                            href="#contact"
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;