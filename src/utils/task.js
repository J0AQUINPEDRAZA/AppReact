let run = true;

const Task = (consult) => {
    return new Promise((resolve, reject) => {
        if (run) {
            setTimeout(() => {
                resolve(consult)
            }, 1000);
        } else {
            reject("error!!")
        }
    })
}
export default Task