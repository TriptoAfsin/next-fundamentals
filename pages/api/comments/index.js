let comments = [
    {
        id: 1,
        comment: "Awesome Feature 🤩"
    },
    {
        id: 2,
        comment: "Just Wow 😍"
    },
    {
        id: 3,
        comment: "Loved It"
    }
]


export default function handler(req, res){
    if(req.method === 'GET'){
        return res.status(200).json(
            comments
        )
    }
    else if(req.method === 'POST'){
        let newComment = {
            id: Date.now(),
            comment: req.body.comment
        }
        comments.push(newComment)

        res.status(201).json(
            newComment
        )
    }

}