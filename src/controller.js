const root = (req, res) => {
    res.end('Home page is coming! Congrats!');
}

const text = (req, res) => {
    const param = req.params.param || 'Text';
    //if (param === undefined) param = 'Text'; (moze i ovaj malo naivniji nacin, isto važii za html u 16. liniji coda)
    res.end(`Pozdrav ${param} Server!`);
}

const html = (req, res) => {
    const param = req.params.param || 'Html';
    res.end(`<h1>Pozdrav ${param}  Server!</h1>`);
}

export { root, text, html }