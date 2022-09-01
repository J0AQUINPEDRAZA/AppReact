let run = true;

let Task = (consult) => {
    return new Promise((resolve, reject) => {
        if (run) {
            setTimeout(() => {
                resolve(consult)
            }, 2000);
        } else {
            reject("error!!")
        }
    })
}
export default Task