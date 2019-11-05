# ngx-octicons

This is a little library to provide an angularistic interface (a directive) in apps. The repository contains of an angular workspace which contains two applications: 

1. ngx-octicons, the library
2. demo, the development app 

## usage

to install, simply

    npm install --save ngx-octicons

Afterwards just import the Module into your Application

    import { OcticonsModule } from 'ngx-octicons';


    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        OcticonsModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }


This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.11.

and finally in your template you can do:

    <span octicon="heart"></span>

    <span octicon="gear" color="#552232" size="48"></span>

    <span octicon="shield-lock" color="4985FF" size="96"></span>

    <i octicon="heart" color="red"></i>


you can define the icon, the color and its size! 
