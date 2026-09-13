function showMessage() {
    alert("Welcome! Start exploring our courses.");
}

function enrollCourse() {
    let courses =
        JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    if (!courses.includes("Java Programming")) {
        courses.push("Java Programming");
    }

    localStorage.setItem(
        "enrolledCourses",
        JSON.stringify(courses)
    );

    alert("You have successfully enrolled in Java Programming!");
}


async function completeLesson(lessonNumber) {

    try {
        const response = await fetch(
            "http://localhost:8080/api/complete?courseName=Java%20Programming&lessonNumber=" + lessonNumber,
            {
                method: "POST"
            }
        );

        const message = await response.text();
        console.log(message);

    } catch (error) {
        console.log("Backend connection failed:", error);
    }

    let completedLessons =
        JSON.parse(localStorage.getItem("completedLessons")) || [];

    if (!completedLessons.includes(lessonNumber)) {
        completedLessons.push(lessonNumber);

        localStorage.setItem(
            "completedLessons",
            JSON.stringify(completedLessons)
        );
    }

    let progress = (completedLessons.length / 6) * 100;

    document.getElementById("progress").innerText =
        "Progress: " + progress + "%";

    alert("Lesson completed!");
}
function searchCourses() {
    let input = document.getElementById("search").value.toLowerCase();
    let courses = document.getElementsByClassName("course-card");

    for (let i = 0; i < courses.length; i++) {
        let courseName = courses[i].innerText.toLowerCase();

        if (courseName.includes(input)) {
            courses[i].style.display = "block";
        } else {
            courses[i].style.display = "none";
        }
    }
}
function enrollWebCourse() {
    let courses =
        JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    if (!courses.includes("Web Development")) {
        courses.push("Web Development");
    }

    localStorage.setItem(
        "enrolledCourses",
        JSON.stringify(courses)
    );

    alert("You have successfully enrolled in Web Development!");
}
function getProgress() {
    let completedLessons =
        JSON.parse(localStorage.getItem("completedLessons")) || [];

    return ((completedLessons.length / 6) * 100).toFixed(2);
}
async function loadCoursesFromBackend() {
    try {
        const response = await fetch("http://localhost:8080/api/courses");
        const courses = await response.json();

        console.log("Courses from Java backend:", courses);
    } catch (error) {
        console.log("Backend connection failed:", error);
    }
}

loadCoursesFromBackend();
async function displayCourses() {
    try {
        const response = await fetch("http://localhost:8080/api/courses");
        const courses = await response.json();

        const container = document.getElementById("courseContainer");

        if (!container) {
            return;
        }

        courses.forEach(function(course) {
            const card = document.createElement("div");
            card.className = "course-card";

            card.innerHTML = `
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <p><b>Duration:</b> ${course.duration}</p>
                <button onclick="openCourse('${course.name}')">View Course</button>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.log("Unable to load courses:", error);
    }
}

displayCourses();
function openCourse(courseName) {

    if (courseName === "Java Programming") {
        window.location.href = "course.html";
    }
    else if (courseName === "HTML & CSS") {
        window.location.href = "htmlcss.html";
    }
    else if (courseName === "C Programming") {
        window.location.href = "cprogramming.html";
    }
    else if (courseName === "Python Programming") {
        window.location.href = "python.html";
    }
    else if (courseName === "Web Development") {
        window.location.href = "web.html";
    }
}
async function enrollJavaCourse() {
    try {
        const response = await fetch(
            "http://localhost:8080/api/enroll?courseName=Java%20Programming",
            {
                method: "POST"
            }
        );

        const message = await response.text();
        alert(message);

    } catch (error) {
        alert("Enrollment failed. Make sure the Java backend is running.");
        console.log(error);
    }
}
async function enrollBackendCourse(courseName) {
    try {
        const response = await fetch(
            "http://localhost:8080/api/enroll?courseName=" +
            encodeURIComponent(courseName),
            {
                method: "POST"
            }
        );

        const message = await response.text();
        alert(message);

    } catch (error) {
        alert("Enrollment failed. Make sure the Java backend is running.");
        console.log(error);
    }
}
async function completeCourseLesson(courseName, storageKey, lessonNumber) {
    try {
        await fetch(
            "http://localhost:8080/api/complete?courseName=" +
            encodeURIComponent(courseName) +
            "&lessonNumber=" + lessonNumber,
            { method: "POST" }
        );

        let lessons =
            JSON.parse(localStorage.getItem(storageKey)) || [];

        if (!lessons.includes(lessonNumber)) {
            lessons.push(lessonNumber);
            localStorage.setItem(storageKey, JSON.stringify(lessons));
        }
        alert("Lesson completed!");

    } catch (error) {
        console.log("Backend connection failed:", error);
    }

}