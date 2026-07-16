---
title: Basics
description: Exposure, camera settings, dynamic range, and the first technical foundations to learn.
accent: sky
---

<div class="basics-page not-content space-y-16 font-['Space_Mono',ui-monospace,monospace] text-[0.94rem] leading-7 text-neutral-300 sm:space-y-20 [&_a]:text-sky-200 [&_a]:underline [&_a]:decoration-sky-400/30 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-neutral-100 [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-sky-400 [&_figcaption]:mt-3 [&_figcaption]:text-xs [&_figcaption]:leading-5 [&_figcaption]:text-neutral-400 [&_figure]:m-0 [&_h2]:m-0 [&_h2]:font-['Playfair_Display',Georgia,serif] [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:tracking-[-0.02em] [&_h2]:text-neutral-100 sm:[&_h2]:text-4xl [&_h3]:m-0 [&_h3]:font-['Playfair_Display',Georgia,serif] [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:leading-tight [&_h3]:text-neutral-100 [&_img]:block [&_p]:m-0" id="basics-start">
  <section class="basics-hero grid grid-cols-1 gap-6 border border-neutral-800 bg-neutral-950 p-5 sm:p-7 lg:grid-cols-2 lg:items-end lg:gap-10 lg:p-8">
    <div class="basics-hero__copy space-y-5">
      <p class="basics-kicker inline-flex min-h-11 items-center border-l-2 border-sky-400 pl-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-sky-200">Camera settings without the soup.</p>
      <p class="basics-lead font-['Playfair_Display',Georgia,serif] text-2xl leading-snug text-neutral-100 sm:text-3xl">
        Exposure is the first technical idea that makes a camera feel less mysterious.
      </p>
      <p>
        This page covers the exposure triangle, stops of light, aperture, shutter speed, ISO, dynamic range, noise, raw files, and the camera modes that help you control all of it without getting overwhelmed.
      </p>
      <p>
        It is dense by design. Read it once, go shoot, then come back when the settings start to feel connected.
      </p>
    </div>
    <figure class="basics-hero__image border border-neutral-800 bg-neutral-900 p-2">
      <img class="aspect-[1086/1454] w-full bg-neutral-900 object-cover" src="/images/pages/basics/hero-light-beam.webp" alt="A bright orange beam of light breaking through clouds over water and mountains." width="1086" height="1454" loading="eager" decoding="async" fetchpriority="high" />
      <figcaption>Photo by <a href="https://www.instagram.com/adrisangui" target="_blank" rel="noopener noreferrer">@adrisangui</a></figcaption>
    </figure>
  </section>

  <nav class="basics-map grid grid-cols-1 border-l border-t border-neutral-800 lg:grid-cols-2" aria-label="Basics page sections">
    <a class="group flex min-h-11 flex-col justify-center gap-2 border-b border-r border-neutral-800 bg-neutral-950 p-5 no-underline transition-colors hover:bg-neutral-900 focus-visible:relative focus-visible:z-10" href="#exposure-triangle">
      <span class="text-[0.7rem] font-bold tracking-[0.2em] text-sky-300">01</span>
      <strong class="font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100">Exposure Triangle</strong>
      <p class="text-sm leading-6 text-neutral-400">Aperture, shutter speed, ISO, and stops of light.</p>
    </a>
    <a class="group flex min-h-11 flex-col justify-center gap-2 border-b border-r border-neutral-800 bg-neutral-950 p-5 no-underline transition-colors hover:bg-neutral-900 focus-visible:relative focus-visible:z-10" href="#aperture">
      <span class="text-[0.7rem] font-bold tracking-[0.2em] text-amber-300">02</span>
      <strong class="font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100">Aperture</strong>
      <p class="text-sm leading-6 text-neutral-400">Light, depth of field, bokeh, and f-numbers.</p>
    </a>
    <a class="group flex min-h-11 flex-col justify-center gap-2 border-b border-r border-neutral-800 bg-neutral-950 p-5 no-underline transition-colors hover:bg-neutral-900 focus-visible:relative focus-visible:z-10" href="#shutter-speed">
      <span class="text-[0.7rem] font-bold tracking-[0.2em] text-emerald-300">03</span>
      <strong class="font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100">Shutter Speed</strong>
      <p class="text-sm leading-6 text-neutral-400">Freezing action, motion blur, and long exposures.</p>
    </a>
    <a class="group flex min-h-11 flex-col justify-center gap-2 border-b border-r border-neutral-800 bg-neutral-950 p-5 no-underline transition-colors hover:bg-neutral-900 focus-visible:relative focus-visible:z-10" href="#iso">
      <span class="text-[0.7rem] font-bold tracking-[0.2em] text-rose-300">04</span>
      <strong class="font-['Playfair_Display',Georgia,serif] text-xl text-neutral-100">ISO</strong>
      <p class="text-sm leading-6 text-neutral-400">Digital gain, noise, and when to raise it.</p>
    </a>
  </nav>

  <section class="basics-triangle scroll-mt-24 grid grid-cols-1 gap-8 border-t border-neutral-800 pt-10 lg:grid-cols-2 lg:items-center" id="exposure-triangle">
    <div class="basics-triangle__copy space-y-5">
      <p class="basics-kicker inline-flex min-h-11 items-center border-l-2 border-sky-400 pl-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-sky-200">The foundation</p>
      <h2>The Exposure Triangle</h2>
      <p>
        <span class="basics-term basics-term--amber font-bold text-amber-300">Aperture</span>, <span class="basics-term basics-term--sky font-bold text-sky-300">shutter speed</span>, and <span class="basics-term basics-term--rose font-bold text-rose-300">ISO</span> are the three settings photographers talk about most because they all change how bright the final image becomes. Your phone and camera can adjust them automatically, but learning what each one does gives you creative control.
      </p>
      <p>
        Think of <span class="basics-term basics-term--green font-bold text-emerald-300">exposure as a balance</span>. If one setting lets in less light, another setting usually needs to give some back unless you intentionally want a darker image.
      </p>
      <div class="basics-stop-row grid grid-cols-1 border-l border-t border-neutral-800 lg:grid-cols-2" aria-label="Stop examples">
        <span class="border-b border-r border-neutral-800 bg-neutral-950 p-4 text-sm text-neutral-400"><strong class="block text-neutral-100">+1 stop</strong> doubles the light</span>
        <span class="border-b border-r border-neutral-800 bg-neutral-950 p-4 text-sm text-neutral-400"><strong class="block text-neutral-100">-1 stop</strong> halves the light</span>
        <span class="border-b border-r border-neutral-800 bg-neutral-950 p-4 text-sm text-neutral-400 lg:col-span-2"><strong class="block text-neutral-100">Same exposure</strong> can come from different settings</span>
      </div>
    </div>
    <figure class="basics-triangle__figure border border-neutral-800 bg-neutral-950 p-5">
      <img class="aspect-video w-full bg-neutral-100 object-contain" src="/images/pages/basics/exposure-triangle.webp" alt="Exposure triangle diagram showing aperture, shutter speed, and ISO." width="1920" height="1080" loading="lazy" decoding="async" />
    </figure>
  </section>

  <section class="basics-section basics-section--split scroll-mt-24 grid grid-cols-1 gap-8 border-t border-neutral-800 pt-10 lg:grid-cols-2 lg:items-center" id="aperture">
    <div class="basics-section__copy space-y-5">
      <p class="basics-kicker inline-flex min-h-11 items-center border-l-2 border-amber-400 pl-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-amber-200">Aperture</p>
      <h2>How Wide the Lens Opens</h2>
      <p>
        <span class="basics-term basics-term--amber font-bold text-amber-300">Aperture</span> is the size of the opening inside the lens. It is written as an <span class="basics-term basics-term--green font-bold text-emerald-300">f-number</span>, such as f/1.4, f/2.8, f/5.6, or f/11. The confusing part is that a smaller f-number means a larger physical opening.
      </p>
      <p>
        A large opening lets in <span class="basics-term basics-term--amber font-bold text-amber-300">more light</span> and creates a <span class="basics-term basics-term--rose font-bold text-rose-300">shallower depth of field</span>. That means less of the scene is in focus, which is why portraits often have soft, blurry backgrounds. A smaller opening lets in less light but keeps more of the scene sharp.
      </p>
      <div class="basics-summary-grid grid grid-cols-1 border-l border-t border-neutral-800 lg:grid-cols-2" aria-label="Aperture summary">
        <div class="space-y-2 border-b border-r border-neutral-800 bg-neutral-950 p-5">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-300">f/1.4 - f/2.8</span>
          <strong class="block font-['Playfair_Display',Georgia,serif] text-lg text-neutral-100">Wide / fast</strong>
          <p class="text-sm leading-6 text-neutral-400">More light, more background blur, easier low-light shooting.</p>
        </div>
        <div class="space-y-2 border-b border-r border-neutral-800 bg-neutral-950 p-5">
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-300">f/8 - f/11</span>
          <strong class="block font-['Playfair_Display',Georgia,serif] text-lg text-neutral-100">Stopped down</strong>
          <p class="text-sm leading-6 text-neutral-400">Less light, deeper focus, useful for landscapes and context.</p>
        </div>
      </div>
    </div>
    <figure class="basics-figure basics-figure--light border border-neutral-800 bg-neutral-950 p-3">
      <img class="aspect-[1200/765] w-full bg-neutral-100 object-contain" src="/images/pages/basics/aperture-lenses.webp" alt="Six lens openings labeled from f/1.4 to f/8.0." width="1200" height="765" loading="lazy" decoding="async" />
      <figcaption>Source: <a href="https://en.wikipedia.org/wiki/Aperture" target="_blank" rel="noopener noreferrer">Wikipedia</a></figcaption>
    </figure>
  </section>

  <section class="basics-section basics-section--media-grid grid grid-cols-1 gap-6 border-t border-neutral-800 pt-10 lg:grid-cols-2" aria-label="Depth of field examples">
    <figure class="basics-figure basics-figure--photo border border-neutral-800 bg-neutral-950 p-3">
      <img class="aspect-[3/2] w-full bg-neutral-900 object-cover" src="/images/pages/basics/portrait-bokeh.webp" alt="Portrait with a soft, blurry background caused by shallow depth of field." width="1500" height="1000" loading="lazy" decoding="async" />
      <figcaption>Source: <a href="https://www.juliatrotti.com/portfolio1" target="_blank" rel="noopener noreferrer">Julia Trotti</a></figcaption>
    </figure>
    <div class="basics-panel space-y-5 border border-neutral-800 bg-neutral-950 p-6">
      <h3>What Aperture Changes</h3>
      <ul class="m-0 space-y-3 pl-5 text-sm leading-6 text-neutral-300 marker:text-amber-300">
        <li><strong class="text-neutral-100">Exposure:</strong> wider apertures let in more light.</li>
        <li><strong class="text-neutral-100">Depth of field:</strong> wider apertures make the focused zone thinner.</li>
        <li><strong class="text-neutral-100">Lens size and price:</strong> very fast lenses are harder to design, so they are often bigger, heavier, and more expensive.</li>
      </ul>
      <p>
        Use wider apertures when you need light or want separation. Stop down when you need more of the scene to stay sharp.
      </p>
    </div>
    <figure class="basics-figure basics-figure--diagram border border-neutral-800 bg-neutral-950 p-3 lg:col-span-2">
      <img class="aspect-[2/1] w-full bg-neutral-100 object-contain" src="/images/pages/basics/depth-of-field-diagram.webp" alt="Diagram comparing depth of field from a wide aperture and a narrow aperture." width="600" height="300" loading="lazy" decoding="async" />
      <figcaption>Source: <a href="https://vanillavideo.com/articles/how-depth-of-field-occurs-optics/" target="_blank" rel="noopener noreferrer">Vanilla Video</a></figcaption>
    </figure>
  </section>

  <section class="basics-section basics-section--split basics-section--reverse scroll-mt-24 grid grid-cols-1 gap-8 border-t border-neutral-800 pt-10 lg:grid-cols-2 lg:items-center" id="shutter-speed">
    <div class="basics-section__copy space-y-5 lg:order-2">
      <p class="basics-kicker inline-flex min-h-11 items-center border-l-2 border-sky-400 pl-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-sky-200">Shutter speed</p>
      <h2>How Long the Sensor Sees</h2>
      <p>
        <span class="basics-term basics-term--sky font-bold text-sky-300">Shutter speed</span> is measured in seconds or fractions of a second. It controls how long the camera collects light from the scene. A shutter speed of <span class="basics-term basics-term--green font-bold text-emerald-300">1/500s lets in twice as much light as 1/1000s</span> because the sensor is exposed for twice as long.
      </p>
      <p>
        It also changes how motion looks. <span class="basics-term basics-term--sky font-bold text-sky-300">Fast shutter speeds freeze movement</span>. <span class="basics-term basics-term--rose font-bold text-rose-300">Slow shutter speeds let movement smear</span> into the frame.
      </p>
      <div class="basics-summary-grid grid grid-cols-1 border-l border-t border-neutral-800 lg:grid-cols-2" aria-label="Shutter speed summary">
        <div class="space-y-2 border-b border-r border-neutral-800 bg-neutral-950 p-5">
          <span class="text-xs font-bold uppercase tracking-wider text-sky-300">Fast</span>
          <strong class="block font-['Playfair_Display',Georgia,serif] text-lg text-neutral-100">1/1000s+</strong>
          <p class="text-sm leading-6 text-neutral-400">Sports, wildlife, fast action, and sharp handheld moments.</p>
        </div>
        <div class="space-y-2 border-b border-r border-neutral-800 bg-neutral-950 p-5">
          <span class="text-xs font-bold uppercase tracking-wider text-rose-300">Slow</span>
          <strong class="block font-['Playfair_Display',Georgia,serif] text-lg text-neutral-100">1/30s or longer</strong>
          <p class="text-sm leading-6 text-neutral-400">Intentional motion blur, moving water, light trails, and abstraction.</p>
        </div>
      </div>
    </div>
    <figure class="basics-figure basics-figure--photo border border-neutral-800 bg-neutral-950 p-3 lg:order-1">
      <img class="aspect-[1464/968] w-full bg-neutral-900 object-cover" src="/images/pages/basics/motion-blur-birds.webp" alt="Flying birds rendered as soft motion blur against a blue background." width="1464" height="968" loading="lazy" decoding="async" />
      <figcaption>Slow shutter speeds can make motion feel fluid instead of frozen. Source: <a href="https://www.instagram.com/p/BuZsN2pHiKF" target="_blank" rel="noopener noreferrer">@natgeoyourshot</a></figcaption>
    </figure>
  </section>

  <section class="basics-band grid grid-cols-1 border border-neutral-800 bg-neutral-900 lg:grid-cols-2 lg:items-center">
    <figure class="basics-band__image border-b border-neutral-800 p-3 lg:border-b-0 lg:border-r">
      <img class="aspect-[1160/770] w-full bg-neutral-950 object-cover" src="/images/pages/basics/creative-motion-portrait.webp" alt="Portrait seen through soft motion blur and glassy distortion." width="1160" height="770" loading="lazy" decoding="async" />
      <figcaption>Photo by <a href="https://www.instagram.com/teo_crawford" target="_blank" rel="noopener noreferrer">@teo_crawford</a></figcaption>
    </figure>
    <div class="space-y-5 p-6 sm:p-8">
      <p class="basics-kicker inline-flex min-h-11 items-center border-l-2 border-rose-400 pl-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-rose-200">Try it on purpose</p>
      <h3>Blur Is Not Always a Mistake</h3>
      <p>
        Sharpness is useful, but blur can be expressive. If you are photographing concerts, street scenes, cars, water, or people moving through light, try a slower shutter speed and see what kind of rhythm appears.
      </p>
    </div>
  </section>

  <section class="basics-section basics-section--image-below scroll-mt-24 grid grid-cols-1 gap-8 border-t border-neutral-800 pt-10 lg:grid-cols-2 lg:items-center" id="iso">
    <div class="basics-section__copy space-y-5">
      <p class="basics-kicker inline-flex min-h-11 items-center border-l-2 border-rose-400 pl-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-rose-200">ISO</p>
      <h2>Brightness After the Sensor</h2>
      <p>
        <span class="basics-term basics-term--rose font-bold text-rose-300">ISO</span> is a holdover term from film speed. In digital photography, it behaves like <span class="basics-term basics-term--amber font-bold text-amber-300">gain</span>: the camera amplifies the signal from the sensor so the image becomes brighter.
      </p>
      <p>
        Raising ISO is useful when you cannot open the aperture more or slow the shutter speed without ruining the shot. The tradeoff is <span class="basics-term basics-term--rose font-bold text-rose-300">noise</span>, especially in darker areas.
      </p>
      <div class="basics-summary-grid grid grid-cols-1 border-l border-t border-neutral-800 lg:grid-cols-2" aria-label="ISO summary">
        <div class="space-y-2 border-b border-r border-neutral-800 bg-neutral-950 p-5">
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-300">Lower ISO</span>
          <strong class="block font-['Playfair_Display',Georgia,serif] text-lg text-neutral-100">Cleaner files</strong>
          <p class="text-sm leading-6 text-neutral-400">Best when you already have enough light.</p>
        </div>
        <div class="space-y-2 border-b border-r border-neutral-800 bg-neutral-950 p-5">
          <span class="text-xs font-bold uppercase tracking-wider text-rose-300">Higher ISO</span>
          <strong class="block font-['Playfair_Display',Georgia,serif] text-lg text-neutral-100">More noise</strong>
          <p class="text-sm leading-6 text-neutral-400">Useful when the shot matters more than a perfectly clean file.</p>
        </div>
      </div>
    </div>
    <figure class="basics-figure basics-figure--light border border-neutral-800 bg-neutral-950 p-3">
      <img class="aspect-[160/53] w-full bg-neutral-100 object-contain" src="/images/pages/basics/iso-noise-comparison.webp" alt="Comparison image showing ISO 200 with less noise and ISO 3200 with more noise." width="960" height="318" loading="lazy" decoding="async" />
      <figcaption>Source: <a href="https://photographylife.com/what-is-iso-in-photography" target="_blank" rel="noopener noreferrer">Photography Life</a></figcaption>
    </figure>
  </section>

  <section class="basics-section scroll-mt-24 space-y-6 border-t border-neutral-800 pt-10" id="dynamic-range">
    <p class="basics-kicker inline-flex min-h-11 items-center border-l-2 border-emerald-400 pl-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-emerald-200">Dynamic range and noise</p>
    <h2>Why Cameras Handle Harsh Light Differently</h2>
    <p>
      <span class="basics-term basics-term--green font-bold text-emerald-300">Dynamic range</span> is the distance between the darkest and brightest parts of a scene before detail starts getting lost. It is measured in <span class="basics-term basics-term--amber font-bold text-amber-300">stops</span>. A camera with more dynamic range gives you more room to <span class="basics-term basics-term--sky font-bold text-sky-300">recover shadows and highlights</span> later.
    </p>
    <p>
      This is one reason larger dedicated cameras often handle difficult light better than phones, even though phones have improved dramatically through larger sensors and computational processing.
    </p>
    <div class="basics-chart-grid grid grid-cols-1 gap-6 lg:grid-cols-2">
      <figure class="basics-figure basics-figure--light basics-figure--chart border border-neutral-800 bg-neutral-950 p-3">
        <img class="aspect-[2243/1296] w-full bg-neutral-100 object-contain" src="/images/pages/basics/dynamic-range-chart.webp" alt="Chart comparing photographic dynamic range across ISO settings for an iPhone 14 Pro Max and Canon EOS R5." width="2243" height="1296" loading="lazy" decoding="async" />
        <figcaption>Source: <a href="https://www.photonstophotos.net/Charts/PDR.htm" target="_blank" rel="noopener noreferrer">Photons to Photos</a></figcaption>
      </figure>
      <figure class="basics-figure basics-figure--photo border border-neutral-800 bg-neutral-950 p-3">
        <img class="aspect-[781/454] w-full bg-neutral-900 object-cover" src="/images/pages/basics/shadow-noise-example.webp" alt="Coastal image with visible noise in dark underexposed shadows." width="1562" height="908" loading="lazy" decoding="async" />
        <figcaption>Underexposed shadows can become noisy when lifted in editing.</figcaption>
      </figure>
    </div>
    <div class="basics-note scroll-mt-24 space-y-5 border-l-2 border-emerald-400 bg-neutral-950 p-5 sm:p-7" id="raw-vs-jpg">
      <strong class="block font-['Playfair_Display',Georgia,serif] text-2xl text-neutral-100">Raw vs. JPG</strong>
      <p>
        One of the best ways to squeeze more out of your camera is to shoot in Raw, which you can usually enable in the camera's image-quality settings. Many cameras let you choose JPEG, Raw, or Raw + JPEG.
      </p>
      <p>
        Rendered image files such as JPG, PNG, and HEIF are already processed. JPEGs are compressed, lossy files that mostly contain the finished look the camera creates when you open the image in a viewer. <span class="basics-term basics-term--green font-bold text-emerald-300">Raw files keep more sensor information</span>, which gives you more room to adjust exposure, recover shadow detail, tame bright highlights, and make color decisions later in Lightroom or another editor. If you use an iPhone that supports it, you can also shoot <a href="https://support.apple.com/es-es/guide/iphone/iphae1e882a3/ios" target="_blank" rel="noopener noreferrer">Apple ProRAW</a>.
      </p>
      <p>
        The tradeoff is that Raw files can look flatter before editing because they bypass much of the camera's internal JPEG color processing, and they are usually much larger. Shoot Raw if you like to edit, or JPEG if you prefer to leave your photos mostly untouched. It is also perfectly fine to edit JPEGs; you can easily get by without Raw unless you need heavier post-processing in high dynamic range scenes.
      </p>
      <p>
        Raw is not magic, though. In extreme contrast, you still need to decide whether highlights, shadows, or a middle exposure matter most. For a deeper walkthrough, watch <a href="https://www.youtube.com/watch?v=wrckVlY5vwU" target="_blank" rel="noopener noreferrer">Raw vs. JPEG</a>.
      </p>
      <div class="basics-video aspect-video border border-neutral-800 bg-neutral-900">
        <iframe
          class="h-full w-full border-0"
          src="https://www.youtube.com/embed/wrckVlY5vwU"
          title="Raw vs. JPEG"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>

  <section class="basics-section scroll-mt-24 space-y-6 border-t border-neutral-800 pt-10" id="putting-it-together">
    <p class="basics-kicker inline-flex min-h-11 items-center border-l-2 border-amber-400 pl-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-amber-200">Putting it together</p>
    <h2>Many Settings Can Create the Same Brightness</h2>
    <p>
      Suppose a scene looks properly exposed at <span class="basics-term basics-term--amber font-bold text-amber-300">f/2.8</span>, <span class="basics-term basics-term--sky font-bold text-sky-300">1/1000s</span>, <span class="basics-term basics-term--rose font-bold text-rose-300">ISO 200</span>. You can keep the same overall brightness with different tradeoffs:
    </p>
    <div class="basics-equivalents grid grid-cols-1 border-l border-t border-neutral-800 lg:grid-cols-2" aria-label="Equivalent exposure examples">
      <div class="space-y-2 border-b border-r border-neutral-800 bg-neutral-950 p-5">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-300">Starting point</span>
        <strong class="block font-['Playfair_Display',Georgia,serif] text-lg text-neutral-100">f/2.8 - 1/1000s - ISO 200</strong>
        <p class="text-sm leading-6 text-neutral-400">Wide aperture, fast shutter, clean ISO.</p>
      </div>
      <div class="space-y-2 border-b border-r border-neutral-800 bg-neutral-950 p-5">
        <span class="text-xs font-bold uppercase tracking-wider text-sky-300">Same exposure</span>
        <strong class="block font-['Playfair_Display',Georgia,serif] text-lg text-neutral-100">f/4 - 1/500s - ISO 200</strong>
        <p class="text-sm leading-6 text-neutral-400">One stop less aperture light, one stop more shutter time.</p>
      </div>
      <div class="space-y-2 border-b border-r border-neutral-800 bg-neutral-950 p-5 lg:col-span-2">
        <span class="text-xs font-bold uppercase tracking-wider text-rose-300">Same exposure</span>
        <strong class="block font-['Playfair_Display',Georgia,serif] text-lg text-neutral-100">f/11 - 1/1000s - ISO 3200</strong>
        <p class="text-sm leading-6 text-neutral-400">Much deeper focus, but ISO rises to compensate.</p>
      </div>
    </div>
    <p>
      <span class="basics-term basics-term--amber font-bold text-amber-300">Aperture</span> and <span class="basics-term basics-term--sky font-bold text-sky-300">shutter speed</span> change the creative character of the photo. <span class="basics-term basics-term--rose font-bold text-rose-300">ISO</span> mostly helps you reach the exposure when the other two settings are already constrained.
    </p>
  </section>

  <section class="basics-section basics-section--image-below scroll-mt-24 space-y-8 border-t border-neutral-800 pt-10" id="camera-modes">
    <div class="basics-section__copy space-y-5">
      <p class="basics-kicker inline-flex min-h-11 items-center border-l-2 border-sky-400 pl-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-sky-200">Camera modes</p>
      <h2>You Do Not Need Full Manual</h2>
      <p>
        Many cameras have <span class="basics-mode-letter basics-mode-letter--program inline-grid size-7 place-items-center border border-amber-400/60 bg-amber-400/10 text-xs font-bold text-amber-200">P</span>, <span class="basics-mode-letter basics-mode-letter--aperture inline-grid size-7 place-items-center border border-emerald-400/60 bg-emerald-400/10 text-xs font-bold text-emerald-200">A</span>, <span class="basics-mode-letter basics-mode-letter--shutter inline-grid size-7 place-items-center border border-sky-400/60 bg-sky-400/10 text-xs font-bold text-sky-200">S</span>, and <span class="basics-mode-letter basics-mode-letter--manual inline-grid size-7 place-items-center border border-rose-400/60 bg-rose-400/10 text-xs font-bold text-rose-200">M</span> on the mode dial. These stand for <span class="basics-term basics-term--amber font-bold text-amber-300">Program</span>, <span class="basics-term basics-term--green font-bold text-emerald-300">Aperture Priority</span>, <span class="basics-term basics-term--sky font-bold text-sky-300">Shutter Priority</span>, and <span class="basics-term basics-term--rose font-bold text-rose-300">Manual</span>. They decide which settings you control and which settings the camera meters automatically.
      </p>
      <p>
        A great beginner setup is <span class="basics-term basics-term--green font-bold text-emerald-300">Aperture Priority with Auto ISO</span>. You choose the <span class="basics-term basics-term--amber font-bold text-amber-300">aperture</span> for the look you want, and the camera handles <span class="basics-term basics-term--sky font-bold text-sky-300">shutter speed</span> and <span class="basics-term basics-term--rose font-bold text-rose-300">ISO</span> within the limits you set.
      </p>
    </div>
    <div class="basics-table-wrap overflow-x-auto border border-neutral-800 bg-neutral-950">
      <table class="basics-mode-table w-full min-w-[42rem] border-collapse text-left text-sm [&_tbody_tr]:border-t [&_tbody_tr]:border-neutral-800 [&_td]:p-4 [&_td]:align-top [&_td]:text-neutral-300 [&_th]:bg-neutral-900 [&_th]:p-4 [&_th]:text-xs [&_th]:font-bold [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-neutral-100">
        <thead>
          <tr>
            <th>Mode</th>
            <th>You Control</th>
            <th>Camera Controls</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Program</td>
            <td>Exposure compensation</td>
            <td>Aperture and shutter speed</td>
          </tr>
          <tr>
            <td>Aperture Priority</td>
            <td>Aperture</td>
            <td>Shutter speed</td>
          </tr>
          <tr>
            <td>Shutter Priority</td>
            <td>Shutter speed</td>
            <td>Aperture</td>
          </tr>
          <tr>
            <td>Manual</td>
            <td>Aperture and shutter speed</td>
            <td>Nothing, unless Auto ISO is enabled</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="basics-callout scroll-mt-24 border border-sky-400/40 bg-sky-400/10 p-5 text-neutral-200 sm:p-7" id="next">
    <p>
      The technical details are here to serve the photo, not swallow the hobby. Take what helps, then go make pictures. Next, read <a href="/photography/anatomy-of-a-camera/">Anatomy of a Camera</a> to learn what the body, lens, sensor, viewfinder, and controls actually do.
    </p>
  </section>
</div>
