import {
  contact,
  summary,
  skillGroups,
  currentlyDeveloping,
  experience,
  education,
  certifications,
  achievements,
  languages,
} from "./data.js";

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  opts?: { className?: string; text?: string; html?: string }
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (opts?.className) node.className = opts.className;
  if (opts?.text !== undefined) node.textContent = opts.text;
  if (opts?.html !== undefined) node.innerHTML = opts.html;
  return node;
}

function renderHeader(root: HTMLElement): void {
  const header = el("header", { className: "resume-header" });

  const name = el("h1", { className: "name", text: contact.name });
  const title = el("p", { className: "title", text: contact.title });

  const meta = el("div", { className: "contact-meta" });
  const metaItems: string[] = [
    contact.location,
    contact.availability,
    contact.phone,
    contact.email,
  ];
  metaItems.forEach((item, i) => {
    if (i > 0) meta.appendChild(el("span", { className: "dot", text: "•" }));
    if (item === contact.email) {
      const a = el("a", { text: item });
      a.href = `mailto:${item}`;
      meta.appendChild(a);
    } else if (item === contact.phone) {
      const a = el("a", { text: item });
      a.href = `tel:${item.replace(/[^\d+]/g, "")}`;
      meta.appendChild(a);
    } else {
      meta.appendChild(el("span", { text: item }));
    }
  });

  header.append(name, title, meta);
  root.appendChild(header);
}

function renderSection(root: HTMLElement, heading: string, className: string): HTMLElement {
  const section = el("section", { className: `section ${className}` });
  section.appendChild(el("h2", { className: "section-heading", text: heading }));
  root.appendChild(section);
  return section;
}

function renderSummary(root: HTMLElement): void {
  const section = renderSection(root, "Professional Summary", "summary");
  section.appendChild(el("p", { className: "summary-text", text: summary }));
}

function renderSkills(root: HTMLElement): void {
  const section = renderSection(root, "Core Skills", "skills");
  const grid = el("div", { className: "skills-grid" });

  skillGroups.forEach((group) => {
    const card = el("div", { className: "skill-card" });
    card.appendChild(el("h3", { className: "skill-category", text: group.category }));
    const tagList = el("ul", { className: "tag-list" });
    group.items.forEach((item) => {
      const li = el("li", { className: "tag", text: item });
      tagList.appendChild(li);
    });
    card.appendChild(tagList);
    grid.appendChild(card);
  });

  const devCard = el("div", { className: "skill-card developing" });
  devCard.appendChild(el("h3", { className: "skill-category", text: "Currently Developing (Active Coursework)" }));
  const devList = el("ul", { className: "tag-list" });
  currentlyDeveloping.forEach((item) => {
    devList.appendChild(el("li", { className: "tag tag-developing", text: item }));
  });
  devCard.appendChild(devList);
  grid.appendChild(devCard);

  section.appendChild(grid);
}

function renderExperience(root: HTMLElement): void {
  const section = renderSection(root, "Professional Experience", "experience");
  const timeline = el("div", { className: "timeline" });

  experience.forEach((job) => {
    const entry = el("article", { className: "timeline-entry" });

    const top = el("div", { className: "entry-top" });
    top.appendChild(el("h3", { className: "entry-role", text: job.role }));
    top.appendChild(el("span", { className: "entry-dates", text: job.dates }));
    entry.appendChild(top);
    entry.appendChild(el("p", { className: "entry-company", text: job.company }));

    if (job.bullets) {
      const list = el("ul", { className: "bullet-list" });
      job.bullets.forEach((b) => list.appendChild(el("li", { text: b })));
      entry.appendChild(list);
    }

    if (job.sections) {
      job.sections.forEach((sub) => {
        entry.appendChild(el("h4", { className: "entry-subheading", text: sub.heading }));
        const list = el("ul", { className: "bullet-list" });
        sub.bullets.forEach((b) => list.appendChild(el("li", { text: b })));
        entry.appendChild(list);
      });
    }

    timeline.appendChild(entry);
  });

  section.appendChild(timeline);
}

function renderEducation(root: HTMLElement): void {
  const section = renderSection(root, "Education", "education");
  const list = el("div", { className: "edu-list" });

  education.forEach((entry) => {
    const item = el("div", { className: "edu-item" });
    const top = el("div", { className: "entry-top" });
    top.appendChild(el("h3", { className: "entry-role", text: entry.degree }));
    top.appendChild(el("span", { className: "entry-dates", text: entry.dates }));
    item.appendChild(top);
    item.appendChild(el("p", { className: "entry-company", text: entry.school }));
    list.appendChild(item);
  });

  section.appendChild(list);
}

function renderCertifications(root: HTMLElement): void {
  const section = renderSection(root, "Certifications & Professional Development", "certifications");
  const list = el("ul", { className: "cert-list" });
  certifications.forEach((cert) => {
    const li = el("li");
    li.appendChild(el("strong", { text: cert.name }));
    li.appendChild(document.createTextNode(` — ${cert.issuer}`));
    list.appendChild(li);
  });
  section.appendChild(list);
}

function renderAchievements(root: HTMLElement): void {
  const section = renderSection(root, "Achievements", "achievements");
  const list = el("ul", { className: "bullet-list" });
  achievements.forEach((a) => list.appendChild(el("li", { text: a })));
  section.appendChild(list);
}

function renderLanguages(root: HTMLElement): void {
  const section = renderSection(root, "Languages", "languages");
  const list = el("div", { className: "language-list" });
  languages.forEach((lang) => {
    const chip = el("span", { className: "language-chip" });
    chip.appendChild(el("strong", { text: lang.name }));
    chip.appendChild(document.createTextNode(` (${lang.level})`));
    list.appendChild(chip);
  });
  section.appendChild(list);
}

function setupPrintButton(): void {
  const btn = document.getElementById("print-btn");
  btn?.addEventListener("click", () => window.print());
}

function setupThemeToggle(): void {
  const btn = document.getElementById("theme-btn");
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  btn?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", current);
    localStorage.setItem("theme", current);
  });
}

function init(): void {
  const app = document.getElementById("app");
  if (!app) return;

  renderHeader(app);

  const main = el("div", { className: "resume-body" });
  renderSummary(main);
  renderSkills(main);
  renderExperience(main);
  renderEducation(main);
  renderCertifications(main);
  renderAchievements(main);
  renderLanguages(main);
  app.appendChild(main);

  setupPrintButton();
  setupThemeToggle();
}

document.addEventListener("DOMContentLoaded", init);
