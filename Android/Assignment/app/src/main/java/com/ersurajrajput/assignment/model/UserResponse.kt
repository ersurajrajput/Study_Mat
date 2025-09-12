package com.ersurajrajput.assignment.model

data class UserResponse(
    val user : User
)
data class User(
    val username: String,
    val name: String,
    val location:Location,
    val avatar: String,
    val social:Social,
    val statistics:Statistics
)
data class Location(
    val city: String,
    val country: String
)
data class Social(
    val website: String,
    val profiles: List<Profiles>

)
data class Profiles(
    val platform: String,
    val url: String
)
data class Statistics(
    val followers: Int,
    val following: Int,
    val activity:Activity
)
data class Activity(
    val shots:Int,
    val collections: Int
)