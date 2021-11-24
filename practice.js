var firebaseConfig = {
    apiKey: "AIzaSyCEmkbEuQX5buf2HlSkNJI2QmBmWQ_To1M",
    authDomain: "kwiter-7a6a7.firebaseapp.com",
    databaseURL: "https://kwiter-7a6a7-default-rtdb.firebaseio.com",
    projectId: "kwiter-7a6a7",
    storageBucket: "kwiter-7a6a7.appspot.com",
    messagingSenderId: "397633546080",
    appId: "1:397633546080:web:b66cbf8b22b3f2aed7e005",
    measurementId: "G-PQT9DLXZXP"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});
    }