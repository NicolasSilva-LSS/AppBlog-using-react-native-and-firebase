/* eslint-disable prettier/prettier */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const cors = require('cors')({origin: true});
const fs = require('fs');
const uuid = require('uuid-v4');
const { Storage } = require('@google-cloud/storage');
const storage = new Storage({
    projectId: '',
    keyFilename: ''
})

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.uploadImage = onRequest((request, response) => {
  cors(request, response, () => {
    try{
        fs.writeFileSync('/tmp/imageToSave.jpg', request.body.image, 'base64')

        const bucket = storage.bucket('')
        const id = uuid()
        bucket.upload('/tmp/imageToSave.jpg', {
            uploadType: 'media',
            destination: `/posts/${id}.jpg`,
            metadata: {
                metadata: {
                    contentType: 'image/jpeg',
                    firebaseStorageDownloadTokens: id
                }
            }
        }, (err, file) => {
            if(err){
                console.log(err)
                return response.status(500).json({error: err})
            }else{
                const fileName = encodeURIComponent(file.name)
                const imageUrl = '' 
                    + bucket.name + '/o/' + fileName + '?alt=media&token=' + id
                return response.status(201).json({imageUrl: imageUrl})
            }
        })
    }catch(err){
        console.log(err)
        return response.status(500).json({error: err})
    }
  })
});
