var name;
var role;
var startDate;
var rate;

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


$("#addEmployeeButton").on("click", function () {
    console.log("new employee submitted");
    event.preventDefault();

    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#start-input").val().trim();
    rate = $("#rate-input").val().trim();

    database.ref().push({
        name: name,
        role: role,
        rate: rate,
        startDate: startDate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

function addEmployeeToTable() {
    console.log("adding new employee to table")
    var newEmployee = $("<tr>");
    var monthsWorked = moment().diff(moment(startDate), "months");
    newEmployee
        .append($("<th>").text(name).attr("scope", "row"))
        .append($("<td>").text(role))
        .append($("<td>").text(moment(startDate).format("MM/DD/YYYY")))
        .append($("<td>").text(monthsWorked))
        .append($("<td>").text(rate))
        .append($("<td>").text(monthsWorked * rate))

    $("table tbody").append(newEmployee);
}

dbRef.orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {
    // Change the HTML to reflect
    addEmployeeToTable();

}, function (err) {
    console.log(err);
});