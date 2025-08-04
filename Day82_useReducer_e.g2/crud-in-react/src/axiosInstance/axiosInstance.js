//! Axios Instance:
//? Axios lets us create custom instances for API requests. Each instance is a separate client that can carry its own configuration and options like nase URLs, timeouts and headers. Then we can reuse the configuration for API calls using the same instance.
// If you want to create an axios instance then we need to use axios.create method it is a handy feature within axios used to create a new instance with a custom configuration with axios.create, we can generate a client for any api and reuse the configuration for any calls using the same client as we will see in the example below.

//? Axios is a simple promise based HTTP client for the browser and Node. it provides an easy to use library with a small footprint. It also has an extensible interface and great features like automatic transforms for JSON data, and client side support for protecting againse XSRF, to mention a few.

//? For the server side (Node), it relies upon teh native Node.js HTTP module, whereas on the client side it uses XMLHTTPRequest. Being isomorphic, axios is one of the few libraries that can be used without a sweat on both the browser and server side.
//! Why use axios.create??
// axios.create is essentially a factory to create a new instances of Axios. Let's say you want two instances of Axios: one to call service A and another to call service B, where A can work with a timeout of 100ms and B needs a timeout of 500ms. This is easily possible with axios.create.

import axios from "axios";
// console.log(axios)
let BaseURL = 'http://localhost:5000/'
let AxiosInstances = axios.create({
    baseURL: BaseURL
})
export default AxiosInstances;