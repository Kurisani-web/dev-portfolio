
const validate = (schema) => async (req,res,next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "Fill the input properply";
        const extraDetails = err.errors[0].message;
        // const extraDetails = errorObject.extraDetails.message;
        const error = {
            status,
            message,
            extraDetails,
        }
        // console.log(error.extraDetails);
        
        next(error);
    }
};

module.exports = validate;