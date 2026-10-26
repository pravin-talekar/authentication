// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//     try{
//         const token = req.cookies?.token

//     console.log("In authMiddelware token : ", token)

//     console.log("JWT_SECRET loaded:", Boolean(process.env.JWT_SECRET));

//     const decoded = jwt.verify(
//         token,
//         process.env.JWT_SECRET,
//     )

//     console.log("in authMiddleware decoded token data: ", decoded);

//     const userId = decoded.id;
//     console.log("in authMiddleware userId : ", userId);

//     req.userId = decoded.id;
//     next();
//     }catch(error){
//         console.log(error)
//     }
// }

// module.exports = {
//     authMiddleware
// }









const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies?.token;

        // 1. Check whether token exists
        if (!token) {
            return res.status(401).json({
                message: "Token missing. Please login again."
            });
        }

        // 2. Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // 3. Store user ID
        req.userId = decoded.id;

        // 4. Continue to next middleware/controller
        next();

    } catch (error) {
        console.log("JWT verification error:", error.message);

        return res.status(401).json({
            message:
                error.name === "TokenExpiredError"
                    ? "Token expired. Please login again."
                    : "Invalid token. Please login again."
        });
    }
};

module.exports = {
    authMiddleware
};
