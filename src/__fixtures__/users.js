module.exports.buildUser = ({
    name= 'john', 
    address= '101 street', 
    age= '21', 
    uid= 'abc',
} = {}) => ({
    name,
    address,
    age,
    uid,
})