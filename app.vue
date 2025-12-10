<template>

  <div class="w-full bg-black/90 text-gray-800 font-sans print:bg-white print:text-black print:m-0 print:p-0">
    <NuxtRouteAnnouncer />
    <div class="max-w-5xl mx-auto bg-white shadow-xl print:shadow-none print:max-w-none print:w-full print:mx-0">

      <div class="h-10 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 print:h-4 relative overflow-hidden print:bg-blue-800">
      </div>

      <header
        class="flex flex-col md:flex-row px-8 pt-10 pb-8 relative print:flex-row print:pt-3 print:pb-3 print:px-6 bg-gradient-to-b from-gray-50 to-white print:bg-white">
        <div
          class="w-36 h-36 overflow-hidden rounded-full border-4 border-white shadow-lg mr-6 mb-4 md:mb-0 flex-shrink-0 absolute md:relative top-0 md:top-auto transform -translate-y-1/2 md:transform-none md:translate-y-0 left-8 md:left-auto bg-white print:w-24 print:h-24 print:relative print:transform-none print:translate-y-0 print:left-auto print:shadow-none print:border-2 print:mr-4 ring-4 ring-blue-100 ring-opacity-50 print:ring-0">
          <img src="/ludovick-konyo.png" alt="Ludovick Konyo"
            class="w-full h-full object-cover cursor-pointer" @click="showImageModal = true" />
        </div>
        <div class="flex-grow text-center md:text-left md:pl-6 mt-12 md:mt-0 print:text-left print:pl-4 print:mt-0">
          <h1
            class="text-3xl font-bold text-gray-900 tracking-tight print:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 mb-1 print:mb-0.5">
            LUDOVICK KONYO</h1>
          <h2 class="text-xl font-semibold mb-3 print:text-base print:mb-1.5 text-blue-600 tracking-wide">Software Developer
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-3 print:grid-cols-3 print:gap-1 print:text-xs print:mb-2">
            <div class="flex items-center bg-blue-50 rounded-full px-3 py-1.5 shadow-sm">
              <Icon name="ic:twotone-mark-email-unread" class="text-blue-500 w-6 h-6" />
              <span class="text-gray-700 font-medium">developer.ludovic@gmail.com</span>
            </div>
            <div class="flex items-center bg-blue-50 rounded-full px-3 py-1.5 shadow-sm">
              <Icon name="ic:baseline-whatsapp" class="text-blue-500 w-5 h-5" />
              <span class="text-gray-700 font-medium">+255746828843</span>
            </div>
            <div class="flex items-center bg-blue-50 rounded-full px-3 py-1.5 shadow-sm">
              <Icon name="ic:twotone-location-on" class="text-blue-500 w-5 h-5" />

              <span class="text-gray-700 font-medium">Dar-es-salaam, Tanzania</span>
            </div>
          </div>
          <div
            class="flex justify-center md:justify-start space-x-4 mt-4 print:justify-start print:space-x-3 print:mt-2 print:text-xs">
            <a href="https://www.linkedin.com/in/ludovick-konyo/"
              class="text-blue-600 hover:text-blue-800 flex items-center print:no-underline bg-white py-1.5 px-3 rounded-md shadow-sm hover:shadow transition-all duration-200 border border-blue-100">
              <Icon name="uiw:linkedin" class="text-blue-500 w-5 h-4" />
              LinkedIn
            </a>
            <a href="https://github.com/developer006tz"
              class="text-blue-600 hover:text-blue-800 flex items-center print:no-underline bg-white py-1.5 px-3 rounded-md shadow-sm hover:shadow transition-all duration-200 border border-blue-100">
              <Icon name="uiw:github" class="text-blue-500 w-5 h-4" />
              GitHub
            </a>
            <!-- <a href="http://ludovick.site/" class="text-blue-600 hover:text-blue-800 flex items-center print:no-underline bg-white py-1.5 px-3 rounded-md shadow-sm hover:shadow transition-all duration-200 border border-blue-100">
                <Icon name="iconoir:www" class="text-blue-500 w-5 h-4" />
                Portfolio
              </a> -->
          </div>
        </div>
      </header>

      <div class="px-8 print:px-6">
        <section class="mb-6 mt-4 print:mb-4 print:mt-3">
          <h3 class="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center print:text-base print:mb-2">
            <Icon name="mingcute:profile-fill" class="text-blue-600 w-5 h-5 mr-2" />
            PROFESSIONAL SUMMARY
          </h3>
          <p class="text-sm leading-relaxed print:text-xs print:leading-snug">
            Technology Manager with 4+ years of progressive software engineering experience, now leading cross-functional
             teams and driving technology strategy in agile environments. Proven track record of scaling development
              operations from individual contributor to managing full-stack engineering teams. Expert in modern
               development practices including CI/CD pipelines, sprint planning, and iterative delivery.
                Successfully delivered scalable web and mobile applications while implementing agile methodologies that improved team velocity and delivery timelines.
                 Combines hands-on technical expertise across multiple technology stacks with strategic technology leadership.
                  Known for bridging business requirements with technical solutions and fostering high-performing engineering cultures.          
                </p>
        </section>

        <section class="mb-6 print:mb-4">
          <h3 class="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center print:text-base print:mb-2">
            <Icon name="ic:baseline-star" class="text-blue-600 w-6 h-6 mr-2" />
            TECHNICAL EXPERTISE
          </h3>
          <div class="bg-gray-50 rounded-lg p-4 print:p-3 print:bg-white print:border">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm print:gap-3 print:text-xs">
              <div>
                <div class="mb-6 print:mb-4">
                  <h4 class="font-semibold mb-2 text-indigo-700 flex items-center print:text-sm print:mb-1.5">
                    <Icon name="mingcute:code-line" class="text-indigo-700 w-5 h-5" />
                    Frontend Development
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs flex items-center print:px-1.5 print:py-0.5 print:text-xs">
                      <Icon name="logos:react" class="w-3 h-3 mr-1" />
                      React.js
                    </span>
                    <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs flex items-center print:px-1.5 print:py-0.5 print:text-xs">
                      <Icon name="logos:nextjs-icon" class="w-3 h-3 mr-1" />
                      Next.js
                    </span>
                    <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs flex items-center print:px-1.5 print:py-0.5 print:text-xs">
                      <Icon name="logos:vue" class="w-3 h-3 mr-1" />
                      Vue.js
                    </span>
                    <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs flex items-center print:px-1.5 print:py-0.5 print:text-xs">
                      <Icon name="logos:nuxt-icon" class="w-3 h-3 mr-1" />
                      Nuxt.js
                    </span>
                    <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs flex items-center print:px-1.5 print:py-0.5 print:text-xs">
                      <Icon name="logos:typescript-icon" class="w-3 h-3 mr-1" />
                      JavaScript/TypeScript
                    </span>
                    <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs flex items-center print:px-1.5 print:py-0.5 print:text-xs">
                      <Icon name="logos:flutter" class="w-3 h-3 mr-1" />
                      Flutter
                    </span>
                    <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs flex items-center print:px-1.5 print:py-0.5 print:text-xs">
                      <Icon name="logos:react" class="w-3 h-3 mr-1" />
                      React Native
                    </span>
                  </div>
                </div>

                <div class="mb-3">
                  <h4 class="font-semibold mb-2 text-indigo-700 flex items-center print:text-sm print:mb-1.5">
                    <Icon name="ant-design:code-filled" class="text-indigo-700 w-5 h-5" />

                    Backend Development
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 bg-blue-100  text-green-800 rounded text-xs flex items-center">
                      <Icon name="logos:spring-icon" class="w-3 h-3 mr-1" />
                      Java (Spring Boot)
                    </span>
                    <span class="px-2 py-1 bg-blue-100 text-green-800 rounded text-xs flex items-center">
                      <Icon name="logos:nodejs-icon" class="w-3 h-3 mr-1" />
                      Node.js
                    </span>
                    <span class="px-2 py-1 bg-blue-100 text-green-800 rounded text-xs flex items-center">
                      <Icon name="logos:nestjs" class="w-3 h-3 mr-1" />
                      Nest.js
                    </span>
                    <span class="px-2 py-1 bg-blue-100 text-green-800 rounded text-xs flex items-center">
                      <Icon name="simple-icons:express" class="w-3 h-3 mr-1" />
                      Express.js
                    </span>
                    <span class="px-2 py-1 bg-blue-100 text-green-800 rounded text-xs flex items-center">
                      <Icon name="logos:laravel" class="w-3 h-3 mr-1" />
                      PHP (Laravel)
                    </span>
                    <span class="px-2 py-1 bg-blue-100  text-green-800 rounded text-xs flex items-center">
                      <Icon name="carbon:api" class="w-3 h-3 mr-1" />
                      RESTful API
                    </span>
                    <span class="px-2 py-1 bg-blue-100  text-green-800 rounded text-xs flex items-center">
                      <Icon name="mdi:xml" class="w-3 h-3 mr-1" />
                      SOAP
                    </span>
                    <span class="px-2 py-1 bg-blue-100  text-green-800 rounded text-xs flex items-center">
                      <Icon name="logos:graphql" class="w-3 h-3 mr-1" />
                      GraphQL
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div class="mb-6 print:mb-4">
                  <h4 class="font-semibold mb-2 text-indigo-700 flex items-center print:text-sm print:mb-1.5">
                    <Icon name="solar:database-bold" class="text-indigo-700 w-5 h-5" />
                    Database Technologies
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs flex items-center">
                      <Icon name="logos:postgresql" class="w-3 h-3 mr-1" />
                      PostgreSQL
                    </span>
                    <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs flex items-center">
                      <Icon name="logos:mysql" class="w-3 h-3 mr-1" />
                      MySQL
                    </span>
                    <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs flex items-center">
                      <Icon name="devicon-plain:mongodb" class="w-3 h-3 mr-1" />
                      MongoDB
                    </span>
                    <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs flex items-center">
                      <Icon name="logos:redis" class="w-3 h-3 mr-1" />
                      Redis
                    </span>
                    <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs flex items-center">
                      <Icon name="logos:rabbitmq-icon" class="w-3 h-3 mr-1" />
                      RabbitMQ
                    </span>
                    <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs flex items-center">
                      <Icon name="logos:kafka-icon" class="w-3 h-3 mr-1" />
                      Apache Kafka
                    </span>
                  </div>
                </div>

                <div class="mb-6 print:mb-4">
                  <h4 class="font-semibold mb-2 text-indigo-700 flex items-center print:text-sm print:mb-1.5">
                    <Icon name="carbon:ibm-devops-control" class="text-indigo-700 w-5 h-5" />
                    DevOps & Tooling
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs flex items-center">
                      <Icon name="mdi:git" class="w-3 h-3 mr-1" />
                      Git
                    </span>
                    <span class="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs flex items-center">
                      <Icon name="mdi:github" class="w-3 h-3 mr-1" />
                      GitHub
                    </span>
                    <span class="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs flex items-center">
                      <Icon name="mdi:gitlab" class="w-3 h-3 mr-1" />
                      Gitlab
                    </span>
                    <span class="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs flex items-center">
                      <Icon name="material-icon-theme:pipeline" class="w-3 h-3 mr-1" />
                      CI/CD Pipelines
                    </span>
                    <span class="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs flex items-center">
                      <Icon name="mdi:docker" class="w-3 h-3 mr-1" />
                      Docker
                    </span>
                  </div>
                </div>

                <div>
                  <h4 class="font-semibold mb-2 text-indigo-700 flex items-center print:text-sm print:mb-1.5">
                    <Icon name="iconoir:design-nib-solid" class="text-indigo-700 w-5 h-5" />
                    Design & Creative
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs flex items-center">
                      <Icon name="simple-icons:adobeillustrator" class="w-3 h-3 mr-1" />
                      Adobe Illustrator
                    </span>
                    <span class="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs flex items-center">
                      <Icon name="simple-icons:adobephotoshop" class="w-3 h-3 mr-1" />
                      Photoshop
                    </span>
                    <span class="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs flex items-center">
                      <Icon name="mdi:palette-outline" class="w-3 h-3 mr-1" />
                      UI/UX Design
                    </span>
                    <span class="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs flex items-center">
                      <Icon name="simple-icons:figma" class="w-3 h-3 mr-1" />
                      Figma
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-6">
          <h3 class="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center print:text-base print:mb-2">
            <Icon name="teenyicons:stamp-solid" class="text-blue-600 w-5 h-5 mr-2" />
            PROFESSIONAL EXPERIENCE
          </h3>

          <div class="relative border-l-2 border-blue-200 pl-6 ml-3">
            <div class="mb-6 relative print:mb-4">
              <div class="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1"></div>
              <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                <div>
                  <h4 class="font-semibold text-gray-900 print:text-sm">Technology Manager</h4>
                  <p class="text-blue-600 font-medium text-sm print:text-xs">Evmak Tanzania</p>
                </div>
                <span class="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0 print:text-xs print:px-2 print:py-0.5">April
                  2025 - Present</span>
              </div>
              <ul class="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1 print:text-xs print:space-y-0.5">
  <li>Lead and mentor cross-functional engineering teams of developers, implementing agile methodologies to improve delivery velocity and team performance.</li>
  <li>Drive technology strategy and roadmap planning, aligning technical initiatives with business objectives and organizational goals.</li>
  <li>Oversee the complete software development lifecycle from requirements gathering through deployment, ensuring quality deliverables and timely project completion.</li>
  <li>Establish and enforce coding standards, development best practices, and CI/CD processes across multiple technology stacks.</li>
  <li>Manage technology budgets, vendor relationships, and infrastructure decisions to optimize development operations and cost efficiency.</li>
  <li>Collaborate with stakeholders to translate business requirements into technical specifications and project timelines.</li>
</ul>
            </div>

            <div class="mb-6 relative print:mb-4">
              <div class="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1"></div>
              <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                <div>
                  <h4 class="font-semibold text-gray-900 print:text-sm">Senior Software Engineer</h4>
                  <p class="text-blue-600 font-medium text-sm print:text-xs">Ona Africa Limited</p>
                </div>
                <span class="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0 print:text-xs print:px-2 print:py-0.5">May 2024
                  - April 2025</span>
              </div>
              <ul class="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1 print:text-xs print:space-y-0.5">
                <li>Architected and developed Ona Sasa Social Network, implementing real-time features.</li>
                <li>Designed and implemented scalable backend services and APIs for core product features.</li>
                <li>Mentored junior engineers, providing technical guidance and conducting code reviews.</li>
                <li>Collaborated with cross-functional teams to define technical specifications and project roadmaps.
                </li>
              </ul>
            </div>

            <!-- Second page - adding page break and proper spacing  -->
            <div class="mb-6 relative print:mb-4 print:mt-0 print:pt-6 print:break-before-page">
              <div class="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1"></div>
              <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                <div>
                  <h4 class="font-semibold text-gray-900 print:text-sm">Software Engineer</h4>
                  <p class="text-blue-600 font-medium text-sm print:text-xs">
                    <a href="https://gpitg.co.tz/" target="_blank" class="hover:underline">Gpitg Limited</a>
                  </p>
                </div>
                <span class="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0 print:text-xs print:px-2 print:py-0.5">January
                  2024 - June 2024</span>
              </div>
              <ul class="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1 print:text-xs print:space-y-0.5">
                <li>Developed Afya EHMS, a comprehensive health management system</li>
                <li>Designed and implemented RESTful APIs for third-party integrations</li>
                <li>Engineered secure data storage solutions for sensitive medical information</li>
                <li>Optimized database queries, reducing system response time by 45%</li>
              </ul>
            </div>

            <div class="mb-6 relative print:mb-4">
              <div class="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1"></div>
              <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                <div>
                  <h4 class="font-semibold text-gray-900 print:text-sm">Seasonal Software Engineer</h4>
                  <p class="text-blue-600 font-medium text-sm print:text-xs">
                    <a href="https://conveyance.co.tz/" target="_blank" class="hover:underline">Conveyance Logistics
                      Limited</a>
                  </p>
                </div>
                <span class="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0 print:text-xs print:px-2 print:py-0.5">October
                  2023 - Current</span>
              </div>
              <ul class="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1 print:text-xs print:space-y-0.5">
                <li>Developed internal Logistics Management System, and Hr Management System for seamless operations</li>
                <li>Architect, designed and implemented scalable backend services and APIs for core product features.</li>
                <li>Developed and maintained self-service online platform that connect their products with online marketplaces that enable customer to generate quotes, and select products directly.</li>
                <li>Advised on best practices for software development and project management, implemente security measures to protect sensitive data.</li>
                <li>Transform company operations from paper-based to digital, improving efficiency by 70%</li>
              </ul>
            </div>

            <div class="relative print:mb-4">
              <div class="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1"></div>
              <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                <div>
                  <h4 class="font-semibold text-gray-900 print:text-sm">Software Developer</h4>
                  <p class="text-blue-600 font-medium text-sm print:text-xs">
                    <a href="https://shulesoft.africa/" target="_blank" class="hover:underline">Shulesoft Limited</a>
                  </p>
                </div>
                <span class="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0 print:text-xs print:px-2 print:py-0.5">November
                  2022 - October 2023</span>
              </div>
              <ul class="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1 print:text-xs print:space-y-0.5">
                <li>Contributed in Development of Shulesoft School Management System , among the largest School Management Systems in Tanzania</li>
                <li>Translate customer requirements to technical specifications and implement them</li>
                <li>Bug fixes and performance improvements</li>
                <li>Documented system architecture and components for future maintenance</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Training & Certificates Section -->
        <section class="mb-6 print:mb-4">
          <h3 class="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center print:text-base print:mb-2">
            <Icon name="carbon:certificate" class="text-blue-600 w-5 h-5 mr-2" />
            TRAINING & CERTIFICATIONS
          </h3>

          <div class="space-y-4 print:space-y-3">
            <!-- Third page - adding page break for this section -->
            <div class="bg-white border border-blue-100 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow print:p-3 print:shadow-none print:mt-0 print:pt-6 print:break-before-page">
              <div class="flex items-start justify-between mb-2">
                <div class="flex-1">
                  <h4 class="font-semibold text-blue-700 mb-1 print:text-sm">Artificial Intelligence in Financial Services</h4>
                  <p class="text-sm text-gray-600 print:text-xs">Bank of Tanzania Academy</p>
                </div>
                <span class="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full whitespace-nowrap ml-2 print:px-1.5 print:py-0.5">October 2025</span>
              </div>
              <div class="flex items-center mb-2">
                <Icon name="mdi:map-marker" class="text-gray-500 w-4 h-4 mr-1" />
                <span class="text-xs text-gray-600">Bank of Tanzania, Dar es Salaam</span>
              </div>
              <p class="text-gray-700 text-sm print:text-xs">Completed comprehensive training on the application of artificial intelligence technologies in financial services, covering AI implementation, regulatory considerations, and practical use cases in the banking sector.</p>
            </div>
          </div>
        </section>

        <!-- Education & Additional Info with improved styling  -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 print:gap-4 print:mb-4">
          <div>
            <h3 class="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center print:text-base print:mb-2">
              <Icon name="game-icons:graduate-cap" class="text-blue-600 w-5 h-5 mr-2" />
              EDUCATION
            </h3>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100 print:p-3 print:bg-white">
              <h4 class="font-semibold text-gray-900 print:text-sm">Bachelor of Science in Information Technology</h4>
              <p class="text-blue-600 font-medium text-sm print:text-xs">National Insitute of Tansport (NIT)</p>
              <div class="flex items-center mt-2">
                <span class="text-xs px-2 py-1 bg-gray-200 text-gray-800 rounded-full">2019 - 2022</span>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center print:text-base print:mb-2">
              <Icon name="iconoir:microphone-solid" class="text-blue-600 w-5 h-5 mr-2" />
              SOFT SKILLS
            </h3>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100 print:p-3 print:bg-white">
              <ul class="space-y-2 text-sm">
                <li class="flex items-center">
                  <Icon name="icon-park-solid:communication" class="text-blue-600 w-4 h-4 mr-2" />
                  <span>Excellent written and verbal communication</span>
                </li>
                <li class="flex items-center">
                  <Icon name="material-symbols:sync-problem" class="text-blue-600 w-4 h-4 mr-2" />
                  <span>Strategic problem-solving</span>
                </li>
                <li class="flex items-center">
                  <Icon name="streamline:ai-technology-spark-solid" class="text-blue-600 w-4 h-4 mr-2" />
                  <span>Rapid adaptation to new technologies</span>
                </li>
                <li class="flex items-center">
                  <Icon name="streamline:collaborations-idea-solid" class="text-blue-600 w-4 h-4 mr-2" />
                  <span>Team collaboration and leadership</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Languages section with elegant styling -->
        <section class="mb-6 print:mb-4">
          <h3 class="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center print:text-base print:mb-2">
            <Icon name="fa6-solid:language" class="text-blue-600 w-5 h-5 mr-2" />
            LANGUAGES
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
            <div
              class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 shadow-sm transition-all hover:shadow print:p-3 print:bg-white print:shadow-none">
              <div class="flex justify-between items-center mb-2">
                <h4 class="font-semibold text-indigo-800 print:text-sm print:text-white">English</h4>
                <span class="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full print:bg-gray-200 print:text-black">Professional</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full w-4/5"></div>
              </div>
              <p class="text-sm text-gray-600 mt-2 print:text-xs print:text-white">Business communication, technical documentation, and professional
                presentations</p>
            </div>

            <div
              class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100 shadow-sm transition-all hover:shadow print:p-3 print:bg-white print:shadow-none">
              <div class="flex justify-between items-center mb-2">
                <h4 class="font-semibold text-emerald-800 print:text-sm print:text-white">Swahili</h4>
                <span class="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full print:bg-gray-200 print:text-black">Native</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-gradient-to-r from-green-600 to-emerald-600 h-2.5 rounded-full w-full"></div>
              </div>
              <p class="text-sm text-gray-600 mt-2 print:text-xs print:text-white">Complete fluency with cultural nuances, idioms, and professional
                terminology</p>
            </div>
          </div>
        </section>
      </div>

      <!-- Footer with references and subtle design  -->

      <footer class="text-center py-4 px-8 bg-white print:py-3 print:px-6">
        <h3 class="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center">
          <Icon name="majesticons:users" class="text-blue-600 w-5 h-5 mr-2" />
          REFEREES
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full print:grid-cols-2 print:gap-2">
          <div class="bg-gray-50 rounded-lg p-2 border border-gray-100 flex items-center shadow-sm w-full print:bg-white print:shadow-none print:p-1.5">
            <div
              class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2 flex-shrink-0">
              EK</div>
            <div class="text-left">
              <p class="font-medium text-md text-gray-800 print:text-sm">Elisate Kanza</p>
              <p class="text-md text-gray-600 print:text-xs">Manager, Conveyance Logistics Limited</p>
              <p class="text-md text-blue-600 print:text-xs">info@conveyance.co.tz</p>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-2 border border-gray-100 flex items-center shadow-sm w-full print:bg-white print:shadow-none print:p-1.5">
            <div
              class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2 flex-shrink-0">
              PS</div>
            <div class="text-left">
              <p class="font-medium text-md text-gray-800 print:text-sm">Peter Sanga</p>
              <p class="text-md text-gray-600 print:text-xs">Clearing Officer, GPSA, Tanzania</p>
              <p class="text-md text-blue-600 print:text-xs">perersanga@gmail.com</p>
            </div>
          </div>
        </div>

        <div class="text-sm text-gray-600 mt-6 md:mb-0 print:mt-4">
          <p class="font-medium print:text-xs">Last updated: December 2025</p>
        </div>
      </footer>
    </div>
  </div>

  <!-- Image Modal -->
  <Teleport to="body">
    <transition name="fade">
      <div v-if="showImageModal" class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="showImageModal = false">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        <div class="relative z-10 max-w-xl mx-auto">
          <div class="relative">
            <div
              class="rounded-full overflow-hidden border-8 border-white/20 shadow-2xl w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              <img src="/ludovick-konyo.png"
                alt="Ludovick Konyo" class="w-full h-full object-cover" />
            </div>
            <button @click.stop="showImageModal = false"
              class="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors">
              <Icon name="mdi:close" class="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>


<script setup>
const showImageModal = ref(false);
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* A4 Print Optimizations */
@media print {
  @page {
    size: A4;
    margin: 0.5in 0.75in;
  }
  
  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  
  /* Ensure proper page breaks */
  .print\:break-before-page {
    break-before: page;
    page-break-before: always;
  }
  
  /* Hide interactive elements but keep content visible */
  button {
    display: none !important;
  }
  
  .hover\:shadow, .hover\:shadow-md {
    box-shadow: none !important;
  }
  
  /* Optimize colors for print */
  .bg-gradient-to-r {
    background: #1e40af !important;
    color: white !important;
  }
  
  /* Ensure project tags are visible */
  .bg-red-100, .bg-sky-100, .bg-blue-100, .bg-green-100, .bg-yellow-100, .bg-indigo-100, .bg-purple-100 {
    background-color: #f3f4f6 !important;
    border: 1px solid #d1d5db !important;
  }
  
  /* Make sure all text is visible */
  .text-red-700, .text-sky-700, .text-blue-700, .text-green-700, .text-yellow-700, .text-indigo-700, .text-purple-700 {
    color: #374151 !important;
  }
  
  /* Fix language section colors for print */
  .text-indigo-800, .text-emerald-800, .text-indigo-700, .text-emerald-700 {
    color: #000000 !important;
  }
  
  .bg-indigo-100, .bg-emerald-100 {
    background-color: #e5e7eb !important;
    border: 1px solid #d1d5db !important;
  }
  
  /* Progress bars for print */
  .bg-gradient-to-r.from-blue-600, .bg-gradient-to-r.from-green-600 {
    background: #374151 !important;
  }
  
  /* Ensure project section is visible */
  section {
    page-break-inside: avoid;
  }
  
  /* Force visibility of all content */
  * {
    visibility: visible !important;
    opacity: 1 !important;
  }
  
  /* Ensure icons print properly */
  svg {
    print-color-adjust: exact;
  }
  
  /* Remove shadows and transitions for print */
  * {
    box-shadow: none !important;
    transition: none !important;
    animation: none !important;
  }
  
  /* Optimize list spacing */
  ul, ol {
    margin-left: 1em;
  }
  
  /* Prevent orphans and widows */
  p, li {
    orphans: 3;
    widows: 3;
  }
}
</style>
