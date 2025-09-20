package com.ersurajrajput.tweetsy.repository

import com.ersurajrajput.tweetsy.api.TweetsyAPI
import com.ersurajrajput.tweetsy.model.TweetModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import javax.inject.Inject

class TweetRepository @Inject constructor(private val tweetsyAPI: TweetsyAPI){
    private val _tweetList = MutableStateFlow<List<TweetModel>>(emptyList())
    public val tweetList:StateFlow<List<TweetModel>>
        get() = _tweetList

    private val _tweetCategories = MutableStateFlow<List<String>>(emptyList())
    public val tweetCategories:StateFlow<List<String>>
        get() = _tweetCategories


    private val _tweetListByCat = MutableStateFlow<List<TweetModel>>(emptyList())
    public val tweetListByCat:StateFlow<List<TweetModel>>
        get() =_tweetListByCat



    suspend fun getTweet(){
        val response = tweetsyAPI.getTweets()
        if (response.isSuccessful && response.body()!=null){
            response.body()?.let {
            _tweetList.value =  response.body()!!
            }
        }
    }
    suspend fun getAllCategories(){
        val response = tweetsyAPI.getTweets()
        if (response.isSuccessful && response.body()!=null){
            response.body()?.let {
                val myList: MutableList<String> = mutableListOf()
                val responseBody = response.body() ?: emptyList()
                for (res in responseBody){
                    if (!myList.contains(res.category)){
                        myList.add(res.category.toString())
                    }
                }
                _tweetCategories.value = myList
            }
        }

    }


    suspend fun getAllTweetsByCategories(cat: String){
        val response = tweetsyAPI.getTweets()
        if (response.isSuccessful && response.body()!=null){
            response.body()?.let {
                response.body()?.let { it1 -> _tweetListByCat.value =  it1.filter { it.category == cat } }
            }
        }

    }
}