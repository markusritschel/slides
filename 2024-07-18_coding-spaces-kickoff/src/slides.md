---
# You can also start simply with 'default'
theme: default
# TODO: Make my own theme (see academics theme)
# random image from a curated Unsplash collection by Anthony
# colorSchema: dark
title: Coding Spaces Kick-off Meeting
info: |
  ## Why a Good Coding Practice Matters
  This is the first meeting of a series aimed to improve the coding culture at our institution.
css: unocss
drawings:
  persist: false
transition: fade-out
mdc: true
background: coding-spaces-cover.png
layout: cover
---

<!-- <img src="/coding-spaces-cover.png" w-full h-full object-cover /> -->

<!-- Hello everyone… -->


<div mt--60 w-115 ml-auto>
  <div bg-hex-ffffff44 rounded-3>
    <h1 font-hand text-align-center font-bold text-gradient>CODING SPACES</h1>
  </div>

  <h3 op70 text-align-right pr-5>
    Why a Good Coding Practice Matters
  </h3>
</div>


<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:logo-github />
  </a>
</div>

<!--
A brief presentation of us.
What we thought about the format (room for exchange, interactive learning, etc.)
What we hope the format will achieve (coding culture etc.)
Round of introductions: Who are you, what do you hope to get out of this personally?
-->

---
layout: center 
class: text-center
---

## Why are you here?
<br />

## What do you expect?

<!-- 
(Collect topics on the whiteboard?)
Summarize
-->

---
layout: center
background: white
clicks: 1
---

<img src="/baker-study.png" h-130 :class="$clicks < 1 ? 'clipit': ''">

<style>
  .dark img {
    filter: invert(100%);
  }
  .clipit {
    clip-path: polygon(28% 34%, 75% 34%, 75% 44%, 28% 44%);
  }
</style>



---
layout: center
---

# What is the role of code in Natural Sciences?

<!-- Get input fromt he audience -->

---
layout: center
---

# How do Code & Science relate?

- We typically see a paper/thesis as the way of communicating our science.
- <span highlight>Code is more than just a tool</span> you use for your science.
It is the <span highlight>"true" documentation of *how* you obtained your results</span>!
- Code is more than only instructions for the computer.
It is interpreted by the computer but <span highlight>read and written by humans</span>.
- It can help your readers <span highlight>comprehend, reproduce, and trust your science</span>.

<carbon-arrow-right/> Do we handle code in an adequate way? 🤔


---
layout: center
---

# A typical situation

You read a \{paper, student report, thesis\} and are curious about how the results were achieved.

<!-- ![](/student-report.png){.dark:invert.my-10.shadow-op-80} -->
<img src="/student-report.png" class="dark:invert my-10 shadow-lg w-80% ml-10" />

Were you able to reproduce the results or to comprehend
how the data were processed?

<v-click>
Probably no. The obvious next step would be to look at the code.
</v-click>

<!-- make paper/student report/thesis changing animatedly -->

---
layout: center
---

From here, what aspects typically hinder you from reproducing the results?

<!-- Get input -->

---
layout: center
---

There is no code at all.

On request, the authors send you their scripts.

All the code is put in one very loooong Jupyter notebook.

The code is of lousy quality (poorly documented, not self-explanatory, etc.).

...


---
layout: center
---

# How can we improve the situation?

Share your code!

The worst code shared is better than having it not shared at all.

<span my-10 pl-20 italic>But my code is ugly. I don't want to put it online!</span> 🥺

Do you suffer from code shaming? 🤔

<v-click>
You can have fun improving it! Make the fruits of your work more understandable, <br />
modular, reproducible, reusable, ...
</v-click>

<!-- 
Share your code… → Get input (How do you share your code? Do you share it?)
-->

---
layout: center
---

# What good code should look like

- Good code should be
  - easy to understand and to use
  - well documented
  - reproducible
 
- Good code should also
  - have a clean layout
  - be robust
  - run reliably
  - produce consistent results

<div absolute rotate-8 top-70 right-40 w-270px v-click>
  <span font-bold underline>✔/❌ Quick check:</span><br />
  How many of these points typically apply to your code? 😉
</div>


---
layout: center
---

# Easier said then done?

Certainly.

But: it's all about

- knowing and mastering your tools (coding is a craft)
- having a reasonable workflow
- being aware of and following conventions and concepts
- and <span underline>building habits</span> and <span underline>being consistent</span> in what you do!


---
layout: center
---

# The purpose of this series

- Not yet another coding class but rather an introduction to concepts, tools, workflows
- A space for learning, trying things out, discussions, socializing
- Jointly create a new and better coding culture
- Open for all skill levels

Concept: A loose series of different topics

Each coding space session with a different focus


---
layout: center
---

# Playgrounds we have in mind

1. Code Management
1. Principles and Practices
1. Quality and Testing
1. Development Tools
1. Data Management
1. Special Topics


---
layout: center
---

# Code Management

Unleash the power of organized coding and collaboration magic!

- Version Control & Collaborative Development
- Virtual Environments / Python Environments
- Continuous Integration
- Packaging your Code
make it installable, publish it

---
layout: center
---

# Principles and Practices

Crack the code to clean, elegant, and rock-solid programming!

- Programming principles / Clean Code
- Code Architecture & Design
- Object-orientation

---
layout: center
---

# Quality and Testing

Turn your code into a fortress of perfection with bulletproof quality and testing!

- Code Documentation
- Test Driven Development
- Code Reviews & Walkthroughs

---
layout: center
---

# Development Tools

Turbocharge your coding with the coolest tools and AI sidekicks!

- Integrated Development Environments
- AI-assisted Programming
- Python libraries in Earth System Sciences

---
layout: center
---

# Data Management

Become a data wizard, mastering the magic of FAIR and
reproducible data handling!

- FAIR Data Principles in Practice
- Standards in Earth System Sciences
- Data Versioning

---
layout: center
---

# Special Topics

Step into the adventure zone of coding with exciting and unexpected challenges!

- Jupyter Notebooks vs. Standalone Applications
- Developing CLI interfaces
- Your wishes ...


---

# What's next?

- <span text-fuchsia-600 font-bold>Find a date</span> for the following meetings
- <span text-fuchsia-600 font-bold>Join us on Mattermost</span>:<br />
Team <span highlight>All-IfM-social</span> → Channel <span highlight>Coding Spaces</span>
 
## Questions?

Drop us an email:

<span leading-8 text-center>
✉️ yves.sorge@uni-hamburg.de <br />
✉️ markus.ritschel@uni-hamburg.de
</span>

<div absolute bottom-10 w-full w-min op60 flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op70 ma text-xl />
  <div><a href="https://markusritschel.de" target="_blank" class="border-none! font-300">markusritschel.de</a></div>
  <div i-ri-github-line op70 ma text-xl ml4/>
  <div><a href="https://github.com/markusritschel" target="_blank" class="border-none! font-300">markusritschel</a></div>
  <div i-ri-github-line op70 ma text-xl ml4/>
  <div><a href="https://github.com/ysorge" target="_blank" class="border-none! font-300">ysorge</a></div>
</div>


---

# Recommended Reading

<div text-size-3>

- <span text-blue>Croucher, M., Graham, L., James, T., Krystalli, A., & Michonneau, F. (2019):</span> [Reproducible Code (Guides to Better Science). British Ecological Society.](
*https://www.britishecologicalsociety.org/publications/guides-to/*)
- <span text-blue>Martin, R. C. (Ed.). (2009):</span> Clean code: a handbook of agile software craftsmanship. Prentice Hall.
- <span text-blue>Martin, R. C. (2018):</span> Clean architecture: a craftsman’s guide to software structure and design. Prentice Hall.
- <span text-blue>Harrison, K. (2018):</span> Data Management (Guides to Better Science). British Ecological Society.

</div>
