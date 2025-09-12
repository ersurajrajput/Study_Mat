package com.ersurajrajput.androidtest

import android.net.Uri
import android.os.Bundle
import android.widget.MediaController
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.media3.common.MediaItem
import androidx.media3.exoplayer.ExoPlayer
import com.ersurajrajput.androidtest.databinding.ActivityVideosBinding

class VideosActivity : AppCompatActivity() {
    private lateinit var binding: ActivityVideosBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        binding = ActivityVideosBinding.inflate(layoutInflater)
        setContentView(binding.root)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
//        val videoUri = Uri.parse("android.resource://${packageName}/${R.raw.f}")
//        var mediaController = MediaController(this)
//        mediaController.setAnchorView(binding.videoView)
//        binding.videoView.setVideoURI(videoUri)
//        binding.videoView.setMediaController(mediaController)
//        binding.videoView.start()


        //using exoplayer
        val videoUri = Uri.parse("android.resource://${packageName}/${R.raw.f}")
        var mediaItem = MediaItem.fromUri(videoUri)
        var player = ExoPlayer.Builder(this).build()
        binding.videoPlayer.player = player
        binding.videoPlayer.player?.setMediaItem(mediaItem)
        binding.videoPlayer.player?.prepare()

        binding.videoPlayer.player?.play()


    }
}