package com.ersurajrajput.tweetsy.api

import com.ersurajrajput.tweetsy.model.TweetModel
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Header
import retrofit2.http.Headers


interface TweetsyAPI {


    @GET("68cedc14ae596e708ff52f39?meta=false")
    suspend fun getTweets(): Response<List<TweetModel>>

    @GET("68cedc14ae596e708ff52f39?meta=false")
    @Headers("X-JSON-PATH: $[*].category")
    suspend fun getAllCategories(): Response<List<String>>


    @GET("68cedc14ae596e708ff52f39?meta=false")
    suspend fun getAllTweetsByCategories(@Header("X-JSON-PATH") category: String ): Response<List<TweetModel>>
}