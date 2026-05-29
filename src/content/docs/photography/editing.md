---
title: Editing
description: Workflow ideas for cropping, value, color, software, and finishing a photo without overcooking it.
accent: violet
---

<div class="editing-page" id="editing-start">
  <section class="editing-hero">
    <div class="editing-hero__copy">
      <p class="editing-kicker">Finish the photo, do not fight it.</p>
      <p class="editing-lead">
        Sometimes editing is just cleanup. Sometimes it is where the photo comes together.
      </p>
      <p>
        Some photographers barely touch their files after pressing the shutter. Others treat editing as an essential part of the process. There is no single correct place to land on that spectrum.
      </p>
      <p>
        That said, do not be afraid to edit. Most photographers do at least some post-processing, and it can be one of the key differences between a flat capture and a finished image that feels alive.
      </p>
    </div>
    <figure class="editing-hero__image">
      <img src="/images/pages/editing/hero-lightroom-workspace.webp" alt="Lightroom-style editing interface with a landscape image, histogram, and light sliders." loading="eager" />
      <figcaption>Editing starts with deciding what the image needs, not moving every slider.</figcaption>
    </figure>
  </section>

  <nav class="editing-map" aria-label="Editing page sections">
    <a href="#cropping">
      <span>01</span>
      <strong>Cropping</strong>
      <p>Leveling, rotating, aspect ratios, and removing edge distractions.</p>
    </a>
    <a href="#value">
      <span>02</span>
      <strong>Value</strong>
      <p>Exposure, blacks, whites, shadows, highlights, and contrast.</p>
    </a>
    <a href="#tone-curve">
      <span>03</span>
      <strong>Tone Curve</strong>
      <p>Using curves and histograms for more precise tonal control.</p>
    </a>
    <a href="#color">
      <span>04</span>
      <strong>Color</strong>
      <p>White balance, vibrance, saturation, grading, and HSL controls.</p>
    </a>
  </nav>

  <section class="editing-section editing-section--split" id="cropping">
    <div class="editing-section__copy">
      <p class="editing-kicker">Cropping</p>
      <h2>Make the Frame Feel Intentional</h2>
      <p>
        Leveling and rotating are straightforward fixes. Maybe you leaned to one side, or accidentally tilted the camera up. Editing software can correct that, at least to a point, and make the image feel more stable.
      </p>
      <p>
        Cropping decides the <span class="editing-term editing-term--amber">aspect ratio</span> and what gets to stay inside the image. One of its most useful jobs is removing <span class="editing-term editing-term--violet">boundary distractions</span>: branches, bright streaks, partial objects, or tiny high-contrast details that pull attention away from the subject.
      </p>
      <p>
        In the San Francisco house example, the crop focuses attention on the two colored houses and removes distractions near the corners. The photo feels more intentional because fewer elements look accidentally left in the frame.
      </p>
    </div>
    <div class="editing-before-after" aria-label="Uncropped and cropped photo comparison">
      <figure class="editing-figure editing-figure--photo">
        <img src="/images/pages/editing/crop-before.webp" alt="Uncropped photo of colorful San Francisco houses with extra sky and edge distractions." loading="lazy" />
        <figcaption>Uncropped</figcaption>
      </figure>
      <figure class="editing-figure editing-figure--photo">
        <img src="/images/pages/editing/crop-after.webp" alt="Cropped photo of colorful San Francisco houses with tighter focus on the buildings." loading="lazy" />
        <figcaption>Cropped</figcaption>
      </figure>
    </div>
  </section>

  <section class="editing-band" id="landscape-crops">
    <figure class="editing-figure editing-figure--wide">
      <img src="/images/pages/editing/panorama-crop.webp" alt="Wide cropped view of the San Francisco skyline from across the bay." loading="lazy" />
    </figure>
    <div>
      <p class="editing-kicker">Aspect ratio</p>
      <h3>Negative Space Is Not Automatically Useful</h3>
      <p>
        Wide landscapes are an obvious time to crop. A camera's native aspect ratio might leave a lot of empty sky or water. Negative space is not inherently bad, but if it does not add anything to the image, cropping can make the subject stronger.
      </p>
    </div>
  </section>

  <section class="editing-section editing-section--split editing-section--reverse" id="value">
    <div class="editing-section__copy">
      <p class="editing-kicker">Value</p>
      <h2>Start With Brightness and Contrast</h2>
      <p>
        <span class="editing-term editing-term--green">Value</span>, the V in HSV, refers to how bright or dark parts of an image are. It is often the most important part of the edit because photographs need light and dark variation before color can do much meaningful work.
      </p>
      <p>
        This is why it is usually smart to start with values. Plenty of beautiful images are black and white, but almost no strong images have a complete absence of light and dark structure.
      </p>
      <div class="editing-summary-grid" aria-label="Value slider meanings">
        <div>
          <span>Blacks / Whites</span>
          <strong>The endpoints</strong>
          <p>The darkest darks and brightest brights in the photo.</p>
        </div>
        <div>
          <span>Shadows / Highlights</span>
          <strong>The broader zones</strong>
          <p>The general dark and bright areas, with more room for subtle adjustment.</p>
        </div>
      </div>
    </div>
    <figure class="editing-figure editing-figure--panel">
      <img src="/images/pages/editing/value-sliders.webp" alt="Lightroom sliders for highlights, shadows, whites, and blacks." loading="lazy" />
      <figcaption>Value controls in Lightroom's basic panel.</figcaption>
    </figure>
  </section>

  <section class="editing-section" id="tone-curve">
    <p class="editing-kicker">Tone curve</p>
    <h2>The Powerful, Slightly Scary Contrast Tool</h2>
    <p>
      The Tone Curve is more complicated than basic sliders, but it gives much finer control. Think of the base line as <span class="editing-term editing-term--violet">y = x</span>: the horizontal axis is the original brightness of each pixel, and the vertical axis is the output brightness after the curve. If the line stays straight, each value maps to itself and nothing changes.
    </p>
    <p>
      The dark shape behind the curve is the <span class="editing-term editing-term--amber">histogram</span>, which shows how many pixels sit at each brightness level. Raising the right side brightens highlights. Lowering the left side darkens shadows. A subtle S-curve does both, adding contrast to an image that feels flat.
    </p>
    <div class="editing-curve-grid" aria-label="Tone curve before and after examples">
      <figure class="editing-figure editing-figure--panel">
        <img src="/images/pages/editing/tone-curve-linear.webp" alt="Linear tone curve panel with a straight diagonal curve." loading="lazy" />
        <figcaption>Linear curve: no tonal change.</figcaption>
      </figure>
      <figure class="editing-figure editing-figure--photo">
        <img src="/images/pages/editing/tone-before.webp" alt="Flat flower photo before tone curve contrast." loading="lazy" />
        <figcaption>Before</figcaption>
      </figure>
      <figure class="editing-figure editing-figure--panel">
        <img src="/images/pages/editing/tone-curve-s.webp" alt="Tone curve panel showing a subtle S curve." loading="lazy" />
        <figcaption>S-curve: shadows down, highlights up.</figcaption>
      </figure>
      <figure class="editing-figure editing-figure--photo">
        <img src="/images/pages/editing/tone-after.webp" alt="Flower photo after tone curve contrast, with deeper shadows and brighter highlights." loading="lazy" />
        <figcaption>After</figcaption>
      </figure>
    </div>
    <div class="editing-note">
      <strong>Editing is not cheating</strong>
      <p>
        Even Ansel Adams, who shot on film, did a great amount of image shaping through dodging and burning. Digital tools are different, but the idea of guiding value and attention is old.
      </p>
      <p>
        You can also adjust RGB channels with the Tone Curve for color grading. That is powerful, but easy to overdo. Be subtle with curve points until you know exactly what they are doing.
      </p>
    </div>
  </section>

  <section class="editing-section editing-section--split editing-section--color" id="color">
    <div class="editing-section__copy">
      <p class="editing-kicker">Color</p>
      <h2>Color Should Support the Photo</h2>
      <p>
        The most basic color controls are white balance, tint, vibrance, and saturation. Temperature pushes the image warmer or cooler. Tint shifts between green and magenta.
      </p>
      <p>
        <span class="editing-term editing-term--amber">Saturation</span> affects all colors globally. <span class="editing-term editing-term--green">Vibrance</span> is a smarter version that tends to target less-saturated colors first, so it can be gentler than simply increasing saturation everywhere.
      </p>
      <div class="editing-tool-stack">
        <figure class="editing-figure editing-figure--panel">
          <img src="/images/pages/editing/white-balance-sliders.webp" alt="Lightroom white balance sliders for temperature and tint." loading="lazy" />
          <figcaption>White balance</figcaption>
        </figure>
        <figure class="editing-figure editing-figure--panel">
          <img src="/images/pages/editing/vibrance-saturation-sliders.webp" alt="Lightroom vibrance and saturation sliders." loading="lazy" />
          <figcaption>Vibrance and saturation</figcaption>
        </figure>
      </div>
    </div>
    <div class="editing-panel">
      <figure class="editing-panel__image">
        <img src="/images/pages/editing/color-example-building.webp" alt="Edited street photo of an ornate building with warm highlights, soft blue sky, and people in the foreground." loading="lazy" />
        <figcaption>Color choices should support the feeling of the image.</figcaption>
      </figure>
      <div class="editing-panel__copy">
        <h3>Color Tools Worth Learning</h3>
        <ul>
          <li><strong>Color grading:</strong> shifts highlights, midtones, and shadows separately. It often defines the overall look of the photo.</li>
          <li><strong>Color mixer:</strong> adjusts individual colors by hue, saturation, and luminance, which can make certain colors pop or calm down.</li>
          <li><strong>Luminance:</strong> means brightness or value for a specific color range.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="editing-section editing-section--tool-panels" id="color-tools">
    <figure class="editing-figure editing-figure--panel">
      <img src="/images/pages/editing/color-grading-panel.webp" alt="Lightroom color grading wheels for midtones, shadows, and highlights." loading="lazy" />
      <figcaption>Color grading changes shadows, midtones, and highlights separately.</figcaption>
    </figure>
    <figure class="editing-figure editing-figure--panel">
      <img src="/images/pages/editing/color-mixer-panel.webp" alt="Lightroom color mixer panel with hue, saturation, and luminance controls for individual colors." loading="lazy" />
      <figcaption>The color mixer gives individual colors their own controls.</figcaption>
    </figure>
  </section>

  <section class="editing-section" id="software">
    <p class="editing-kicker">Software</p>
    <h2>Pick a Tool You Will Actually Use</h2>
    <p>
      Adobe Lightroom is a common professional default, but plenty of photographers dislike the subscription model or prefer another workflow. These are useful options to know about; research paid software before buying, because pricing and bundles change.
    </p>
    <div class="editing-software-grid" aria-label="Editing software options">
      <div>
        <span>Common default</span>
        <strong><a href="https://www.adobe.com/products/photoshop-lightroom/plans.html" target="_blank" rel="noopener noreferrer">Adobe Lightroom</a></strong>
        <p>Strong all-around photo workflow, especially for organizing, raw editing, and batch work. Desktop plans are paid.</p>
      </div>
      <div>
        <span>Mobile start</span>
        <strong><a href="https://www.adobe.com/products/photoshop-lightroom/mobile.html" target="_blank" rel="noopener noreferrer">Lightroom Mobile</a></strong>
        <p>Free mobile editor with limited capability compared with the full desktop ecosystem, but surprisingly useful for starting on a phone.</p>
      </div>
      <div>
        <span>Free / open source</span>
        <strong><a href="https://www.darktable.org/" target="_blank" rel="noopener noreferrer">darktable</a></strong>
        <p>Very powerful and free, but harder to learn. It can cover a lot of Lightroom-style workflow, though some AI masking and denoise tools differ.</p>
      </div>
      <div>
        <span>Free / open source</span>
        <strong><a href="https://rawtherapee.com/" target="_blank" rel="noopener noreferrer">RawTherapee</a></strong>
        <p>Free raw processing software in a similar general category to darktable.</p>
      </div>
      <div>
        <span>Professional paid</span>
        <strong><a href="https://www.captureone.com/en/pricing/capture-one-pro" target="_blank" rel="noopener noreferrer">Capture One</a></strong>
        <p>Professional Lightroom alternative with a different workflow and paid pricing.</p>
      </div>
      <div>
        <span>Professional paid</span>
        <strong><a href="https://www.dxo.com/dxo-photolab/" target="_blank" rel="noopener noreferrer">DxO PhotoLab</a></strong>
        <p>Professional alternative known especially for strong denoising tools.</p>
      </div>
      <div>
        <span>Free / pixel editor</span>
        <strong><a href="https://www.canva.com/newsroom/news/all-new-affinity/" target="_blank" rel="noopener noreferrer">Affinity</a></strong>
        <p>Now a free Canva-owned all-in-one design app. More Photoshop-like than Lightroom-like, but still useful for photo work.</p>
      </div>
      <div>
        <span>Free / camera brand</span>
        <strong>Manufacturer software</strong>
        <p>Most camera brands offer free software that works with their files, but these apps are often clunky.</p>
      </div>
    </div>
  </section>

  <section class="editing-section" id="guidelines">
    <p class="editing-kicker">General guidelines</p>
    <h2>Keep Your Taste Awake</h2>
    <p>
      Editing is subjective. The point here is not to force a recipe, but to give you concepts to consider. If a different approach feels right for your image, follow that.
    </p>
    <div class="editing-advice-grid" aria-label="Editing advice">
      <div>
        <span>01</span>
        <strong>Do not overcook it</strong>
        <p>Edit little, edit often. When you stare at one image for too long, your eye adapts and you may start making heavier edits than the photo needs.</p>
      </div>
      <div>
        <span>02</span>
        <strong>Play with the sliders</strong>
        <p>You will not always visualize what a slider does before moving it. Experimenting builds a better sense of where you want to take an image.</p>
      </div>
      <div>
        <span>03</span>
        <strong>Look for inspiration</strong>
        <p>Like every art form, photography improves when you look at other people's work. Find photographers whose edits you admire and study what they are doing.</p>
      </div>
      <div>
        <span>04</span>
        <strong>Do not just crank saturation</strong>
        <p>Trying to make every image more vibrant by raising global saturation often creates an artificial, overcooked look. Sometimes the image needs less color or brightness in the right places.</p>
      </div>
      <div>
        <span>05</span>
        <strong>Check black and white points</strong>
        <p>The white point is how bright the brightest whites are. The black point is how dark the darkest blacks are. A quick white frame around the photo can help you see if the whole image is too dark.</p>
      </div>
      <div>
        <span>06</span>
        <strong>Let shadows be shadows</strong>
        <p>Pulling every shadow up and every highlight down can create a flat HDR look. Cameras can let darkness stay natural, while phone processing often tries to even everything out.</p>
      </div>
    </div>
  </section>

  <section class="editing-callout" id="next">
    <p>
      A good edit should make the viewer feel the photograph more clearly. Start with crop and value, then color, then stop before the edit becomes the subject.
    </p>
  </section>
</div>
