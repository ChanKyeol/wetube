// export const videos = [
//   {
//     id: 332231,
//     title: "Vodeo awesome",
//     description: "This is something I love",
//     views: 24,
//     videoFile:
//       "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creators: {
//       id: 12122,
//       name: "Ck",
//       email: "c@k.com",
//     },
//   },
//   {
//     id: 3322211133,
//     title: "Vodeo super",
//     description: "This is something I love",
//     views: 24,
//     videoFile:
//       "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creators: {
//       id: 12122,
//       name: "Ck",
//       email: "c@k.com",
//     },
//   },
//   {
//     id: 55446,
//     title: "Vodeo good",
//     description: "This is something I love",
//     views: 24,
//     videoFile:
//       "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creators: {
//       id: 12122,
//       name: "Ck",
//       email: "c@k.com",
//     },
//   },
//   {
//     id: 999977,
//     title: "Vodeo yaps",
//     description: "This is something I love",
//     views: 24,
//     videoFile:
//       "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creators: {
//       id: 12122,
//       name: "Ck",
//       email: "c@k.com",
//     },
//   },
// ];

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  userNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
