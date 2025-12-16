<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, onMounted, onUnmounted } from 'vue'

interface Organizer {
  name: string
  email: string
  affiliation: string
  role: string
  expertise: string
}

interface ImportantDate {
  event: string
  date: string
}

const activeSection = ref('home')
const mobileMenuOpen = ref(false)

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    mobileMenuOpen.value = false
  }
}

const handleScroll = () => {
  const sections = ['home', 'about', 'topics', 'dates', 'cfp', 'organizers']
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const organizers: Organizer[] = [
  {
    name: 'Prof. Dapeng Wu',
    email: 'wudp@cqupt.edu.cn',
    affiliation: 'Chongqing University of Posts and Telecommunications',
    role: 'Director of the Chongqing Key Laboratory of Ubiquitous Sensing and Networking',
    expertise: 'Ubiquitous sensing, social computing, and intelligent edge computing'
  },
  {
    name: 'Prof. Changqing Luo',
    email: 'cluo3@uh.edu',
    affiliation: 'University of Houston',
    role: 'Assistant Professor, Department of Information Science Technology',
    expertise: 'Secure and trustworthy AI, over 50 publications in top-tier venues'
  },
  {
    name: 'Prof. Enzo Mingozzi',
    email: 'enzo.mingozzi@unipi.it',
    affiliation: 'University of Pisa',
    role: 'Full Professor, Department of Information Engineering',
    expertise: 'Networking systems, pervasive computing, mobile edge/fog computing, IoT'
  },
  {
    name: 'Prof. Qian Liu',
    email: 'qianliu@dlut.edu.cn',
    affiliation: 'Dalian University of Technology',
    role: 'Vice Dean of the School of Computer Science and Technology',
    expertise: 'Embodied AI, haptic signal processing, wireless multimedia communications'
  },
  {
    name: 'Prof. Mingkai Chen',
    email: 'mkchen@njupt.edu.cn',
    affiliation: 'Nanjing University of Posts and Telecommunications',
    role: 'Member of CIC and IEEE',
    expertise: 'Wireless communications, signal processing, mobile edge computing'
  },
  {
    name: 'Dr. Boran Yang',
    email: 'yangbr@cqut.edu.cn',
    affiliation: 'Chongqing University of Technology',
    role: 'Researcher',
    expertise: 'Edge ubiquitous intelligence, social intelligence trust management'
  }
]

const topics: string[] = [
  'Social interaction analysis in networked multimedia',
  'Multi-modal fusion for social signal processing',
  'Social relationship mining and community rediscovery in networked multimedia',
  'Network and service optimization based on social intelligence',
  'AI ethics, fairness, and bias in social intelligence',
  'Generative models and their content distribution designs for socially-aware multimedia content creation',
  'Applications in interactive/non-perceivable mental health monitoring',
  'Next-generation social multimedia'
]

const importantDates: ImportantDate[] = [
  { event: 'Paper Submission Deadline', date: 'TBA' },
  { event: 'Notification of Acceptance', date: 'TBA' },
  { event: 'Camera-Ready Deadline', date: 'TBA' },
  { event: 'Workshop Date', date: 'TBA' }
]
</script>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div class="workshop-site">
    <!-- Navigation -->
    <nav class="navbar" :class="{ 'scrolled': activeSection !== 'home' }">
      <div class="nav-container">
        <div class="nav-brand">
          <span class="brand-text">SINMM 2026</span>
        </div>
        
        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="nav-links" :class="{ 'mobile-open': mobileMenuOpen }">
          <a @click="scrollToSection('home')" :class="{ active: activeSection === 'home' }">Home</a>
          <a @click="scrollToSection('about')" :class="{ active: activeSection === 'about' }">About</a>
          <a @click="scrollToSection('topics')" :class="{ active: activeSection === 'topics' }">Topics</a>
          <a @click="scrollToSection('dates')" :class="{ active: activeSection === 'dates' }">Important Dates</a>
          <a @click="scrollToSection('cfp')" :class="{ active: activeSection === 'cfp' }">Call for Papers</a>
          <a @click="scrollToSection('organizers')" :class="{ active: activeSection === 'organizers' }">Organizers</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="hero-content">
        <div class="hero-badge">ICME 2026 Workshop</div>
        <h1 class="hero-title">Social Intelligence for<br/>Networked Multimedia</h1>
        <p class="hero-subtitle">SINMM 2026</p>
        <div class="hero-info">
          <div class="info-item">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Date TBA</span>
          </div>
          <div class="info-item">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Location TBA</span>
          </div>
          <div class="info-item">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span>In conjunction with IEEE ICME 2026</span>
          </div>
        </div>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="scrollToSection('cfp')">Submit Paper</button>
          <button class="btn btn-secondary" @click="scrollToSection('about')">Learn More</button>
        </div>
      </div>
      <div class="hero-bg-decoration"></div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about-section">
      <div class="container">
        <h2 class="section-title">About the Workshop</h2>
        <div class="content-card">
          <p class="lead-text">
            The proliferation of networked multimedia services, from social media and teleconferencing to collaborative VR environments, has generated vast amounts of data that are inherently social. Understanding the social dynamics, interactions, and intelligence embedded within this data is the next frontier in networked multimedia research.
          </p>
          <p>
            This workshop aims to bridge this gap by exploring the intersection of networked multimedia services and intelligent social network analysis. The scope encompasses novel methodologies and applications that can actively perceive, understand, and model social interactions and behaviors for better networked multimedia experience.
          </p>
          <p>
            We focus on the development of AI-driven systems that can interpret group dynamics, leverage social relationships, infer emotional states and intentions in interactive contexts, and understand the cultural nuances present in networked multimedia interactions. This goes beyond traditional single-modality or individual-centric networked multimedia analysis, emphasizing the complex, multi-party, and multi-modal nature of social multimedia interactions.
          </p>
          <div class="highlight-box">
            <h3>Why is this topic important?</h3>
            <p>
              The nature of multimedia consumption and interaction has fundamentally shifted towards social network platforms. The explosive growth of teleconferencing, collaborative interactive metaverse environments, and next-generation social media has created an urgent need to move beyond analyzing multimedia content in isolation to understanding the complex social fabric within it. This paradigm shift demands new AI-driven methodologies that can perceive group dynamics, interpret socio-emotional cues, and model cultural nuances to enable transformative applications.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Topics Section -->
    <section id="topics" class="section topics-section">
      <div class="container">
        <h2 class="section-title">Topics of Interest</h2>
        <p class="section-subtitle">We invite high-quality papers and original research on the following topics</p>
        <div class="topics-grid">
          <!-- @ts-ignore -->
          <div class="topic-card" v-for="(topic, index) in topics" :key="index">
            <div class="topic-number">{{ index + 1 }}</div>
            <div class="topic-content">
              <h3>{{ topic }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Important Dates -->
    <section id="dates" class="section dates-section">
      <div class="container">
        <h2 class="section-title">Important Dates</h2>
        <div class="dates-container">
          <!-- @ts-ignore -->
          <div class="date-card" v-for="(item, index) in importantDates" :key="index">
            <div class="date-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div class="date-content">
              <h3>{{ item.event }}</h3>
              <p class="date-value">{{ item.date }}</p>
            </div>
          </div>
        </div>
        <div class="info-note">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>All deadlines are 23:59 AoE (Anywhere on Earth)</span>
        </div>
      </div>
    </section>

    <!-- Call for Papers -->
    <section id="cfp" class="section cfp-section">
      <div class="container">
        <h2 class="section-title">Call for Papers</h2>
        <div class="cfp-content">
          <div class="cfp-card main-cfp">
            <h3>Submission Guidelines</h3>
            <div class="cfp-details">
              <div class="cfp-item">
                <span class="label">Format:</span>
                <span class="value">Workshop papers should follow the same format guidelines as main conference papers</span>
              </div>
              <div class="cfp-item">
                <span class="label">Page Limit:</span>
                <span class="value">Papers must be no longer than 6 pages, including all text, figures, and references</span>
              </div>
              <div class="cfp-item">
                <span class="label">Review Process:</span>
                <span class="value">All submitted papers must follow a double-blind review process</span>
              </div>
              <div class="cfp-item">
                <span class="label">Submission System:</span>
                <span class="value">To Be Announced (TBA)</span>
              </div>
            </div>
          </div>
          
          <div class="cfp-grid">
            <div class="cfp-card">
              <div class="card-icon">📄</div>
              <h3>Paper Types</h3>
              <p>We accept original research papers, position papers, and system demonstration papers</p>
            </div>
            <div class="cfp-card">
              <div class="card-icon">🎤</div>
              <h3>Presentation Format</h3>
              <p>Accepted papers will be presented as oral presentations or poster sessions</p>
            </div>
            <div class="cfp-card">
              <div class="card-icon">📚</div>
              <h3>Publication</h3>
              <p>Accepted papers will be included in the workshop proceedings and submitted to IEEE Xplore</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Organizers Section -->
    <section id="organizers" class="section organizers-section">
      <div class="container">
        <h2 class="section-title">Organizing Committee</h2>
        <p class="section-subtitle">Leading researchers from top institutions worldwide</p>
        <div class="organizers-grid">
          <!-- @ts-ignore -->
          <div class="organizer-card" v-for="(organizer, index) in organizers" :key="index">
            <div class="organizer-avatar">
              <div class="avatar-placeholder">{{ organizer.name.split(' ')[0]?.[0] || '' }}{{ organizer.name.split(' ').slice(-1)[0]?.[0] || '' }}</div>
            </div>
            <div class="organizer-info">
              <h3>{{ organizer.name }}</h3>
              <p class="affiliation">{{ organizer.affiliation }}</p>
              <p class="role">{{ organizer.role }}</p>
              <p class="expertise"><strong>Research Interests:</strong> {{ organizer.expertise }}</p>
              <a :href="'mailto:' + organizer.email" class="email-link">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                {{ organizer.email }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>SINMM 2026</h3>
            <p>Social Intelligence for Networked Multimedia</p>
            <p class="footer-tagline">Shaping the Future of Socially-Intelligent Multimedia Systems</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a @click="scrollToSection('about')">About</a></li>
              <li><a @click="scrollToSection('cfp')">Call for Papers</a></li>
              <li><a @click="scrollToSection('organizers')">Organizers</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Contact</h4>
            <p>For inquiries, please contact the organizers</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 SINMM Workshop. All rights reserved.</p>
          <p>In conjunction with <a href="https://2026.ieeeicme.org" target="_blank" rel="noopener">IEEE ICME 2026</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Component-specific styles can be added here if needed */
/* Global styles are in src/style.css */
</style>
