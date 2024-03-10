import firebase from 'firebase/app'
import 'firebase/auth'

if(!firebase.getApps.length){
    firebase.initializeApp({

    })
}

export default firebase
