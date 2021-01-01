const {Router} = require('express') /* este metodo router me sirve para definir nuevas rutas para mi servidor*/
const router = Router(); /*Router ejectutate y guardo el objeto en una constante router que me sirve para crear nuevas rutas */

router.get('/', (req, res) => { /*podriamos enviar un archivo html o respomder un archivo html con css y js,lo mas importante es responder en formato json */
    res.json({'title':'hello world'}) /*vamos a responder un objeto java script un json */ /*el servidor esta devolviendo un json */
}); /*a traves de java script puedo interpretarlo para mostrarlo en una interfaz o  a traves de una aplicacion movil podria tomar este dato para mostrarlo dentro de la aplicacion movil */

module.exports = router;