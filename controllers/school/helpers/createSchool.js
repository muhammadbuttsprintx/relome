import { SchoolSchema } from "../../../schemas/School/index.js";

export const createSchool = async (req, res) => {
  const { name, students, classes, teachers, expense, revenue } = req.body;

  try {
    if (!name || !students || !classes || !teachers || !expense || !revenue) {
      return res.json({
        success: false,
        message: "Invalid input",
      });
    }

    const nameData = await SchoolSchema.find({ name });
    if (nameData[0]) {
      return res.json({
        success: false,
        message: "School name already exists",
      });
    }

    const data = new SchoolSchema({
      name,
      students,
      classes,
      teachers,
      expense,
      revenue,
      profit: revenue - expense,
      createdAt: new Date().toISOString(),
    });

    await data.save();

    return res.json({
      success: true,
      message: "School created successfully",
      data,
    });
  } catch (e) {
    console.log("Error:", e.message);
    return res.json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
