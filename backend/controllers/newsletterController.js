import Newsletter from "../models/Newsletter.js";

export const subscribeNewsletter = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email required" });
  }

  try {
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Email already subscribed",
      });
    }

    await Newsletter.create({ email });

    res.status(200).json({
      success: true,
      message: "Subscribed successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Subscription failed",
    });
  }
};
