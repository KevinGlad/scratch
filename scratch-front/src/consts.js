const uriBase = process.env.NODE_ENV !== 'production' ? (
    "http://localhost:3001"
) : (
    "https://scratch3241456.herokuapp.com"
)

const uriAPI = "/api/v1"

module.exports.uriBase = uriBase
module.exports.uriAPI = uriAPI