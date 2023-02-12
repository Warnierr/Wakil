/* Importation du module mongoose */
const mongoose = require('mongoose');

/* Lien de connexion - Sur le site MongoDB : Connect your application */
const DB = 'marketplace'
const URI = `mongodb+srv://wakil:123@cluster-clickcollect.eonerdq.mongodb.net/${DB}?retryWrites=true&w=majority`

/* Création d'un nouvel objet (asynchrone) pour la connexion et gestion d'erreurs */ 
const MongoDBClient = {
    initialize: () => {
        try {
            /* strictQuery : https://mongoosejs.com/docs/guide.html#strictQuery */
            mongoose.set("strictQuery", false);
            const client = mongoose.connect(URI, {
                useNewUrlParser : true,
                useUnifiedTopology : true
            })
            client.then(() => console.log(`Connexion DB : ${DB} -> OK`))
        } catch (e) {
            throw Error(e)/* Ou console log pour chercher l'erreur */
        }
    }
}

module.exports = MongoDBClient