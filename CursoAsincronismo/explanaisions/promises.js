function requestHandler(req, res){
    User.findById(req.userId)
        .then((user)=>{
            return Tasks.findById(user.tasksId)
        })
        .then((task)=>{
            tasks.completed = true;
            return task.save();
        })
        .then(()=>{
            res.send('Tasks completed')
        })
        .catch((err)=>{
            res.send(err)
        })
}