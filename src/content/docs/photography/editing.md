---
title: Editing
description: How to crop, adjust light and color, and choose an editing app.
accent: violet
---

<div class="space-y-12 text-neutral-300 sm:space-y-14" id="editing-start">
  <section class="grid items-center gap-8 border-b border-white/10 pb-12 sm:pb-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
    <div class="space-y-5">
      <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">Edit what the photo needs</p>
      <p class="m-0! max-w-2xl! font-['Playfair_Display',Georgia,serif] text-2xl leading-snug text-neutral-100 sm:text-3xl">
        Editing can fix a small problem or shape the whole photo.
      </p>
      <p>
        Some photographers make small changes. Others build the final look while editing. Both approaches are valid.
      </p>
      <p>
        Do not be afraid to edit. A few careful changes can turn a flat file into a finished photo.
      </p>
    </div>
    <figure class="overflow-hidden border border-white/10 bg-neutral-900">
      <img class="aspect-[4/3] w-full object-cover" src="/images/pages/editing/hero-lightroom-workspace.webp" width="2256" height="1198" alt="Lightroom-style editing interface with a landscape image, histogram, and light sliders." loading="eager" decoding="async" fetchpriority="high" />
      <figcaption class="mt-0! border-t border-white/10 px-4 py-3">Decide what the photo needs before moving a slider.</figcaption>
    </figure>
  </section>

  <nav class="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4" aria-label="Editing page sections">
    <a class="group flex min-h-44 flex-col gap-2 bg-neutral-950 p-5 text-neutral-300 no-underline! transition-colors hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-violet-300" href="#cropping">
      <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.18em] text-violet-300">01</span>
      <strong class="mt-auto font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100!">Cropping</strong>
      <p>Level the photo, choose its shape, and remove distractions.</p>
    </a>
    <a class="group flex min-h-44 flex-col gap-2 bg-neutral-950 p-5 text-neutral-300 no-underline! transition-colors hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-violet-300" href="#value">
      <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.18em] text-violet-300">02</span>
      <strong class="mt-auto font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100!">Value</strong>
      <p>Adjust brightness, shadows, highlights, and contrast.</p>
    </a>
    <a class="group flex min-h-44 flex-col gap-2 bg-neutral-950 p-5 text-neutral-300 no-underline! transition-colors hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-violet-300" href="#tone-curve">
      <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.18em] text-violet-300">03</span>
      <strong class="mt-auto font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100!">Tone curve</strong>
      <p>Use a curve and histogram for precise control of brightness.</p>
    </a>
    <a class="group flex min-h-44 flex-col gap-2 bg-neutral-950 p-5 text-neutral-300 no-underline! transition-colors hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-violet-300" href="#color">
      <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.18em] text-violet-300">04</span>
      <strong class="mt-auto font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100!">Color</strong>
      <p>Adjust white balance, saturation, color grading, and HSL.</p>
    </a>
  </nav>

  <section class="grid scroll-mt-24 gap-8 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] lg:items-start lg:gap-12" id="cropping">
    <div class="space-y-5">
      <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">Cropping</p>
      <h2 class="mt-0! border-0! pt-0!">Straighten and trim the frame</h2>
      <p>
        Use the level and rotation tools to fix a tilted camera. Small changes can make the photo feel more balanced.
      </p>
      <p>
        Cropping sets the <span class="font-bold text-amber-200">aspect ratio</span> and removes parts of the image. Check the edges for <span class="font-bold text-violet-300">distractions</span> such as branches, bright streaks, cut-off objects, or small high-contrast details.
      </p>
      <p>
        In this example, the crop keeps attention on the two colored houses and removes details near the corners.
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
      <h3 class="mt-0!">Keep only the space that helps</h3>
      <p>
        A wide landscape may include too much empty sky or water. Empty space can help a photo, but crop it out when it adds nothing.
      </p>
    </div>
  </section>

  <section class="grid scroll-mt-24 gap-8 border-t border-white/10 pt-10 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1fr)] lg:items-start lg:gap-12" id="value">
    <div class="space-y-5 lg:order-2">
      <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">Value</p>
      <h2 class="mt-0! border-0! pt-0!">Start with brightness and contrast</h2>
      <p>
        <span class="font-bold text-emerald-300">Value</span>, the V in HSV, means how bright or dark each part of an image is. Set the light and dark areas before adjusting color.
      </p>
      <p>
        A black-and-white photo can work without color. It still needs a clear pattern of light and dark.
      </p>
      <div class="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2" aria-label="Value slider meanings">
        <div class="space-y-2 bg-neutral-950 p-5">
          <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Blacks / Whites</span>
          <strong class="block text-neutral-100!">The darkest and brightest points</strong>
          <p>The darkest darks and brightest brights in the photo.</p>
        </div>
        <div class="space-y-2 bg-neutral-950 p-5">
          <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Shadows / Highlights</span>
          <strong class="block text-neutral-100!">The wider dark and bright areas</strong>
          <p>Use these for gentler changes across more of the photo.</p>
        </div>
      </div>
    </div>
    <figure class="overflow-hidden border border-white/10 bg-neutral-900 lg:order-1">
      <img class="h-auto w-full object-cover" src="/images/pages/editing/value-sliders.webp" width="540" height="178" alt="Lightroom sliders for highlights, shadows, whites, and blacks." loading="lazy" decoding="async" />
      <figcaption class="mt-0! border-t border-white/10 px-4 py-3">Lightroom controls for highlights, shadows, whites, and blacks.</figcaption>
    </figure>
  </section>

  <section class="scroll-mt-24 space-y-5 border-t border-white/10 pt-10" id="tone-curve">
    <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">Tone curve</p>
    <h2 class="mt-0! border-0! pt-0!">Adjust contrast with the tone curve</h2>
    <p>
      The tone curve gives more control than the basic sliders. Think of the straight line as <span class="font-bold text-violet-300">y = x</span>. The horizontal axis shows the original brightness. The vertical axis shows the brightness after editing. A straight line makes no change.
    </p>
    <p>
      The dark shape behind the curve is the <span class="font-bold text-amber-200">histogram</span>. It shows how many pixels sit at each brightness level. Raise the right side to brighten highlights. Lower the left side to darken shadows. Doing both makes an S-curve and adds contrast.
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
      <strong class="block font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100!">Photographers have always edited</strong>
      <p>
        Ansel Adams shaped film prints with dodging and burning. Digital tools are different, but photographers have long changed brightness to guide attention.
      </p>
      <p>
        The RGB tone curves can also change color. Start with small adjustments because strong curves are easy to overdo.
      </p>
    </div>
  </section>

  <section class="grid scroll-mt-24 gap-8 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)] lg:items-start lg:gap-12" id="color">
    <div class="space-y-5">
      <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">Color</p>
      <h2 class="mt-0! border-0! pt-0!">Use color to support the photo</h2>
      <p>
        Start with white balance, tint, vibrance, and saturation. Temperature makes the image warmer or cooler. Tint moves it toward green or magenta.
      </p>
      <p>
        <span class="font-bold text-amber-200">Saturation</span> changes every color. <span class="font-bold text-emerald-300">Vibrance</span> tends to change muted colors first, so it often looks gentler.
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
        <figcaption class="mt-0! border-y border-white/10 px-4 py-3">The edit uses warm highlights and a soft blue sky.</figcaption>
      </figure>
      <div class="space-y-4 p-6 sm:p-8">
        <h3 class="mt-0!">Useful color tools</h3>
        <ul class="my-0! space-y-3 pl-5">
          <li><strong>Color grading:</strong> changes the color of highlights, midtones, and shadows separately.</li>
          <li><strong>Color mixer:</strong> changes the hue, saturation, and luminance of one color at a time.</li>
          <li><strong>Luminance:</strong> controls the brightness of a color.</li>
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
      <figcaption class="mt-0! border-t border-white/10 px-4 py-3">The color mixer adjusts each color separately.</figcaption>
    </figure>
  </section>

  <section class="scroll-mt-24 space-y-5 border-t border-white/10 pt-10" id="software">
    <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">Software</p>
    <h2 class="mt-0! border-0! pt-0!">Choose an editor you will use</h2>
    <p>
      Adobe Lightroom is common, but it requires a subscription for desktop plans. Other editors may fit you better. Check current prices before buying because plans change.
    </p>
    <div class="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4" aria-label="Editing software options">
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Common default</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://www.adobe.com/products/photoshop-lightroom/plans.html" target="_blank" rel="noopener noreferrer">Adobe Lightroom</a></strong>
        <p>Organizes photos and edits Raw files, including many photos at once. Desktop plans are paid.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Mobile start</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://www.adobe.com/products/photoshop-lightroom/mobile.html" target="_blank" rel="noopener noreferrer">Lightroom Mobile</a></strong>
        <p>A free phone editor with fewer tools than the desktop version. It is enough for many first edits.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Free / open source</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://www.darktable.org/" target="_blank" rel="noopener noreferrer">darktable</a></strong>
        <p>A free editor with many tools and a steeper learning curve. Its masking and noise-reduction tools differ from Lightroom.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Free / open source</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://rawtherapee.com/" target="_blank" rel="noopener noreferrer">RawTherapee</a></strong>
        <p>Free software for processing Raw files, similar to darktable.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Professional paid</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://www.captureone.com/en/pricing/capture-one-pro" target="_blank" rel="noopener noreferrer">Capture One</a></strong>
        <p>A paid professional editor with a different workflow from Lightroom.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Professional paid</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://www.dxo.com/dxo-photolab/" target="_blank" rel="noopener noreferrer">DxO PhotoLab</a></strong>
        <p>A paid professional editor known for noise reduction.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Free / pixel editor</span>
        <strong class="block"><a class="inline-flex min-h-11 items-center" href="https://www.canva.com/newsroom/news/all-new-affinity/" target="_blank" rel="noopener noreferrer">Affinity</a></strong>
        <p>A free Canva-owned design app. It works more like Photoshop than Lightroom.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.62rem] font-bold tracking-[0.14em] text-violet-300 uppercase">Free / camera brand</span>
        <strong class="flex min-h-11 items-center text-neutral-100!">Manufacturer software</strong>
        <p>Most camera brands offer free software for their files. These apps can be awkward to use.</p>
      </div>
    </div>
  </section>

  <section class="scroll-mt-24 space-y-5 border-t border-white/10 pt-10" id="guidelines">
    <p class="m-0! font-['Space_Mono',monospace] text-[0.68rem] font-bold tracking-[0.18em] text-violet-300 uppercase">General guidelines</p>
    <h2 class="mt-0! border-0! pt-0!">Simple editing habits</h2>
    <p>
      There is no single recipe. Use these ideas as a starting point, then make the edit fit the photo.
    </p>
    <div class="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-3" aria-label="Editing advice">
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.16em] text-violet-300">01</span>
        <strong class="block text-neutral-100!">Do not overcook it</strong>
        <p>Take breaks. After staring at one photo for too long, you may stop noticing that the edit is too strong.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.16em] text-violet-300">02</span>
        <strong class="block text-neutral-100!">Play with the sliders</strong>
        <p>Move a slider and watch what changes. Experimenting helps you learn each tool.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.16em] text-violet-300">03</span>
        <strong class="block text-neutral-100!">Look for inspiration</strong>
        <p>Find photographers whose edits you like. Study their use of light, color, and contrast.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.16em] text-violet-300">04</span>
        <strong class="block text-neutral-100!">Use saturation carefully</strong>
        <p>High global saturation can make colors look false. Sometimes one color needs less saturation or brightness.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.16em] text-violet-300">05</span>
        <strong class="block text-neutral-100!">Check black and white points</strong>
        <p>The white point sets the brightest white. The black point sets the darkest black. A white border can help you see whether the whole photo is too dark.</p>
      </div>
      <div class="space-y-3 bg-neutral-950 p-5">
        <span class="font-['Space_Mono',monospace] text-[0.65rem] font-bold tracking-[0.16em] text-violet-300">06</span>
        <strong class="block text-neutral-100!">Let shadows be shadows</strong>
        <p>Brightening every shadow and darkening every highlight can make the photo look flat. Some areas should stay dark.</p>
      </div>
    </div>
  </section>

  <section class="scroll-mt-24 border border-violet-300/30 bg-violet-300/[0.05] p-6 sm:p-8" id="next">
    <p class="m-0! max-w-4xl! font-['Playfair_Display',Georgia,serif] text-xl leading-relaxed text-neutral-100 sm:text-2xl">
      Start with the crop and brightness. Adjust color next. Stop when the edit begins to distract from the photo.
    </p>
  </section>
</div>
