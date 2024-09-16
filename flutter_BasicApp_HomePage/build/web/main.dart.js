// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const framework = flutter_sdk.src__widgets__framework;
  const binding = flutter_sdk.src__widgets__binding;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const bottom_navigation_bar = flutter_sdk.src__material__bottom_navigation_bar;
  const bottom_navigation_bar_item = flutter_sdk.src__widgets__bottom_navigation_bar_item;
  const icon = flutter_sdk.src__widgets__icon;
  const icons = flutter_sdk.src__material__icons;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var First_Page = Object.create(dart.library);
  var Home_Page = Object.create(dart.library);
  var Settings_Page = Object.create(dart.library);
  var Profile_Page = Object.create(dart.library);
  var Portfolio_Page = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    BuildContextToFirstPage: () => (T.BuildContextToFirstPage = dart.constFn(dart.fnType(First_Page.FirstPage, [framework.BuildContext])))(),
    BuildContextToHomePage: () => (T.BuildContextToHomePage = dart.constFn(dart.fnType(Home_Page.HomePage, [framework.BuildContext])))(),
    BuildContextToSettingsPage: () => (T.BuildContextToSettingsPage = dart.constFn(dart.fnType(Settings_Page.SettingsPage, [framework.BuildContext])))(),
    BuildContextToWidget: () => (T.BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))(),
    IdentityMapOfString$BuildContextToWidget: () => (T.IdentityMapOfString$BuildContextToWidget = dart.constFn(_js_helper.IdentityMap$(core.String, T.BuildContextToWidget())))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    JSArrayOfBottomNavigationBarItem: () => (T.JSArrayOfBottomNavigationBarItem = dart.constFn(_interceptors.JSArray$(bottom_navigation_bar_item.BottomNavigationBarItem)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///zapp/project/lib/main.dart",
    "package:flutter_app/First_Page.dart",
    "package:flutter_app/Home_Page.dart",
    "package:flutter_app/Settings_Page.dart",
    "package:flutter_app/Profile_Page.dart",
    "package:flutter_app/Portfolio_Page.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.MyApp = class MyApp extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyApp.new({key: key});
    }
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, home: new First_Page.FirstPage.new(), routes: new (T.IdentityMapOfString$BuildContextToWidget()).from(["/firstpage", dart.fn(context => new First_Page.FirstPage.new(), T.BuildContextToFirstPage()), "/homepage", dart.fn(context => new Home_Page.HomePage.new(), T.BuildContextToHomePage()), "/settingspage", dart.fn(context => new Settings_Page.SettingsPage.new(), T.BuildContextToSettingsPage())])});
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MyApp.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.main = function main$0() {
    binding.runApp(new main.MyApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  First_Page.FirstPage = class FirstPage extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new First_Page.FirstPage.new({key: key});
    }
    createState() {
      return new First_Page._FirstPageState.new();
    }
  };
  (First_Page.FirstPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    First_Page.FirstPage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = First_Page.FirstPage.prototype;
  dart.addTypeTests(First_Page.FirstPage);
  dart.addTypeCaches(First_Page.FirstPage);
  dart.setMethodSignature(First_Page.FirstPage, () => ({
    __proto__: dart.getMethods(First_Page.FirstPage.__proto__),
    createState: dart.fnType(framework.State$(First_Page.FirstPage), [])
  }));
  dart.setLibraryUri(First_Page.FirstPage, I[1]);
  var _selectedIndex = dart.privateName(First_Page, "_selectedIndex");
  var _pages = dart.privateName(First_Page, "_pages");
  var _navigateBottomBar = dart.privateName(First_Page, "_navigateBottomBar");
  First_Page._FirstPageState = class _FirstPageState extends framework.State$(First_Page.FirstPage) {
    [_navigateBottomBar](index) {
      this.setState(dart.fn(() => {
        this[_selectedIndex] = index;
      }, T.VoidTovoid()));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("1st Page")}), body: T.WidgetN().as(this[_pages][$_get](this[_selectedIndex])), bottomNavigationBar: new bottom_navigation_bar.BottomNavigationBar.new({currentIndex: this[_selectedIndex], onTap: dart.bind(this, _navigateBottomBar), items: T.JSArrayOfBottomNavigationBarItem().of([new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.home), label: "Home"}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.account_balance), label: "Investment"}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.person), label: "Profile"})])})});
    }
    static ['_#new#tearOff']() {
      return new First_Page._FirstPageState.new();
    }
  };
  (First_Page._FirstPageState.new = function() {
    this[_selectedIndex] = 0;
    this[_pages] = [new Home_Page.HomePage.new(), new Portfolio_Page.PortfolioPage.new(), new Profile_Page.ProfilePage.new()];
    First_Page._FirstPageState.__proto__.new.call(this);
    ;
  }).prototype = First_Page._FirstPageState.prototype;
  dart.addTypeTests(First_Page._FirstPageState);
  dart.addTypeCaches(First_Page._FirstPageState);
  dart.setMethodSignature(First_Page._FirstPageState, () => ({
    __proto__: dart.getMethods(First_Page._FirstPageState.__proto__),
    [_navigateBottomBar]: dart.fnType(dart.void, [core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(First_Page._FirstPageState, I[1]);
  dart.setFieldSignature(First_Page._FirstPageState, () => ({
    __proto__: dart.getFields(First_Page._FirstPageState.__proto__),
    [_selectedIndex]: dart.fieldType(core.int),
    [_pages]: dart.finalFieldType(core.List)
  }));
  Home_Page.HomePage = class HomePage extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new Home_Page.HomePage.new({key: key});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Home Page")})});
    }
  };
  (Home_Page.HomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    Home_Page.HomePage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = Home_Page.HomePage.prototype;
  dart.addTypeTests(Home_Page.HomePage);
  dart.addTypeCaches(Home_Page.HomePage);
  dart.setMethodSignature(Home_Page.HomePage, () => ({
    __proto__: dart.getMethods(Home_Page.HomePage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Home_Page.HomePage, I[2]);
  Settings_Page.SettingsPage = class SettingsPage extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new Settings_Page.SettingsPage.new({key: key});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Settings Page")})});
    }
  };
  (Settings_Page.SettingsPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    Settings_Page.SettingsPage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = Settings_Page.SettingsPage.prototype;
  dart.addTypeTests(Settings_Page.SettingsPage);
  dart.addTypeCaches(Settings_Page.SettingsPage);
  dart.setMethodSignature(Settings_Page.SettingsPage, () => ({
    __proto__: dart.getMethods(Settings_Page.SettingsPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Settings_Page.SettingsPage, I[3]);
  Profile_Page.ProfilePage = class ProfilePage extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new Profile_Page.ProfilePage.new({key: key});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Profile Page")})});
    }
  };
  (Profile_Page.ProfilePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    Profile_Page.ProfilePage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = Profile_Page.ProfilePage.prototype;
  dart.addTypeTests(Profile_Page.ProfilePage);
  dart.addTypeCaches(Profile_Page.ProfilePage);
  dart.setMethodSignature(Profile_Page.ProfilePage, () => ({
    __proto__: dart.getMethods(Profile_Page.ProfilePage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Profile_Page.ProfilePage, I[4]);
  Portfolio_Page.PortfolioPage = class PortfolioPage extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new Portfolio_Page.PortfolioPage.new({key: key});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Investment Page")})});
    }
  };
  (Portfolio_Page.PortfolioPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    Portfolio_Page.PortfolioPage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = Portfolio_Page.PortfolioPage.prototype;
  dart.addTypeTests(Portfolio_Page.PortfolioPage);
  dart.addTypeCaches(Portfolio_Page.PortfolioPage);
  dart.setMethodSignature(Portfolio_Page.PortfolioPage, () => ({
    __proto__: dart.getMethods(Portfolio_Page.PortfolioPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Portfolio_Page.PortfolioPage, I[5]);
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "package:flutter_app/First_Page.dart": First_Page,
    "package:flutter_app/Home_Page.dart": Home_Page,
    "package:flutter_app/Settings_Page.dart": Settings_Page,
    "package:flutter_app/Profile_Page.dart": Profile_Page,
    "package:flutter_app/Portfolio_Page.dart": Portfolio_Page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/project/lib/First_Page.dart","/zapp/project/lib/Home_Page.dart","/zapp/project/lib/Settings_Page.dart","/zapp/project/lib/Profile_Page.dart","/zapp/project/lib/Portfolio_Page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;;;;UC1C4B;AACxB,YAAO,sDACuB,aACtB,wCACE,yDACN,cAAc,QAAC,WAAY,8DAC3B,aAAa,QAAC,WAAY,2DAC1B,iBAAiB,QAAC,WAAY;IAGpC;;;QAbmB;AAAb,8CAAa,GAAG;;EAAE;;;;;;;;;AAJT,IAAf,eAAO;EACT;;ECAwB;;;;;;;ACGY;IAAiB;;;QAH5B;AAAjB,wDAAiB,GAAG;;EAAE;;;;;;;;;;;;yBAUF;AAGxB,MAFF,cAAS;AACe,QAAtB,uBAAiB,KAAK;;IAE1B;UAgB4B;AACxB,YAAO,oCACG,+BAAc,kBAAK,oCACrB,AAAM,oBAAC,6CACQ,iEACL,uCACP,kCACA,yCAEL,kEACQ,kBAAW,0BACV,UAIT,kEACQ,kBAAW,qCACV,gBAIT,kEACQ,kBAAW,4BACV;IAKjB;;;;;;IAlDI,uBAAiB;IAUV,eAAS,CAElB,8BAGA,wCAGA;;;EAiCJ;;;;;;;;;;;;;;;;;;;UC5D4B;AACxB,YAAO,oCACG,+BAAc,kBAAK;IAE/B;;;QAPsB;AAAhB,sDAAgB,GAAG;;EAAE;;;;;;;;;;;;;UCGD;AACxB,YAAO,oCACI,+BAAc,kBAAK;IAEhC;;;QAP0B;AAApB,8DAAoB,GAAG;;EAAE;;;;;;;;;;;;;UCGL;AACxB,YAAO,oCACI,+BAAc,kBAAK;IAEhC;;;QAPyB;AAAnB,4DAAmB,GAAG;;EAAE;;;;;;;;;;;;;UCGJ;AACxB,YAAO,oCACI,+BAAc,kBAAK;IAEhC;;;QAP2B;AAArB,gEAAqB,GAAG;;EAAE","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    First_Page: First_Page,
    Home_Page: Home_Page,
    Settings_Page: Settings_Page,
    Profile_Page: Profile_Page,
    Portfolio_Page: Portfolio_Page
  };
}));

//# sourceMappingURL=main.js.map
