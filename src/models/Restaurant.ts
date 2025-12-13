class RestaurantClass {
  id: number
  name: string
  description: string
  stars: number
  image: string
  infos: string[]

  constructor(
    id: number,
    name: string,
    description: string,
    stars: number,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.stars = stars
    this.image = image
    this.infos = infos
  }
}

export default RestaurantClass
