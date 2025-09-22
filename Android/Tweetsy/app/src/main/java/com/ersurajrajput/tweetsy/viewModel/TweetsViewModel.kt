package com.ersurajrajput.tweetsy.viewModel

import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.ersurajrajput.tweetsy.model.TweetModel
import com.ersurajrajput.tweetsy.repository.TweetRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class TweetsViewModel @Inject constructor(private val tweetRepository: TweetRepository,private val savedStateHandle: SavedStateHandle): ViewModel()  {
    val tweet:StateFlow<List<TweetModel>>
        get() = tweetRepository.allTweetByCategories

    val isLoading: StateFlow<Boolean> = tweetRepository.isLoading


    init {
        viewModelScope.launch {
            val cat = savedStateHandle.get<String>("cat")?:"aiml"
            tweetRepository.getAllTweetsByCategories(cat)
        }
    }

}
