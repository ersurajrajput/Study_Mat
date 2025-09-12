package com.ersurajrajput.assignment.ui

import android.net.Uri
import android.os.Bundle
import android.view.LayoutInflater
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.browser.customtabs.CustomTabsIntent
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.bumptech.glide.Glide
import com.ersurajrajput.assignment.R
import com.ersurajrajput.assignment.api.RetrofitInstance
import com.ersurajrajput.assignment.databinding.ActivityMainBinding
import com.ersurajrajput.assignment.model.User
import com.ersurajrajput.assignment.model.UserResponse
import retrofit2.Call
import retrofit2.Response
import java.net.URI

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private lateinit var myUser: User
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            insets
        }
        //init
        loadAllData()

        binding.ivWebsite.setOnClickListener {
            if (::myUser.isInitialized){
                openSocialsInChrome(myUser.social.website)
            }else{
                showError("Data Not Loaded")
            }
        }
        binding.ivInstagram.setOnClickListener {
            if (::myUser.isInitialized){
                openSocialsInChrome(myUser.social.profiles.get(0).url)
            }else{
                showError("Data Not Loaded")
            }
        }
        binding.ivFacebook.setOnClickListener {
            if (::myUser.isInitialized){
            openSocialsInChrome(myUser.social.profiles.get(1).url)
            }else{
                showError("Data Not Loaded")
            }
        }

    }

    private fun userDataSetup(){
        if (::myUser.isInitialized){
            binding.tvUserName.text = myUser.username
            binding.tvUserFullName.text = myUser.name
            binding.tvLocation.text = myUser.location.city+", "+myUser.location.country
            binding.tvFollowerCount.text = myUser.statistics.followers.toString()
            binding.tvFollowingCount.text = myUser.statistics.following.toString()
            Glide.with(this@MainActivity).load(myUser.avatar).placeholder(R.drawable.img_sample_white).into(binding.userImg)

        }else{
            showError("Data Not Loaded")
        }
    }
    private fun tabSetup(){
        val shotsCount = myUser.statistics.activity.shots
        val tab1 = shotsCount.toString()+" Shots"
        binding.tabLayout.getTabAt(0)?.text = tab1

        val collectionCount = myUser.statistics.activity.collections
        val tab2 = collectionCount.toString()+" Collections"
        binding.tabLayout.getTabAt(1)?.text = tab2

    }
    private fun loadAllData(){
        RetrofitInstance.api.getUser().enqueue(object : retrofit2.Callback<UserResponse>{
            override fun onResponse(
                call: Call<UserResponse?>,
                response: Response<UserResponse?>
            ) {
                if (response.isSuccessful){
                     response.body()?.user?.let {user ->
                         myUser = user
                         userDataSetup()
                         tabSetup()

                     }
                }
            }

            override fun onFailure(
                call: Call<UserResponse?>,
                t: Throwable
            ) {
                showError(t.message.toString())
            }

        })
    }
    private fun openSocialsInChrome(url: String){
        val builder =  CustomTabsIntent.Builder()
        val customTabIntent = builder.build()
        customTabIntent.launchUrl(this@MainActivity, Uri.parse(url))

    }
    private fun showError(error: String){
        AlertDialog.Builder(this@MainActivity).setTitle(error).setPositiveButton("Ok"){dialog, which ->
            dialog.dismiss()
        }.show()
    }
}