import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
  comments: [
    {
      // video에 comment들의 아이디를 가져올 것인가
      //video: {
      //type: mongoose.Schema.Types.ObjectId,
      //ref: "Video",
      //이렇게 커멘드에 비디오 id를 가져올 것인가 선택해서 하면 된다. 뭐든 괜찮음

      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video"
    }
  ]
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
