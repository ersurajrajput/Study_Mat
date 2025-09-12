package com.ersurajrajput.androidtest.services

import android.annotation.SuppressLint
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import android.service.notification.NotificationListenerService
import android.service.notification.StatusBarNotification
import android.util.Log
import android.widget.RemoteViews
import androidx.appcompat.app.AlertDialog
import androidx.core.app.NotificationCompat
import com.ersurajrajput.androidtest.R
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

class TransactionNotificationListener: NotificationListenerService() {
    @SuppressLint("ServiceCast")
    override fun onNotificationPosted(sbn: StatusBarNotification?) {
        super.onNotificationPosted(sbn)
        Log.d("myTag","3 $sbn")

        val packageName = sbn?.packageName
        val notification = sbn?.notification
        val extras = notification?.extras

        var text = extras?.getCharSequence("android.text")?.toString() ?: ""
        val timestamp = sbn?.postTime
        val formattedDate = SimpleDateFormat("dd/MM/yyyy HH:mm:ss", Locale.getDefault())
            .format(Date(timestamp!!))
        text = text.lowercase()
        if (text.contains("cr")||text.contains("dr")||text.contains("credited")||text.contains("debited")){
            Log.d("myTag","3 $text")
            var context = applicationContext
            if (packageName !=applicationContext.packageName){
                createNotificationChannel()
                var remoteView = RemoteViews(applicationContext.packageName,R.layout.layout_custom_notification)
                val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
                val builder = NotificationCompat.Builder(this, "channelId")
                    .setSmallIcon(R.drawable.ic_launcher_foreground)
                    .setContentTitle("New Transaction")
                    .setContentText("Zomato - ₹200 Debited")
                    .setCustomContentView(remoteView)
                    .setPriority(NotificationCompat.PRIORITY_HIGH)

                notificationManager.notify(1, builder.build())

            }

        }
//        Log.d("myTag","ji")
//        Log.d("myTag","2 $extras")


    }
    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                "channelId", // must match the one you use in Builder
                "Transaction Notifications", // visible name in system settings
                NotificationManager.IMPORTANCE_HIGH
            ).apply {
                description = "Shows new transaction alerts"
            }

            val manager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            manager.createNotificationChannel(channel)
        }
    }

}