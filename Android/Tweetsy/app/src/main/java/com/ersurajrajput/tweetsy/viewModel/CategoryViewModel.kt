package com.ersurajrajput.tweetsy.viewModel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.ersurajrajput.tweetsy.repository.TweetRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject


@HiltViewModel
class CategoryViewModel  @Inject constructor(private val tweetRepository: TweetRepository): ViewModel() {
val category:StateFlow<List<String>>
    get() = tweetRepository.tweetCategories

    init {
        viewModelScope.launch {
            tweetRepository.getAllCategories()
        }
    }

}