export interface Post {
  _id: string
  title: string
  description: string
  href: url
  github: url
  publishedAt:datetime
  mainImage: {
    asset: {
      url: string
    }
  }
  slug: {
    current: string
  }
  categories: [
    {
      _ref: string
    }
  ]
  body: [object]
}
export interface Project {
  _id: string
  title: string
  href: url
  github: url
  youtube: url
  description: string
  mainImage: {
    asset: {
      url: string
    }
  }
  slug: {
    current: string
  }
  categories: [
    {
      title: string
      description: string
      imageCat: {
        asset: {
          url: string
        }
      }
    }
  ]
  authors: [
    {
      name: string
      image: {
        asset: {
          url: string
        }
      }
    }
  ]
  images: [
    {
      title: string
      link: string
    }
  ]

  body: [object]
}
export interface Category {
  _id: string
  title: string
  description: string
  imageCat: {
    asset: {
      url: string
    }
  }
  slug: {
    current: string
  }
  categories: [
    {
      _ref: string
    }
  ]
  body: [object]
}
