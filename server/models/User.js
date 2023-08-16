const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        provider: String,
        provider_id: String,
        token: String,
        provider_pic: String,
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'User'
            }
        ]
    }
);


// If the user is not in the follower list, let them follow you
UserSchema.methods.follow = function (user_id) {
    if (this.following.indexof(user_id) === -1) {
        this.following.push(user_id);
    }
};

UserSchema.methods.AddFollower = function (fs) {
    this.followers.push(fs);
};

module.exports = mongoose.model('User', UserSchema);