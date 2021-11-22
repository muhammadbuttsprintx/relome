import { FiltersForm } from '../interfaces/filtersForm';
import { ApiService } from './ApiServices';

export default class ResultsService {
  static baseUrl = ['result'];
  static async getFilteredResults(filters: FiltersForm) {
    try {
      const res = await ApiService.get(
        `${ResultsService.baseUrl[0]}/?ageRange=${filters.ageRange}
    &politics=${encodeURIComponent(JSON.stringify(filters.politics))}
    &regions=${encodeURIComponent(JSON.stringify(filters.regions))}
    &typeOfHome=${filters.typeOfHome}
    &homeBudget=${filters.homeBudget}
    &householdIncome=${filters.householdIncome}
    &typesOfLiving=${encodeURIComponent(JSON.stringify(filters.typesOfLiving))}
    &page=${filters.page}
    &bestSchools=${filters.bestSchools}`,
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}
