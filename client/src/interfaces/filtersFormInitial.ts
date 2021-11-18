export interface FiltersFormInitial {
  AgeRange: string;
  // politics
  Conservativ: boolean;
  Moderate: boolean;
  Liberal: boolean;
  // regions
  Northwest: boolean;
  Southwest: boolean;
  'Mid-Atlantic': boolean;
  California: boolean;
  Midwest: boolean;
  South: boolean;
  Rockies: boolean;
  Northeast: boolean;
  Florida: boolean;

  TypeOfHome: string;
  HomeBudget: string | number;
  HouseholdIncome: string | number;
  // typesOfLiving
  'Big City Apartments': boolean;
  'Urban Apartments / Homes': boolean;
  'Small Lawn Neighborhoods': boolean;
  'Suburban Yards': boolean;
  bestSchools: boolean;
}
