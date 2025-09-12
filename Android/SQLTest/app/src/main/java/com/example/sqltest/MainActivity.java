package com.example.sqltest;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Switch;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.util.List;

public class MainActivity extends AppCompatActivity {
    Button btn_add,btn_viewAll;
    EditText et_name,et_age;
    Switch sw_activeUser;
    ListView lv_allUser;
    ArrayAdapter customerArrayAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        btn_add = findViewById(R.id.btn_addNewUser);
        btn_viewAll = findViewById(R.id.btn_viewAll);
        et_age = findViewById(R.id.et_UserAge);
        et_name = findViewById(R.id.et_UserName);
        sw_activeUser = findViewById(R.id.sw_activeUser);
        lv_allUser = findViewById(R.id.lv_userList);


        // buttons for clicklistoner
        btn_add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                CustomerModel customer;
                try {
                    customer  = new CustomerModel(-1,et_name.getText().toString(),Integer.parseInt(et_age.getText().toString()),sw_activeUser.isChecked());

                }catch (Exception e){
                    Toast.makeText(MainActivity.this,"error creating customer",Toast.LENGTH_SHORT).show();
                    customer  = new CustomerModel(-1,"error",0,false);
                }
                DBHelper dbHelper = new DBHelper(MainActivity.this);
                boolean succees = dbHelper.addOne(customer);

                Toast.makeText(MainActivity.this,"Success: "+succees,Toast.LENGTH_SHORT ).show();
                customerArrayAdapter = new ArrayAdapter<CustomerModel>(MainActivity.this,android.R.layout.simple_list_item_1,dbHelper.getAll());
                lv_allUser.setAdapter(customerArrayAdapter);
            }
        });
        btn_viewAll.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                DBHelper db = new DBHelper(MainActivity.this);
                List<CustomerModel> allUser = db.getAll();
                customerArrayAdapter = new ArrayAdapter<CustomerModel>(MainActivity.this,android.R.layout.simple_list_item_1,allUser);
                lv_allUser.setAdapter(customerArrayAdapter);
            }
        });

        lv_allUser.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
//test
                DBHelper dbHelper = new DBHelper(MainActivity.this);
                CustomerModel customerModel = (CustomerModel) parent.getItemAtPosition(position);
                dbHelper.deleteOne(customerModel);
                Toast.makeText(MainActivity.this,"deleted",Toast.LENGTH_SHORT).show();
                customerArrayAdapter = new ArrayAdapter<CustomerModel>(MainActivity.this,android.R.layout.simple_list_item_1, dbHelper.getAll());
                lv_allUser.setAdapter(customerArrayAdapter);

                
            }
        });


/////just nothing

    }
}