package com.ersurajrajput.tweetsy

import CategoriesScreen
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.ersurajrajput.tweetsy.api.TweetsyAPI
import com.ersurajrajput.tweetsy.repository.TweetRepository
import com.ersurajrajput.tweetsy.screens.TweetScreen
import com.ersurajrajput.tweetsy.ui.theme.TweetsyTheme
import dagger.hilt.android.AndroidEntryPoint
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import javax.inject.Inject

@AndroidEntryPoint
class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            TweetsyTheme {
               App()
            }
        }

    }

}


@Composable
fun App(){
    val navController = rememberNavController()
     NavHost(navController = navController, startDestination = "categoriesScreen"){
            composable("categoriesScreen"){
                CategoriesScreen(){cat ->
                    navController.navigate("tweetScreen/$cat")
                    Log.d("myTag","Clicked on $cat")
                }
            }
            composable(route = "tweetScreen/{cat}",
                arguments = listOf(
                    navArgument("cat"){
                        type = NavType.StringType
                    }
                )){
                TweetScreen()
            }

     }
}
