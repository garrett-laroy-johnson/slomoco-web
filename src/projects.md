---
title: Projects
layout: base.njk
---

## Projects

<table class = "table table-striped">
<tr>
<th>Author</th>
<th>Project</th>
<th>Type</th>
<th>Phase</th>
</tr>
{% for page in collections.projs %}
<tr>
<td>{{page.data.author}}</td> <td><a href = "{{ page.url }}">{{ page.data.title }}</a></td><td>{{page.data.type}}</td><td>{{page.data.phase}}</td>
</tr>
{%- endfor %}

</table>
