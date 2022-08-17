//YOUR FIREBASE LINKS
var firebaseConfig = {apiKey: "AIzaSyDHfPb0ihzIseOieZ5IOskX99ZzKWlb2Jw",
authDomain: "calvin-kwitter.firebaseapp.com",
databaseURL: "https://calvin-kwitter-default-rtdb.firebaseio.com",
projectId: "calvin-kwitter",
storageBucket: "calvin-kwitter.appspot.com",
messagingSenderId: "327845121710",
appId: "1:327845121710:web:9d9f9b23ab7c1094bae73f" };
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();
