
export type resultProps = {
    region: string;
    subregion: string;
    population: number;
    name: {
      common: string,
      official: string,
      nativeName: {
         spa: {
          common: string
        }
      } 
    }
    flags: {
      png: string,
      svg: string
    };
    maps: {
      googleMaps: string,
      openStreetMaps: string
    }
    capital: string[0];
    borders: string[];

    tld: string[]

    
  }


  export type Params = {
    params: {
        name: string
    }
}

export type selectedPops = {
  handleChange : (value: string) => void
    
}
