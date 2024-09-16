import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
  home: Lulu(),
));
class Lulu extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[900],
      appBar: AppBar(
        title: Text('Lulu'),
        centerTitle: true,
        backgroundColor: Colors.grey[800],
        elevation: 0.0,
      ),
      body: Padding(
        padding: EdgeInsets.fromLTRB(30.0, 40.0, 30.0, 0.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(
             'Name',
             style: TextStyle(
              color: Colors.grey,
              letterSpacing: 2.0,
              )
             ),
             SizedBox(height: 30.0),
            Text(
             'Lemon',
             style: TextStyle(
              color: Colors.amberAccent[200],
              letterSpacing: 2.0,
              fontSize: 28.0,
              fontWeight: FontWeight.bold
              )
              ),
          ]
        )
      )
    );
  }
}

