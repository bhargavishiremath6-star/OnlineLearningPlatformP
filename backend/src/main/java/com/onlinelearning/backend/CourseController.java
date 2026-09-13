package com.onlinelearning.backend;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;


import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class CourseController {

    @GetMapping("/api/courses")
    public List<Course> getCourses() {

        return Arrays.asList(
            new Course(
                "Java Programming",
                "Learn the basics of Java programming.",
                "6 Weeks"
            ),
            new Course(
                "HTML & CSS",
                "Learn how to create beautiful websites.",
                "4 Weeks"
            ),
            new Course(
                "C Programming",
                "Learn programming fundamentals using C.",
                "5 Weeks"
            ),
            new Course(
                "Python Programming",
                "Learn Python programming from basics.",
                "6 Weeks"
            ),
            new Course(
                "Web Development",
                "Learn how to build modern websites.",
                "8 Weeks"
            )
        );
    }
        @PostMapping("/api/enroll")
        public String enrollCourse(@RequestParam String courseName) {
           return courseName + " enrolled successfully!";
        }
        @PostMapping("/api/complete")
        public String completeLesson(@RequestParam String courseName,
            @RequestParam int lessonNumber) {
                return courseName + " - Lesson " + lessonNumber + " completed successfully!";
            }
    
}