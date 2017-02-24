define(['app'],function (app) {
    app
        .config(function($stateProvider, $urlRouterProvider) {
            // Override the internal 'views' builder with a function that takes the state
            // definition, and a reference to the internal function being overridden:
            $stateProvider.decorator('views', function(state, parent) {
                var result = {}, views = parent(state);
                //var head = "http://192.168.1.48:8081/kangbaomu/doctor/www/";
                var head = "";
                angular.forEach(views, function(config, name) {
                    config.controllerUrl = head+config.controllerUrl;
                    config.templateUrl = head+config.templateUrl;
                    result[name] = config;
                });
                return result;
            });

            $stateProvider
                // 首页
                .state('index', {
                    url: '/index',
                    templateUrl:"templates/index.html",
                    controller: "indexCtrl",
                    controllerUrl: 'js/controllers/index.js'
                })

                // 登录
                .state('login', {
                    url: '/login',
                    templateUrl:"templates/login.html",
                    controller: "loginCtrl",
                    controllerUrl: 'js/controllers/login.js'
                })

                // 注册
                .state('register', {
                    url: '/register',
                    templateUrl:"templates/register.html",
                    controllerUrl: 'js/controllers/register.js',
                    controller: "registerCtrl"
                })
                    .state('userText', {
                        url: '/userText',
                        templateUrl:"templates/userText.html",
                        controllerUrl: 'js/controllers/userText.js',
                        controller: "userTextCtrl"
                    })
                    .state('protocolText', {
                        url: '/protocolText',
                        templateUrl:"templates/protocolText.html",
                        controllerUrl: 'js/controllers/protocolText.js',
                        controller: "protocolTextCtrl"
                    })

                // 找回密码
                .state('findpsw', {
                    url: '/findpsw',
                    templateUrl: "templates/findpsw.html",
                    controllerUrl: 'js/controllers/findpsw.js',
                    controller: "findpswCtrl"
                })

                // setup an abstract state for the tabs directive
                .state('tab', {
                    url: '/tab',
                    abstract: true,
                    templateUrl: 'templates/tabs.html'
                })

                // 首页
                .state('tab.home', {
                    url: '/home',
                    views: {
                        'tab-home': {
                            templateUrl: 'templates/home.html',
                            controller: 'homeCtrl',
                            controllerUrl: 'js/controllers/home.js'
                        }
                    }
                })
                    .state('tab.search', {
                        url: '/search',
                        views: {
                            'tab-home': {
                                templateUrl: 'templates/search.html',
                                controller: 'searchCtrl',
                                controllerUrl: 'js/controllers/search.js'
                            }
                        }
                    })
                    .state('tab.postMsg', {
                        url: '/postMsg',
                        views: {
                            'tab-home': {
                                templateUrl: 'templates/activitymsg.html',
                                controller: 'activitymsgCtrl',
                                controllerUrl: 'js/controllers/activitymsg.js'
                            }
                        }
                    })
                    .state('tab.actMsg', {
                        url: '/actMsg',
                        views: {
                            'tab-home': {
                                templateUrl: 'templates/groupmsg.html',
                                controller: 'groupmsgCtrl',
                                controllerUrl: 'js/controllers/groupmsg.js'
                            }
                        }
                    })

                // 消息
                .state('tab.message', {
                    url: '/message',
                    views: {
                        'tab-message': {
                            templateUrl: 'templates/message.html',
                            controller: 'messageCtrl',
                            controllerUrl: 'js/controllers/message.js'
                        }
                    }
                })
                    .state('tab.askDetail', {
                        url: '/askDetail/:id',
                        views: {
                            'tab-message': {
                                templateUrl: 'templates/askDetail.html',
                                controller: 'askDetailCtrl',
                                controllerUrl: 'js/controllers/askDetail.js'
                            }
                        }
                    })
                    .state('tab.chats', {
                        url: '/chats',
                        views: {
                            'tab-message': {
                                templateUrl: 'templates/chats.html',
                                controller: 'chatsCtrl',
                                controllerUrl: 'js/controllers/chats.js'
                            }
                        }
                    })

                // 我的
                .state('tab.mine', {
                    url: '/mine',
                    views: {
                        'tab-mine': {
                            templateUrl: 'templates/mine.html',
                            controller: 'mineCtrl',
                            controllerUrl: 'js/controllers/mine.js'
                        }
                    }
                })
                    // 个人信息页面
                    .state('tab.personal', {
                        url: '/personal',
                        views: {
                            'tab-mine': {
                                templateUrl: 'templates/personal.html',
                                controller: 'personalCtrl',
                                controllerUrl: 'js/controllers/personal.js'
                            }
                        }
                    })

                    // 设置页面
                    .state('tab.set', {
                        url: '/set',
                        views: {
                            'tab-mine': {
                                templateUrl: 'templates/set.html',
                                controller: 'setCtrl',
                                controllerUrl: 'js/controllers/set.js'
                            }
                        }
                    })

                        // 通用信息内容页
                        .state('tab.content-mine', {
                            url: '/mine/content-mine/:type',
                            views: {
                                'tab-mine': {
                                    templateUrl: 'templates/content-mine.html',
                                    controller: 'content-mineCtrl',
                                    controllerUrl: 'js/controllers/content-mine.js'
                                }
                            }
                        })

            $urlRouterProvider.otherwise("index");

        });
});