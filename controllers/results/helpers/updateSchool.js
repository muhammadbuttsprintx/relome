// import { SchoolSchema } from "../../../schemas/School/index.js";
export const updateSchool = async (req, res) => {
  // try {
  //   const { id } = req.params;
  //   const { name, students, classes, teachers, expense, revenue, profit } =
  //     req.body;
  //   if (
  //     !name ||
  //     !students ||
  //     !classes ||
  //     !teachers ||
  //     !expense ||
  //     !revenue ||
  //     !profit
  //   ) {
  //     return res.json({
  //       success: false,
  //       message: "Invalid input",
  //     });
  //   }
  //   let schoolToUpdate = await SchoolSchema.findById({
  //     _id: id,
  //   });
  //   const data = await SchoolSchema.findByIdAndUpdate(
  //     { _id: id },
  //     {
  //       ...schoolToUpdate,
  //       name,
  //       students,
  //       classes,
  //       teachers,
  //       expense,
  //       revenue,
  //       profit,
  //     },
  //     { new: true }
  //   );
  //   return res.json({
  //     success: true,
  //     data,
  //   });
  // } catch (e) {
  //   console.log("Error:", e.message);
  //   return res.json({
  //     success: false,
  //     message: "Internal Server Error",
  //   });
  // }
};
