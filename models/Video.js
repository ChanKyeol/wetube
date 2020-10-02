import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
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
});

const model = mongoose.model("Video", VideoSchema);
export default model;
