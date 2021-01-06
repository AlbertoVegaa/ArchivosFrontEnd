// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDIo5ielrhN591wSrH-AXPD_n2n2KCs7f8",
    authDomain: "dania-9d963.firebaseapp.com",
    projectId: "dania-9d963",
    storageBucket: "dania-9d963.appspot.com",
    messagingSenderId: "347808090504",
    appId: "1:347808090504:web:77a92832c7d80d4960d23d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('users/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}