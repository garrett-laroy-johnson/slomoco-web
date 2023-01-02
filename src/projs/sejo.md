---json
{
"metadata": {
  "title": "quidanz technique",
  "subtitle" : "computational transformation of movement sequences",
  "author": "sejo",
  "type": "microresidency",
  "phase": "fall",
  "description": "qiudanz technique is a movement practice based on the computational transformation of movement sequences. its purpose is to create and share dances based on abstract computational machines. it is part of a commitment to preserve computer science beyond electronics and industrial civilization.",
  "img": "/img/sejo.jpg",
"links" : [{
  "title": "compudanzas website",
  "link": "https://compudanzas.net/"},
  {"title": "quidanz devlog",
  "link": "https://compudanzas.net/qiudanz_devlog.html"}
],
"socials" : [
{
  "title": "mastadon",
  "link" : "https://post.lurk.org/@compudanzas"
  },
    {
  "title" : "instagram",
  "link" : "https://www.instagram.com/compudanzas/"
  }]
  },
"resources": [{
  "title": "[demo] qiudanz miniworkshop: conversation game",
  "type" : "link",
  "description": "in this video we are playing a game where each person performs a movement sequence that arises from applying a valid operation to the movement sequence performed by the previous one. the movements and operations are from qiudanz technique mode 1.",
  "url" : "https://spectra.video/w/oV7RnBWZr7Zat2gbX1Mbkt"},
  {
  "title": "intro to qiudanz technique mode 1",
  "description": "this introductory video demonstrates the principles of qiudanz technique mode 1 so that you can learn and practice it complementing the written notes and live workshops.",
  "type" : "link",
  "url" : "https://spectra.video/w/dtoM76wLmuQfabP8t8ou43"
}]
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
