---
layout: default
title: Lessons - Woodlands Computer Science Club
current_page: lessons
---

# Lessons

<div>
{% for post in site.posts %}
    <h4><a class="text-light text-opacity-75" href="{{ post.url }}">{{ post.title }}</a></h4>
{% endfor %}
</div>

<!--<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-all"
            type="button">All Lessons</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-together"
            type="button">Meetings Together</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-group-a"
            type="button">Group A</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-group-b"
            type="button">Group B</button>
    </li>
</ul>
<div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-all">
        {% for post in site.posts %}
            {% if post.group == 'a' or post.group == 'b' %}
                <h4><a class="text-light text-opacity-75" href="{{ post.url }}">{{ post.title }}</a> - Group {{ post.group | capitalize }}</h4>
            {% else %}
                <h4><a class="text-light text-opacity-75" href="{{ post.url }}">{{ post.title }}</a> - Together</h4>
            {% endif %}
        {% endfor %}
    </div>
    <div class="tab-pane fade" id="pills-together">
        {% for post in site.posts %}
            {% if post.group != 'a' and post.group != 'b' %}
                <h4><a class="text-light text-opacity-75" href="{{ post.url }}">{{ post.title }}</a></h4>
            {% endif %}
        {% endfor %}
    </div>
    <div class="tab-pane fade" id="pills-group-a">
        {% for post in site.posts %}
            {% if post.group == 'a' %}
                <h4><a class="text-light text-opacity-75" href="{{ post.url }}">{{ post.title }}</a></h4>
            {% endif %}
        {% endfor %}
    </div>
    <div class="tab-pane fade" id="pills-group-b">
        {% for post in site.posts %}
            {% if post.group == 'b' %}
                <h4><a class="text-light text-opacity-75" href="{{ post.url }}">{{ post.title }}</span></a></h4>
            {% endif %}
        {% endfor %}
    </div>
</div>-->