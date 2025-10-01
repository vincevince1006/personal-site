---
title: SBA-SBIR Website
number: 3
position: Designer, Researcher, Development
role: Lead UI/UX Designer
client: U.S. Small Business Administration
users: Small Businesses, Federal Data Analysts
team: One (1) Project Manager, one (1) Business Analyst, three (3) Developers
short_desc: The official website for the Small Business Administration's seed funding and investment program.
hero-img: sba-main-hero.png
year: 2021-22, 2024-2025
postition: 'b'
link: https://www.sbir.gov
tags: [UI Design, Website, Drupal, Search Applications]
layout: case-study
context: Led the the modernization and front-end development of a high-visibility agency website, moving it to a more modern, updated design.

role: Design Lead

summary: |
  Congress appropriates around $4 Billion a year for SBIR-STTR funding awards that **small businesses can take advantage of for their product ideas and business development**. To promote this program, their new website needed a revamped search tool, updated page content for applicants looking to utilize the program, and a better authoring process for more frequent site updates.
noted-successes: |
  The re-design coincided with multiple SBIR-STTR promotional events during the Biden Administration, and was showcased by the head of the program to encourage more applicants. We received feedback from the clients that **users remarked positively upon the new look and feel.** The program experienced more applicants and general interest in it's offerings, coupled with new initiatives to support U.S. Small Businesses such as an interactive resource library. 

reversed: true
process: 
    - phase: Discovery
      description: | 
        Interviews were conducted with the client/stakeholders from SBA. The old site had complaints that it wasn't showcasing the program's successes well, or effectively communicating the application process. 
        
        We focused on finding out how users typically were communicated funding deadlines, materials they needed to apply, what a typical application process looks like, and success stories from applicants who were awarded funding.
      findings: 
        - The information architecture in it's former state didn't focus on applicant's true needs, and left a lot of users we spoke with unsure how to get started with SBA funding opportunities. 
        - The new site's content would need to speak to applicants first, then bring in showcases of awards and a more robust search experience for businesses looking for funding.
      image1: "/assets/images/case-study/sba-website/new-site-1.png"
      image2: "/assets/images/case-study/sba-website/new-site-2.png"

    - phase: Ideation
      description: |
        Card sorting and mind maps were an important tool for re-thinking the site's modernization efforts. We also reviewed individual agency websites for what content they included, and how it helped promote their programs. 
        
        Since SBA acted as the clearinghouse for funding opportunities, we met with stakeholders to clarify domain-specific content and policies surrounding the program - this helped with visualizing the landing pages and overall narrative of the site. 
      findings:
        - The legacy site had content that could be ported over, but there was a lot still missing for the new site. 
        - Our team needed to become well-versed in the nomenclature and non-technical aspects of the product such as federal policies and guidelines that drove the program.
        - Constraints existed around available content for certain programs, we needed to figure out who the content owners were and what would be needed to tell the SBIR-STTR story. 
        - We decided to do data visualizations in Tableau and tap into our complex APIs for powering search, both of which would test our technical stack and enhance the site's data streams and integrations.
      image1: "/assets/images/case-study/sba-website/ideation.png"
      image2: "/assets/images/case-study/sba-website/ideation2.png"

    - phase: Design
      description: |
        SBA had a recent agency-wide branding overhaul. A goal from the client was ensuring all new assets created for the SBA website matched, but was also compliant with the U.S. Web Design System (USWDS). The client put a lot of emphasis on this because with the lack of cohesive design in the legacy site, user trust had been eroded since it tended to looked "dated". 
      findings:
        - We would have a robust design system to work with, but from the ground up added consistent design patterns to the new Drupal instance for the site. 
        - Data visualizations, illustrations, dynamic search components, and other modern features would be top priority to earn back user trust.
        - Mobile design considerations were at the forefront of our choices as well, including how these complex search applications would perform on smaller screens and layout configurations to tackle pages with a lot of dynamic content.
      image1: "/assets/images/case-study/sba-website/award-improve.png" 
      image2: "/assets/images/case-study/sba-website/events-listing.png"

    - phase: Development
      description: | 
        Working with developers we upgraded the site from an old Drupal 7 instance to Drupal 10. Templating languages would be leveraged to create re-usable templates and improve the site authoring experience for our clients without the need to code. We identified the content needs and what typically gets updated month-to-month, and gave them a new design system to work with. 
      findings: 
        - USWDS made the design system building process easy and intuitive, creating a language used across the site that now ensures consistent margins, paddings, and dimensions for visual repetition coupled with the new SBA branding. 
        - To better integrate with the needs of a large design system, I built a Gulp 4 instance that compiles assets and reduces developer time when there's requests for new features. 

lessons: no

---

