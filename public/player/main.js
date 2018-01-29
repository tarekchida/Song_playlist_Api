/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//


DZ.init({
    appId: '8',
    channelUrl: '/channel.html',
    player: {
        container: 'player',
        width: 800,
        height: 300,
        onload: playerLoaded
    }
});

DZ.getLoginStatus(function (response) {
    if (response.authResponse) {
        window.location = '/index.tml';
    } else {
        // no user session available, someone you dont know
        window.location = '/login.html';

    }
});

function doLogin() {
    DZ.login(function (response) {

        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            DZ.api('/user/me', function (response) {
                console.log('Good to see you, ' + response.name + '.');
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {perms: 'basic_access,email'});
}





function playerLoaded() {

}


