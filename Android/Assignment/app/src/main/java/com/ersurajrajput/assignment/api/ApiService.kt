package com.ersurajrajput.assignment.api

import UResponse
import com.ersurajrajput.assignment.model.UserResponse
import retrofit2.Call
import retrofit2.http.GET

interface ApiService {
//    @GET("android-assesment/profile/refs/heads/main/data.json")
//    fun getUser(): Call<UserResponse>\\\


    @GET("users")
    fun getUsers():Call<UResponse>
}