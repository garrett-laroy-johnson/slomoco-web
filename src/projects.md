---
title: Projects
layout: base.njk
---

## Projects

<table class = "table table-striped">
<tr>

<th>Project</th>
<th>Author</th>
<th>Type</th>
<th>Phase</th>
</tr>
{% for page in collections.projs %}
<tr>
<td><a href = "{{ page.url }}">{{ page.data.metadata.title }}</a></td><td>{{page.data.metadata.author}}</td> <td>{{page.data.metadata.type}}</td><td>{{page.data.metadata.phase}}</td>
</tr>
{%- endfor %}

</table>

<!--
 -->