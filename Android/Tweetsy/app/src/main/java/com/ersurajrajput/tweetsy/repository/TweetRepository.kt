package com.ersurajrajput.tweetsy.repository

import com.ersurajrajput.tweetsy.api.TweetsyAPI
import com.ersurajrajput.tweetsy.model.TweetModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import javax.inject.Inject

class TweetRepository @Inject constructor(private val tweetsyAPI: TweetsyAPI){
    private val _allTweetList = MutableStateFlow<List<TweetModel>>(emptyList())
    public val tweetList:StateFlow<List<TweetModel>>
        get() = _allTweetList

    private val _allTweetCategories = MutableStateFlow<List<String>>(emptyList())
    public val tweetCategories:StateFlow<List<String>>
        get() = _allTweetCategories

    private val _allTweetByCategories = MutableStateFlow<List<TweetModel>>(emptyList())
    public val allTweetByCategories:StateFlow<List<TweetModel>>
        get() = _allTweetByCategories


    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading






    suspend fun getAllTweet(){
        _isLoading.value = true
        val response = tweetsyAPI.getTweets()
        if (response.isSuccessful && response.body()!=null){
            response.body()?.let {
                _isLoading.value = false
                _allTweetList.value =  response.body()!!
            }
        }
    }
    suspend fun getAllCategories() {
        _isLoading.value = true
        try {
            val response = tweetsyAPI.getAllCategories()
            if (response.isSuccessful) {
                val categories = response.body() ?: emptyList()
                _allTweetCategories.value = categories.distinct()
            }
        } catch (e: Exception) {
            // Optionally handle error (log it, show message, etc.)
            e.printStackTrace()
        } finally {
            _isLoading.value = false // Always reset loading state
        }
    }

    suspend fun getAllTweetsByCategories(  cat: String){

        _isLoading.value = true
        try {
            val response = tweetsyAPI.getAllTweetsByCategories("tweets[?(@.category==\"$cat\")]")
            if (response.isSuccessful) {
                response.body()?.let {

                    _allTweetByCategories.value =  response.body()!!
                }
            }
        } catch (e: Exception) {
            // Optionally handle error (log it, show message, etc.)
            e.printStackTrace()
        } finally {
            _isLoading.value = false // Always reset loading state
        }
    }


    }
