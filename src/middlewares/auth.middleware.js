export const checkUserLoggued = (req,res,next)=>{
    if(req.user){
        next();
    } else {
        res.redirect("/registro")
    }
}