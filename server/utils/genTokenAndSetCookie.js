import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (res, userId) => {
  const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
  const JWT_SECRET = process.env.JWT_SECRET;

  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};

export default generateTokenAndSetCookie;
