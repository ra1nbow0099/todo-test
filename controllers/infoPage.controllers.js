exports.getInfoPage = (req, res) => {
    res.render('info.hbs', {
        isInfo: true
    })
}