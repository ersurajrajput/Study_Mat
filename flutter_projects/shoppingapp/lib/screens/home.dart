import 'package:flutter/material.dart';
import 'package:shoppingapp/component/CategoriesTiles.dart';

import 'package:shoppingapp/widget/AppWidget.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List catImgs = ["img/headphone.svg", "img/laptop.svg", "img/tv.svg"];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Container(
          margin: EdgeInsets.only(left: 20, right: 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text("Hey, Suraj", style: Appwidget.boldTextFieldStyle()),
                      Text(
                        "Good Morning",
                        style: Appwidget.lightTextFieldStyle(),
                      ),
                    ],
                  ),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(20),
                    child: Image.asset(
                      fit: BoxFit.cover,
                      "img/userProfile.png",
                      width: 70,
                      height: 70,
                    ),
                  ),
                ],
              ),
              SizedBox(height: 20),
              Container(
                width: MediaQuery.of(context).size.width,
                child: TextField(
                  obscureText: false,
                  decoration: InputDecoration(
                    hintText: "Search",
                    hintStyle: Appwidget.lightTextFieldStyle(),
                    border: InputBorder.none,
                    fillColor: Colors.white,
                    filled: true,
                    suffixIcon: Icon(Icons.search, color: Colors.black),
                  ),
                ),
              ),
              SizedBox(height: 30),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    "Categories",
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  Text(
                    "see all",
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.red,
                    ),
                  ),
                ],
              ),
              SizedBox(height: 20),
              Container(
                height: 150,
                width: double.infinity,
                child: ListView.builder(
                  itemCount: catImgs.length,
                  shrinkWrap: true,
                  scrollDirection: Axis.horizontal,
                  itemBuilder: (context, index) {
                    return Categoriestiles(img: catImgs[index]);
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
