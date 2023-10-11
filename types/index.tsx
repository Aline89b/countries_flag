
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

    currencies: {
      EUR: {
        name: string,
        symbol: string
      }
    }
    languages: {
      fra: string
    }
    tld: string[]

    
  }


  export type Params = {
    params: {
        name: string
    }
}

export type selectedPops = {
  selectedValue: string,
  handleChange : () => string
  
  
}
