// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '671857282958318', // your App ID
        'clientSecret'  : '7b03be53d878d65591924203d8312672', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : '90Zckc98VScs1a6BQNhXBEk2v',
        'consumerSecret'    : 'yVwQZUeN2rXUpJorDSnTqg9KdB5UC87QZCyYauZ11cm66HGKZ1',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '276769652560-a3t1bopka0fb5b6pfitg908ut7saoad0.apps.googleusercontent.com',
        'clientSecret'  : 'Lu33AM6rgDU3LidVllLIxpFj',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};