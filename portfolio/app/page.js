import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        {/* glow + dots */}
        <div
          className="absolute inset-0 -z-10 mask-[linear-gradient(to_bottom,#000_40%,transparent)]"
          style={{
            background:
              "radial-gradient(600px 300px at 20% 0%, rgba(91,140,255,.30), transparent 70%), radial-gradient(circle, rgba(232,236,245,.08) 1px, transparent 2px) 0 0/26px 26px",
          }}
        />

        {/* your hero content goes inside this box */}
        <div className="mx-auto max-w-245 px-6 py-24 ">
          <div className="absolute bottom-60 right-40 flex h-40 w-40 items-center justify-center rounded-full bg-linear-to-br from-[#5B8CFF] to-[#9DB9FF] text-5xl font-bold text-[#0B1020] shadow-[0_0_0_6px_#131A2E,0_0_0_7px_#243050,0_20px_50px_-10px_rgba(91,140,255,.35)] max-[750px]:static max-[750px]:mb-6 max-[750px]:h-27.5 max-[750px]:w-27.5 max-[750px]:text-4xl max-[900px]:right-10">
            AM
          </div>
          <span className=" mb-7 top inline-flex items-center gap-3 text-center bg-[rgba(91,140,255,.12)]  py-2 px-3.5 rounded-full text-sm font-semibold leading-6 text-[#E8ECF5]">
            <i className="h-2 w-2 rounded-full bg-[#34d399] shadow-[0_0_0_4px_rgba(52,211,153,.2)]" />
            Open to internships
          </span>
          <h1 className="scroll-mt-20 text-6xl font-bold">Hi, I'm <span className="bg-linear-to-r from-[#5B8CFF] to-[#9DB9FF] bg-clip-text text-transparent">Ahmad Mehboob</span></h1>
          <p className="py-2 text-6xl font-bold max-w-3xl">I build clean websites with React.</p>
          <p className="text-[#9AA6C0] font-medium max-w-xl my-3 py-1.5">Junior React developer looking for an internship where I can build real products and keep learning.</p>
          <div className="flex gap-5 items-center mt-7">
            <a href="#project" className="bg-[#5B8CFF] py-3 px-4 text-[#0B1020] rounded-xl font-semibold cursor-pointer shadow-[0_6px_24px_-6px_rgba(91,140,255,.35)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-6px_rgba(91,140,255,.35)]">See my projects</a>
            <a href="#contact" className='text-[#5B8CFF] border border-[#5B8CFF] py-3 px-4 rounded-xl hover:bg-[#5B8CFF]/12 font-semibold cursor-pointer transition-[transform,box-shadow,background-color] duration-200'>Get Contact</a>
          </div>
          <div className="flex flex-wrap gap-20 mt-8">
            <div className="flex flex-col gap-1">
              <b className="block font-bold text-3xl">3+</b>
              <span className="text-[#9AA6C0]">Live projects</span>
            </div>
            <div className="flex flex-col gap-1">
              <b className="block font-bold text-3xl">React</b>
              <span className="text-[#9AA6C0]">Main Skill</span>
            </div>
            <div className="flex flex-col gap-1">
              <b className="block font-bold text-3xl">6 hrs</b>
              <span className="text-[#9AA6C0]">Coding every day</span>
            </div>
          </div>
        </div>
      </section>

      <section id="project" className="scroll-mt-20">
        <div className="mx-auto max-w-245 px-6 py-2 text-[#5B8CFF] font-semibold text-sm">
          01 — WORK
        </div>
        <div className="mx-auto max-w-245 px-6 py-2">
          <h2 className="text-4xl font-bold mb-3">Projects</h2>
          <div className="text-[#9AA6C0] font-medium max-w-xl my-3" id="project">Each project has a live demo and the source code.</div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-6 mt-8">
            <artical className="flex  rounded-2xl bg-[#131A2E] border border-[#243050] overflow-hidden flex-col transition duration-250 hover:-translate-y-1.5 hover:border-[#5B8CFF] hover:shadow-[0_18px_40px_-18px_rgba(91,140,255,.35)]">

              <div className="flex items-center justify-center border-b border-[#243050] bg-[#0B1020] bg-[linear-gradient(135deg,rgba(91,140,255,.12),transparent_70%)] text-[#E8ECF5] font-semibold aspect-2/1 text-2xl">Get Me A Chai</div>
              <div>
                <h3 className="font-bold text-xl pt-3 pl-3 pb-1">Get Me A Chai</h3>
                <p className="text-[#9AA6C0] px-3 py-1">Full-stack Next.js app with social login and Razorpay payments.</p>
                <div className="flex gap-2 px-3 py-1 ">
                  <span className="text-[#5B8CFF] bg-[#5B8CFF]/12 text-sm rounded-2xl px-2 py-1">Next</span>
                  <span className="text-[#5B8CFF] bg-[#5B8CFF]/12 text-sm rounded-2xl px-2 py-1">Tailwind</span>
                  <span className="text-[#5B8CFF] bg-[#5B8CFF]/12 text-sm rounded-2xl px-2 py-1">MongoDB</span>
                </div>
                <div className="flex gap-5 px-3 py-1 pb-3 font-semibold text-sm">
                  <a href="https://get-me-a-chai-tp8e.vercel.app/" className="border-b border-[#243050] font-semibold text-[#E8ECF5] transition-colors duration-300 hover:border-[#5B8CFF] hover:text-[#5B8CFF]">Live demo →</a>
                  <a href="https://github.com/opahmad759-cloud/Get-Me-A-Chai" className="border-b border-[#243050] font-semibold text-[#E8ECF5] transition-colors duration-300 hover:border-[#5B8CFF] hover:text-[#5B8CFF]">Source code →</a>
                </div>
              </div>
            </artical>

            <artical className="flex  rounded-2xl bg-[#131A2E] border border-[#243050] overflow-hidden flex-col transition duration-250 hover:-translate-y-1.5 hover:border-[#5B8CFF] hover:shadow-[0_18px_40px_-18px_rgba(91,140,255,.35)]">

              <div className="flex items-center justify-center border-b border-[#243050] bg-[#0B1020] bg-[linear-gradient(135deg,rgba(91,140,255,.12),transparent_70%)] text-[#E8ECF5] font-semibold aspect-2/1 text-2xl">BITLINKS</div>
              <div>
                <h3 className="font-bold text-xl pt-3 pl-3 pb-1">BITLINKS</h3>
                <p className="text-[#9AA6C0] px-3 py-1">Web app that turns long URLs into short, custom links. Built with Next.js.</p>
                <div className="flex gap-2 px-3 py-1 ">
                  <span className="text-[#5B8CFF] bg-[#5B8CFF]/12 text-sm rounded-2xl px-2 py-1">React</span>
                  <span className="text-[#5B8CFF] bg-[#5B8CFF]/12 text-sm rounded-2xl px-2 py-1">Tailwind</span>
                  <span className="text-[#5B8CFF] bg-[#5B8CFF]/12 text-sm rounded-2xl px-2 py-1">MongoDB</span>
                </div>
                <div className="flex gap-5 px-3 py-1 pb-3 font-semibold text-sm">
                  <a href="https://url-shortner-khaki-eta.vercel.app/" className="border-b border-[#243050] font-semibold text-[#E8ECF5] transition-colors duration-300 hover:border-[#5B8CFF] hover:text-[#5B8CFF]">Live demo →</a>
                  <a href="https://github.com/opahmad759-cloud/url-shortner" className="border-b border-[#243050] font-semibold text-[#E8ECF5] transition-colors duration-300 hover:border-[#5B8CFF] hover:text-[#5B8CFF]">Source code →</a>
                </div>
              </div>
            </artical>

            <artical className="flex  rounded-2xl bg-[#131A2E] border border-[#243050] overflow-hidden flex-col transition duration-250 hover:-translate-y-1.5 hover:border-[#5B8CFF] hover:shadow-[0_18px_40px_-18px_rgba(91,140,255,.35)]">

              <div className="flex items-center justify-center border-b border-[#243050] bg-[#0B1020] bg-[linear-gradient(135deg,rgba(91,140,255,.12),transparent_70%)] text-[#E8ECF5] font-semibold aspect-2/1 text-2xl">PASSOP</div>
              <div>
                <h3 className="font-bold text-xl pt-3 pl-3 pb-1">PASSOP</h3>
                <p className="text-[#9AA6C0] px-3 py-1">Saves, copies, edits, and deletes website logins.</p>
                <div className="flex gap-2 px-3 py-1 ">
                  <span className="text-[#5B8CFF] bg-[#5B8CFF]/12 text-sm rounded-2xl px-2 py-1">React</span>
                  <span className="text-[#5B8CFF] bg-[#5B8CFF]/12 text-sm rounded-2xl px-2 py-1">Tailwind</span>
                  <span className="text-[#5B8CFF] bg-[#5B8CFF]/12 text-sm rounded-2xl px-2 py-1">MongoDB</span>
                </div>
                <div className="flex gap-5 px-3 py-1 pb-3 font-semibold text-sm">
                  <a href="https://pass-op-taupe.vercel.app/" className="border-b border-[#243050] font-semibold text-[#E8ECF5] transition-colors duration-300 hover:border-[#5B8CFF] hover:text-[#5B8CFF]">Live demo →</a>
                  <a href="https://github.com/opahmad759-cloud/PassOP" className="border-b border-[#243050] font-semibold text-[#E8ECF5] transition-colors duration-300 hover:border-[#5B8CFF] hover:text-[#5B8CFF]">Source code →</a>
                </div>
              </div>
            </artical>
          </div>
        </div>
      </section>

      <section className="scroll-mt-20" id="skill">
        <div className="mx-auto max-w-245 px-6 py-2 mt-34 text-[#5B8CFF] font-semibold text-sm">
          02 — Tools & Skills
        </div>
        <div className="mx-auto max-w-245 px-6 py-2">
          <h2 className="text-4xl font-bold mb-3">Skills</h2>
          <div className="text-[#9AA6C0] my-4 mb-6 font-medium max-w-xl">What I used to build</div>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#131A2E] py-2 px-3 rounded-xl border border-[#243050]  transition duration-250 hover:-translate-y-0.5 hover:border-[#5B8CFF]">Next.js</span>
            <span className="bg-[#131A2E] py-2 px-3 rounded-xl border border-[#243050] transition duration-250 hover:-translate-y-0.5 hover:border-[#5B8CFF]">React.js</span>
            <span className="bg-[#131A2E] py-2 px-3 rounded-xl border border-[#243050] transition duration-250 hover:-translate-y-0.5 hover:border-[#5B8CFF]">Express.js</span>
            <span className="bg-[#131A2E] py-2 px-3 rounded-xl border border-[#243050] transition duration-250 hover:-translate-y-0.5 hover:border-[#5B8CFF]">JavaScript</span>
            <span className="bg-[#131A2E] py-2 px-3 rounded-xl border border-[#243050] transition duration-250 hover:-translate-y-0.5 hover:border-[#5B8CFF]">Tailwind CSS</span>
            <span className="bg-[#131A2E] py-2 px-3 rounded-xl border border-[#243050] transition duration-250 hover:-translate-y-0.5 hover:border-[#5B8CFF]">MongoDB</span>
            <span className="bg-[#131A2E] py-2 px-3 rounded-xl border border-[#243050] transition duration-250 hover:-translate-y-0.5 hover:border-[#5B8CFF]">Git & GitHub</span>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20">
        <div className="mx-auto max-w-245 px-6 py-2 mt-34 text-[#5B8CFF] font-semibold text-sm">
          03 — About Me
        </div>
        <div className="mx-auto max-w-245 px-6 py-2">
          <h2 className="text-4xl font-bold mb-3">About Me</h2>
          <div className="text-[#9AA6C0] my-4 mb-6 font-medium max-w-xl" id="about">I’m Ahmad Mehboob, a React developer from Pakistan. I love building websites because every project is a chance to solve a real problem and learn something new. I code every day, and I’m looking for an internship where I can learn from a team and contribute to real projects.</div>
          <div className="text-[#9AA6C0] my-4 mb-6 font-medium max-w-xl" id="about">I can give 6+ hours every day and I'm ready for real tasks and a small test project.</div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="max-w-230 mx-auto my-0 px-auto py-20 ">
          <div className="bg-[#131A2E] border border-[#243050] justify-center text-center rounded-2xl bg-[radial-gradient(400px_160px_at_50%_0%,rgba(91,140,255,.12),transparent)] p-10 ">
            <h2 className="font-bold text-3xl">Let's work together</h2>
            <p className="text-[#9AA6C0] py-7">I'm available for internships and small freelance projects. Send me a message.</p>

            <ContactForm />

            <p className="text-[#9AA6C0] text-sm pt-7">
              Or email me directly: <a className="text-[#5B8CFF]">ahmadmehboob2696@gmail.com</a>
            </p>
            <div className="flex gap-5 text-[#9AA6C0] items-center justify-center pt-4 pb-2 text-md ">
              <a className="hover:text-[#5B8CFF]" href="https://www.linkedin.com/in/ahmad-mehboob-dev/">LinkedIn</a>
              <a className="hover:text-[#5B8CFF]" href="https://github.com/opahmad759-cloud">GitHub</a>
              <a className="hover:text-[#5B8CFF]" href="https://wa.me/923264726064">Whatsapp</a>
            </div>
          </div>
        </div>
      </section>

      {/* other sections (projects, skills, contact) go below */}
    </main>
  );
}
