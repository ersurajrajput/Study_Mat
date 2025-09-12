package com.example.sqltest;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.List;

public class DBHelper extends SQLiteOpenHelper {
    //must pass for our super  class
    public DBHelper(@Nullable Context context) {
        super(context, "user.db", null, 1);
    }

    //this is called 1st time to create tables etc
    @Override
    public void onCreate(SQLiteDatabase db) {
        String createTables = "CREATE TABLE Customer_Table(id INTEGER PRIMARY KEY AUTOINCREMENT,Customer TEXT,CustomerAge int,CustomerActive BOOL)";
        db.execSQL(createTables);

    }
//this is called to upgrade our db schema
    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }
// for inserting values in DB
    public boolean addOne(CustomerModel customerModel){
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues cv = new ContentValues();
        cv.put("Customer",customerModel.getName());
        cv.put("CustomerAge",customerModel.getAge());
        cv.put("CustomerActive",customerModel.isActive());
        long customerTable = db.insert("Customer_Table", null, cv);
        if(customerTable == -1){
            return false;
        }else {
            return true;
        }
    }

    // for retriving values from DB (all values)
    public List<CustomerModel> getAll(){
        List<CustomerModel> returnList = new ArrayList<>();
        String qr = "SELECT * FROM Customer_Table";
        SQLiteDatabase db = this.getReadableDatabase();
        Cursor cursor = db.rawQuery(qr, null);
        if (cursor.moveToFirst()){
            do {
                int id = cursor.getInt(0);
                String name = cursor.getString(1);
                int age = cursor.getInt(2);
                boolean status = cursor.getInt(3) == 1?true:false;
                CustomerModel customerModel = new CustomerModel(id,name,age,status);
                returnList.add(customerModel);
            }while (cursor.moveToNext());
        }else{
            // db dose not contain any thing do not do any thing
        }


        return returnList;
    }
    public boolean deleteOne(CustomerModel customerModel){
        SQLiteDatabase db = this.getWritableDatabase();
        String qr = "DELETE FROM Customer_Table WHERE id = "+customerModel.getId();
        Cursor cursor = db.rawQuery(qr, null);
        if(cursor.moveToFirst()){
            return true;
        }else {
            return false;
        }
    }
}
