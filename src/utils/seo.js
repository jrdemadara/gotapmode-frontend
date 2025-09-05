// SEO utility functions for GoTapMode
export function updatePageTitle(title) {
  document.title = title
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
