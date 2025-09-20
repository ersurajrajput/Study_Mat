package com.ersurajrajput.tweetsy.api

import com.ersurajrajput.tweetsy.model.TweetModel
import retrofit2.Response
import retrofit2.http.GET


interface TweetsyAPI {

    @GET("tweets.json")
    suspend fun getTweets(): Response<List<TweetModel>>
}