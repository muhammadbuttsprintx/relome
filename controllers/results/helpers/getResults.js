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
    const { ageRange, typeOfHome, bestSchool, page } = params;
    const householdIncome = +params.householdIncome;
    const homeBudget = +params.homeBudget;
    const politics = JSON.parse(params.politics);
    const regions = JSON.parse(params.regions);
    const typesOfLiving = JSON.parse(params.typesOfLiving);
    if (regions && regions.includes("Rockies")) {
      const isRockies = (element) => element === "Rockies";
      const index = regions.findIndex(isRockies);
      regions[index] = "Rocky Mountains";
    }
    const budget = {
      min: homeBudget / 2,
      max: +(+homeBudget + +homeBudget / 2),
    };
    const dataFilters = {
      Politics: politics[0] ? { $in: politics } : /.*.*/,
      Region: regions[0] ? { $in: regions } : /.*.*/,
      NeighborhoodType: typesOfLiving[0] ? { $in: typesOfLiving } : /.*.*/,
      [typeOfHome]: homeBudget
        ? { $gte: budget.min, $lte: budget.max }
        : { $gte: 0 },
      bestSchool: bestSchool ? "Yes" : /.*.*/,
    };
    const pageSize = 9;
    const cityData = await CitySchema.find(dataFilters)
      .sort({ [ageRange]: -1 })
      .limit(pageSize)
      .skip((page - 1) * pageSize)
      .clone();

    const resData = [];
    for (const city of cityData) {
      const currentCity = {
        city: city.City,
        postalCode: city.postalCode,
        neighborhoodType: city.NeighborhoodType,
        average: city.twoByThreeToFourByFiveBed,
        ageTwentyTwoToThirtyFour: city.ageTwentyTwoToThirtyFour,
        ageThirtyFiveToFiftyFour: city.ageThirtyFiveToFiftyFour,
        ageFiftyFiveToSeventyFour: city.ageFiftyFiveToSeventyFour,
        politics: city.Politics,
        diversity: city.Diversity,
        totalStateTax: 0,
        stateTaxPercentage: 0,
        propertyTaxAmount: 0,
        propertyTaxPercentage: 0,
        totalTaxAmount: 0,
        noTax: false,
      };
      // const currentCityStateTaxes = await StateTaxSchema.find({
      //   state: city.State,
      // });
      if (householdIncome) {
        const currentStates = await StateTaxSchema.find({
          state: city.State,
        }).sort({ rangeTax: 1 });
        if (!currentStates[0]) {
          continue;
        }

        if (currentStates[0].taxType === "NO TAX") {
          currentCity.noTax = true;
        } else if (currentStates[0].taxType === "FLAT TAX") {
          if (currentStates[0]?.deduction < householdIncome) {
            const taxAbleIncome =
              householdIncome - currentStates[0]?.deduction
                ? currentStates[0].deduction
                : 0;

            const localTax =
              currentStates[0]?.tax === 0
                ? 0
                : (householdIncome * currentStates[0]?.tax) / 100;
            const finalStateTax =
              (currentStates[0].rangeTax * taxAbleIncome) / 100 + localTax;
            currentCity.totalStateTax = finalStateTax;
          }
        } else {
          const taxAbleIncome =
            householdIncome - currentStates[0]?.deduction
              ? currentStates[0].deduction
              : 0;
          let sumOfLocalTaxSlabs = 0;
          console.log(currentStates, "currentStates");
          currentStates.forEach(async (state) => {
            if (taxAbleIncome > state.rangeMin) {
              const currentSlabMaxAmount = state.rangeMax
                ? Math.min(taxAbleIncome, state.rangeMax)
                : taxAbleIncome;
              const currentSlabAmount = currentSlabMaxAmount - state.rangeMin;
              const currentSlabTax = (currentSlabAmount * state.rangeTax) / 100;
              sumOfLocalTaxSlabs += currentSlabTax;

              const localTax =
                state.tax === 0 ? 0 : (householdIncome * state.tax) / 100;
              currentCity.totalStateTax = sumOfLocalTaxSlabs + localTax;

              console.log((currentCity.totalStateTax * 100) / householdIncome);
              currentCity.stateTaxPercentage =
                (currentCity.totalStateTax * 100) / householdIncome;
              // console.log(householdIncome, localTax, "sumOfLocalTaxSlabs");
            }
          });
        }
      }

      // propertyTax calculation
      if (homeBudget) {
        const currentCityPropertyTax = await PropertyTaxSchema.findOne({
          zipCode: `${city.postalCode}`,
        });
        if (currentCityPropertyTax) {
          console.log(currentCityPropertyTax);

          currentCity.propertyTaxPercentage = Number(
            currentCityPropertyTax?.propertyTax
          );
          currentCity.propertyTaxAmount = Math.ceil(
            (currentCityPropertyTax?.propertyTax * homeBudget) / 100
          );
        }
      }
      currentCity.totalTaxAmount =
        currentCity.totalStateTax + currentCity.propertyTaxAmount;

      resData.push(currentCity);
    }
    return res.json({
      success: true,
      data: resData,
    });
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
