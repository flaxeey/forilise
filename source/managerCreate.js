module.exports = function create(db, server) {
    console.log(server.id)
    var server = new db.table(`server_${server.id}`);
    server.set('server_id', server.id);
    server.set('server_premium', false);
    server.set('server_backlist', false);
}