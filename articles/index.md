---
layout: default
title: Articles
---

# Articles

{% for page in site.pages %}
  {% if page.path contains 'articles/' and page.name != 'index.md' %}
- [{{ page.title | default: page.name }}]({{ page.url | relative_url }}){% if page.date %} ({{ page.date | date: "%Y-%m-%d" }}){% endif %}
  {% endif %}
{% endfor %}
