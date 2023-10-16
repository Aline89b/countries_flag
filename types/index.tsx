
export type resultProps = {
    region: string;
    subregion: string;
    population: number;
    ccn3: number;
    name: {
      common: string,
      official: string,
      nativeName: {
         string: {
          common: string
        }
      } 
    }
    flags: {
      png: string,
      svg: string
    };
    languages: string[];
    currencies: [{
      name:  string[]
    }
    ]; 
    maps: {
      googleMaps: string,
      openStreetMaps: string
    }
    capital: string[0];
    borders: string[];
    cca3: string;
    tld: string[]

    
  }


  export type Params = {
    params: {
        name: string,
        code: string
    }
}

export type selectedPops = {
  handleChange : (value: string) => void
    
}
