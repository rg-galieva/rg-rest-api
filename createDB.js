var post = new Post({title: "Hey"});

post.save(function (err, cur, res) {
    if (err) {
        console.log(err);
    } else {
        console.log('comment', arguments);
    }
});