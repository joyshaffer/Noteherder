import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "key",
    authDomain: "domain",
    databaseURL: "url",
    projectId: "id",
    storageBucket: "",
    messagingSenderId: "id"
}) 

const db = database(app)

export default Rebase.createClass(db)
