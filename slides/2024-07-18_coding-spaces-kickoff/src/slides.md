---
# You can also start simply with 'default'
theme: default
# TODO: Make my own theme (see academics theme)
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
addons:
  - slidev-component-spotlight
---

<!-- <img src="/coding-spaces-cover.png" w-full h-full object-cover /> -->

<!-- Hello everyone… -->


<div mt--55 w-125 ml-auto>
  <img translate-x-8 my-4 top-25 op70 w-120 src="/coding-spaces-logo.png" />
  <h3 op70 text-align-right pr-5>
    Why a Good Coding Practice Matters
  </h3>
</div>


<!-- <div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/markusritschel/slides/tree/main/2024-07-18_coding-spaces-kickoff" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:logo-github />
  </a>
</div> -->

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

<div font-blackboard>

## Why are you here?
<br />

## What do you expect?

</div>

<!-- 
(Collect topics on the whiteboard?)
Summarize
-->

---
layout: center
title: Baker et al.
---

<img src="/baker-study.png" h-130 style="clip-path: url(#path-morph);" />

<svg width="0" height="0" viewBox="0 0 1293 1350">
<clipPath id="path-morph" clipPathUnits="objectBoundingBox" transform="scale(0.0007733952049497293 0.0007407407407407407)">
  <path :class="$clicks < 1 ? 'clipped': ''" />
</clipPath>
</svg>

<div v-click transition-opacity-1000 forward:transition-delay-1500 class="[&>p]:(absolute font-size-3) [&>p>span]:(font-size-4 font-bold)">
  <p w-25 top-1 left-130 color-gray><span>7%</span> Don't know</p>
  <p w-35 top-10 left-155 color-blue><span>3%</span> No, there is no crisis</p>
  <p w-25 bottom-20 right-48 color-red-4><span>38%</span> Yes, there is a slight crisis</p>
  <p w-25 bottom-20 left-55 color-red-7><span>52%</span> Yes, a significant crisis</p>
</div>


<style>
  #path-morph path {
    --rectangle: path("M 356.737 454.666 L 363.117 454.666 L 369.497 454.666 L 375.877 454.666 L 382.258 454.666 L 388.639 454.666 L 395.02 454.666 L 401.401 454.666 L 407.781 454.666 L 414.163 454.666 L 420.543 454.666 L 426.924 454.666 L 433.306 454.666 L 439.687 454.666 L 446.068 454.666 L 452.449 454.666 L 458.831 454.666 L 465.211 454.666 L 471.592 454.666 L 477.972 454.666 L 484.352 454.666 L 490.734 454.666 L 497.113 454.666 L 503.495 454.666 L 509.876 454.666 L 516.257 454.666 L 522.637 454.666 L 529.018 454.666 L 535.399 454.666 L 541.78 454.666 L 548.16 454.666 L 554.541 454.666 L 560.92 454.666 L 567.301 454.666 L 573.681 454.666 L 580.062 454.666 L 586.442 454.666 L 592.823 454.666 L 599.204 454.666 L 605.584 454.666 L 611.964 454.666 L 618.345 454.666 L 624.725 454.666 L 631.106 454.666 L 637.486 454.666 L 643.866 454.666 L 650.248 454.666 L 656.629 454.666 L 663.011 454.666 L 669.392 454.666 L 675.773 454.666 L 682.153 454.666 L 688.532 454.666 L 694.914 454.666 L 701.294 454.666 L 707.676 454.666 L 714.056 454.666 L 720.437 454.666 L 726.817 454.666 L 733.199 454.666 L 739.58 454.666 L 745.961 454.666 L 752.342 454.666 L 758.723 454.666 L 765.104 454.666 L 771.485 454.666 L 777.866 454.666 L 784.246 454.666 L 790.626 454.666 L 797.007 454.666 L 803.387 454.666 L 809.768 454.666 L 816.149 454.666 L 822.53 454.666 L 828.91 454.666 L 835.291 454.666 L 841.671 454.666 L 848.051 454.666 L 854.432 454.666 L 860.812 454.666 L 867.193 454.666 L 873.573 454.666 L 879.954 454.666 L 886.335 454.666 L 892.715 454.666 L 899.096 454.666 L 905.477 454.666 L 911.857 454.666 L 918.236 454.666 L 924.617 454.666 L 930.998 454.666 L 937.377 454.666 L 943.758 454.666 L 950.138 454.666 L 956.518 454.666 L 956.518 456.029 L 956.518 457.392 L 956.518 458.755 L 956.518 460.118 L 956.518 461.481 L 956.518 462.845 L 956.518 464.208 L 956.518 465.571 L 956.518 466.935 L 956.518 468.298 L 956.518 469.662 L 956.518 471.025 L 956.518 472.389 L 956.518 473.752 L 956.518 475.115 L 956.518 476.478 L 956.518 477.841 L 956.518 479.203 L 956.518 480.567 L 956.518 481.931 L 956.518 483.294 L 956.518 484.658 L 956.518 486.021 L 956.518 487.384 L 956.518 488.748 L 956.518 490.111 L 956.518 491.474 L 956.518 492.838 L 956.518 494.202 L 956.518 495.565 L 956.518 496.929 L 956.518 498.292 L 956.518 499.655 L 956.518 501.018 L 956.518 502.382 L 956.518 503.745 L 956.518 505.109 L 956.518 506.473 L 956.518 507.836 L 956.518 509.199 L 956.518 510.563 L 956.518 511.926 L 956.518 513.29 L 956.518 514.654 L 956.518 516.018 L 956.518 517.38 L 956.518 518.743 L 956.518 520.106 L 956.518 521.471 L 956.518 522.834 L 956.518 524.198 L 956.518 525.562 L 956.518 526.925 L 956.518 528.288 L 956.518 529.651 L 956.518 531.015 L 956.518 532.377 L 956.518 533.741 L 956.518 535.104 L 956.518 536.468 L 956.518 537.832 L 956.518 539.194 L 956.518 540.557 L 956.518 541.92 L 956.518 543.283 L 956.518 544.646 L 956.518 546.01 L 956.518 547.372 L 956.518 548.735 L 956.518 550.099 L 956.518 551.462 L 956.518 552.825 L 956.518 554.189 L 956.518 555.553 L 956.518 556.916 L 956.518 558.279 L 956.518 559.642 L 956.518 561.005 L 956.518 562.368 L 956.518 563.731 L 956.518 565.094 L 956.518 566.458 L 956.518 567.821 L 956.518 569.185 L 956.518 570.549 L 956.518 571.912 L 956.518 573.276 L 956.518 574.639 L 956.518 576.003 L 956.518 577.365 L 956.518 578.728 L 956.518 580.092 L 956.518 581.454 L 956.518 582.817 L 950.138 582.817 L 943.758 582.817 L 937.377 582.817 L 930.996 582.817 L 924.615 582.817 L 918.235 582.817 L 911.854 582.817 L 905.473 582.817 L 899.092 582.817 L 892.711 582.817 L 886.33 582.817 L 879.949 582.817 L 873.568 582.817 L 867.187 582.817 L 860.806 582.817 L 854.424 582.817 L 848.044 582.817 L 841.663 582.817 L 835.282 582.817 L 828.902 582.817 L 822.521 582.817 L 816.141 582.817 L 809.76 582.817 L 803.379 582.817 L 796.998 582.817 L 790.618 582.817 L 784.236 582.817 L 777.856 582.817 L 771.475 582.817 L 765.094 582.817 L 758.714 582.817 L 752.334 582.817 L 745.953 582.817 L 739.573 582.817 L 733.192 582.817 L 726.812 582.817 L 720.432 582.817 L 714.05 582.817 L 707.671 582.817 L 701.291 582.817 L 694.91 582.817 L 688.53 582.817 L 682.149 582.817 L 675.769 582.817 L 669.388 582.817 L 663.007 582.817 L 656.625 582.817 L 650.244 582.817 L 643.863 582.817 L 637.482 582.817 L 631.102 582.817 L 624.722 582.817 L 618.341 582.817 L 611.96 582.817 L 605.579 582.817 L 599.199 582.817 L 592.818 582.817 L 586.437 582.817 L 580.056 582.817 L 573.675 582.817 L 567.294 582.817 L 560.913 582.817 L 554.532 582.817 L 548.151 582.817 L 541.77 582.817 L 535.389 582.817 L 529.008 582.817 L 522.628 582.817 L 516.247 582.817 L 509.868 582.817 L 503.487 582.817 L 497.105 582.817 L 490.725 582.817 L 484.345 582.817 L 477.964 582.817 L 471.584 582.817 L 465.204 582.817 L 458.823 582.817 L 452.442 582.817 L 446.062 582.817 L 439.681 582.817 L 433.301 582.817 L 426.92 582.817 L 420.539 582.817 L 414.159 582.817 L 407.778 582.817 L 401.398 582.817 L 395.018 582.817 L 388.638 582.817 L 382.257 582.817 L 375.877 582.817 L 369.497 582.817 L 363.116 582.817 L 356.737 582.817 L 356.737 581.453 L 356.737 580.09 L 356.737 578.727 L 356.737 577.364 L 356.737 576.001 L 356.737 574.638 L 356.737 573.275 L 356.737 571.911 L 356.737 570.548 L 356.737 569.184 L 356.737 567.821 L 356.737 566.457 L 356.737 565.094 L 356.737 563.73 L 356.737 562.367 L 356.737 561.004 L 356.737 559.641 L 356.737 558.279 L 356.737 556.916 L 356.737 555.552 L 356.737 554.189 L 356.737 552.825 L 356.737 551.461 L 356.737 550.098 L 356.737 548.734 L 356.737 547.371 L 356.737 546.008 L 356.737 544.644 L 356.737 543.281 L 356.737 541.917 L 356.737 540.554 L 356.737 539.19 L 356.737 537.827 L 356.737 536.464 L 356.737 535.1 L 356.737 533.737 L 356.737 532.373 L 356.737 531.009 L 356.737 529.646 L 356.737 528.283 L 356.737 526.919 L 356.737 525.556 L 356.737 524.192 L 356.737 522.828 L 356.737 521.465 L 356.737 520.102 L 356.737 518.74 L 356.737 517.376 L 356.737 516.012 L 356.737 514.648 L 356.737 513.284 L 356.737 511.92 L 356.737 510.557 L 356.737 509.194 L 356.737 507.831 L 356.737 506.468 L 356.737 505.105 L 356.737 503.741 L 356.737 502.378 L 356.737 501.014 L 356.737 499.65 L 356.737 498.288 L 356.737 496.925 L 356.737 495.562 L 356.737 494.199 L 356.737 492.836 L 356.737 491.473 L 356.737 490.11 L 356.737 488.748 L 356.737 487.384 L 356.737 486.02 L 356.737 484.657 L 356.737 483.293 L 356.737 481.93 L 356.737 480.566 L 356.737 479.203 L 356.737 477.84 L 356.737 476.477 L 356.737 475.115 L 356.737 473.751 L 356.737 472.388 L 356.737 471.025 L 356.737 469.661 L 356.737 468.297 L 356.737 466.933 L 356.737 465.57 L 356.737 464.206 L 356.737 462.843 L 356.737 461.48 L 356.737 460.117 L 356.737 458.754 L 356.737 457.391 L 356.737 456.028 Z");
    --big-circle: path("m 218.53,258.606 6.866,-7.217 6.985,-7.101 7.101,-6.984 7.216,-6.866 7.329,-6.744 7.441,-6.622 7.549,-6.498 7.656,-6.371 7.762,-6.242 7.864,-6.113 7.965,-5.982 8.064,-5.848 8.16,-5.713 8.253,-5.575 8.346,-5.437 8.436,-5.298 8.523,-5.155 8.607,-5.012 8.691,-4.868 8.77,-4.721 8.849,-4.574 8.923,-4.424 8.998,-4.274 9.067,-4.122 9.134,-3.97 9.202,-3.815 9.264,-3.661 9.324,-3.503 9.382,-3.346 9.438,-3.1879 9.489,-3.0282 9.539,-2.8679 9.586,-2.7068 9.63,-2.5448 9.671,-2.3825 9.711,-2.2196 9.745,-2.0556 9.78,-1.8918 9.81,-1.7275 9.837,-1.5627 9.862,-1.3978 9.885,-1.2329 9.903,-1.0677 9.919,-0.9028 9.935,-0.738 9.944,-0.5733 9.952,-0.4089 9.958,-0.245 9.959,-0.0815 9.959,0.0831 9.956,0.2493 9.951,0.4156 9.942,0.5818 9.932,0.7478 9.917,0.9137 9.901,1.0794 9.881,1.2447 9.859,1.4097 9.834,1.5744 9.806,1.7385 9.777,1.9023 9.741,2.0653 9.707,2.2277 9.668,2.3899 9.627,2.5511 9.583,2.7117 9.537,2.8716 9.487,3.0302 9.435,3.1884 9.381,3.345 9.323,3.502 9.265,3.658 9.201,3.811 9.136,3.964 9.069,4.117 9,4.268 8.926,4.417 8.851,4.565 8.773,4.713 8.694,4.859 8.612,5.004 8.525,5.146 8.44,5.289 8.35,5.428 8.257,5.567 8.163,5.705 8.064,5.84 7.97,5.975 7.87,6.107 7.76,6.237 7.66,6.367 7.55,6.494 7.44,6.619 7.33,6.742 7.22,6.863 7.1,6.985 6.99,7.1 6.86,7.217 6.74,7.33 6.62,7.441 6.49,7.552 6.37,7.658 6.24,7.765 6.11,7.867 5.97,7.968 5.84,8.067 5.7,8.163 5.57,8.258 5.43,8.349 5.29,8.439 5.15,8.526 5,8.611 4.86,8.694 4.71,8.775 4.57,8.85 4.41,8.926 4.27,8.999 4.12,9.069 3.96,9.137 3.81,9.202 3.66,9.263 3.5,9.324 3.35,9.381 3.19,9.435 3.03,9.487 2.87,9.536 2.71,9.583 2.55,9.628 2.39,9.667 2.23,9.708 2.06,9.742 1.91,9.775 1.74,9.807 1.57,9.834 1.41,9.858 1.24,9.882 1.08,9.9 0.92,9.919 0.75,9.931 0.58,9.942 0.41,9.951 0.25,9.955 0.09,9.96 -0.09,9.959 -0.25,9.956 -0.41,9.951 -0.58,9.942 -0.75,9.931 -0.92,9.918 -1.08,9.901 -1.24,9.881 -1.41,9.859 -1.57,9.834 -1.74,9.806 -1.91,9.776 -2.06,9.742 -2.23,9.707 -2.39,9.668 -2.55,9.627 -2.71,9.583 -2.87,9.537 -3.03,9.487 -3.19,9.435 -3.35,9.381 -3.5,9.323 -3.66,9.265 -3.81,9.201 -3.96,9.136 -4.12,9.069 -4.27,9 -4.41,8.926 -4.57,8.851 -4.71,8.773 -4.86,8.694 -5,8.612 -5.15,8.525 -5.29,8.44 -5.43,8.35 -5.56,8.253 -5.71,8.17 -5.84,8.06 -5.97,7.97 -6.11,7.87 -6.24,7.76 -6.37,7.66 -6.49,7.55 -6.62,7.45 -6.74,7.33 -6.86,7.21 -6.99,7.1 -7.1,6.99 -7.21,6.86 -7.34,6.74 -7.44,6.62 -7.55,6.49 -7.66,6.37 -7.76,6.24 -7.87,6.11 -7.97,5.97 -8.063,5.84 -8.163,5.71 -8.258,5.56 -8.349,5.43 -8.439,5.29 -8.526,5.15 -8.612,5 -8.694,4.86 -8.774,4.71 -8.851,4.57 -8.925,4.41 -9,4.27 -9.068,4.12 -9.137,3.96 -9.202,3.81 -9.263,3.66 -9.324,3.5 -9.381,3.35 -9.435,3.19 -9.487,3.03 -9.537,2.87 -9.583,2.71 -9.627,2.55 -9.668,2.39 -9.707,2.23 -9.743,2.07 -9.775,1.9 -9.806,1.74 -9.834,1.57 -9.859,1.41 -9.881,1.25 -9.901,1.07 -9.918,0.92 -9.931,0.75 -9.942,0.58 -9.951,0.41 -9.955,0.25 -9.961,0.09 -9.961,-0.09 -9.958,-0.24 -9.953,-0.41 -9.944,-0.57 -9.933,-0.74 -9.92,-0.9 -9.903,-1.07 -9.884,-1.23 -9.862,-1.4 -9.838,-1.57 -9.809,-1.72 -9.78,-1.89 -9.745,-2.06 -9.71,-2.22 -9.672,-2.38 -9.63,-2.55 -9.585,-2.7 -9.539,-2.87 -9.49,-3.03 -9.437,-3.19 -9.381,-3.34 -9.324,-3.51 -9.264,-3.66 -9.202,-3.81 -9.136,-3.97 -9.068,-4.12 -8.998,-4.28 -8.924,-4.42 -8.848,-4.58 -8.77,-4.72 -8.691,-4.87 -8.608,-5.01 -8.523,-5.15 -8.435,-5.3 -8.346,-5.44 -8.253,-5.57 -8.161,-5.72 -8.063,-5.85 -7.965,-5.98 -7.863,-6.11 -7.762,-6.24 -7.656,-6.37 -7.55,-6.5 -7.441,-6.62 -7.33,-6.75 -7.217,-6.86 -7.101,-6.99 -6.984,-7.1 -6.866,-7.22 -6.744,-7.33 -6.622,-7.44 -6.498,-7.55 -6.371,-7.65 -6.242,-7.76 -6.113,-7.87 -5.982,-7.96 -5.848,-8.07 -5.713,-8.16 -5.575,-8.25 -5.437,-8.346 -5.298,-8.435 -5.155,-8.523 -5.012,-8.607 -4.868,-8.691 -4.721,-8.771 -4.573,-8.848 -4.425,-8.924 -4.274,-8.997 -4.122,-9.067 -3.97,-9.135 -3.815,-9.201 -3.6605,-9.265 -3.5033,-9.323 -3.3463,-9.383 -3.1878,-9.437 -3.0281,-9.489 -2.8679,-9.539 -2.7068,-9.586 -2.5449,-9.63 -2.3825,-9.671 -2.2195,-9.711 -2.0557,-9.746 -1.8918,-9.779 -1.7274,-9.81 -1.5627,-9.838 -1.3979,-9.862 -1.2328,-9.884 -1.0678,-9.903 -0.9027,-9.92 -0.738,-9.934 -0.5733,-9.944 -0.4089,-9.952 -0.245,-9.958 -0.0816,-9.96 0.0816,-9.961 0.2451,-9.958 0.409,-9.953 0.5733,-9.944 0.7379,-9.934 0.9029,-9.919 1.0677,-9.903 1.2329,-9.885 1.3978,-9.861 1.5628,-9.838 1.7273,-9.809 1.8918,-9.78 2.0557,-9.745 2.2194,-9.71 2.3825,-9.672 2.545,-9.63 2.7067,-9.585 2.8678,-9.539 3.0284,-9.49 3.1877,-9.437 3.3457,-9.381 3.5036,-9.324 3.6606,-9.264 3.815,-9.202 3.97,-9.136 4.122,-9.068 4.275,-8.998 4.425,-8.924 4.573,-8.848 4.721,-8.771 4.868,-8.69 5.012,-8.608 5.156,-8.523 5.297,-8.435 5.437,-8.346 5.576,-8.254 5.713,-8.16 5.848,-8.063 5.981,-7.965 6.113,-7.863 6.243,-7.762 6.371,-7.656 6.498,-7.55 6.622,-7.441 z");
    transition: d .5s ease-in-out;    
    d: var(--big-circle);
  }
  #path-morph path.clipped {
    d: var(--rectangle);
  }
</style>

<!--
Reproducibility and Code Quality in Earth System Sciences
[click] We have a problem with reproducibility
-->

---
layout: center
hide: true
---

# What is the role of code in natural sciences?

<!--
Get input fromt the audience
-->

---
layout: center
---

<div :class="$clicks === 2 ? 'transition-delay-20 duration-400 op30' : ''">
<div transition-all duration-400 ease-in-out :class="$clicks === 0 ? 'translate-y-30' : ''">

# How do Code & Science relate?
</div>

<div v-click forward:transition-delay-400>

- We typically see a paper/thesis as the way of communicating our science.
- <span highlight>Code is more than just a tool</span> you use for your science.
It is the <span highlight>"true" documentation of *how* you obtained your results</span>!
- Code is more than only instructions for the computer.
It is interpreted by the computer but <span highlight>read and written by humans</span>.
- It can help your readers <span highlight>comprehend, reproduce, and trust your science</span>.
</div>
</div>

<div font-hand v-click text-2xl mt-5>
<ph-arrow-right-duotone /> Do we handle code in an adequate way? 🤔
</div>

---
layout: center
---

## A typical situation

We read a \{paper, student report, thesis\} and are curious about how the results were achieved.

<v-clicks>
<img src="/student-report.png" class="dark:invert my-10 shadow-lg w-80% ml-10" />

Were you able to reproduce the results or comprehend
how the data were processed?

Probably no. The obvious next step would be to look at the code.
</v-clicks>

 <!--
When we read a … and wonder how the results were achieved, we would possibly like to 
comprehend and maybe even reproduce them.
[click] Let's see an example, which might be a bit exaggerated. However, in the one or the other
form, this is what we often encounter.
Were you able to reproduce the results or to comprehend how the data were processed?
[click] Probably no. The obvious next step would be to look at the code.
-->

---
layout: center
class: click-slideup
---

<span font-semibold>From here, what typically hinders you from reproducing the results?</span>

<v-clicks>

There is no code at all.

On request, the authors send you their scripts.

All the code is put in one very loooong Jupyter notebook.

The code is of lousy quality (poorly documented, not self-explanatory, etc.).

etc.

</v-clicks>


<!--
Get input
-->


---
layout: center
---

<h2>How can we improve the situation?</h2>

<span text-orange>Share your code!</span><br/>
The worst code shared is better than having it not shared at all.

<div v-click>
<div my-6 pl-20 font-hand>"But my code is ugly. I don't want to put it online!" 🥺</div> 

Mmm… do you suffer from code shaming? 🤔
<!-- <img abs-tr w-50 top-50 right-10 src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*m3DDxqIYjxGnO5PoVPwOrw@2x.jpeg" /> -->
</div>

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
  <span font-bold underline><mdi-order-checkbox-ascending /> Quick check:</span><br />
  How many of these points typically apply to your code? 😉
</div>


---
layout: center
---

<div transition-all duration-400 ease-in-out :class="$clicks < 2 ? 'translate-y-40' : ''">

## Easier said than done? <span color-gray:70 v-click>Maybe.</span>

</div>

<div mt-8>
<div forward:transition-delay-400 v-click>
But you <i>can</i> get there 🚀
</div>

<div grid="~ cols-content_auto items-center gap-4" py4 px4>

<div flex="~ gap-5 items-center" text-orange:80 v-click>
  <div font-size-8 i-vscode-icons-folder-type-tools /> 
  <span>Know and master your tools (coding is a craft).</span>
</div>
<div flex="~ gap-5 items-center" text-blue:80 v-click>
  <div font-size-8 i-flat-color-icons-workflow /> 
  <span>Have a reasonable workflow.</span>
</div>
<div flex="~ gap-5 items-center" text-lime:80 v-click>
  <div font-size-8 i-icon-park-solid-concept-sharing /> 
  <span>Be aware of and follow conventions and concepts. <br /><span op65>(They exist for a reason 😉)</span></span>
</div>
<div flex="~ gap-5 items-center" text-fuchsia:80 v-click>
  <div font-size-8 i-material-symbols-routine-rounded /> 
  <span>Build habits and be consistent in what you do!</span>
</div>

</div>

</div>

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
title: Code Management
---

<div transition-all duration-400 ease-in-out :class="$clicks === 0 ? 'translate-y-40' : ''">
<h1>Code Management</h1>

<span font-hand text-lg>Unleash the power of organized coding and collaboration magic!</span>
</div>

<div flex="~ col gap-1" pt6>

<div flex="~ gap-3 items-center" text-xl text-red:80 v-click forward:transition-delay-400>
<system-uicons-versions font-size-6 /> 
Version Control & Collaborative Development
</div>
<div flex="~ gap-2 items-center" mb-3 ml-15 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <span>How to keep track of your own and other people's changes.</span>
</div>

<div flex="~ gap-3 items-center" text-xl text-lime:80 v-click>
 <cib-anaconda font-size-6 /> 
 Virtual Environments / Python Environments
</div>
<div flex="~ gap-2 items-center" mb-3 ml-15 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <span>Make your installation environment reproducible.</span>
</div>

<div flex="~ gap-3 items-center" text-xl text-fuchsia:80 v-click>
<ri-infinity-line font-size-6 /> 
Continuous Integration
</div>
<div flex="~ gap-2 items-center" mb-3 ml-15 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <span>Automate the execution of repetitive tasks.</span>
</div>

<div flex="~ gap-3 items-center" text-xl text-yellow:80 v-click>
<cib-pypi font-size-6 /> 
Packaging your Code
</div>
<div flex="~ gap-2 items-center" mb-3 ml-15 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <span>Make it installable, and how to publish it.</span>
</div>

</div>

<!--
<img src="/code-management.png" abs-tr top-5 right-5 w-70 />
-->

---
layout: center
title: Principles and Practices
---

<div transition-all duration-400 ease-in-out :class="$clicks === 0 ? 'translate-y-40' : ''">
<h1>Principles and Practices</h1>

<span font-hand text-lg>Crack the code to clean, elegant, and rock-solid programming!</span>
</div>

<div flex="~ col gap-1" pt6>

  <div flex="~ gap-3 items-center" text-xl text-cyan:80 v-click forward:transition-delay-400>
    <mdi-monitor-clean font-size-6 />
    Programming Principles / Clean Code
  </div>
  <div flex="~ gap-2 items-center" mb-3 ml-15 v-click>
    <div i-ph-arrow-bend-down-right-duotone op50 />
    <span>How to write clear and understandable code.</span>
  </div>
  <div flex="~ gap-3 items-center" text-xl text-rose:80 v-click>
    <material-symbols-architecture font-size-6 />
    Code Architecture & Design
  </div>
  <div flex="~ gap-2 items-center" mb-3 ml-15 v-click>
    <div i-ph-arrow-bend-down-right-duotone op50 />
    <span>How to outline and structure your code.</span>
  </div>
  <div flex="~ gap-3 items-center" text-xl text-orange:80 v-click>
    <fluent-mdl2-ungroup-object font-size-6 />
    Object-orientation
  </div>
  <div flex="~ gap-2 items-center" mb-3 ml-15 v-click>
    <div i-ph-arrow-bend-down-right-duotone op50 />
    <span>Learn how to program with classes.</span>
  </div>

</div>

<!-- <img src="https://imgs.xkcd.com/comics/code_quality.png" dark:invert border-rd-lg b-1 b-hex-555 abs-br bottom-2 right-2 w-80 v-click="1" /> -->

<!--
div[flex="~ col gap-1" pt6]>((div[flex="~ gap-3 items-center" text-xl. text-yellow:80. v-click.]>cib-pypi[font-size-6.]/{Test $}^div[flex="~ gap-2 items-center"m b-3. ml-15.v- click.]>div[i-ph-arrow-bend-down-right-duotone. op50.]/>span{Text}))*3
-->

---
layout: center
title: Quality and Testing
---

<div transition-all duration-400 ease-in-out :class="$clicks === 0 ? 'translate-y-40' : ''">
<h1>Quality and Testing</h1>

<span font-hand text-lg>Turn your code into a fortress of perfection with bulletproof quality and testing!</span>
</div>

<div flex="~ col gap-1" pt6>

<div flex="~ gap-3 items-center" text-xl text-blue:80 v-click forward:transition-delay-400>
<oui-documentation font-size-6 /> 
Code Documentation
</div>
<div flex="~ gap-2 items-center" mb-3 ml-15 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <span>How to make documenting your code a breeze. <br>Turn your documentation into an interactive website.</span>
</div>

<div flex="~ gap-3 items-center" text-xl text-orange:80 v-click>
<fluent-mdl2-test-auto-solid font-size-6 /> 
Test Driven Development
</div>
<div flex="~ gap-2 items-center" mb-3 ml-15 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <span>How to test your code automatically and ensure <br>robust outcomes.</span>
</div>

<div flex="~ gap-3 items-center" text-xl text-lime:80 v-click>
<material-symbols-light-rate-review-outline font-size-6 /> 
Code Reviews & Walkthroughs
</div>
<div flex="~ gap-2 items-center" mb-3 ml-15 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <span>Let's go together through our codes and improve them.</span>
</div>

</div>


<img src="/wtf-per-minute.jpg" dark:invert border-rd-lg b-1 b-hex-555 abs-tr top-5 right-5 w-50 v-click="1" />

---
layout: center
title: Development Tools
---

<div transition-all duration-400 ease-in-out :class="$clicks === 0 ? 'translate-y-40' : ''">
<h1>Development Tools</h1>

<span font-hand text-lg>Turbocharge your coding with the coolest tools and AI sidekicks!</span>
</div>

<div flex="~ col gap-1" pt6>
  <div flex="~ gap-3 items-center" text-xl text-blue:80 v-click forward:transition-delay-400>
    <vscode-icons-file-type-vscode font-size-6 />
    Integrated Development Environments
  </div>
  <div flex="~ gap-2 items-center" mb-3 ml-15 v-click>
    <div i-ph-arrow-bend-down-right-duotone op50 />
      <span>Editors on stereoids</span>
  </div>
  <div flex="~ gap-3 items-center" text-xl text-fuchsia:80 v-click>
    <octicon-copilot-96 font-size-6 />
    AI-assisted Programming
  </div>
  <div flex="~ gap-2 items-center" mb-3 ml-15 v-click>
    <div i-ph-arrow-bend-down-right-duotone op50 />
      <span>Let AI support you in your programming</span>
  </div>
  <div flex="~ gap-3 items-center" text-xl text-green:80 v-click>
    <simple-icons-geopandas font-size-6 />
    Python libraries in Earth System Sciences
  </div>
  <div flex="~ gap-2 items-center" mb-3 ml-15 v-click>
    <div i-ph-arrow-bend-down-right-duotone op50 />
      <span>Get pro with Pandas, Xarray, Cartopy, ... </span>
  </div>
</div>

<img src="/machines-on-planet.png" border-rd-lg b-1 b-hex-555 abs-tr top-5 right-5 w-60 v-click="1" />

---
layout: center
title: Data Management
---

<div transition-all duration-400 ease-in-out :class="$clicks === 0 ? 'translate-y-20' : ''">
<h1>Data Management</h1>

<span font-hand text-lg>Become a data wizard, mastering the magic of FAIR and
reproducible data handling!</span>
</div>

<div v-click forward:transition-delay-400>

- FAIR Data Principles in Practice
- Standards in Earth System Sciences
- Data Versioning

</div>

<img src="/plug-hub-world.png" border-rd-lg b-1 b-hex-555 abs-br bottom-5 right-5 w-60 v-click="1" />

---
layout: center
title: Special Topics
---

<div transition-all duration-400 ease-in-out :class="$clicks === 0 ? 'translate-y-20' : ''">
<h1>Special Topics</h1>

<span font-hand text-lg>Step into the adventure zone of coding with exciting and unexpected challenges!</span>
</div>

<div v-click forward:transition-delay-400>

- Jupyter Notebooks vs. Standalone Applications
- Developing CLI interfaces
- Your wishes ...

</div>

---

# What's next?

- <span text-fuchsia-600 font-bold><fluent-emoji-high-contrast-calendar /> Find a date</span> for the following meetings
- <span text-fuchsia-600 font-bold>Join us on Mattermost <cib-mattermost h-4 align-middle /></span>:<br />
Team <span font-hand>"All-IfM-social"</span> → Channel <span font-hand>"Coding Spaces"</span>
 
## <tabler-user-question /> Questions?

Drop us an email:

<span leading-8 text-center>
<guidance:mail /> yves.sorge@uni-hamburg.de <br />
<guidance:mail /> markus.ritschel@uni-hamburg.de
</span>

<!-- {@markusritschel} -->

<div absolute bottom-10 w-full w-min op60 flex="~ gap-1" items-center justify-center>
  <div i-mdi-github op70 ma text-xl />
  <div><a href="https://github.com/markusritschel" target="_blank" class="border-none! font-300">markusritschel</a></div>
  <div i-mdi-github op70 ma text-xl ml4 />
  <div><a href="https://github.com/ysorge" target="_blank" class="border-none! font-300">ysorge</a></div>
</div>

<img src="/pythonia-laptop.png" abs-br bottom-10 right-10 w-80 transform-scale-x--100 />


---
layout: center
---

# Recommended Reading

<div text-size-3>

- <span text-blue>Croucher, M., Graham, L., James, T., Krystalli, A., & Michonneau, F. (2019):</span> [Reproducible Code (Guides to Better Science). British Ecological Society.](
https://www.britishecologicalsociety.org/wp-content/uploads/2019/06/BES-Guide-Reproducible-Code-2019.pdf)
- <span text-blue>Martin, R. C. (Ed.). (2009):</span> Clean code: a handbook of agile software craftsmanship. Prentice Hall.
- <span text-blue>Martin, R. C. (2018):</span> Clean architecture: a craftsman’s guide to software structure and design. Prentice Hall.
- <span text-blue>Harrison, K. (2018):</span> Data Management (Guides to Better Science). British Ecological Society.

</div>
