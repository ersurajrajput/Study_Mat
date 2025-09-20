package com.ersurajrajput.mvvm.model

import androidx.room.Entity
import androidx.room.PrimaryKey


@Entity(tableName = "quote")
data class Quotes(
    @PrimaryKey(autoGenerate = true)
    var id: Long,
    var text: String,
    var author: String
)
