function requestHandler(req, res){
    User.findById(req.userId, (err, user)=> {
        if(err){
            res.send(err);            
        } else {
            Tasks.findById(user.tasks.Id, (err, tasks)=> {
                if(err){
                    return res.senr(err);
                } else {
                    tasks.completed = true;
                    tasks.save((err)=>{
                        if(err){
                            return res.send(err)
                        } else {
                            res.send('task completed');
                        }
                    })
                }

            })
        }
    })
}

