async function requestHandler(req, res){
    try{
        const user = await User.findBiId(req.userId);
        const tasks = await Tasks.findById(user.tasksId);
        tasks.completed = true;
        await tasks.save();
        res.send('Task completed');
    } catch (error){
        res.send(error)
    }
} 