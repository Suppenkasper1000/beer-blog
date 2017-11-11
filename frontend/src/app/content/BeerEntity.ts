export class BeerEntity {

  constructor(public name: string,
              public price: number,
              public rating: number,
              public description: string,
              public imagePath: string,
              public litre: number
              ) {
  }
}
