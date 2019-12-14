if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb://zakriakhanengr@gmail.com:zack1123@cluster0-shard-00-00-tifru.mongodb.net:27017,cluster0-shard-00-01-tifru.mongodb.net:27017,cluster0-shard-00-02-tifru.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
        secret: 'yoursecret'
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/meven_auth",
        secret: 'yoursecret'
    };
}