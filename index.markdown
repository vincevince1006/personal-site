---
layout: default
title: Homepage
---

<section>
    <div class="container py-6 mx-4 md:mx-auto">
    <div class="max-w-5xl flex flex-col lg:gap-6 sm:flex-row lg:justify-between mx-auto content-center">
        <div class="w-1/4 lg:my-4 mx-6 lg:px-4">
            <img class="lg:w-64 w-32" src="/assets/images/profile.png" />
        </div>
        <div class="w-3/4 my-4 pr-4">
            <h2 class="mb-4">
                <span class="font-heading">Vincent Dubay.</span>
                <p class="text-xl mt-2">I help lead the modernization of complex applications and websites through design best practices.</p>
            </h2>
            <p class="max-w-lg">Launching new, re-vamped versions of outdated software is where I thrive. I facilitate cross-functional requirements gathering with clients, engineers, and business analysts, utilize and advocate for design systems, and write UI code for design cohesion.</p>
            <div class="inline-flex gap-4 mt-4 mx-2">
                <a href="https://www.linkedin.com/in/vincent-dubay-04108544/" target="_blank"><img class="size-6" src="/assets/images/linkedin.svg" alt="Icon: Linkedin" /><span class="sr-only">Linkedin</span></a>
                <a href="https://dribbble.com/lordseagull/" target="_blank"><img class="size-6" src="/assets/images/dribbble.svg" alt="Icon: Dribbble" /><span class="sr-only">Dribbble</span></a>
                <a href="https://github.com/vincevince1006" target="_blank"><img class="size-6" src="/assets/images/github.svg" alt="Icon: Github" /><span class="sr-only">Github</span></a>
                <a href="mailto:vincevince1006@gmail.com" target="_blank"><img class="size-6" src="/assets/images/email.svg" alt="Icon: Email me" /><span class="sr-only">Email me</span></a>
            </div>
        </div>
        </div>
    </div>
</section>

<div class="px-4">
    <div class="md:max-w-2xl lg:max-w-5xl decorative-divider mx-auto px-2 rounded-md"></div>
</div>

<section class="max-w-5xl flex flex-col py-6 mx-4 md:mx-auto">
    <div class="container mx-auto my-4">
        <h3 class="font-heading">Portfolio</h3>
    </div>
    <div class="flex flex-col flex-wrap">
    {% assign sorted_projects = site.projects | sort: 'position' | reverse %}
    {% for project in sorted_projects %}
        <div class="flex flex-col py-4">
        <div class="container mx-auto">
            {% if project.reversed %}
            <section class="flex flex-col md:flex-row flex-col-reverse md:flex-row-reverse gap-6 mb-12">
            {% else %}
            <section class="flex flex-col flex-col-reverse md:flex-row gap-6 mb-12">
            {% endif %}
            <div class="md:w-2/5">
                <h4 class="font-semibold mb-4">{{project.title}}</h4>
                <p class="mb-4">{{project.short_desc}}</p>
                <ul class="flex flex-wrap flex-row mb-6">
                {% for tag in project.tags %}
                    <li class="px-2 my-1 mr-2 bg-slate-100 rounded-lg border-gray-200 border"><small>{{ tag }}</small></li>
                {% endfor %} 
                </ul>
                    <a class="inline-block border-primary border-b-4 pb-2 hover:pb-1 px-2 transition-all hover:transition-all bg-white" href="{{project.url}}">Case Study &rarr;</a>
            </div>
            <div class="w-3/5">
                <img src="/assets/images/sbir-showcase.png" />
            </div>
            </section>
        </div>
        </div>
    {% endfor %}
    </div>
</section>
