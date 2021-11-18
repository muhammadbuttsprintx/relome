import { CitySchema } from "../../../schemas/city/index.js";
import { PropertyTaxSchema } from "../../../schemas/propertyTax/index.js";
import { StateTaxSchema } from "../../../schemas/stateTax/index.js";

export const getResults = async (req, res) => {
  // let params = req.query;
  // for (const key in params) {
  //   if (Object.hasOwnProperty.call(params, key)) {
  //     params[key] = params[key].trim();
  //   }
  // }
  // // console.log(params.forEach(() => {}));
  // console.log(params);

  try {
    // const pageSize = 9;
    const cityData = await CitySchema.find();
    const postalCode = [];
    const state = [];

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

    if (!resData) {
      return res.json({
        success: false,
        message: "Invalid Request",
      });
    }
    console.log(resData.length);
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
