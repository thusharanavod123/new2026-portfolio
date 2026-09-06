"use client";

import { ArrowDown, ArrowUpRight, Cloud, Code, Sparkle, Storefront, TiktokLogo, InstagramLogo, YoutubeLogo, LinkedinLogo, GithubLogo, PaperPlaneTilt } from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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

// Replace these placeholders with Thushara's real profile URLs.
const links = {
  gumroad: "https://gumroad.com/",
  tiktok: "https://www.tiktok.com/",
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
};

const socialLinks = [
  { label: "TikTok", href: links.tiktok, icon: TiktokLogo },
  { label: "Instagram", href: links.instagram, icon: InstagramLogo },
  { label: "YouTube", href: links.youtube, icon: YoutubeLogo },
  { label: "LinkedIn", href: links.linkedin, icon: LinkedinLogo },
  { label: "GitHub", href: links.github, icon: GithubLogo },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const cloudScale = useTransform(scrollYProgress, [0, 0.72, 1], [0.36, 0.62, 1]);
  const cloudLift = useTransform(scrollYProgress, [0, 1], [70, 0]);
  const cloudOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.18, 0.55, 1]);

  function sendMessage(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProject: ${data.get("project")}\nBudget: ${data.get("budget")}\n\n${data.get("message")}`);
    window.location.href = `mailto:hello@yourname.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <motion.div className="air-cloud" style={{ scale: cloudScale, y: cloudLift, opacity: cloudOpacity }} aria-hidden="true">
        <div className="cloud-puff puff-one" /><div className="cloud-puff puff-two" /><div className="cloud-puff puff-three" />
        <div className="cloud-base" />
        <span>Scroll energy</span>
      </motion.div>
      <nav className="nav">
        <a className="mark name-mark" href="#top" aria-label="Thushara Navod — Home">Thushara Navod<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight weight="bold" /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="hero-intro">
          <motion.div className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>
            <span className="status-dot" /> Thushara Navod · Based in Sri Lanka
          </motion.div>
          <motion.div className="portrait" initial={{ opacity: 0, scale: .92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .35 }}>
            <Image src="/thushara-navod.png" alt="Portrait of Thushara Navod" fill priority sizes="(max-width: 760px) 130px, 190px" />
            <span>Cloud · AI · Brand</span>
          </motion.div>
        </div>
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
          <p>I&apos;m Thushara Navod. I help ambitious teams turn complex technology into products that work beautifully—and brands people remember.</p>
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
                <h3 style={{ whiteSpace: "pre-line" }}>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <button aria-label={`View ${project.title.replace("\n", " ")}`}><ArrowUpRight /></button>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="shop section" id="shop">
        <motion.div {...fade} className="section-label"><span>03</span> Digital products</motion.div>
        <motion.div {...fade} className="shop-card">
          <div className="shop-icon"><Storefront weight="duotone" /></div>
          <div>
            <span className="shop-tag">Tools for builders</span>
            <h2>Make better things.<br />Move a little faster.</h2>
            <p>Templates, systems, and practical resources shaped by my work across cloud, AI, and brand building.</p>
          </div>
          <a href={links.gumroad} target="_blank" rel="noreferrer">Visit my Gumroad <ArrowUpRight weight="bold" /></a>
        </motion.div>
      </section>

      <section className="contact" id="contact">
        <motion.div {...fade} className="contact-head">
          <span className="contact-kicker">Have an idea worth building?</span>
          <h2>Let&apos;s make<br />something <em>matter.</em></h2>
        </motion.div>
        <motion.div {...fade} className="contact-grid">
          <div className="contact-aside">
            <p>Tell me what you&apos;re building, where you&apos;re stuck, or what you want to make possible. I&apos;ll get back to you with a clear next step.</p>
            <div className="availability"><span /> Open to select projects</div>
            <div className="social-stack">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a href={href} target="_blank" rel="noreferrer" key={label}><Icon weight="fill" /><span>{label}</span><ArrowUpRight /></a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={sendMessage}>
            <div className="form-row">
              <label><span>Your name</span><input name="name" type="text" placeholder="Jane Smith" required /></label>
              <label><span>Email address</span><input name="email" type="email" placeholder="jane@company.com" required /></label>
            </div>
            <div className="form-row">
              <label><span>What can I help with?</span><select name="project" defaultValue="" required><option value="" disabled>Select a service</option><option>Cloud engineering</option><option>AI product</option><option>Brand strategy</option><option>Digital product</option><option>Something else</option></select></label>
              <label><span>Estimated budget</span><select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Under $1,000</option><option>$1,000 - $5,000</option><option>$5,000 - $15,000</option><option>$15,000+</option></select></label>
            </div>
            <label><span>Tell me about the project</span><textarea name="message" rows="5" placeholder="A little context, your goals, and ideal timeline..." required /></label>
            <button type="submit">Send enquiry <PaperPlaneTilt weight="fill" /></button>
          </form>
        </motion.div>
        <footer>
          <div className="mark name-mark">Thushara Navod<span>.</span></div>
          <p>Cloud · AI · Brand</p>
          <div className="footer-links"><span>© {new Date().getFullYear()} Thushara Navod</span><a href="#top">Back to top ↑</a></div>
        </footer>
      </section>
    </main>
  );
}
