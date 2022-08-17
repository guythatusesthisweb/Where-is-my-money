
//ADD YOUR among us hot LINKS HERE
var firebaseConfig = {apiKey: "AIzaSyDHfPb0ihzIseOieZ5IOskX99ZzKWlb2Jw",
authDomain: "calvin-kwitter.firebaseapp.com",
databaseURL: "https://calvin-kwitter-default-rtdb.firebaseio.com",
projectId: "calvin-kwitter",
storageBucket: "calvin-kwitter.appspot.com",
messagingSenderId: "327845121710",
appId: "1:327845121710:web:9d9f9b23ab7c1094bae73f" };
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WELcOmnE "+user_name   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start farting
      console.log("Room Name-" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End deez nuts
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
function addRoom()
{
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
 purpose:"adding room name"    
});

localStorage.setItem("room_name", room_name);

window.location="kwitter_page.html"

}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location="kwitter_page.html";
}