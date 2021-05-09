const log = (req, res, next) => {
    console.log(req.url);
    next();
}

const checkSize = (req, res, next) => {
    if(req.params.param.length > 6){
       return res.status(403).send('Parametar ima više od 6 znakova!');
    }
    next();
}

export {log, checkSize}