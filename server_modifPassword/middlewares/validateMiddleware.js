const validateMiddleware=(req,res,next)=>{
    const {amount,description ,date}=req.body

    if(!amount||!description||!date){
        return res.status(400).json({
            message:"Champs requis manquants"
        })
    }
    if(isNaN(amount)||amount<=0){
        return res.status(400).json({
            message:"Montant invalide"
        })
    }
    next()
}

module.exports=validateMiddleware