import { Post } from '../models/Post.js';
class SiteController {
    home(req, res) {
        res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
    addPost(req, res) {
        const newPost = new Post(req.body);
        newPost
            .save()
            .then(() => console.log('thanh cong'))
            .catch(() => console.log('that bai'));
        res.redirect('/');
    }
}
export default new SiteController();
