import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const { rating, reviewText, username } = req.body;

  // 🔒 Backend validation
  if (!req.userId) {
    return res.status(401).json({
      success: false,
      message: "Not authenticated",
    });
  }

  if (!rating || !reviewText || !username) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const newReview = new Review({
      tourId,
      userId: req.userId,
      username,
      reviewText,
      rating,
    });

    const savedReview = await newReview.save();

    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

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
