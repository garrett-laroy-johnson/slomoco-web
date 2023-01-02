---json
{
"metadata": {
  "title": "hello? are you there? can you hear me?",
  "subtitle" : "praxis-in-progress",
  "author": "Fidelia Lam",
  "type": "microresidency",
  "phase": "spring",
  "description": "How is anticipation, as a form of movement, facilitated by and captured in and through digital technologies? This micro-residency suggests that what appears as stillness or stasis (non-movement) in anticipation we might, can, and do understand as a form of movement. There may not be noticeable physical change (as measured or captured by technological devices), but anticipation-as-movement is still experienced through sensory, affective, and somatic dimensions. What does it mean to be in a perpetual state of anticipation? The events of the last year have placed us in a perpetual state of anticipation on multiple scales — waiting for Zoom calls to connect, wondering when it will be safe to leave our homes again, when the pandemic will be “over”, and if nations will succumb to authoritarian and fascist regimes. This extended state of suspension (which is still ongoing) has shifted our expectations of conceiving of what is possible and what might and could happen. At a micropolitical scale, it is found in the distant coldness of dropped Zoom frames, too-long static silences, in the endless cycle of jumping between phone, laptop, TV, tablet, and countless social media and news platforms. How can we access these “breaks” and “failings” as holding their own movement and time?",
  "img": "/img/sejo.jpg",
  "links" : [{
  "title": "fidela lam website",
  "link": "https://fidelialam.com/"}]},
"resources": [{
  "title": "... | h?ayt?cyhm?",
  "type" : "vimeo",
  "description": "6/8 in a series of macro-micro pieces for DesignSpace micro-residency exhibition, interspersed between the other presentations In considering “digital stasis” and anticipation-as-movement, I’ve been thinking about where these moments are located as well as what is held in them. Part of what is so potent in these moments is their durational nature — often micropolitical, emergent, liminal, fleeting — and how they speak to expectations, desires, and uncertainties that are always in-relation, yet mediated through and facilitated by digital technologies. Another facet of these moments then, is the ways in which those expectations and desires are attended to, whether they are met or left unfulfilled, and what that means for our experiences of (digital) anticipation and expectation.",
  "id" : "536504554"},
  {}]
}
---

<style>
  .masthead {
    height: 30vh;
    min-height: 200px;
    background-image: url({{ metadata.img }});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>

<div class="masthead">
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 text-center">
        <h1 class="text-light">
          {{ metadata.title }} // {{ metadata.author }}
        </h1>
        <p class="text-light">{{metadata.subtitle}}</p>
      </div>
    </div>
  </div>
</div>
<hr>
<div class="row">
  <div class="col-6">
    <h4>about</h4>
    <p>{{ metadata.description }}</p>
    <p>
      <span class="badge badge-primary">
        {{ metadata.phase }} {{ metadata.type }}
      </span>
    </p>
  </div>

  <div class="col-6 bg-light">
    <h4>links</h4>
{% for el in metadata.links %}
<div>
<a href = "{{el.link}}">{{ el.title }}</a> 
</div>
{% endfor %}
 {%- if re.socials -%} 
  <h4>social</h4>
    {%- endif -%}
<h4>social</h4>
{% for social in metadata.socials %}
<div>
<a href = "{{social.link}}">{{ social.title }}</a> 
</div>
{% endfor %}
  </div>
</div>

<div class="row">
  <h4>resources:</h4>
  {% for re in resources %}
  <div class="col-3 bg-light" style="border-style: solid">
    <h4>{{ re.title }}</h4>
    <p>description: {{ re.description }}</p>
    {%- if re.type == "link" -%} 
        <a href = "{{ re.url }}"><button type="button" class="btn btn-outline-info">Link</button></a>
    {%- endif -%}
  </div>
  {% endfor %}
</div>
