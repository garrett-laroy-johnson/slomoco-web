---
title: Projects
layout: base.njk
---

## Projects

<table class = "table table-striped table-hover">
<tr>

<th>Project</th>
<th>Author</th>
<th>Type</th>
<th>Phase</th>
</tr>
{% for page in collections.projects %}
<tr>

<td><a href = "{{ page.url }}">{{ page.data.metadata.title }}</a></td><td>{{page.data.metadata.author}}</td> <td>{{page.data.metadata.type | makeLowerCase}}</td><td>{{page.data.metadata.phase | makeLowerCase }}</td>
</tr>
{%- endfor %}

</table>

<!--
 -->
