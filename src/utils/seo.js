// SEO utility functions for GoTapMode
export function updatePageTitle(title) {
  document.title = title
}

export function useSEO(seoData) {
  // Update page title
  if (seoData.title) {
    updatePageTitle(seoData.title)
  }
  
  // Update meta description
  if (seoData.description) {
    updateMetaDescription(seoData.description)
  }
  
  // Update keywords
  if (seoData.keywords) {
    updateMetaTag('keywords', seoData.keywords)
  }
  
  // Update Open Graph tags
  if (seoData.ogTitle || seoData.ogDescription || seoData.ogImage) {
    updateOpenGraphTags({
      title: seoData.ogTitle || seoData.title,
      description: seoData.ogDescription || seoData.description,
      image: seoData.ogImage ? `https://gotapmode.info${seoData.ogImage}` : 'https://gotapmode.info/logo/GoTapMode.png',
      url: window.location.href
    })
  }
}

export function updateMetaDescription(description) {
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.name = 'description'
    document.head.appendChild(metaDescription)
  }
  metaDescription.content = description
}

export function updateOpenGraphTags(data) {
  const { title, description, image, url } = data
  
  // Update or create Open Graph tags
  updateMetaTag('og:title', title)
  updateMetaTag('og:description', description)
  updateMetaTag('og:image', image)
  updateMetaTag('og:url', url)
  
  // Update Twitter tags
  updateMetaTag('twitter:title', title)
  updateMetaTag('twitter:description', description)
  updateMetaTag('twitter:image', image)
}

function updateMetaTag(property, content) {
  let metaTag = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`)
  if (!metaTag) {
    metaTag = document.createElement('meta')
    if (property.startsWith('og:')) {
      metaTag.setAttribute('property', property)
    } else {
      metaTag.setAttribute('name', property)
    }
    document.head.appendChild(metaTag)
  }
  metaTag.content = content
}

export function generateStructuredData(profile) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": profile.name,
    "description": profile.bio || `Professional profile for ${profile.name} on GoTapMode`,
    "url": `https://gotapmode.info/p/${profile.code || 'profile'}`,
    "jobTitle": profile.position,
    "worksFor": {
      "@type": "Organization",
      "name": profile.company
    }
  }
  
  if (profile.photo) {
    structuredData.image = profile.photo
  }
  
  return structuredData
}
