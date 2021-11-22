import { FiltersForm } from '../interfaces/filtersForm';
import { ApiService } from './ApiServices';

export default class ResultsService {
  static baseUrl = ['result'];
  static async getFilteredResults(filters: FiltersForm) {
    try {
      const res = await ApiService.get(
        // &conservative=${filters.conservative}
        // &moderate=${filters.moderate}
        // &liberal=${filters.liberal}
        // &northwest=${filters.northwest}
        // &southwest=${filters.southwest}
        // &midAtlantic=${filters.midAtlantic}
        // &california=${filters.california}
        // &midwest=${filters.midwest}
        // &south=${filters.south}
        // &rockies=${filters.rockies}
        // &northeast=${filters.northeast}
        // &florida=${filters.florida}
        // &bigCityApartments=${filters.bigCityApartments}
        // &urbanApartmentsHomes=${filters.urbanApartmentsHomes}
        // &smallLawnNeighborhoods=${filters.smallLawnNeighborhoods}
        // &suburbanYards=${filters.suburbanYards}
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
  //   static async getAuthorizedPage(filters: FiltersForm, voteLimit: number) {
  //     try {
  //       const res = await ApiService.get(
  //         `${ResultsService.baseUrl[0]}/page?page=${pageNo}&limit=${voteLimit}`,
  //       );
  //       return res;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   static async addNewAuthorizedVote(newAuthorizedData: UnAuthorizedModel) {
  //     try {
  //       const data = await ApiService.post(
  //         ResultsService.baseUrl[0],
  //         newAuthorizedData,
  //       );
  //       if (data.data) {
  //         await UnAuthorized.deleteRecord(newAuthorizedData._id!);
  //       }
  //       return data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   static async updateAuthorizedVote(updatedAuthorizedVoteData: VotesModel) {
  //     try {
  //       const data = await ApiService.post(
  //         `${ResultsService.baseUrl[0]}/update`,
  //         updatedAuthorizedVoteData,
  //       );
  //       return data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   static async deleteAuthorizedRecord(id: string) {
  //     try {
  //       const res = await ApiService.delete(`${ResultsService.baseUrl[0]}/${id}`);
  //       return res;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
}
