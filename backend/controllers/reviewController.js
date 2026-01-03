import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;

  try {
    const newReview = new Review({
      ...req.body,
      tourId,
      userId: req.userId, // 🔥 comes from token
    });

    const savedReview = await newReview.save();

    // Attach review to tour
    await Tour.findByIdAndUpdate(
      tourId,
      { $push: { reviews: savedReview._id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Review submitted successfully",
      data: savedReview,
    });
  } catch (err) {
    console.error("Review error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to submit review",
    });
  }
};
