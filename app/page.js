"use client";

import { ArrowDown, ArrowUpRight, Cloud, Code, Sparkle } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "CloudOps\nControl Plane",
    type: "Cloud Engineering · Platform",
    description: "A unified operations layer that turns complex cloud infrastructure into clear, reliable workflows.",
    tags: ["AWS", "Kubernetes", "Terraform"],
    color: "lime",
  },
  {
    number: "02",
    title: "Contextual\nAI Assistant",
    type: "Applied AI · Product",
    description: "An intelligent workspace that finds the signal in scattered knowledge and gives teams answers they can trust.",
    tags: ["LLMs", "RAG", "Python"],
    color: "violet",
  },
  {
    number: "03",
    title: "Signal /\nBrand System",
    type: "Brand Strategy · Identity",
    description: "A distinctive identity and digital language built to help an ambitious technology company become memorable.",
    tags: ["Strategy", "Identity", "Digital"],
    color: "orange",
  },
];

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="mark" href="#top" aria-label="Home">CA<span>+</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight weight="bold" /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <motion.div className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>
          <span className="status-dot" /> Based in Sri Lanka · Available worldwide
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}>
          I engineer the <em>cloud.</em><br />
          I build with <em>intelligence.</em><br />
          I create <em>brands.</em>
        </motion.h1>
        <div className="hero-bottom">
          <p>Cloud engineer, AI builder, and brand thinker—connecting deep technology with ideas people can feel.</p>
          <a className="scroll-link" href="#about"><ArrowDown /> Scroll to explore</a>
        </div>
      </section>

      <section className="about section" id="about">
        <motion.div {...fade} className="section-label"><span>01</span> Who I am</motion.div>
        <motion.div {...fade} className="about-grid">
          <h2>I live where systems,<br />intelligence, and<br /><span>story</span> meet.</h2>
          <div className="about-copy">
            <p>I help ambitious teams turn complex technology into products that work beautifully—and brands people remember.</p>
            <p>From resilient cloud architecture and AI-powered experiences to the strategy and identity around them, I bring the whole picture together.</p>
            <div className="disciplines">
              <div><Cloud /><span>Cloud<br />Engineering</span></div>
              <div><Sparkle /><span>AI Product<br />Building</span></div>
              <div><Code /><span>Brand<br />Systems</span></div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="work section" id="work">
        <motion.div {...fade} className="section-label light"><span>02</span> Selected work</motion.div>
        <motion.div {...fade} className="work-heading">
          <h2>Things I&apos;ve<br />brought to life.</h2>
          <p>Selected explorations across infrastructure, intelligent products, and brand.</p>
        </motion.div>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article {...fade} className={`project ${project.color}`} key={project.title}>
              <div className="project-number">{project.number}</div>
              <div className="project-art" aria-hidden="true">
                <div className="art-grid" />
                <div className="art-shape">{index === 0 ? "☁" : index === 1 ? "✦" : "S/"}</div>
              </div>
              <div className="project-info">
                <span>{project.type}</span>
                <h3>{project.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <button aria-label={`View ${project.title.replace("\n", " ")}`}><ArrowUpRight /></button>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <motion.div {...fade}>
          <span className="contact-kicker">Have an idea worth building?</span>
          <h2>Let&apos;s make<br />something <em>matter.</em></h2>
          <a className="email" href="mailto:hello@yourname.com">hello@yourname.com <ArrowUpRight /></a>
        </motion.div>
        <footer>
          <div className="mark">CA<span>+</span></div>
          <p>Cloud · AI · Brand</p>
          <div className="socials"><a href="#">LinkedIn</a><a href="#">GitHub</a><a href="#top">Back to top ↑</a></div>
        </footer>
      </section>
    </main>
  );
}
