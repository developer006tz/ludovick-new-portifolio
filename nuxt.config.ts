// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/seo', '@nuxt/image'],
  
  // SEO Configuration
  app: {
    head: {
      title: 'Ludovick Konyo - Software Developer Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Versatile Full Stack Software Engineer with 3+ years of experience developing robust web and mobile applications across diverse technology stacks.' 
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#1e40af' },
        { property: 'og:title', content: 'Ludovick Konyo - Software Developer Portfolio' },
        { 
          property: 'og:description', 
          content: 'Versatile Full Stack Software Engineer with 3+ years of experience developing robust web and mobile applications across diverse technology stacks.' 
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://bku0cm0nci.ufs.sh/f/Zj1Zt2SVfavcs5tdn6bA5RZmOrulFvbt0M7Lo6HWnI9Txcai' },
        { property: 'og:url', content: 'https://ludovick.site/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Ludovick Konyo - Software Developer Portfolio' },
        { 
          name: 'twitter:description', 
          content: 'Versatile Full Stack Software Engineer with 3+ years of experience developing robust web and mobile applications.' 
        },
        { name: 'twitter:image', content: 'https://bku0cm0nci.ufs.sh/f/Zj1Zt2SVfavcs5tdn6bA5RZmOrulFvbt0M7Lo6HWnI9Txcai' },
        { name: 'keywords', content: 'software developer, full stack developer, web development, mobile apps, React, Vue, Laravel, Nuxt.js, Tanzania developer' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://ludovick.site/' }
      ]
    }
  },
  
  // Site configuration
  site: {
    url: 'https://ludovick.site',
    name: 'Ludovick Konyo Portfolio',
    description: 'Professional portfolio for Ludovick Konyo, a Full Stack Software Engineer based in Tanzania.'
  },
  
  // Sitemap configuration
  sitemap: {
    xslColumns: [
      { label: 'URL', width: '65%' },
      { label: 'Last Modified', width: '20%' },
      { label: 'Priority', width: '15%' }
    ],
    exclude: ['/admin/**']
  },
  
  // Image optimization
  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg']
  }
})