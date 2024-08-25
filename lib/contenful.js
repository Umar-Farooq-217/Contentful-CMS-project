const contentful = require('contentful')

const client = contentful.createClient({
    accessToken:process.env.ACCESS_TOKEN,
    space:process.env.SPACE
})
export default client