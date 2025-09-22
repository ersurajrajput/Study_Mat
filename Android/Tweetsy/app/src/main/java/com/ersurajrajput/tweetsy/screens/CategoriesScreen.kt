import android.widget.Toast
import androidx.compose.foundation.Image
import androidx.compose.foundation.background

import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.paint

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter

import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.imageResource
import androidx.compose.ui.res.painterResource

import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.lifecycle.viewmodel.compose.viewModel
import com.ersurajrajput.tweetsy.R

import com.ersurajrajput.tweetsy.viewModel.CategoryViewModel


@Composable
@Preview(showBackground = true, widthDp = 360, heightDp = 640)
fun CategoriesScreen(onclick:(cat:String)->Unit={}) {
    val categoryViewModel: CategoryViewModel = hiltViewModel()
    val category: State<List<String>> = categoryViewModel.category.collectAsState()
    val isLoading: Boolean by categoryViewModel.isLoading.collectAsState(initial = false)

    if (isLoading) {
        Box(
            modifier = Modifier
                .fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            CircularProgressIndicator()
        }
    } else {
        LazyVerticalGrid(
            columns = GridCells.Fixed(2),
            contentPadding = PaddingValues(8.dp),
            verticalArrangement = Arrangement.SpaceAround,
            modifier = Modifier.statusBarsPadding()

        ) {
            items(category.value) {
                CategoriesItems(category = it,onclick)
            }
        }
    }
}

@Composable
@Preview
fun CategoriesItems(category: String = "all",onclick:(cat:String)->Unit={}) {
    val context = LocalContext.current
    Box(
        modifier = Modifier
            .padding(4.dp)
            .size(160.dp)

            .clickable {
                onclick(category)
            }
            .clip(RoundedCornerShape(8.dp))
            .border(2.dp, Color.LightGray)
            .paint(
                painterResource(id = R.drawable.bg),
                contentScale = androidx.compose.ui.layout.ContentScale.Crop
            ),
        contentAlignment = Alignment.BottomCenter
    ) {

        Text(
            text = category,
            fontSize = 18.sp,
            color = Color.Black,
            modifier = Modifier.padding(0.dp, 20.dp),
            style = MaterialTheme.typography.bodyMedium
        )
    }
}
