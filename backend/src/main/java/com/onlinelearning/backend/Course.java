package com.onlinelearning.backend;

public class Course {

    private String name;
    private String description;
    private String duration;

    public Course(String name, String description, String duration) {
        this.name = name;
        this.description = description;
        this.duration = duration;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getDuration() {
        return duration;
    }
}