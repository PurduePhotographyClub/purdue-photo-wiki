---
title: "Basics"
accent: amber
---

<figure class="overflow-hidden border border-white/10"><img src="/images/notion/cover-2637b3bf66c3809f8fafd40a438210b3.png" width="3840" height="2560" alt="" class="max-h-72 w-full object-cover" decoding="async" fetchpriority="high" /></figure>

In this section, you’ll learn about the basics of photography, such as the exposure triangle (aperture, shutter speed, ISO), dynamic range, depth of field, and more. This page is aimed at beginner to intermediate photographers who want to either learn a new set of skills, or freshen up on and strengthen the foundations of their knowledge. This is probably the most content-dense article on this wiki, so you may want to split it up to process the knowledge. <b>But, if you are serious about learning photography, do not skip this</b> <b>article</b>, as it contains the foundations of everything you need to know. Feel free to ask any clarifying questions in the #questions-and-help channel in the discord.

Below is a table of contents that can take you to a specific topic that you want to learn about. Otherwise, the page is laid out in the recommended sequence to read through.

<div class="my-8 border-l-2 border-white/20 bg-white/[0.03] px-5 py-4">

<b>Table of Contents</b>

<nav aria-label="Table of Contents">

- [The Exposure Triangle](#the-exposure-triangle)
  - [How light is measured](#how-light-is-measured)
  - [Aperture](#aperture)
    - [Introduction](#introduction)
    - [What does aperture do?](#what-does-aperture-do)
    - [What aperture should I use?](#what-aperture-should-i-use)
    - [In summary:](#in-summary)
  - [Shutter Speed](#shutter-speed)
    - [Introduction](#introduction)
    - [What does shutter speed do?](#what-does-shutter-speed-do)
    - [What shutter speed should I use?](#what-shutter-speed-should-i-use)
    - [In summary:](#in-summary)
  - [ISO](#iso)
    - [Introduction](#introduction)
    - [What does ISO do?](#what-does-iso-do)
    - [What ISO should I use?](#what-iso-should-i-use)
    - [In summary:](#in-summary)
- [Dynamic Range and Noise](#dynamic-range-and-noise)
- [Putting it all together](#putting-it-all-together)
  - [Getting a Good Exposure](#getting-a-good-exposure)
- [Conclusion](#conclusion)

</nav>

</div>

---

## The Exposure Triangle

You’ve probably heard of at least one of these terms in your life: <b>aperture</b>, <b>shutter speed</b>, and <b>ISO</b>. But what do all of these mean?

Each of these three settings in every camera adjusts your exposure - the total amount of light being let through (this is not entirely correct, but it is helpful to think about it this way). Your phone automatically adjusts the settings in the exposure triangle to correctly exposure your scene. For example, it could set the ISO to 200, the shutter speed to 1/1000th of a second, and the aperture to f/2.8, all without you making any inputs. This is called <b>Auto</b> mode on cameras. When you tap your screen on a phone and drag the slider up/down, you’ll notice that the entire image either becomes darker or brighter. Using this slider overrides the algorithm in case it doesn’t do entirely what you want it to do, and it adjusts the settings accordingly.

### How light is measured

There isn’t much of an easy way to exactly quantify the amount of light hitting the sensor, so we use exposure values, or EV, which represents the luminance of our scene. EVs are on a log base 2 scale, meaning that every +1EV is a doubling in exposure, meaning that the amount of light is doubled, and for every -1EV we halve our light. However, in photography we are only concerned with measuring relative light in stops, which works the same way: +1 stop = 2x the light, -1 stop = 0.5x the light.

<div class="my-8 border-l-2 border-white/20 bg-white/[0.03] px-5 py-4">

### Aperture

#### Introduction

Aperture is a measure of how large the entrance pupil of a lens is, and is measured in f-stops. If you don’t know what the entrance pupil is, just imagine it to be the circle through which light is gathered in the lens (it doesn’t necessarily need to be the front element of a lens).

<figure>
<img src="/images/notion/2667b3bf-66c3-808e-860e-cd11fc67abd4-Lenses_with_different_apertures.jpg" width="1200" height="765" alt="https://en.wikipedia.org/wiki/Aperture" loading="lazy" decoding="async" />
<figcaption><a href="https://en.wikipedia.org/wiki/Aperture">https://en.wikipedia.org/wiki/Aperture</a></figcaption>
</figure>

F-stops, as can be seen above, are represented by $f/n$, with a larger $n$ referring to a <b>smaller</b> opening, and a smaller $n$ referring to a <b>larger</b> opening. This is because the mathematical equation for aperture is $n=f/D$ or $D=f/n$, where D is the diameter of the opening, $f$ is the focal length (this will be discussed later), and $n$ is the f-number. Because of this confusion, using terms like “big” or “small” can sometimes be confusing when discussing aperture. Thus, many photographers will refer to lenses with small minimum f-numbers as “fast” lenses, while lenses with larger minimum f-numbers are referred to as “slow.”

Unlike shutter speed or ISO, a doubling of the aperture doesn’t correlate to a doubling in exposure. Instead, because the area of a circle is dependent on $r^2$, a doubling in exposure corresponds to a multiplication of the f-number by $\sqrt2$, which can be seen above. F-numbers are always rounded for simplicity. When a lens is kept at its minimum aperture, it is called “wide open”. The reasoning for this will be discussed later on, but for now, keep this in mind. This article will continue to use the f-number when referring to aperture for clarity - just remember, the number is inversely proportional to the diameter. For the future, whenever aperture is mentioned, we will follow normal convention, where “large aperture” or “fast” will refer to lenses with smaller f-numbers.

Lenses are usually marked with their maximum aperture, such as f/1.4. However, this aperture can be adjusted through the camera (many old film-era lenses have mechanical aperture rings) to increase the f-number. This is referred to as stopping down.

#### What does aperture do?

A lens with a smaller f-number (a faster lens), does 2 things:

1. Lets in more light
2. Decreases the depth of field

It follows from intuition that if the diameter of the lens is physically wider, it will probably bee able to capture more light. If this sounds familiar, this is exactly how our pupils work. When we’re in dark environments our pupils dilate for better night vision, and when we’re in bright environments, they constrict to protect our sight. Lenses with small f-numbers are better for low light, such as at concerts, at night, or even just indoors (indoor lighting is much darker than you would expect, especially without much natural light).

Decreasing the depth of field is a little more tricky to understand. Whenever you point your camera at something and focus at a certain distance, it creates a plane of focus at that distance which is normal to where you are pointing your camera. The further away an object is from that plane, the more blurry it will be. You’ve obviously noticed how professional cameras/lenses are able to create bokeh, which is the term for the satisfying, blurry mess of the areas that are out of focus. This is a very common sight in portraits.

<figure>
<img src="/images/notion/2667b3bf-66c3-8059-b0d3-d4c734f03ae9-photographysydney_10.webp" width="1500" height="1000" alt="https://www.juliatrotti.com/portfolio1" loading="lazy" decoding="async" />
<figcaption><a href="https://www.juliatrotti.com/portfolio1">https://www.juliatrotti.com/portfolio1</a></figcaption>
</figure>

One thing to note is that people often say that a fast lens (one with a small minimum f-number) will give you a lot of depth of field. While this is true if you stop down, what they actually mean is that it will give you the ability to create a very shallow depth of field. The shallower the depth of field, the more bokeh you can get in your backgrounds and foregrounds. Any lens can stop down to a larger f-number, but few can open as wide as f/1.2.

But why does decreasing the f-number decrease the depth of field, and vice versa?

<figure>
<img src="/images/notion/2667b3bf-66c3-801d-a7b3-f989a1f83bde-narrow-vs-wide.jpg" width="600" height="300" alt="https://vanillavideo.com/articles/how-depth-of-field-occurs-optics/" loading="lazy" decoding="async" />
<figcaption><a href="https://vanillavideo.com/articles/how-depth-of-field-occurs-optics/">https://vanillavideo.com/articles/how-depth-of-field-occurs-optics/</a></figcaption>
</figure>

As you can see in this diagram, the height of the depth of field markings are the same, but occur at different distances. With a narrower aperture (larger f-number), we can see that the range in which an object is in acceptable focus becomes larger.

So why don’t all lenses have small minimum f-numbers? Because these types of lenses, usually f/1.4, f/1.2, or f/0.95 are much harder engineering challenges for the designers. These lenses are almost always more expensive, heavier and larger, and sometimes have worse image quality than mid-range lenses with less extreme apertures.

#### What aperture should I use?

It depends on what you’re shooting. Portraits will usually be shot wide open, but stopping down can help in many situations where you want to include more context in your scene (the background will be less blurry and more recognizable). Landscapes are usually shot at very large f-numbers, such as f/11, to keep the entire scene in focus. Lenses are also usually sharper (along with other image quality benefits) the more you stop down until about f/16\* or so, at which point diffractions starts to occur and degrades your image quality. In areas with less light, you want to keep your f-number as low as your depth of field allows.

#### In summary:

1. Small f-number = large physical opening
2. Small f-number = shallower depth of field, more bokeh, more light
3. Large f-number = deep depth of field, less bokeh, less light

<span class="text-neutral-400">\*This number applies to full-frame, but is different with other sensor formats. Don’t worry if this doesn’t make sense just yet.</span>

</div>

<div class="my-8 border-l-2 border-white/20 bg-white/[0.03] px-5 py-4">

### Shutter Speed

#### Introduction

Shutter speed is much more simple than aperture. It is measured in seconds, and determines how long the camera’s sensor will be exposed to your scene. Speeds usually cap out at around 1/8000s or 1/4000s for mechanical shutter, and the max on the other end can vary by camera.

Each doubling of your shutter speed will double your exposure. For example, a shutter speed of 1/500s will let in twice as much light as 1/1000s.

#### What does shutter speed do?

A faster shutter speed will allow you to freeze movement better, while a slower shutter speed will allow you to have more motion blur in your photo. Either of these may or may not be desirable, depending on what you’re shooting.

Importantly, faster shutter speeds (correlating to a smaller number) will allow less light to reach your sensor, while slower shutter speeds allow more light. This is very important for balancing exposure, as photons will continue to hit the sensor if its kept exposed, eventually turning it into pure white. If not enough photons hit the sensor, there won’t be enough light information to make out anything in the image.

#### What shutter speed should I use?

Usually, shutter speed doesn’t matter too much for day-to-day scenes with not much motion, and you won’t be able to tell the difference between 1/8000s and 1/100s. However, there are some genres of photography for which shutter speed is perhaps the most important element of all: namely, sports and wildlife. For them, freezing action is crucial, and they usually want to shoot at shutter speeds of 1/1000s or faster. For landscape photographers, sometimes they may want to use long exposures for moving water to create those silky smooth streaks that are often seen in waterfall photos.

Don’t be afraid to experiment, however! Many photographers like to use slow shutter speeds in creative ways to create unique, striking images with a more abstract style.



<div class="notion-columns my-8 grid gap-6 md:grid-cols-2">

<div class="min-w-0 space-y-5">

<figure>
<img src="/images/notion/2697b3bf-66c3-806b-b663-f72964d21ef4-image.png" width="1086" height="1454" alt="https://www.instagram.com/adrisangui" loading="lazy" decoding="async" />
<figcaption><a href="https://www.instagram.com/adrisangui">https://www.instagram.com/adrisangui</a></figcaption>
</figure>

</div>

<div class="min-w-0 space-y-5">

<figure>
<img src="/images/notion/2697b3bf-66c3-80b7-b60c-c28369a758e1-image.png" width="1160" height="770" alt="https://www.instagram.com/teo\_crawford" loading="lazy" decoding="async" />
<figcaption><a href="https://www.instagram.com/teo_crawford">https://www.instagram.com/teo\_crawford</a></figcaption>
</figure>

<figure>
<img src="/images/notion/2697b3bf-66c3-801e-8e82-f1b38bc0dbb9-image.png" width="1464" height="968" alt="https://www.instagram.com/p/BuZsN2pHiKF" loading="lazy" decoding="async" />
<figcaption><a href="https://www.instagram.com/p/BuZsN2pHiKF">https://www.instagram.com/p/BuZsN2pHiKF</a></figcaption>
</figure>

#### In summary:

1. Faster shutter speed = freeze motion, less light
2. Slower shutter speed = motion blur, more light

</div>

</div>

</div>

<div class="my-8 border-l-2 border-white/20 bg-white/[0.03] px-5 py-4">

### ISO

#### Introduction

The first question on your mind might be, “What does ISO stand for?”

It doesn’t actually mean anything, really. It’s a holdover term from film photography, when it was used to refer to the speed of a film (how sensitive to light it was). It does stand for International Standards Organization, but it doesn’t really make sense to say, “My photo was shot at International Standards Organization 6400.” So just don’t overthink it, and treat ISO as its own special word.

Each doubling of the ISO value doubles the exposure of your image. For example ISO 400 will capture twice as much light as ISO 400, which will capture twice as much light as ISO 200.

#### What does ISO do?

In digital photography, ISO is simply a digital gain on your image - it takes the signal from your camera’s sensor and multiplies the information, resulting in a brighter final result\*. Practically, this has a similar effect to increasing the amount of light you let in, similar to what opening up your aperture or decreasing your shutter speed do. However, of course this is only amplifying existing information, not providing additional information. This is why some people say that the exposure triangle isn’t really a triangle, and is just composed of the shutter speed and aperture. Your camera’s iso range can vary, but the Sony A7iv (what many would consider a benchmark professional camera) has a native iso range from 100-51,200.

The general rule of thumb is that the higher the iso, the more noise in your image. This is not a perfect explanation, but suffices for most applications.

<figure>
<img src="/images/notion/26a7b3bf-66c3-80d0-978a-c7a5d2e55335-ISO-200-and-ISO-3200.jpg" width="960" height="318" alt="https://photographylife.com/what-is-iso-in-photography" loading="lazy" decoding="async" />
<figcaption><a href="https://photographylife.com/what-is-iso-in-photography">https://photographylife.com/what-is-iso-in-photography</a></figcaption>
</figure>

#### What ISO should I use?

You should always be using the lowest ISO as possible for you to achieve your shot. What this number is depends on your other two settings, shutter speed and aperture. Continue reading the rest of this article, and in [Putting it all together](/photography/basics/#putting-it-all-together), we will finally put all of this knowledge together to achieve the perfect exposure.

#### In summary:

1. Higher ISO = more noise, increased exposure
2. Lower ISO = less noise, decreased exposure

<span class="text-neutral-400">\*If you’re a little more advanced with photography, you might be asking what the noise difference is between shooting at a low ISO and boosting it in post vs. shooting at a matching high ISO. The difference comes from when the gain is applied - with iso, it is applied to the analog signal </span><i><span class="text-neutral-400">before</span></i><span class="text-neutral-400"> the analog-to-digital conversion. However, some sensors actually do have no noise difference between the two strategies. These are called iso-invariant sensors.</span>

</div>

## Dynamic Range and Noise

Every camera’s sensor has a certain dynamic range, which is measured in stops. It represents the ratio between the darkest and brightest parts of a scene before the information starts being lost. The bigger the sensor, generally the greater the dynamic range. For example, take a look at this chart from [Photons to Photos](/photography/helpful-resources/#entry-2637b3bf66c380ae8f5de78188f3bcfa) comparing the iPhone 14 Pro Max to the Canon R5, a professional full-frame camera. The R5’s sensor has approximately 11.5x more area than that of the phone’s.

<span class="text-neutral-400">(Ignore the open triangles - I’m not entirely sure why the trend starts following a straight line, but it definitely does not ever outperform the R5.)</span>

<figure>
<img src="/images/notion/26a7b3bf-66c3-8004-9f08-d2e2acf9023e-image.png" width="2243" height="1296" alt="https://www.photonstophotos.net/Charts/PDR.htm" loading="lazy" decoding="async" />
<figcaption><a href="https://www.photonstophotos.net/Charts/PDR.htm">https://www.photonstophotos.net/Charts/PDR.htm</a></figcaption>
</figure>

This is partially why actual cameras perform so much better than phones. However, in recent years phones have been catching up through cramming in larger sensors and various computational methods.

Noise refers to the graininess of photos captured without proper exposure. Below is a crop of an image where the shadows were severely underexposed, and then brought up by several stops in editing. This was shot with a camera with a poor dynamic range in an extremely difficult scene, and so there isn’t much latitude for pulling up the shadows in post.

<figure>
<img src="/images/notion/26a7b3bf-66c3-80e8-9d3a-ef41ef0cd895-image.png" width="1562" height="908" alt="" loading="lazy" decoding="async" />
</figure>

## Putting it all together

Now its time to put all of this knowledge together, and hopefully make it clearer if you’re confused about certain parts.

Every pixel in a scene has a different exposure value, but you can only globally adjust your exposure via the exposure triangle: aperture, shutter speed, and ISO. It is your job, along with the camera’s automatic metering, to make sure that these settings are adjusted accordingly. For example. lets say I shoot a scene at f/2.8, 1/1000s, ISO 200, and it is properly exposed. That is, the whole image isn’t too dark or too bright. I can also achieve the exact same exposure with f/4, 1/500s, ISO200, because I’m losing a stop of light by closing down my aperture, but doubling my shutter speed. I can also achieve the same thing by shooting at f/11, 1/1000s, ISO 3200. It’s similar to an equation, $ABC = E$ where A, B, and C are the exposure triangle, and E is the exposure we want for our scene. If E is held constant and I increase any of the parameters, the other parameters will have to decrease to compensate.

So there are many ways to achieve the same exposure. But which one do I choose? This depends on your subject, and it would be helpful to revisit the sections of “What aperture/shutter speed/ISO should I use?” in the previous parts. Essentially, aperture and shutter speed are the only two settings that adjust the creative effect of your photo, while ISO is mainly just a tool to help you get to that exposure. For aperture, you can adjust how much of your photo you want to be in focus, while for shutter speed you can adjust the way movement is captured.

---

<div class="my-8 border-l-2 border-white/20 bg-white/[0.03] px-5 py-4">

<i>Okay, so I have 3 settings to control when taking a picture and I now understand what each of them does. But how should I control these in my camera?<br /><br /></i>On one of the dials on your camera (this should apply to almost every modern digital camera), you should notice the letters P, A, S, and M, along with some other settings. These stand for Program, Aperture Priority, Shutter Priority, and Manual.

1. <b>Program</b> - Camera adjusts aperture and shutter speed automatically.
2. <b>Aperture Priority</b> - You adjust aperture manually; camera adjusts shutter speed automatically.
3. <b>Shutter Priority </b>- You adjust shutter speed manually; camera adjusts aperture automatically.
4. <b>Manual</b> - You adjust shutter speed and aperture manually.

ISO is separate from these modes, and can be adjusted manually or set to auto through the menus.

<div class="my-7 max-w-full overflow-x-auto" tabindex="0" role="region" aria-label=" / Auto aperture / Auto shutter speed">
<table>
<thead><tr><th scope="col"></th><th scope="col">Auto aperture</th><th scope="col">Auto shutter speed</th></tr></thead>
<tbody>
<tr><td>Program</td><td>✅</td><td>✅</td></tr>
<tr><td>Aperture Priority</td><td>❌</td><td>✅</td></tr>
<tr><td>Shutter Priority</td><td>✅</td><td>❌</td></tr>
<tr><td>Manual as</td><td>❌</td><td>❌</td></tr>
</tbody>
</table>
</div>

Using these modes, you can choose which part of your photo you want the most control over, without being overwhelmed.<br /><br />There is a common myth that real photographers use full manual mode, and that if you want to be good, so should you. <b>This is completely wrong</b>, and most photographers do not use manual. There is nothing wrong with manual mode, but it is simply too much to control for most situations. Personally, I would recommend using aperture priority with auto ISO, meaning that you only need to adjust one parameter of the exposure triangle: the aperture. In my opinion, this is the setting that has the most impact on your photos. In 95% of situations, you want the fastest shutter speed possible, or at least a fast enough shutter speed to get a sharp photo that freezes motion. For example, if I’m shooting a portrait, I don’t care if my shutter speed is 1/2000s, 1/500s, or 1/100s, as long as it isn’t blurry. However, I do care much more about the aperture. If I want focus only on the subject, I will increase my aperture as much as possible to blow out the background. If I’m doing more of an environmental portrait, where I want the background to add context to the scene, I will stop the lens down a bit more, so the background is more recognizable.

<br />For more information on how to adjust settings in your camera, visit [Anatomy of a Camera](/photography/anatomy-of-a-camera/).

</div>

### Getting a Good Exposure

While your camera’s built-in metering will usually do a good job, it might not do what you want all the time. In these situations, you want to use exposure compensation, which can be adjusted through a dial. Exposure compensation simply tells your camera, “adjust my exposure for ±X EV”, so it will increase or decrease the exposure by however much you want it to.

Generally, cameras have a lot more dynamic range than you think they do when you <b>shoot in raw. </b>The pictures that you capture on your phone and interact with on a daily basis are JPGs (or PNGs or HEIFs or what have you.) This means that you get what you see: the file only stores the values of the actual pixels. On cameras (and even on your phone!) it’s a good idea to consider shooting your photos in a raw format, meaning that the file holds all the raw digital information captured from the sensor. This means that you have more room to push and pull the image, and recover detail in shadows that would otherwise look black. This way, you can have much better control over your editing, as well as capture more dynamic range.

However, in tough situations even raw files are still not enough. For example, if you sit in your room during the day with the lights off and point your camera at the window, you’ll notice that your camera will most likely darken the entire image so that the window will look normal, but at detail in your room is lost to the shadows. This is because the camera is <b>exposing for the highlights, and crushing the blacks. </b>This means that the settings are adjusted to properly expose if you were out in bright daylight - but this means that it is severely underexposing relative to in doors. Similarly, if you point your camera way from the window so that it isn’t the center of your scene, the camera will expose for the interior, meaning that it’s <b>exposing for the shadows, and blowing out the highlights. </b>Now the window should look like pure white, and the rest of your scene will look better.

All this means that in situations with tough lighting conditions (wide range of light levels), you have to make a choice. Either you expose for the highlights, expose for the shadows, or choose somewhere in between. This depends on what information is more important to you, and how much latitude your camera has to pull information out of overexposed highlights or underexposed shadows.

## Conclusion

Photography is deeply interlinked with technology, but it depends on you how much you want to focus on it. Maybe you want to be free as much as possible from the technical details, and focus only on the creative side. Maybe you’re very interested in the technical aspects, and want to maximize your photography technique as best as possible. Both of these approaches are equally valid, and you shouldn’t feel bad for following one or the other.

This article has been very complex, and it is okay if some of it completely flew over your head. If needed, go out and take some pictures to get a feel for it; if you think you don’t need this knowledge in your workflow, that’s perfectly fine. Take as much from this page as you want to.

<div class="my-8 border-l-2 border-white/20 bg-white/[0.03] px-5 py-4">

If you want to keep reading and learn how to use your camera better, continue on to [Anatomy of a Camera](/photography/anatomy-of-a-camera/), where we will discuss what the buttons and dials on a camera do, how a camera works, and what settings you might want to adjust.

</div>
