const express = require('express');
const app = express();
const cors = require('cors');

const { graphqlHTTP }  = require('express-graphql');
const schema =  require('./src/graphql/schema');

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))


app.listen(9090, () => {
    console.log('Servidor inicializado en puerto 9090')
})