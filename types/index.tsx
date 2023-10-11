
export type resultProps = {
    region: string;
    population: number;
    name: {
      common: string,
      official: string
    }
    flags: {
      png: string,
      svg: string
    };
    maps: {
      googleMaps: string,
      openStreetMaps: string
    }
    capital: string[0]
  }


  export type Params = {
    params: {
        name: string
    }
}
