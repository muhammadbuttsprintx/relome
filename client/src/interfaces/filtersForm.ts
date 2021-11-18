export interface FiltersForm {
  ageRange: string;
  // politics
  conservative: boolean;
  moderate: boolean;
  liberal: boolean;
  // regions
  northwest: boolean;
  southwest: boolean;
  midAtlantic: boolean;
  california: boolean;
  midwest: boolean;
  south: boolean;
  rockies: boolean;
  northeast: boolean;
  florida: boolean;

  typeOfHome: string;
  homeBudget: string | number;
  householdIncome: string | number;
  // typesOfLiving
  bigCityApartments: boolean;
  urbanApartmentsHomes: boolean;
  smallLawnNeighborhoods: boolean;
  suburbanYards: boolean;
  bestSchools: boolean;
}
