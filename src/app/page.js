import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Section title="Education">
          <ul>
            <li>🎓 IIIT Una, B.Tech CSE (2022–26) — 7.34 CGPA</li>
            <li>M.S.R.C DAS High School — 81%</li>
            <li>DPS Madhubani — 83.2%</li>
          </ul>
        </Section>

        <Section title="Technical Skills">
          <ul className="list-disc ml-6">
            <li>
              <strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript,
              C/C++, Node.js
            </li>
            <li>
              <strong>Frameworks:</strong> React, Next.js, Express, Tailwind,
              Bootstrap
            </li>
            <li>
              <strong>DBMS:</strong> MongoDB, MySQL
            </li>
            <li>
              <strong>Tools:</strong> Git, VS Code, Figma
            </li>
          </ul>
        </Section>

        <Section title="Experience">
          <p>
            <strong>Fluencer Digital (May–July 2025):</strong> Full Stack
            Developer Intern
          </p>
          <ul className="list-disc ml-6">
            <li>
              Built responsive React + Tailwind UIs and APIs with Express.js
            </li>
            <li>
              Integrated MongoDB, implemented JWT, and optimized performance
            </li>
          </ul>
        </Section>

        <Section title="Projects">
          <p>
            <strong>SensAI:</strong> AI-based career coaching using Next.js,
            LLMs
          </p>
          <p>
            <strong>JitHub:</strong> GitHub-like app using MERN stack
          </p>
        </Section>

        <Section title="Achievements">
          <ul className="list-disc ml-6">
            <li>600+ DSA problems solved</li>
            <li>LeetCode: 1588 Rating | CodeChef: 2-Star (1437)</li>
          </ul>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
