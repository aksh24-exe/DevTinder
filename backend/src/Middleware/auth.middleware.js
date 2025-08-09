export const adminAuth = (req, res, next) => {
    const token = "dfdasd"
    const isAdminAuthorized = token === "dfdasd"
    if (!isAdminAuthorized) {
        return res.status(401).send("Unauthorized")
        
    }
    next();
}

export const userCheck = (req, res, next) => {
    const token = "asdfghjkl"
    const userValidation = token === "asdfghjkl"
    if (!userValidation) {
        return res.status(401).send("It is not Valid user")
    }
    next()
}

