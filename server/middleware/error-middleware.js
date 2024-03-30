const errorMiddleware = (err,req,res,next) => {
    const status = err.status || 500;
    const extraDetails = err.extraDetails || "Error from Backend";
    // const message = extraDetails[0].message;

    return res.status(status).json({errors:extraDetails});
};

module.exports = errorMiddleware;