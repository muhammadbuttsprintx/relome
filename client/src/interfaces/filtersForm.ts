export interface FiltersForm {
  ageRange: string;
  politics: string[];
  // conservative: boolean;
  // moderate: boolean;
  // liberal: boolean;
  regions: string[];
  // northwest: boolean;
  // southwest: boolean;
  // midAtlantic: boolean;
  // california: boolean;
  // midwest: boolean;
  // south: boolean;
  // rockies: boolean;
  // northeast: boolean;
  // florida: boolean;

  typeOfHome: string;
  homeBudget: string | number;
  householdIncome: string | number;
  typesOfLiving: string[];
  // bigCityApartments: boolean;
  // urbanApartmentsHomes: boolean;
  // smallLawnNeighborhoods: boolean;
  // suburbanYards: boolean;
  bestSchools: boolean;
}
