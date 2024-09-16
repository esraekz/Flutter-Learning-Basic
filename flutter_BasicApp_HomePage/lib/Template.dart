import 'package:flutter/material.dart';
import 'package:flutter_app/Second_Page.dart';

class FirstPage extends StatelessWidget {
  const FirstPage({super.key});

//1- Naviaget different Pages, In here there was a button in the middle and via this button going to next page was possible
 /* @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("1st Page")),
      body: Center(
        child: ElevatedButton(
          child: Text("Go to the second page"),
          onPressed: (){
            // Method 1 to navigate different pages
            Navigator.pushNamed(context, '/secondpage');
            // Method 2 to navigate different pages
            //Navigate to second page
            /*Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => SecondPage(),
           },
        ),
      ),
    );
  }
}
*/

/*
First page with drawer

import 'package:flutter/material.dart';
//import 'package:flutter_app/Second_Page.dart';

class FirstPage extends StatelessWidget {
  const FirstPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("1st Page")),
      /*drawer: Drawer(
        backgroundColor: Colors.deepPurple[100],
        child: Column(
          children:[
            DrawerHeader(
              child: Icon(Icons.favorite,
              size: 48,)
            ),
            //Homepage list_tile
            ListTile(
              leading: Icon(Icons.home),
              title: Text("HOME"),
              onTap: () {
              // pop drawer first
              Navigator.pop(context);
                // go to home page
              Navigator.pushNamed(context, '/homepage');
              
              }
            ),
            ListTile(
              leading: Icon(Icons.settings),
              title: Text("SETTINGS"),
              onTap: () {
                 // pop drawer first
              Navigator.pop(context);
                // go to home page
              Navigator.pushNamed(context, '/settingspage');
              }
            ),
          ],
        ),
      ),
    );
  }
}
*/

