import jwt from 'jsonwebtoken';

// Generate a reset token
export const generateResetToken = (id:string) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET!, { expiresIn: "5m" });
};
