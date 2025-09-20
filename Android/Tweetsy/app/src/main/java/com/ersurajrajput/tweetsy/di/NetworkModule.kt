package com.ersurajrajput.tweetsy.di

import com.ersurajrajput.tweetsy.api.TweetsyAPI
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import javax.inject.Singleton


@Module
@InstallIn(SingletonComponent::class)
class NetworkModule {
    val BASE_URL = "https://raw.githubusercontent.com/ersurajrajput/Study_Mat/refs/heads/main/Android/Tweetsy/app/src/main/res/raw/"

    @Singleton
    @Provides
    fun provideRetroFit(): Retrofit{
        return Retrofit.Builder().baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()

    }

    @Singleton
    @Provides
    fun provideTweetsyAPI(retrofit: Retrofit): TweetsyAPI{
        return retrofit.create(TweetsyAPI::class.java)
    }
}