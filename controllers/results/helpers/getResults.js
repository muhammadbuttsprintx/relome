import { CitySchema } from "../../../schemas/city/index.js";
import { PropertyTaxSchema } from "../../../schemas/propertyTax/index.js";
import { StateTaxSchema } from "../../../schemas/stateTax/index.js";

export const getResults = async (req, res) => {
  try {
    let params = req.query;
    for (const key in params) {
      if (Object.hasOwnProperty.call(params, key)) {
        params[key] = params[key].trim();
      }
    }
    const { ageRange, homeBudget, typeOfHome, householdIncome, bestSchool } =
      params;
    const politics = JSON.parse(params.politics);
    const regions = JSON.parse(params.regions);
    const typesOfLiving = JSON.parse(params.typesOfLiving);
    if (regions && regions.includes("Rockies")) {
      const isRockies = (element) => element === "Rockies";
      const index = regions.findIndex(isRockies);
      regions[index] = "Rocky Mountains";
    }
    console.log(politics, regions, typesOfLiving, bestSchool);
    const budget = {
      min: homeBudget / 2,
      max: +(+homeBudget + +homeBudget / 2),
    };
    console.log("budget", budget);
    const dataFilters = {
      Politics: politics[0] ? { $in: politics } : /.*.*/,
      Region: regions[0] ? { $in: regions } : /.*.*/,
      NeighborhoodType: typesOfLiving[0] ? { $in: typesOfLiving } : /.*.*/,
      [typeOfHome]: homeBudget
        ? { $gte: budget.min, $lte: budget.max }
        : { $gte: 0, $lte: 9999999999999999999999999 },
      bestSchool: bestSchool ? "Yes" : /.*.*/,
    };
    // const pageSize = 9;
    const cityData = await CitySchema.find(dataFilters)
      .sort({ [ageRange]: -1 })
      .clone();
    if (householdIncome) {
      const resData = [];
      cityData.forEach(async (city) => {
        const currentCity = {
          city: city.City,
          neighborhoodType: city.NeighborhoodType,
          average: city.twoByThreeToFourByFiveBed,
          ageTwentyTwoToThirtyFour: city.ageTwentyTwoToThirtyFour,
          ageThirtyFiveToFiftyFour: city.ageThirtyFiveToFiftyFour,
          ageFiftyFiveToSeventyFour: city.ageFiftyFiveToSeventyFour,
          politics: city.Politics,
          diversity: city.Diversity,
        };
        // const currentCityStateTaxes = await StateTaxSchema.find({
        //   state: city.State,
        // });
        const currentStates = await StateTaxSchema.find({
          state: city.State,
        }).sort({ rangeTax: 1 });

        const taxAbleIncome =
          householdIncome - currentStates[0]?.deduction
            ? currentStates[0].deduction
            : 0;
        let sumOfLocalTaxSlabs = 0;
        currentStates.forEach(async (state) => {
          if (taxAbleIncome > state.rangeMin) {
            const currentSlabMaxAmount = state.rangeMax
              ? Math.min(taxAbleIncome, state.rangeMax)
              : taxAbleIncome;
            const currentSlabAmount = currentSlabMaxAmount - state.rangeMin;
            const currentSlabTax = currentSlabAmount / (state.rangeTax * 100);
            sumOfLocalTaxSlabs += currentSlabTax;
            const localTax = householdIncome / (state.tax * 100);
            const totalStateTax = Math.ceil(sumOfLocalTaxSlabs + localTax);
            const stateTaxPercentage = householdIncome / totalStateTax;
            currentCity.totalStateTax = totalStateTax;
            currentCity.stateTaxPercentage = stateTaxPercentage;

            // propertyTax calculation
            if (homeBudget) {
              const currentCityPropertyTax = await PropertyTaxSchema.find({
                zipCode: `${parseInt(state.postalCode)}`,
              });
              const propertyTaxAmount = Math.ceil(
                homeBudget / (currentCityPropertyTax[0].propertyTax * 100)
              );
              const propertyTaxPercentage = homeBudget / propertyTaxAmount;
              currentCity.propertyTaxAmount = propertyTaxAmount;
              currentCity.propertyTaxPercentage = propertyTaxPercentage;
            }
          }
        });
        resData.push(currentCity);
        console.log(resData, "resDaraugiohijok");
        console.log(resData.length, "resData");
      });

      console.log(resData.length, resData[0], resData[resData.length - 1]);
      return res.json({
        success: true,
        data: resData,
      });
    }
  } catch (e) {
    console.log("Error:", e.message);
    return res.json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
// const stateTaxData = await StateTaxSchema.find();
// const propertyTaxData = await PropertyTaxSchema.find();
// const postalCode = [];
// const state = [];
// let resData = [];
// cityData.forEach((city) => {
//   const currentCityPropertyTax = propertyTaxData.find(
//     (x) => x.ZipCode === city.postalCode
//   );
//   const currentCityStateTax = stateTaxData.f ind(
//     (x) => x.LocalTax === city.postalCode
//   );

// console.log(
//   cityData.length,
//   propertyTaxData.length,
//   stateTaxData.length,
//   { propertyTax: currentCityPropertyTax, stateTax: currentCityStateTax },
//   true
// );
//   resData.push({
//     ...city._doc,
//     propertyTax: currentCityPropertyTax,
//     stateTax: currentCityStateTax,
//   });
// });
// const propertyTaxData = await StateTaxSchema.find();
// console.log(propertyTaxData.length);

// var resources = {
//   // nick_name: "nick_name",
//   // email: "$email",
// };

// const attendanceResp = await Attendance.aggregate([
//   {
//     $match: {
//       status: "Present",
//     },
//   },
//   { $sort: { ageTwentyTwoToThirtyFour: -1 } },
//   {
//     $lookup: {
//       from: "employees",
//       let: { employeeId: "$employeeId" },
//       pipeline: [
//         {
//           $match: {
//             $expr: {
//               $and: [{ $eq: ["$employeeId", "$$employeeId"] }],
//             },
//           },
//         },
//       ],
//       as: "employee",
//     },
//   },
//   // { $sort: { employeeId: -1 } },
//   {
//     $facet: {
//       // stage1: [{ $group: { _id: null, count: { $sum: 1 } } }],
//       totalCount: [
//         {
//           $count: "count",
//         },
//       ],
//       stage2: [{ $skip: currentPage * pageSize }, { $limit: pageSize }],
//     },
//   },
//   { $unwind: "$stage1" },
//   // //output projection
//   {
//     $project: {
//       count: "$stage1.count",
//       data: "$stage2",
//     },
//   },
// ]);

// CitySchema.aggregate(
//   [
//     {
//       $group: resources,
//     },
//     {
//       $lookup: {
//         from: "Comments", // collection to join
//         localField: "_id", //field from the input documents
//         foreignField: "user_id", //field from the documents of the "from" collection
//         as: "comments", // output array field
//       },
//     },
//     {
//       $lookup: {
//         from: "Post", // from collection name
//         localField: "_id",
//         foreignField: "user_id",
//         as: "posts",
//       },
//     },
//   ],
//   function (error, data) {
//     return res.json(data);
//     //handle error case also
//   }
// );

// if (!resData) {
//   return res.json({
//     success: false,
//     message: "Invalid Request",
//   });
// }
// console.log(resData.length);

// cityData.forEach(async (data) => {
//   data.ageTwentyTwoToThirtyFour = data.ageTwentyTwoToThirtyFour?.replace(
//     "%",
//     ""
//   );
//   data.ageThirtyFiveToFiftyFour = data.ageThirtyFiveToFiftyFour?.replace(
//     "%",
//     ""
//   );
//   data.ageFiftyFiveToSeventyFour = data.ageFiftyFiveToSeventyFour?.replace(
//     "%",
//     ""
//   );
//   data.twoByThreeBed = data.twoByThreeBed?.replace("$", "");
//   data.twoByThreeBed = data.twoByThreeBed?.replace(",", "");
//   data.twoByThreeBed = data.twoByThreeBed?.trim();
//   data.fourByFiveBed = data.fourByFiveBed?.replace("$", "");
//   data.fourByFiveBed = data.fourByFiveBed?.replace(",", "");
//   data.fourByFiveBed = data.fourByFiveBed?.trim();

//   await data.save();
// });
// console.log("done");
