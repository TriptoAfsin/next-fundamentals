export default function(req, res){
    const params = req.query.params 
    console.log(params)

    return res.status(200).json(params)
}