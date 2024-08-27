---
layout: default
title: Homepage
---

<section class="container flex flex-row justify-between my-3 mx-auto">
    <div class="mx-6 my-auto">
        <h2><span class="font-heading">Vincent Dubay.</span><br /><span class="text-2xl">UI/UX Designer based in Maine.</span></h2>
        <div class="">
            <a href=""><img class="size-6" src="/assets/images/linkedin.svg" alt="Icon: Linkedin" /><span class="sr-only">Linkedin</span></a>
            <a href=""><img class="size-6" src="/assets/images/dribbble.svg" alt="Icon: Dribbble" /><span class="sr-only">Dribbble</span></a>
            <a href=""><img class="size-6" src="/assets/images/github.svg" alt="Icon: Github" /><span class="sr-only">Github</span></a>
        </div>
        <p class="my-6 text-xl"><a class="underline decoration-2 transition-all hover:transition-all underline-offset-4 hover:underline-offset-8" href="mailto:vincevince1006@gmail.com">Get in touch!</a></p>
    </div>
    <div class="size-60 rounded-full bg-yellow-200 mx-12"></div>
</section>

<section class="flex flex-col my-6">
    <div class="container mx-auto mb-4">
        <h3 class="font-heading">Portfolio</h3>
        <p class="w-4/6 my-4">My focus is on creating websites and applications for the civic tech sector. I enjoy creating design systems, conducting user research, building complex interfaces, and mentoring other designers.</p>
    </div>
    <div class="flex flex-col flex-wrap">
    {% for project in site.projects %}
        <div class="flex flex-col px-4 py-6 bg-inkwell">
        <div class="container mx-auto">
            <h4 class="font-heading mb-4">{{project.title}}</h4>
            <p class="w-4/6 mb-4">{{project.short_desc}}</p>
                <a class="inline-block border-gray-400 border-2 rounded-lg p-2 transition-all hover:transition-all" href="{{project.url}}">Read Case Study &rarr;</a>
        </div>
        </div>
    {% endfor %}
    </div>
</section>
