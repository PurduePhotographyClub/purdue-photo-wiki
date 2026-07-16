---
title: Editing
description: Workflow ideas for cropping, value, color, software, and finishing a photo without overcooking it.
accent: violet
---

<div class="space-y-16 text-neutral-300 sm:space-y-20" id="editing-start">
  <section class="grid items-center gap-8 border-b border-white/10 pb-12 sm:pb-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
    <div class="space-y-5">
      <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">Finish the photo, do not fight it.</p>
      <p class="m-0! max-w-2xl! font-['Playfair_Display',Georgia,serif] text-2xl leading-snug text-neutral-100 sm:text-3xl">
        Sometimes editing is just cleanup. Sometimes it is where the photo comes together.
      </p>
      <p>
        Some photographers barely touch their files after pressing the shutter. Others treat editing as an essential part of the process. There is no single correct place to land on that spectrum.
      </p>
      <p>
        That said, do not be afraid to edit. Most photographers do at least some post-processing, and it can be one of the key differences between a flat capture and a finished image that feels alive.
      </p>
    </div>
    <figure class="overflow-hidden border border-white/10 bg-neutral-900">
      <img class="aspect-[4/3] w-full object-cover" src="/images/pages/editing/hero-lightroom-workspace.webp" width="2256" height="1198" alt="Lightroom-style editing interface with a landscape image, histogram, and light sliders." loading="eager" decoding="async" fetchpriority="high" />
      <figcaption class="mt-0! border-t border-white/10 px-4 py-3">Editing starts with deciding what the image needs, not moving every slider.</figcaption>
    </figure>
  </section>

  <nav class="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4" aria-label="Editing page sections">
    <a class="group flex min-h-44 flex-col gap-2 bg-neutral-950 p-5 text-neutral-300 no-underline! transition-colors hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-violet-300" href="#cropping">
      <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.18em] text-violet-300">01</span>
      <strong class="mt-auto font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100!">Cropping</strong>
      <p>Leveling, rotating, aspect ratios, and removing edge distractions.</p>
    </a>
    <a class="group flex min-h-44 flex-col gap-2 bg-neutral-950 p-5 text-neutral-300 no-underline! transition-colors hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-violet-300" href="#value">
      <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.18em] text-violet-300">02</span>
      <strong class="mt-auto font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100!">Value</strong>
      <p>Exposure, blacks, whites, shadows, highlights, and contrast.</p>
    </a>
    <a class="group flex min-h-44 flex-col gap-2 bg-neutral-950 p-5 text-neutral-300 no-underline! transition-colors hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-violet-300" href="#tone-curve">
      <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.18em] text-violet-300">03</span>
      <strong class="mt-auto font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100!">Tone Curve</strong>
      <p>Using curves and histograms for more precise tonal control.</p>
    </a>
    <a class="group flex min-h-44 flex-col gap-2 bg-neutral-950 p-5 text-neutral-300 no-underline! transition-colors hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-violet-300" href="#color">
      <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.18em] text-violet-300">04</span>
      <strong class="mt-auto font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100!">Color</strong>
      <p>White balance, vibrance, saturation, grading, and HSL controls.</p>
    </a>
  </nav>

  <section class="grid scroll-mt-24 gap-8 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] lg:items-start lg:gap-12" id="cropping">
    <div class="space-y-5">
      <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">Cropping</p>
      <h2 class="mt-0! border-0! pt-0!">Make the Frame Feel Intentional</h2>
      <p>
        Leveling and rotating are straightforward fixes. Maybe you leaned to one side, or accidentally tilted the camera up. Editing software can correct that, at least to a point, and make the image feel more stable.
      </p>
      <p>
        Cropping decides the <span class="font-bold text-amber-200">aspect ratio</span> and what gets to stay inside the image. One of its most useful jobs is removing <span class="font-bold text-violet-300">boundary distractions</span>: branches, bright streaks, partial objects, or tiny high-contrast details that pull attention away from the subject.
      </p>
      <p>
        In the San Francisco house example, the crop focuses attention on the two colored houses and removes distractions near the corners. The photo feels more intentional because fewer elements look accidentally left in the frame.
      </p>
    </div>
    <div class="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" aria-label="Uncropped and cropped photo comparison">
      <figure class="bg-neutral-900">
        <img class="aspect-[4/3] h-full w-full object-cover" src="/images/pages/editing/crop-before.webp" width="1796" height="2400" alt="Uncropped photo of colorful San Francisco houses with extra sky and edge distractions." loading="lazy" decoding="async" />
        <figcaption class="mt-0! border-t border-white/10 px-4 py-3">Uncropped</figcaption>
      </figure>
      <figure class="bg-neutral-900">
        <img class="aspect-[4/3] h-full w-full object-cover" src="/images/pages/editing/crop-after.webp" width="1796" height="2400" alt="Cropped photo of colorful San Francisco houses with tighter focus on the buildings." loading="lazy" decoding="async" />
        <figcaption class="mt-0! border-t border-white/10 px-4 py-3">Cropped</figcaption>
      </figure>
    </div>
  </section>

  <section class="grid scroll-mt-24 overflow-hidden border border-white/10 bg-neutral-900 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-center" id="landscape-crops">
    <figure class="h-full border-b border-white/10 lg:border-r lg:border-b-0">
      <img class="h-full min-h-64 w-full object-cover" src="/images/pages/editing/panorama-crop.webp" width="2400" height="886" alt="Wide cropped view of the San Francisco skyline from across the bay." loading="lazy" decoding="async" />
    </figure>
    <div class="space-y-5 p-6 sm:p-8">
      <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">Aspect ratio</p>
      <h3 class="mt-0!">Negative Space Is Not Automatically Useful</h3>
      <p>
        Wide landscapes are an obvious time to crop. A camera's native aspect ratio might leave a lot of empty sky or water. Negative space is not inherently bad, but if it does not add anything to the image, cropping can make the subject stronger.
      </p>
    </div>
  </section>

  <section class="grid scroll-mt-24 gap-8 border-t border-white/10 pt-10 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1fr)] lg:items-start lg:gap-12" id="value">
    <div class="space-y-5 lg:order-2">
      <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">Value</p>
      <h2 class="mt-0! border-0! pt-0!">Start With Brightness and Contrast</h2>
      <p>
        <span class="font-bold text-emerald-300">Value</span>, the V in HSV, refers to how bright or dark parts of an image are. It is often the most important part of the edit because photographs need light and dark variation before color can do much meaningful work.
      </p>
      <p>
        This is why it is usually smart to start with values. Plenty of beautiful images are black and white, but almost no strong images have a complete absence of light and dark structure.
      </p>
      <div class="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2" aria-label="Value slider meanings">
        <div class="space-y-2 bg-neutral-950 p-5">
          <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Blacks / Whites</span>
          <strong class="block text-neutral-100!">The endpoints</strong>
          <p>The darkest darks and brightest brights in the photo.</p>
        </div>
        <div class="space-y-2 bg-neutral-950 p-5">
          <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Shadows / Highlights</span>
          <strong class="block text-neutral-100!">The broader zones</strong>
          <p>The general dark and bright areas, with more room for subtle adjustment.</p>
        </div>
      </div>
    </div>
    <figure class="overflow-hidden border border-white/10 bg-neutral-900 lg:order-1">
      <img class="h-auto w-full object-cover" src="/images/pages/editing/value-sliders.webp" width="540" height="178" alt="Lightroom sliders for highlights, shadows, whites, and blacks." loading="lazy" decoding="async" />
      <figcaption class="mt-0! border-t border-white/10 px-4 py-3">Value controls in Lightroom's basic panel.</figcaption>
    </figure>
  </section>

  <section class="scroll-mt-24 space-y-5 border-t border-white/10 pt-10" id="tone-curve">
    <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">Tone curve</p>
    <h2 class="mt-0! border-0! pt-0!">The Powerful, Slightly Scary Contrast Tool</h2>
    <p>
      The Tone Curve is more complicated than basic sliders, but it gives much finer control. Think of the base line as <span class="font-bold text-violet-300">y = x</span>: the horizontal axis is the original brightness of each pixel, and the vertical axis is the output brightness after the curve. If the line stays straight, each value maps to itself and nothing changes.
    </p>
    <p>
      The dark shape behind the curve is the <span class="font-bold text-amber-200">histogram</span>, which shows how many pixels sit at each brightness level. Raising the right side brightens highlights. Lowering the left side darkens shadows. A subtle S-curve does both, adding contrast to an image that feels flat.
    </p>
    <div class="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2" aria-label="Tone curve before and after examples">
      <figure class="bg-neutral-900">
        <img class="aspect-[4/3] w-full object-cover" src="/images/pages/editing/tone-curve-linear.webp" width="554" height="730" alt="Linear tone curve panel with a straight diagonal curve." loading="lazy" decoding="async" />
        <figcaption class="mt-0! border-t border-white/10 px-4 py-3">Linear curve: no tonal change.</figcaption>
      </figure>
      <figure class="bg-neutral-900">
        <img class="aspect-[4/3] w-full object-cover" src="/images/pages/editing/tone-before.webp" width="1584" height="1186" alt="Flat flower photo before tone curve contrast." loading="lazy" decoding="async" />
        <figcaption class="mt-0! border-t border-white/10 px-4 py-3">Before</figcaption>
      </figure>
      <figure class="bg-neutral-900">
        <img class="aspect-[4/3] w-full object-cover" src="/images/pages/editing/tone-curve-s.webp" width="444" height="446" alt="Tone curve panel showing a subtle S curve." loading="lazy" decoding="async" />
        <figcaption class="mt-0! border-t border-white/10 px-4 py-3">S-curve: shadows down, highlights up.</figcaption>
      </figure>
      <figure class="bg-neutral-900">
        <img class="aspect-[4/3] w-full object-cover" src="/images/pages/editing/tone-after.webp" width="1580" height="1184" alt="Flower photo after tone curve contrast, with deeper shadows and brighter highlights." loading="lazy" decoding="async" />
        <figcaption class="mt-0! border-t border-white/10 px-4 py-3">After</figcaption>
      </figure>
    </div>
    <div class="space-y-3 border-l-2 border-violet-300/60 bg-violet-300/[0.04] p-5 sm:p-6">
      <strong class="block font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100!">Editing is not cheating</strong>
      <p>
        Even Ansel Adams, who shot on film, did a great amount of image shaping through dodging and burning. Digital tools are different, but the idea of guiding value and attention is old.
      </p>
      <p>
        You can also adjust RGB channels with the Tone Curve for color grading. That is powerful, but easy to overdo. Be subtle with curve points until you know exactly what they are doing.
      </p>
    </div>
  </section>

  <section class="grid scroll-mt-24 gap-8 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)] lg:items-start lg:gap-12" id="color">
    <div class="space-y-5">
      <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">Color</p>
      <h2 class="mt-0! border-0! pt-0!">Color Should Support the Photo</h2>
      <p>
        The most basic color controls are white balance, tint, vibrance, and saturation. Temperature pushes the image warmer or cooler. Tint shifts between green and magenta.
      </p>
      <p>
        <span class="font-bold text-amber-200">Saturation</span> affects all colors globally. <span class="font-bold text-emerald-300">Vibrance</span> is a smarter version that tends to target less-saturated colors first, so it can be gentler than simply increasing saturation everywhere.
      </p>
      <div class="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-1">
        <figure class="bg-neutral-900">
          <img class="h-auto w-full" src="/images/pages/editing/white-balance-sliders.webp" width="546" height="162" alt="Lightroom white balance sliders for temperature and tint." loading="lazy" decoding="async" />
          <figcaption class="mt-0! border-t border-white/10 px-4 py-3">White balance</figcaption>
        </figure>
        <figure class="bg-neutral-900">
          <img class="h-auto w-full" src="/images/pages/editing/vibrance-saturation-sliders.webp" width="502" height="88" alt="Lightroom vibrance and saturation sliders." loading="lazy" decoding="async" />
          <figcaption class="mt-0! border-t border-white/10 px-4 py-3">Vibrance and saturation</figcaption>
        </figure>
      </div>
    </div>
    <div class="overflow-hidden border border-white/10 bg-neutral-900">
      <figure>
        <img class="aspect-[4/3] w-full object-cover" src="/images/pages/editing/color-example-building.webp" width="1920" height="2400" alt="Edited street photo of an ornate building with warm highlights, soft blue sky, and people in the foreground." loading="lazy" decoding="async" />
        <figcaption class="mt-0! border-y border-white/10 px-4 py-3">Color choices should support the feeling of the image.</figcaption>
      </figure>
      <div class="space-y-4 p-6 sm:p-8">
        <h3 class="mt-0!">Color Tools Worth Learning</h3>
        <ul class="my-0! space-y-3 pl-5">
          <li><strong>Color grading:</strong> shifts highlights, midtones, and shadows separately. It often defines the overall look of the photo.</li>
          <li><strong>Color mixer:</strong> adjusts individual colors by hue, saturation, and luminance, which can make certain colors pop or calm down.</li>
          <li><strong>Luminance:</strong> means brightness or value for a specific color range.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="grid scroll-mt-24 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2" id="color-tools">
    <figure class="bg-neutral-900">
      <img class="h-auto w-full" src="/images/pages/editing/color-grading-panel.webp" width="552" height="934" alt="Lightroom color grading wheels for midtones, shadows, and highlights." loading="lazy" decoding="async" />
      <figcaption class="mt-0! border-t border-white/10 px-4 py-3">Color grading changes shadows, midtones, and highlights separately.</figcaption>
    </figure>
    <figure class="bg-neutral-900">
      <img class="h-auto w-full" src="/images/pages/editing/color-mixer-panel.webp" width="550" height="606" alt="Lightroom color mixer panel with hue, saturation, and luminance controls for individual colors." loading="lazy" decoding="async" />
      <figcaption class="mt-0! border-t border-white/10 px-4 py-3">The color mixer gives individual colors their own controls.</figcaption>
    </figure>
  </section>

  <section class="scroll-mt-24 space-y-5 border-t border-white/10 pt-10" id="software">
    <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">Software</p>
    <h2 class="mt-0! border-0! pt-0!">Pick a Tool You Will Actually Use</h2>
    <p>
      Adobe Lightroom is a common professional default, but plenty of photographers dislike the subscription model or prefer another workflow. These are useful options to know about; research paid software before buying, because pricing and bundles change.
    </p>
    <div class="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4" aria-label="Editing software options">
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Common default</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://www.adobe.com/products/photoshop-lightroom/plans.html" target="_blank" rel="noopener noreferrer">Adobe Lightroom</a></strong>
        <p>Strong all-around photo workflow, especially for organizing, raw editing, and batch work. Desktop plans are paid.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Mobile start</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://www.adobe.com/products/photoshop-lightroom/mobile.html" target="_blank" rel="noopener noreferrer">Lightroom Mobile</a></strong>
        <p>Free mobile editor with limited capability compared with the full desktop ecosystem, but surprisingly useful for starting on a phone.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Free / open source</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://www.darktable.org/" target="_blank" rel="noopener noreferrer">darktable</a></strong>
        <p>Very powerful and free, but harder to learn. It can cover a lot of Lightroom-style workflow, though some AI masking and denoise tools differ.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Free / open source</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://rawtherapee.com/" target="_blank" rel="noopener noreferrer">RawTherapee</a></strong>
        <p>Free raw processing software in a similar general category to darktable.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Professional paid</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://www.captureone.com/en/pricing/capture-one-pro" target="_blank" rel="noopener noreferrer">Capture One</a></strong>
        <p>Professional Lightroom alternative with a different workflow and paid pricing.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Professional paid</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://www.dxo.com/dxo-photolab/" target="_blank" rel="noopener noreferrer">DxO PhotoLab</a></strong>
        <p>Professional alternative known especially for strong denoising tools.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Free / pixel editor</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://www.canva.com/newsroom/news/all-new-affinity/" target="_blank" rel="noopener noreferrer">Affinity</a></strong>
        <p>Now a free Canva-owned all-in-one design app. More Photoshop-like than Lightroom-like, but still useful for photo work.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Free / camera brand</span>
        <strong class="flex min-h-11 items-center text-neutral-100!">Manufacturer software</strong>
        <p>Most camera brands offer free software that works with their files, but these apps are often clunky.</p>
      </div>
    </div>
  </section>

  <section class="scroll-mt-24 space-y-5 border-t border-white/10 pt-10" id="guidelines">
    <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">General guidelines</p>
    <h2 class="mt-0! border-0! pt-0!">Keep Your Taste Awake</h2>
    <p>
      Editing is subjective. The point here is not to force a recipe, but to give you concepts to consider. If a different approach feels right for your image, follow that.
    </p>
    <div class="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-3" aria-label="Editing advice">
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.16em] text-violet-300">01</span>
        <strong class="block text-neutral-100!">Do not overcook it</strong>
        <p>Edit little, edit often. When you stare at one image for too long, your eye adapts and you may start making heavier edits than the photo needs.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.16em] text-violet-300">02</span>
        <strong class="block text-neutral-100!">Play with the sliders</strong>
        <p>You will not always visualize what a slider does before moving it. Experimenting builds a better sense of where you want to take an image.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.16em] text-violet-300">03</span>
        <strong class="block text-neutral-100!">Look for inspiration</strong>
        <p>Like every art form, photography improves when you look at other people's work. Find photographers whose edits you admire and study what they are doing.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.16em] text-violet-300">04</span>
        <strong class="block text-neutral-100!">Do not just crank saturation</strong>
        <p>Trying to make every image more vibrant by raising global saturation often creates an artificial, overcooked look. Sometimes the image needs less color or brightness in the right places.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.16em] text-violet-300">05</span>
        <strong class="block text-neutral-100!">Check black and white points</strong>
        <p>The white point is how bright the brightest whites are. The black point is how dark the darkest blacks are. A quick white frame around the photo can help you see if the whole image is too dark.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.16em] text-violet-300">06</span>
        <strong class="block text-neutral-100!">Let shadows be shadows</strong>
        <p>Pulling every shadow up and every highlight down can create a flat HDR look. Cameras can let darkness stay natural, while phone processing often tries to even everything out.</p>
      </div>
    </div>
  </section>

  <section class="scroll-mt-24 border border-violet-300/30 bg-violet-300/[0.05] p-6 sm:p-8" id="next">
    <p class="m-0! max-w-4xl! font-['Playfair_Display',Georgia,serif] text-xl leading-relaxed text-neutral-100 sm:text-2xl">
      A good edit should make the viewer feel the photograph more clearly. Start with crop and value, then color, then stop before the edit becomes the subject.
    </p>
  </section>
</div>
