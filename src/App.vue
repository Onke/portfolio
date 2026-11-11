<script setup>
import { profile, focus, work, education, projects, skills, writing } from './content.js'

const year = new Date().getFullYear()
const nav = [
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <header class="topbar">
    <div class="wrap topbar__inner">
      <a href="#top" class="mark" aria-label="Back to top">os<span class="mark__dot" /></a>
      <nav aria-label="Sections">
        <a v-for="item in nav" :key="item.id" :href="`#${item.id}`">{{ item.label }}</a>
      </nav>
    </div>
  </header>

  <main id="top">
    <!-- Hero -->
    <section class="hero wrap">
      <div class="hero__text">
        <p class="eyebrow">{{ profile.eyebrow }}</p>
        <h1>{{ profile.name }}</h1>
        <p class="hero__headline">{{ profile.headline }}</p>
        <p v-for="(p, i) in profile.intro" :key="i" class="hero__intro">{{ p }}</p>
        <div class="hero__actions">
          <a class="btn btn--solid" :href="`mailto:${profile.email}`">Email me</a>
          <a
            v-for="link in profile.links"
            :key="link.href"
            class="btn"
            :href="link.href"
            target="_blank"
            rel="noopener"
            >{{ link.label }} ↗</a
          >
        </div>
      </div>
      <figure class="hero__photo">
        <img src="/onke.jpg" alt="Portrait of Onke Sipuka" width="480" height="480" />
      </figure>
    </section>

    <!-- Focus strip -->
    <section class="focus wrap" aria-label="What I work on">
      <div v-for="(f, i) in focus" :key="f.title" class="focus__item">
        <span class="focus__num">{{ String(i + 1).padStart(2, '0') }}</span>
        <h3>{{ f.title }}</h3>
        <p>{{ f.body }}</p>
      </div>
    </section>

    <!-- Work -->
    <section id="work" class="section wrap">
      <header class="section__head">
        <span class="section__num">01</span>
        <h2>Work</h2>
      </header>
      <ol class="timeline">
        <li v-for="job in work" :key="job.company" class="job">
          <div class="job__meta">
            <p class="job__period">{{ job.period }}</p>
          </div>
          <div class="job__body">
            <h3>
              {{ job.company }} <span class="job__note">{{ job.note }}</span>
            </h3>
            <p class="job__role">{{ job.role }}</p>
            <ul>
              <li v-for="(pt, i) in job.points" :key="i">{{ pt }}</li>
            </ul>
          </div>
        </li>
      </ol>

      <div class="split">
        <div class="card card--flat">
          <h3 class="card__label">Education</h3>
          <p class="edu__degree">{{ education.degree }}</p>
          <p class="muted">{{ education.school }} · {{ education.year }}</p>
        </div>
        <div class="card card--flat">
          <h3 class="card__label">Toolbox</h3>
          <div v-for="s in skills" :key="s.group" class="skills">
            <p class="skills__group">{{ s.group }}</p>
            <ul class="chips">
              <li v-for="item in s.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="section wrap">
      <header class="section__head">
        <span class="section__num">02</span>
        <h2>Projects</h2>
      </header>
      <p class="section__lede">Things I build on my own time. Most are local-first: no accounts, no servers, no tracking.</p>
      <div class="projects">
        <article
          v-for="(p, i) in projects"
          :key="p.title"
          class="card project"
          :class="{ 'project--feature': i === 0 }"
        >
          <p class="project__kind">{{ p.kind }}</p>
          <h3>
            <a v-if="p.href" :href="p.href" target="_blank" rel="noopener">{{ p.title }} ↗</a>
            <template v-else>{{ p.title }}</template>
          </h3>
          <p class="project__blurb">{{ p.blurb }}</p>
          <ul class="chips chips--small">
            <li v-for="t in p.stack" :key="t">{{ t }}</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Writing -->
    <section id="writing" class="section wrap">
      <header class="section__head">
        <span class="section__num">03</span>
        <h2>Writing</h2>
      </header>
      <a class="writing" :href="writing.href" target="_blank" rel="noopener">
        <div>
          <p class="writing__title">{{ writing.title }}</p>
          <p class="writing__tagline">{{ writing.tagline }}</p>
          <p class="writing__desc">{{ writing.description }}</p>
        </div>
        <span class="writing__cta">Read on Substack ↗</span>
      </a>
    </section>

    <!-- Contact -->
    <section id="contact" class="section wrap contact">
      <header class="section__head">
        <span class="section__num">04</span>
        <h2>Contact</h2>
      </header>
      <p class="contact__line">
        The quickest way to reach me is email:
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      </p>
    </section>
  </main>

  <footer class="footer wrap">
    <p>© {{ year }} {{ profile.name }}</p>
    <a href="#top">Back to top ↑</a>
  </footer>
</template>
