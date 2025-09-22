package com.ersurajrajput.tweetsy.screens

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Card
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel

import com.ersurajrajput.tweetsy.viewModel.TweetsViewModel

@Composable
@Preview(showBackground = true, widthDp = 360, heightDp = 640)
fun TweetScreen() {
    val tweetsViewModel: TweetsViewModel = hiltViewModel()
    val tweet = tweetsViewModel.tweet.collectAsState()
    val isLoading: Boolean by tweetsViewModel.isLoading.collectAsState(initial = false)

    if (isLoading) {
        Box(
            modifier = Modifier
                .fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            CircularProgressIndicator()
        }
    } else {
        LazyColumn(
            modifier = Modifier
                .statusBarsPadding()
        ) {
            items(tweet.value) { tweet ->
                card(tweet.text.toString())
            }
        }
    }
}

@Composable
@Preview
fun card(tweet: String="all"){
    Card(
        modifier = Modifier
            .padding(horizontal = 20.dp, vertical = 10.dp)

            .fillMaxWidth(),
        border = BorderStroke(1.dp, Color(0xFFCCCCCC))

    ){
        Text(
            text = tweet,
            modifier = Modifier.padding(20.dp),
            style = MaterialTheme.typography.bodyMedium,
        )
    }
}
