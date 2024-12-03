import TryCatch from "../middlewares/TryCatch.js";
import { Courses } from "../models/Courses.js";

export const createCourse = TryCatch(async (req, res) => {
  const { title, description, category, createdBy, duration, price } = req.body;

  const image = req.file;

  await Courses.create({
    title,
    description,
    category,
    createdBy,
    imaage: image?.path,
    duration,
    price,
  });

  res.status(201).json({
    message: "Course created successfully",
  });
});
