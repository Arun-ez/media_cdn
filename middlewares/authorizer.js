
const authorizer = (request, response, next) => {

    if (!request.query.hasOwnProperty('token') || request.query.token !== process.env.SECRET_KEY) {
        return response.status(401).send({ error: 'Unauthorized' })
    }

    next();

}

export default authorizer;