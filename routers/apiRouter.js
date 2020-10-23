import express from "express";
import routes from "../routes";
import {
    postAddComment,
    deleteComment,
    postRegisterView
} from "../controllers/videoController";


const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView); // ~/users
apiRouter.post(routes.addComment, postAddComment);
apiRouter.get(routes.deleteComment, deleteComment);

export default apiRouter;
