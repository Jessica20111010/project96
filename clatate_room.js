var firebaseConfig = {
    apiKey: "AIzaSyCNWhVmeBoDJcXSRhldx-EXboSbcLh1OTY",
    authDomain: "clatate.firebaseapp.com",
    projectId: "clatate",
    storageBucket: "clatate.appspot.com",
    messagingSenderId: "430028320772",
    appId: "1:430028320772:web:5db67acb5b70359d26c551"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")

    document.getElementById("user_name").innerHTML="welcome "+user_name

function addroom()
{
  room_name=document.getElementById("room_name").value

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  })

  localStorage.setItem("room_name", room_name)
  window.location="clatate_page.html"
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>"+Room_names+"</div><hr>"
      document.getElementById("output")+=row

//End code
});});}
getData();

function redirecttoroomname(name)
{
      localStorage.setItem("room_name", name)
      window.location="clatate_page.html"
}

function logout()
{
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location="index.html"
}
