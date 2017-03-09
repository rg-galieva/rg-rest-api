var post = new Post({title: "Hey"});

post.save(function (err, cur, res) {
    if (err) {
        console.log(err);
    } else {
        console.log('comment', arguments);
    }
});

// curl -H "Content-Type: application/json" -d '{"title":"mLab Support", "summary": "As our first step in creating the API, we define the endpoints (or data) we want to expose. Our contact list app will allow users to perform CRUD operations on their contacts."}' http://rg-rest-api.herokuapp.com/api/posts