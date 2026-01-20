// about me
const aboutMe = `I’m a CMU ECE master’s student focused on building reliable, high-performance developer and ML systems.

Previously at Shanghai AI Laboratory, I helped ship and scale products and open-source tooling in the OpenMMLab ecosystem—strengthening CI, infrastructure, and developer experience. Recently, my work has centered on performance-critical LLM systems (e.g., speculative decoding and KV-cache optimization), where I enjoy turning research ideas into robust, measurable wins.`;

// headshot
const headshot = "./assets/headshot.jpg"; // falls back to placeholder via onerror

// personal links
const links = [
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/MiraXia",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://linkedin.com/in/mira-xia",
  },
  {
    name: "Email",
    icon: "email",
    url: "mailto:minxia@andrew.cmu.edu",
  },
  {
    name: "CV",
    icon: "cv",
    url: "./assets/cv.pdf",
  }
];

// experiences
const experiences = [
  {
    company: "Shanghai AI Laboratory",
    company_url: "https://www.shlab.org.cn/",
    title: "Software Engineer",
    location: "Shanghai, China",
    dates: "July 2021 - December 2024",
    responsibilities: [
      "Lead the design and development of key products like OpenCompass and OpenXLab within OpenMMLab, emphasizing continuous integration, iterative enhancements, and integrity for the products. ",
      "Developed and released open-source tools like Sea-Lion-UI(An UI component and toolkit library); OpenAOE(A parallel chat platform); Huixiangdou(A group chat assistant based on LLM)",
    ],
  },
  {
    company: "SenseTime",
    company_url: "https://www.sensetime.com/",
    title: "Frontend Engineer Intern",
    location: "Shenzhen, China",
    dates: "March 2021 - June 2021",
    responsibilities: [
      "Assisted in development of the front end of AI model training platform, visualization low-code configuration module of training process. A patent has been filed for the software.",
    ],
  },
  {
    company: "ToT Quant Investment ",
    company_url: "https://www.totquant.com/",
    title: "Website Developer Intern",
    location: "Beijing, China",
    dates: "Nov 2020 – Feb 2021",
    responsibilities: [
      "Independently develop the user interface of a fund transaction record visualization and management platform",
    ],
  }
];

// education
const education = [
  {
    school: "Carnegie Mellon University",
    degree: "Master of Science in Electrical and Computer Engineering",
    location: "Pittsburgh, PA",
    dates: "January 2025 - December 2026",
    gpa: 3.95,
    courses: [
      "Special Topics: Advanced Topics in Machine Learning Systems (LLM Edition)",
      "Parallel Computer Architecture and Programming",
      "Large Language Model Applications",
      "Full-Stack Software Development for Engineers",
      "Cloud Infrastructure",
    ],
  },
  {
    school: "Wuhan University",
    degree: "Bachelor of Engineering in Software Engineering",
    location: "Wuhan, China",
    dates: "September 2017 - June 2021",
    gpa: 3.85,
    courses: [
      "Software Engineering",
      "Database Systems",
      "Data Structures and Algorithms",
      "Operating Systems",
      "Computer Systems",
      "Compiler",
    ],
  },
];

// skills
const skills = {
  programming: [
    "Python",
    "C++",
    "CUDA",
    "JavaScript",
    "TypeScript",
    "Java",
    "SQL",
    "CSS",
  ],
  frameworks: ["PyTorch", "React", "Node.js", "Express.js", "Vue.js"],
  databases: ["MySQL", "MongoDB"],
  tools: ["Git", "Docker", "Kubernetes"],
};

// projects
const projects = [
  {
    name: "OmniAttention",
    summary:
      "A high-performance CUDA sparse attention kernel supporting interleaved and arbitrary block-sparse masks.",
    time: "August 2025 - December 2025",
    technologies: [
      "CUDA",
      "C++",
      "Tensor Cores",
      "FlashAttention",
      "GPU Optimization",
    ],
    link: "",
    highlights: [
      "Extended FlashAttention-2 Q-tiling to support interleaved and block-sparse attention layouts",
      "Implemented MMA-based pipelines with shared-memory reuse, double buffering, and layout swizzling",
      "Achieved FlexAttention-comparable performance and up to 2.97× speedup in optimal configurations",
    ],
  },
  {
    name: "MSpecKV",
    summary:
      "A multilevel speculative KV-cache retrieval system optimizing long-context LLM inference latency.",
    time: "September 2025 - December 2025",
    technologies: [
      "LLM Systems",
      "Speculative Decoding",
      "KV Cache",
      "Quantization",
      "PyTorch",
    ],
    link: "",
    highlights: [
      "Combined TriForce speculative decoding with KV-cache quantization and resident KV reuse",
      "Achieved up to 14.45× end-to-end latency speedup at 32K context length",
      "Built a reproducible benchmarking and ablation framework with multi-seed statistical reporting",
    ],
  },
  {
    name: "Instruction-Tuned Llama MoE",
    summary:
      "A task-specialized Mixture-of-Experts LLM enabling efficient multi-task instruction tuning.",
    time: "October 2025 - December 2025",
    technologies: [
      "PyTorch",
      "QLoRA",
      "Mixture of Experts",
      "LLM Training",
    ],
    link: "",
    highlights: [
      "Converted Llama-3.2-3B-Instruct into an MoE model by upcycling dense FFNs into experts",
      "Designed a three-stage training pipeline with router warm-up and load-balancing loss",
      "Demonstrated stable routing and clear expert specialization across multiple tasks",
    ],
  },
  {
    name: "OpenCompass",
    summary:
      "A scalable evaluation and tooling platform built with custom CLI infrastructure to support real-world AI and ML workflows.",
    time: "June 2023 - December 2024",
    technologies: [
      "JavaScript",
      "Node.js",
      "CLI Development",
      "Configuration Parsing",
      "CI/CD",
    ],
    link: "https://github.com/open-compass", // replace with exact repo if needed
    highlights: [
      "Designed and built SeaLion-CLI with authentication, routing, state management, error handling, and deployment support",
      "Implemented request interception, localization, and multi-environment build pipelines",
      "Decoupled data updates from development by customizing configuration parsing and real-time table rendering",
    ],
  },
  {
    name: "LandMark",
    summary:
      "A real-time 3D visualization system for streaming and editing Gaussian-based video content in the browser.",
    time: "February 2024 - June 2024",
    technologies: ["Three.js", "WebRTC", "JavaScript", "WebGL"],
    link: "",
    highlights: [
      "Rendered 3D Gaussian model video streams using Three.js with dynamic view and coordinate transformations",
      "Implemented real-time video streaming between frontend and backend using WebRTC",
      "Developed custom smooth parallax animations to enhance visual interaction",
    ],
  },
  {
    name: "OpenAOE",
    summary:
      "An open-source parallel chat platform integrating LLM APIs with real-time streaming, rich-text editing, and multi-session workflows.",
    time: "August 2023 - February 2024",
    technologies: [
      "React",
      "JavaScript",
      "Zustand",
      "SSE",
      "LLM APIs",
    ],
    link: "https://github.com/OpenAOE", // replace with exact repo if needed
    highlights: [
      "Designed and implemented complex global state synchronization using Zustand",
      "Built a custom rich-text editor using native Selection and Range APIs for intelligent prompt assistance",
      "Enabled text/image input and streaming output via SSE and LLM APIs with parallel chat windows",
    ],
  },
  {
    name: "InternStudio",
    summary:
      "A web-based development environment with terminal and file management capabilities optimized for iterative workflows.",
    time: "January 2022 - February 2023",
    technologies: [
      "JavaScript",
      "Web Terminal",
      "Frontend Architecture",
      "Dev Tooling",
    ],
    link: "",
    highlights: [
      "Maintained multi-version and multi-environment setups for iterative development and deployment",
      "Integrated and refactored X-Term to support enhanced shortcuts and editing experience",
      "Improved file management UX by refactoring an embedded web browser with custom UI",
    ],
  },
];

// contact
const contact = {
  email: "minxia@andrew.cmu.edu",
  phone: "+1 (412) 268-7321",
  address: "Pittsburgh, PA",
  linkedin: "https://linkedin.com/in/mira-xia",
  github: "https://github.com/MiraXia",
};

// ---------------------------
// Rendering (DOM-driven)
// ---------------------------

const person = {
  name: "Min Xiao(Mira)",
  tagline: "Software engineer & machine learning engineer",
};

function $(selector) {
  return document.querySelector(selector);
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else if (k.startsWith("on") && typeof v === "function")
      node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, String(v));
  }
  for (const child of children) {
    if (child == null) continue;
    node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return node;
}

function sectionTitle(text) {
  return el("h2", { class: "section-title", text });
}

function abbreviateMonths(text) {
  if (!text) return text;
  const monthMap = {
    january: "Jan",
    february: "Feb",
    march: "Mar",
    april: "Apr",
    may: "May",
    june: "Jun",
    july: "Jul",
    august: "Aug",
    september: "Sep",
    october: "Oct",
    november: "Nov",
    december: "Dec",
  };

  return String(text).replace(
    /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/gi,
    (m) => monthMap[m.toLowerCase()] || m,
  );
}

function chipRow(items = []) {
  const row = el("div", { class: "chip-row" });
  items.filter(Boolean).forEach((t) => row.appendChild(el("span", { class: "chip", text: t })));
  return row;
}

function card({ title, subtitle, bullets, chips, href, metaRight }) {
  const titleNode = href
    ? el("a", { href, target: "_blank", rel: "noreferrer", text: title })
    : el("span", { text: title });

  const titleRow = el("div", { class: "card-title-row" }, [
    el("h3", { class: "card-title" }, [titleNode]),
    metaRight ? el("div", { class: "card-meta", text: metaRight }) : null,
  ]);

  const header = el("div", { class: "card-header" }, [
    titleRow,
    subtitle ? el("p", { class: "sub", text: subtitle }) : null,
  ]);

  const body = el("div", {}, []);
  if (Array.isArray(bullets) && bullets.length) {
    const ul = el("ul");
    bullets.filter(Boolean).forEach((b) => ul.appendChild(el("li", { text: b })));
    body.appendChild(ul);
  }

  const c = el("article", { class: "panel card" }, [header, body]);
  if (Array.isArray(chips) && chips.length) c.appendChild(chipRow(chips));
  return c;
}

function renderBanner() {
  const bannerRoot = $("#banner");
  if (!bannerRoot) return;

  const aboutParagraphs = String(aboutMe)
    .split(/\n\s*\n/g)
    .map((p) => p.trim())
    .filter(Boolean);

  const left = el("div", {}, [
    el("h1", { text: person.name }),
    el("p", { class: "tagline", text: person.tagline }),
    ...aboutParagraphs.map((p) => el("p", { class: "about", text: p })),
  ]);

  const linkRow = el("div", { class: "meta-row" });
  links.forEach((l) => {
    linkRow.appendChild(
      el("a", { class: "btn", href: l.url, target: "_blank", rel: "noreferrer" }, [
        el("span", { class: "dot", "aria-hidden": "true" }),
        el("span", { text: l.name }),
      ]),
    );
  });
  left.appendChild(linkRow);

  const img = el("img", {
    src: headshot,
    alt: `${person.name} headshot`,
    loading: "lazy",
  });
  img.addEventListener("error", () => {
    img.src = "./assets/placeholder-headshot.svg";
  });
  const right = el("div", { class: "headshot-wrap" }, [
    el("div", { class: "headshot" }, [img]),
  ]);

  bannerRoot.classList.add("panel");
  bannerRoot.replaceChildren(left, right);
}

function renderExperiences() {
  const root = $("#experiences");
  if (!root) return;

  const grid = el("div", { class: "grid" });
  experiences.forEach((exp) => {
    grid.appendChild(
      card({
        title: `${exp.company}`,
        subtitle: `${exp.title} · ${exp.location} · ${abbreviateMonths(exp.dates)}`,
        bullets: exp.responsibilities,
      }),
    );
  });

  root.replaceChildren(sectionTitle("Experience"), grid);
}

function renderProjects() {
  const root = $("#projects");
  if (!root) return;

  const grid = el("div", { class: "grid" });
  projects.forEach((p) => {
    const bullets = Array.isArray(p.highlights) && p.highlights.length ? p.highlights : null;
    grid.appendChild(
      card({
        title: p.name,
        metaRight: abbreviateMonths(p.time),
        subtitle: p.summary,
        bullets,
        chips: p.technologies,
        href: p.link,
      }),
    );
  });

  root.replaceChildren(sectionTitle("Projects"), grid);
}

function renderEducation() {
  const root = $("#education");
  if (!root) return;

  const grid = el("div", { class: "grid" });
  education.forEach((e) => {
    const bullets = [];
    if (typeof e.gpa === "number") bullets.push(`GPA: ${e.gpa}`);
    if (Array.isArray(e.courses) && e.courses.length) bullets.push(`Courses: ${e.courses.join(", ")}`);

    grid.appendChild(
      card({
        title: e.school,
        subtitle: `${e.degree} · ${e.location} · ${abbreviateMonths(e.dates)}`,
        bullets,
      }),
    );
  });

  root.replaceChildren(sectionTitle("Education"), grid);
}

function renderSkills() {
  const root = $("#skills");
  if (!root) return;

  const wrap = el("div", { class: "two-col" }, [
    el("div", { class: "panel card" }, [
      el("h3", { text: "Programming" }),
      chipRow(skills.programming || []),
    ]),
    el("div", { class: "panel card" }, [
      el("h3", { text: "Frameworks" }),
      chipRow(skills.frameworks || []),
    ]),
    el("div", { class: "panel card" }, [el("h3", { text: "Databases" }), chipRow(skills.databases || [])]),
    el("div", { class: "panel card" }, [el("h3", { text: "Tools" }), chipRow(skills.tools || [])]),
  ]);

  root.replaceChildren(sectionTitle("Skills"), wrap);
}

function renderContactAndFooter() {
  const footer = $("#footer");
  if (footer) {
    footer.replaceChildren(
      el("div", { class: "container" }, [
        el("small", { text: `© ${new Date().getFullYear()} ${person.name}. Built by Mira.` }),
      ]),
    );
  }
}

function renderAll() {
  renderBanner();
  renderExperiences();
  renderProjects();
  renderEducation();
  renderSkills();
  renderContactAndFooter();
}

document.addEventListener("DOMContentLoaded", renderAll);