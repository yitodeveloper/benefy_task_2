import axios from 'axios';

const GRAPHQL_URL = 'http://localhost:9090/graphql';

export const fetchUsers = () => {

    return axios.post(GRAPHQL_URL, {
        query: `
            {
              users{
                id, name, lastname, mail
              }
            }
        `
    })
};

export const postUser = (payload) => {
    return axios.post(GRAPHQL_URL, {
        query: `
            mutation createUser{
              createUser(name: "${payload.name}", lastname: "${payload.lastname}", mail: "${payload.mail}"){
                id,
                name,
                lastname,
                mail,
              }
            }
        `
    })
};


export const putUser = (payload) => {
    return axios.post(GRAPHQL_URL, {
        query: `
            mutation updateUserData{
              updateUserData(id: ${payload.id},name: "${payload.name}", lastname: "${payload.lastname}", mail: "${payload.mail}"){
                id,
                name,
                lastname,
                mail,
              }
            }
        `
    })
};
