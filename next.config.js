const nextTranslate = require('next-translate');
module.exports = {
...nextTranslate(),
images: {
    domains:['localhost','next-portfolio-sanity.vercel.app','cdn.sanity.io']
}
};
