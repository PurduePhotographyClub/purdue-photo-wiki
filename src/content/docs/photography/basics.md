---
title: Basics
description: Exposure, camera settings, dynamic range, and the first technical foundations to learn.
accent: sky
---

<div class="basics-page" id="basics-start">
  <section class="basics-hero">
    <div class="basics-hero__copy">
      <p class="basics-kicker">Camera settings without the soup.</p>
      <p class="basics-lead">
        Exposure is the first technical idea that makes a camera feel less mysterious.
      </p>
      <p>
        This page covers the exposure triangle, stops of light, aperture, shutter speed, ISO, dynamic range, noise, raw files, and the camera modes that help you control all of it without getting overwhelmed.
      </p>
      <p>
        It is dense by design. Read it once, go shoot, then come back when the settings start to feel connected.
      </p>
    </div>
    <figure class="basics-hero__image">
      <img src="/images/pages/basics/hero-light-beam.webp" alt="A bright orange beam of light breaking through clouds over water and mountains." loading="eager" />
      <figcaption>Photo by <a href="https://www.instagram.com/adrisangui" target="_blank" rel="noopener noreferrer">@adrisangui</a></figcaption>
    </figure>
  </section>

  <nav class="basics-map" aria-label="Basics page sections">
    <a href="#exposure-triangle">
      <span>01</span>
      <strong>Exposure Triangle</strong>
      <p>Aperture, shutter speed, ISO, and stops of light.</p>
    </a>
    <a href="#aperture">
      <span>02</span>
      <strong>Aperture</strong>
      <p>Light, depth of field, bokeh, and f-numbers.</p>
    </a>
    <a href="#shutter-speed">
      <span>03</span>
      <strong>Shutter Speed</strong>
      <p>Freezing action, motion blur, and long exposures.</p>
    </a>
    <a href="#iso">
      <span>04</span>
      <strong>ISO</strong>
      <p>Digital gain, noise, and when to raise it.</p>
    </a>
  </nav>

  <section class="basics-triangle" id="exposure-triangle">
    <div class="basics-triangle__copy">
      <p class="basics-kicker">The foundation</p>
      <h2>The Exposure Triangle</h2>
      <p>
        <span class="basics-term basics-term--amber">Aperture</span>, <span class="basics-term basics-term--sky">shutter speed</span>, and <span class="basics-term basics-term--rose">ISO</span> are the three settings photographers talk about most because they all change how bright the final image becomes. Your phone and camera can adjust them automatically, but learning what each one does gives you creative control.
      </p>
      <p>
        Think of <span class="basics-term basics-term--green">exposure as a balance</span>. If one setting lets in less light, another setting usually needs to give some back unless you intentionally want a darker image.
      </p>
      <div class="basics-stop-row" aria-label="Stop examples">
        <span><strong>+1 stop</strong> doubles the light</span>
        <span><strong>-1 stop</strong> halves the light</span>
        <span><strong>Same exposure</strong> can come from different settings</span>
      </div>
    </div>
    <figure class="basics-triangle__figure">
      <img src="/images/pages/basics/exposure-triangle.svg" alt="Exposure triangle diagram showing aperture, shutter speed, and ISO." loading="eager" />
    </figure>
  </section>

  <section class="basics-section basics-section--split" id="aperture">
    <div class="basics-section__copy">
      <p class="basics-kicker">Aperture</p>
      <h2>How Wide the Lens Opens</h2>
      <p>
        <span class="basics-term basics-term--amber">Aperture</span> is the size of the opening inside the lens. It is written as an <span class="basics-term basics-term--green">f-number</span>, such as f/1.4, f/2.8, f/5.6, or f/11. The confusing part is that a smaller f-number means a larger physical opening.
      </p>
      <p>
        A large opening lets in <span class="basics-term basics-term--amber">more light</span> and creates a <span class="basics-term basics-term--rose">shallower depth of field</span>. That means less of the scene is in focus, which is why portraits often have soft, blurry backgrounds. A smaller opening lets in less light but keeps more of the scene sharp.
      </p>
      <div class="basics-summary-grid" aria-label="Aperture summary">
        <div>
          <span>f/1.4 - f/2.8</span>
          <strong>Wide / fast</strong>
          <p>More light, more background blur, easier low-light shooting.</p>
        </div>
        <div>
          <span>f/8 - f/11</span>
          <strong>Stopped down</strong>
          <p>Less light, deeper focus, useful for landscapes and context.</p>
        </div>
      </div>
    </div>
    <figure class="basics-figure basics-figure--light">
      <img src="/images/pages/basics/aperture-lenses.webp" alt="Six lens openings labeled from f/1.4 to f/8.0." loading="lazy" />
      <figcaption>Source: <a href="https://en.wikipedia.org/wiki/Aperture" target="_blank" rel="noopener noreferrer">Wikipedia</a></figcaption>
    </figure>
  </section>

  <section class="basics-section basics-section--media-grid" aria-label="Depth of field examples">
    <figure class="basics-figure basics-figure--photo">
      <img src="/images/pages/basics/portrait-bokeh.webp" alt="Portrait with a soft, blurry background caused by shallow depth of field." loading="lazy" />
      <figcaption>Source: <a href="https://www.juliatrotti.com/portfolio1" target="_blank" rel="noopener noreferrer">Julia Trotti</a></figcaption>
    </figure>
    <div class="basics-panel">
      <h3>What Aperture Changes</h3>
      <ul>
        <li><strong>Exposure:</strong> wider apertures let in more light.</li>
        <li><strong>Depth of field:</strong> wider apertures make the focused zone thinner.</li>
        <li><strong>Lens size and price:</strong> very fast lenses are harder to design, so they are often bigger, heavier, and more expensive.</li>
      </ul>
      <p>
        Use wider apertures when you need light or want separation. Stop down when you need more of the scene to stay sharp.
      </p>
    </div>
    <figure class="basics-figure basics-figure--diagram">
      <img src="/images/pages/basics/depth-of-field-diagram.webp" alt="Diagram comparing depth of field from a wide aperture and a narrow aperture." loading="lazy" />
      <figcaption>Source: <a href="https://vanillavideo.com/articles/how-depth-of-field-occurs-optics/" target="_blank" rel="noopener noreferrer">Vanilla Video</a></figcaption>
    </figure>
  </section>

  <section class="basics-section basics-section--split basics-section--reverse" id="shutter-speed">
    <div class="basics-section__copy">
      <p class="basics-kicker">Shutter speed</p>
      <h2>How Long the Sensor Sees</h2>
      <p>
        <span class="basics-term basics-term--sky">Shutter speed</span> is measured in seconds or fractions of a second. It controls how long the camera collects light from the scene. A shutter speed of <span class="basics-term basics-term--green">1/500s lets in twice as much light as 1/1000s</span> because the sensor is exposed for twice as long.
      </p>
      <p>
        It also changes how motion looks. <span class="basics-term basics-term--sky">Fast shutter speeds freeze movement</span>. <span class="basics-term basics-term--rose">Slow shutter speeds let movement smear</span> into the frame.
      </p>
      <div class="basics-summary-grid" aria-label="Shutter speed summary">
        <div>
          <span>Fast</span>
          <strong>1/1000s+</strong>
          <p>Sports, wildlife, fast action, and sharp handheld moments.</p>
        </div>
        <div>
          <span>Slow</span>
          <strong>1/30s or longer</strong>
          <p>Intentional motion blur, moving water, light trails, and abstraction.</p>
        </div>
      </div>
    </div>
    <figure class="basics-figure basics-figure--photo">
      <img src="/images/pages/basics/motion-blur-birds.webp" alt="Flying birds rendered as soft motion blur against a blue background." loading="lazy" />
      <figcaption>Slow shutter speeds can make motion feel fluid instead of frozen. Source: <a href="https://www.instagram.com/p/BuZsN2pHiKF" target="_blank" rel="noopener noreferrer">@natgeoyourshot</a></figcaption>
    </figure>
  </section>

  <section class="basics-band">
    <figure class="basics-band__image">
      <img src="/images/pages/basics/creative-motion-portrait.webp" alt="Portrait seen through soft motion blur and glassy distortion." loading="lazy" />
      <figcaption>Photo by <a href="https://www.instagram.com/teo_crawford" target="_blank" rel="noopener noreferrer">@teo_crawford</a></figcaption>
    </figure>
    <div>
      <p class="basics-kicker">Try it on purpose</p>
      <h3>Blur Is Not Always a Mistake</h3>
      <p>
        Sharpness is useful, but blur can be expressive. If you are photographing concerts, street scenes, cars, water, or people moving through light, try a slower shutter speed and see what kind of rhythm appears.
      </p>
    </div>
  </section>

  <section class="basics-section basics-section--image-below" id="iso">
    <div class="basics-section__copy">
      <p class="basics-kicker">ISO</p>
      <h2>Brightness After the Sensor</h2>
      <p>
        <span class="basics-term basics-term--rose">ISO</span> is a holdover term from film speed. In digital photography, it behaves like <span class="basics-term basics-term--amber">gain</span>: the camera amplifies the signal from the sensor so the image becomes brighter.
      </p>
      <p>
        Raising ISO is useful when you cannot open the aperture more or slow the shutter speed without ruining the shot. The tradeoff is <span class="basics-term basics-term--rose">noise</span>, especially in darker areas.
      </p>
      <div class="basics-summary-grid" aria-label="ISO summary">
        <div>
          <span>Lower ISO</span>
          <strong>Cleaner files</strong>
          <p>Best when you already have enough light.</p>
        </div>
        <div>
          <span>Higher ISO</span>
          <strong>More noise</strong>
          <p>Useful when the shot matters more than a perfectly clean file.</p>
        </div>
      </div>
    </div>
    <figure class="basics-figure basics-figure--light">
      <img src="/images/pages/basics/iso-noise-comparison.webp" alt="Comparison image showing ISO 200 with less noise and ISO 3200 with more noise." loading="lazy" />
      <figcaption>Source: <a href="https://photographylife.com/what-is-iso-in-photography" target="_blank" rel="noopener noreferrer">Photography Life</a></figcaption>
    </figure>
  </section>

  <section class="basics-section" id="dynamic-range">
    <p class="basics-kicker">Dynamic range and noise</p>
    <h2>Why Cameras Handle Harsh Light Differently</h2>
    <p>
      <span class="basics-term basics-term--green">Dynamic range</span> is the distance between the darkest and brightest parts of a scene before detail starts getting lost. It is measured in <span class="basics-term basics-term--amber">stops</span>. A camera with more dynamic range gives you more room to <span class="basics-term basics-term--sky">recover shadows and highlights</span> later.
    </p>
    <p>
      This is one reason larger dedicated cameras often handle difficult light better than phones, even though phones have improved dramatically through larger sensors and computational processing.
    </p>
    <div class="basics-chart-grid">
      <figure class="basics-figure basics-figure--light basics-figure--chart">
        <img src="/images/pages/basics/dynamic-range-chart.webp" alt="Chart comparing photographic dynamic range across ISO settings for an iPhone 14 Pro Max and Canon EOS R5." loading="lazy" />
        <figcaption>Source: <a href="https://www.photonstophotos.net/Charts/PDR.htm" target="_blank" rel="noopener noreferrer">Photons to Photos</a></figcaption>
      </figure>
      <figure class="basics-figure basics-figure--photo">
        <img src="/images/pages/basics/shadow-noise-example.webp" alt="Coastal image with visible noise in dark underexposed shadows." loading="lazy" />
        <figcaption>Underexposed shadows can become noisy when lifted in editing.</figcaption>
      </figure>
    </div>
    <div class="basics-note" id="raw-vs-jpg">
      <strong>Raw vs. JPG</strong>
      <p>
        One of the best ways to squeeze more out of your camera is to shoot in Raw, which you can usually enable in the camera's image-quality settings. Many cameras let you choose JPEG, Raw, or Raw + JPEG.
      </p>
      <p>
        Rendered image files such as JPG, PNG, and HEIF are already processed. JPEGs are compressed, lossy files that mostly contain the finished look the camera creates when you open the image in a viewer. <span class="basics-term basics-term--green">Raw files keep more sensor information</span>, which gives you more room to adjust exposure, recover shadow detail, tame bright highlights, and make color decisions later in Lightroom or another editor. If you use an iPhone that supports it, you can also shoot <a href="https://support.apple.com/es-es/guide/iphone/iphae1e882a3/ios" target="_blank" rel="noopener noreferrer">Apple ProRAW</a>.
      </p>
      <p>
        The tradeoff is that Raw files can look flatter before editing because they bypass much of the camera's internal JPEG color processing, and they are usually much larger. Shoot Raw if you like to edit, or JPEG if you prefer to leave your photos mostly untouched. It is also perfectly fine to edit JPEGs; you can easily get by without Raw unless you need heavier post-processing in high dynamic range scenes.
      </p>
      <p>
        Raw is not magic, though. In extreme contrast, you still need to decide whether highlights, shadows, or a middle exposure matter most. For a deeper walkthrough, watch <a href="https://www.youtube.com/watch?v=wrckVlY5vwU" target="_blank" rel="noopener noreferrer">Raw vs. JPEG</a>.
      </p>
      <div class="basics-video">
        <iframe
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

  <section class="basics-section" id="putting-it-together">
    <p class="basics-kicker">Putting it together</p>
    <h2>Many Settings Can Create the Same Brightness</h2>
    <p>
      Suppose a scene looks properly exposed at <span class="basics-term basics-term--amber">f/2.8</span>, <span class="basics-term basics-term--sky">1/1000s</span>, <span class="basics-term basics-term--rose">ISO 200</span>. You can keep the same overall brightness with different tradeoffs:
    </p>
    <div class="basics-equivalents" aria-label="Equivalent exposure examples">
      <div>
        <span>Starting point</span>
        <strong>f/2.8 - 1/1000s - ISO 200</strong>
        <p>Wide aperture, fast shutter, clean ISO.</p>
      </div>
      <div>
        <span>Same exposure</span>
        <strong>f/4 - 1/500s - ISO 200</strong>
        <p>One stop less aperture light, one stop more shutter time.</p>
      </div>
      <div>
        <span>Same exposure</span>
        <strong>f/11 - 1/1000s - ISO 3200</strong>
        <p>Much deeper focus, but ISO rises to compensate.</p>
      </div>
    </div>
    <p>
      <span class="basics-term basics-term--amber">Aperture</span> and <span class="basics-term basics-term--sky">shutter speed</span> change the creative character of the photo. <span class="basics-term basics-term--rose">ISO</span> mostly helps you reach the exposure when the other two settings are already constrained.
    </p>
  </section>

  <section class="basics-section basics-section--image-below" id="camera-modes">
    <div class="basics-section__copy">
      <p class="basics-kicker">Camera modes</p>
      <h2>You Do Not Need Full Manual</h2>
      <p>
        Many cameras have <span class="basics-mode-letter basics-mode-letter--program">P</span>, <span class="basics-mode-letter basics-mode-letter--aperture">A</span>, <span class="basics-mode-letter basics-mode-letter--shutter">S</span>, and <span class="basics-mode-letter basics-mode-letter--manual">M</span> on the mode dial. These stand for <span class="basics-term basics-term--amber">Program</span>, <span class="basics-term basics-term--green">Aperture Priority</span>, <span class="basics-term basics-term--sky">Shutter Priority</span>, and <span class="basics-term basics-term--rose">Manual</span>. They decide which settings you control and which settings the camera meters automatically.
      </p>
      <p>
        A great beginner setup is <span class="basics-term basics-term--green">Aperture Priority with Auto ISO</span>. You choose the <span class="basics-term basics-term--amber">aperture</span> for the look you want, and the camera handles <span class="basics-term basics-term--sky">shutter speed</span> and <span class="basics-term basics-term--rose">ISO</span> within the limits you set.
      </p>
    </div>
    <div class="basics-table-wrap">
      <table class="basics-mode-table">
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

  <section class="basics-callout" id="next">
    <p>
      The technical details are here to serve the photo, not swallow the hobby. Take what helps, then go make pictures. Next, read <a href="/photography/anatomy-of-a-camera/">Anatomy of a Camera</a> to learn what the body, lens, sensor, viewfinder, and controls actually do.
    </p>
  </section>
</div>
