import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const JWT_SECRET = process.env.JWT_SECRET;

  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - Invalid Token" });
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error in verifyToken", error);
    return res.status(500).json({ success: false, message: "server error" });
  }
};
