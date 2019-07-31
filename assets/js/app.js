var name;
var role;
var startDate;
var monthlyRate;

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCTKU-AJ1YJWpzrWYlS5nChgEOePh5UDng",
    authDomain: "fir-intro-91881.firebaseapp.com",
    databaseURL: "https://fir-intro-91881.firebaseio.com",
    projectId: "fir-intro-91881",
    storageBucket: "",
    messagingSenderId: "8542128191",
    appId: "1:8542128191:web:5729308456045ce4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var dbRef = database.ref();


$("#addEmployeeBtn").on("click", function () {
    event.preventDefault();

    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#start-input").val().trim();
    monthlyRate = $("#rate-input").val().trim();

    var newEmployee = $("<tr>")
    newEmployee
        .append($("<td>").text(name))
        .append($("<td>").text(role))
        .append($("<td>").text(startDate))
        .append($("<td>").text(monthlyRate));

    $("#tableID tbody").append(newEmployee);

    database.ref().push({
        name: name,
        email: email,
        role: role,
        monthlyRate: monthlyRate,
      });
});

