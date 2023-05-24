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
    const {commentId} = req.query

    if(req.method === 'DELETE'){
        const deletedComment = comments.find(
            (comment) => comment.id === parseInt(commentId)
        )

        const IndexofDeletedComment = comments.findIndex(
            (comment) => comment.id === parseInt(commentId)
        )

        comments.splice(IndexofDeletedComment, 1)

        return res.status(200).json(
            `Successfully deleted comment ${deletedComment}`
        )
    }

}