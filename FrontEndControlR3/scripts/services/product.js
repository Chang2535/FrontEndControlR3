'use strict';

angular.module('fec3App')
    .service('productService', function($http, $filter, $timeout, $localstorage, $linq, dalService) {
        var saleinfo = $localstorage.getObject("userProfile");
        //var customerInfo = $localstorage.getObject("customerProfile");
        var request = {
            "shopCode": saleinfo.shopSelected,
            "userId": saleinfo.saleCode,
            "transactionId": saleinfo.saleCode,
            "param": {}
        };
        // var devices = $filter('filter')(result["response-data"].categories, {
        //             "name": "Device"
        //         });
        // var recommend = $filter('filter')(result["response-data"].categories, {
        //             "name": "Recommend"
        //         });

        this.getCategories = function(fnCallback) {
            var onSuccess = function(result) {
                if (result.status) {
                    if (result.data["response-data"]) {
                        var master = {};
                        master.categories = result.data["response-data"].categories;
                        $localstorage.setObject("master", master);
                    } else {
                        console.log(resp.data)
                    }

                }
                fnCallback(result);

            };

            if (!dalService.demo) {

                request.target = '/sales-services/rest/master/get_categories';

                dalService.callServicePost(request, null, function(result) {
                    onSuccess(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "categories": [{
                            "id": 182,
                            "name": "Accessories",
                            "child": [{
                                "id": 263,
                                "name": "Battery",
                                "child": [{
                                    "id": 810,
                                    "name": "POP2",
                                    "child": []
                                }]
                            }, {
                                "id": 170,
                                "name": "Charger, Adapter, Cable",
                                "child": [{
                                    "id": 172,
                                    "name": "Cable",
                                    "child": []
                                }, {
                                    "id": 283,
                                    "name": "Charger",
                                    "child": []
                                }, {
                                    "id": 209,
                                    "name": "USB Cable",
                                    "child": []
                                }, {
                                    "id": 171,
                                    "name": "Universal Charger,Plug",
                                    "child": []
                                }]
                            }, {
                                "id": 167,
                                "name": "House Brand Case",
                                "child": [{
                                    "id": 204,
                                    "name": "Go Live Case",
                                    "child": []
                                }, {
                                    "id": 203,
                                    "name": "True Beyond Case",
                                    "child": []
                                }]
                            }, {
                                "id": 175,
                                "name": "Other Acc",
                                "child": []
                            }, {
                                "id": 262,
                                "name": "Power Bank, Battery",
                                "child": [{
                                    "id": 282,
                                    "name": "External Battery",
                                    "child": []
                                }]
                            }, {
                                "id": 168,
                                "name": "Protection Film",
                                "child": [{
                                    "id": 208,
                                    "name": "Golive Film",
                                    "child": []
                                }, {
                                    "id": 205,
                                    "name": "Samsung Film",
                                    "child": []
                                }, {
                                    "id": 180,
                                    "name": "True Beyond Film",
                                    "child": []
                                }, {
                                    "id": 207,
                                    "name": "iPad Film",
                                    "child": []
                                }, {
                                    "id": 206,
                                    "name": "iPhone Film",
                                    "child": [{
                                        "id": 181,
                                        "name": "iPhone 4, 4S Film",
                                        "child": []
                                    }, {
                                        "id": 218,
                                        "name": "iPhone 5, 5S, 5C Film",
                                        "child": []
                                    }]
                                }]
                            }, {
                                "id": 184,
                                "name": "Samsung Case",
                                "child": [{
                                    "id": 247,
                                    "name": "Other SS Case",
                                    "child": []
                                }, {
                                    "id": 243,
                                    "name": "SS Note 2",
                                    "child": []
                                }, {
                                    "id": 244,
                                    "name": "SS Note 3",
                                    "child": []
                                }, {
                                    "id": 246,
                                    "name": "SS Note 8",
                                    "child": []
                                }, {
                                    "id": 242,
                                    "name": "SS S3",
                                    "child": []
                                }, {
                                    "id": 221,
                                    "name": "SS S4",
                                    "child": []
                                }]
                            }, {
                                "id": 211,
                                "name": "Speaker,Headphone,Bluetooth",
                                "child": [{
                                    "id": 216,
                                    "name": "Bluetooth",
                                    "child": []
                                }, {
                                    "id": 217,
                                    "name": "Headphone",
                                    "child": []
                                }, {
                                    "id": 213,
                                    "name": "Headset",
                                    "child": [{
                                        "id": 177,
                                        "name": "Headset",
                                        "child": []
                                    }, {
                                        "id": 178,
                                        "name": "In Ear",
                                        "child": []
                                    }, {
                                        "id": 179,
                                        "name": "On Ear ",
                                        "child": []
                                    }, {
                                        "id": 214,
                                        "name": "Over Ear",
                                        "child": []
                                    }, {
                                        "id": 215,
                                        "name": "Wireless Speaker",
                                        "child": []
                                    }]
                                }, {
                                    "id": 212,
                                    "name": "Small Talk",
                                    "child": []
                                }, {
                                    "id": 176,
                                    "name": "Speaker",
                                    "child": []
                                }]
                            }, {
                                "id": 348,
                                "name": "iPad mini2, mini3",
                                "child": []
                            }, {
                                "id": 465,
                                "name": "iPhone 6 Plus",
                                "child": []
                            }]
                        }, {
                            "id": 523,
                            "name": "Bundle",
                            "child": [{
                                "id": 642,
                                "name": "ATB6",
                                "child": []
                            }, {
                                "id": 503,
                                "name": "สุข X3 S",
                                "child": []
                            }]
                        }, {
                            "id": 73,
                            "name": "Campaign",
                            "child": [{
                                "id": 93,
                                "name": "ATB",
                                "child": []
                            }, {
                                "id": 92,
                                "name": "True Move H",
                                "child": []
                            }]
                        }, {
                            "id": 1,
                            "name": "Device",
                            "child": [{
                                "id": 26,
                                "name": "AirCard, WiFi",
                                "child": []
                            }, {
                                "id": 112,
                                "name": "Modem Router",
                                "child": []
                            }, {
                                "id": 23,
                                "name": "Smart Phone",
                                "child": [{
                                    "id": 362,
                                    "name": "ASUS",
                                    "child": []
                                }, {
                                    "id": 30,
                                    "name": "BlackBerry",
                                    "child": []
                                }, {
                                    "id": 47,
                                    "name": "HTC",
                                    "child": []
                                }, {
                                    "id": 144,
                                    "name": "Lenovo",
                                    "child": []
                                }, {
                                    "id": 46,
                                    "name": "Motorola",
                                    "child": []
                                }, {
                                    "id": 48,
                                    "name": "Nokia",
                                    "child": [{
                                        "id": 142,
                                        "name": "Nokia",
                                        "child": []
                                    }, {
                                        "id": 143,
                                        "name": "Nokia Mlink",
                                        "child": []
                                    }]
                                }, {
                                    "id": 79,
                                    "name": "OPPO",
                                    "child": []
                                }, {
                                    "id": 45,
                                    "name": "SONY",
                                    "child": []
                                }, {
                                    "id": 49,
                                    "name": "Samsung",
                                    "child": [{
                                        "id": 69,
                                        "name": "ERICA 3G HERO",
                                        "child": []
                                    }, {
                                        "id": 65,
                                        "name": "GALAXY ACE",
                                        "child": []
                                    }, {
                                        "id": 89,
                                        "name": "GALAXY GRAND",
                                        "child": []
                                    }, {
                                        "id": 70,
                                        "name": "GALAXY NOTE",
                                        "child": []
                                    }, {
                                        "id": 66,
                                        "name": "GALAXY S",
                                        "child": []
                                    }, {
                                        "id": 302,
                                        "name": "Galaxy A",
                                        "child": []
                                    }, {
                                        "id": 71,
                                        "name": "Other",
                                        "child": []
                                    }]
                                }, {
                                    "id": 163,
                                    "name": "i-mobile",
                                    "child": []
                                }]
                            }, {
                                "id": 25,
                                "name": "Tablet",
                                "child": [{
                                    "id": 123,
                                    "name": "Asus Tablet",
                                    "child": []
                                }, {
                                    "id": 117,
                                    "name": "Lenovo Tablet",
                                    "child": []
                                }, {
                                    "id": 31,
                                    "name": "Samsung Tablet",
                                    "child": []
                                }, {
                                    "id": 54,
                                    "name": "Sony Tablet",
                                    "child": []
                                }, {
                                    "id": 116,
                                    "name": "Surface ",
                                    "child": []
                                }]
                            }, {
                                "id": 24,
                                "name": "iPad",
                                "child": [{
                                    "id": 72,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 53,
                                    "name": "iPad 3G",
                                    "child": []
                                }, {
                                    "id": 103,
                                    "name": "iPad Air",
                                    "child": []
                                }, {
                                    "id": 502,
                                    "name": "iPad Air2",
                                    "child": []
                                }, {
                                    "id": 51,
                                    "name": "iPad RTN",
                                    "child": []
                                }, {
                                    "id": 50,
                                    "name": "iPad mini",
                                    "child": []
                                }, {
                                    "id": 104,
                                    "name": "iPad mini2",
                                    "child": []
                                }, {
                                    "id": 52,
                                    "name": "iPad4G",
                                    "child": []
                                }]
                            }, {
                                "id": 22,
                                "name": "iPhone",
                                "child": [{
                                    "id": 44,
                                    "name": "iPhone 3GS",
                                    "child": []
                                }, {
                                    "id": 42,
                                    "name": "iPhone 4",
                                    "child": []
                                }, {
                                    "id": 29,
                                    "name": "iPhone 4S",
                                    "child": []
                                }, {
                                    "id": 43,
                                    "name": "iPhone 5",
                                    "child": []
                                }, {
                                    "id": 102,
                                    "name": "iPhone 5C",
                                    "child": []
                                }, {
                                    "id": 101,
                                    "name": "iPhone 5S",
                                    "child": []
                                }]
                            }]
                        }, {
                            "id": 803,
                            "name": "Recommend",
                            "child": [{
                                "id": 804,
                                "name": "Devices",
                                "child": [{
                                    "id": 809,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 807,
                                    "name": "Samsung",
                                    "child": []
                                }, {
                                    "id": 808,
                                    "name": "iPhone 6",
                                    "child": []
                                }]
                            }, {
                                "id": 805,
                                "name": "Promotions",
                                "child": [{
                                    "id": 819,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 817,
                                    "name": "Samsung",
                                    "child": []
                                }, {
                                    "id": 818,
                                    "name": "iPhone 6",
                                    "child": []
                                }, {
                                    "id": 819,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 817,
                                    "name": "Samsung",
                                    "child": []
                                }, {
                                    "id": 818,
                                    "name": "iPhone 6",
                                    "child": []
                                }]
                            }, {
                                "id": 806,
                                "name": "Services",
                                "child": [{
                                    "id": 829,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 827,
                                    "name": "Samsung",
                                    "child": []
                                }, {
                                    "id": 828,
                                    "name": "iPhone 6",
                                    "child": []
                                }]
                            }]
                        }, {
                            "id": 97,
                            "name": "Sim Card",
                            "child": [{
                                "id": 99,
                                "name": "Post Pay",
                                "child": [{
                                    "id": 77,
                                    "name": "SIM 3G",
                                    "child": []
                                }, {
                                    "id": 100,
                                    "name": "SIM 4G",
                                    "child": []
                                }]
                            }, {
                                "id": 98,
                                "name": "Pre Pay",
                                "child": []
                            }]
                        }, {
                            "id": 74,
                            "name": "เปิดบริการ",
                            "child": [{
                                "id": 75,
                                "name": "True Internet",
                                "child": []
                            }, {
                                "id": 76,
                                "name": "True Vision",
                                "child": []
                            }, {
                                "id": 96,
                                "name": "TrueMoveH",
                                "child": []
                            }]
                        }]
                    },
                    "display-message": null
                };

                var data2 = {
                    "status": "UNSUCCESSFUL",
                    "display-messages": [{
                        "message": "request sim prefix  is wrong format for company(RM)",
                        "message-code": "",
                        "message-type": "ERROR",
                        "en-message": "request sim prefix  is wrong format for company(RM)",
                        "th-message": "request sim prefix  is wrong format for company(RM)",
                        "technical-message": "request sim prefix  is wrong format for company(RM)"
                    }],
                    "trx-id": "4Q15KDZCTBQYP",
                    "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                    "response-data": {}

                };

                $timeout(function() {
                    onSuccess({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }
        };

        //for landing page
        this.getProductRecommend = function(fnCallback) {
            var result = {};
            var master = $localstorage.getObject("master");
            var recommend = $filter('filter')(master.categories, {
                "name": "Recommend"
            });

            if (recommend && recommend.length >= 1) {
                // var Promotions = $filter('filter')(recommend[0].child, {
                //     "name": "Promotions"
                // });
                // if (Promotions && Promotions.length >= 1) {
                //     result.Promotions = Promotions[0].child;
                // }
                // var Devices = $filter('filter')(recommend[0].child, {
                //     "name": "Devices"
                // });
                // if (Devices && Devices.length >= 1) {
                //     result.Devices = Devices[0].child;
                // }
                fnCallback({
                    status: true,
                    data: recommend[0],
                    error: "",
                    msgErr: ""
                });
            } else {

            }

        };

        //for view all devices
        this.getDevices = function(fnCallback) {
            var result = {};
            var master = $localstorage.getObject("master");
            var Devices = $filter('filter')(master.categories, {
                "name": "Device"
            });
            //console.log(Devices);
            if (Devices && Devices.length >= 1) {
                result = Devices[0].child;
                fnCallback({
                    status: true,
                    data: result,
                    error: "",
                    msgErr: ""
                });
            } else {

            }

        };

        this.getProductByCategory = function(category_id, fnCallback) {
            var onSuccess = function(result) {
                if (result.status) {
                    if (result.data["response-data"]) {
                        //var queryResult = $linq.Enumerable().From(result.data["response-data"].products)
                        //    .GroupBy("$.type", null,
                        //        function(key, g) {
                        //            var result = {
                        //                productName: key,
                        //                //productImg: key.code,
                        //                productColor: g.GroupBy("$.productInfo.color", null,
                        //                    function(color, c) {
                        //                        var cr = {
                        //                            colorName: color,
                        //                            memSize: c.GroupBy("{capacity: $.productInfo.capacity, price: $.price, qty: $.qty, code: $.code}", null,
                        //                                function(k, m) {
                        //                                    var cap = {
                        //                                        code: k.code,
                        //                                        sizeName: k.capacity,
                        //                                        price: k.price,
                        //                                        stock: (k.qty == 0 ? "red" : (k.qty >= 5 ? "green" : "yellow")),
                        //                                        piece: k.qty
                        //                                    }
                        //                                    return cap;
                        //                                }).ToArray()
                        //                        }

                        //                        return cr;
                        //                    }).ToArray()
                        //            }
                        //            return result;
                        //        }).ToArray();
                        //console.log("response-data : ", result.data["response-data"].products);                        
                        var dataGrpByColor = $linq.Enumerable().From(result.data["response-data"].products)
                                                    .Distinct("$.productInfo.color")
                                                    .Where("$.productInfo.color != null")
                                                    .Select("$.productInfo.color")
                                                    //.OrderBy("")                            
                                                    .ToArray().sort();
                        console.log("productInfo.color : ", dataGrpByColor);

                        //var dataGrpByMemSize = $linq.Enumerable().From(result.data["response-data"].products).GroupBy("$.productInfo.capacity").ToArray();
                        var dataGrpByMemSize = $linq.Enumerable().From(result.data["response-data"].products)
                                                    .Distinct("$.productInfo.capacity")
                                                    .Where("$.productInfo.capacity != null")
                                                    .Select("$.productInfo.capacity")
                                                    //.OrderBy("")
                                                    .ToArray().sort();
                        //console.log("productInfo.capacity : ", dataGrpByMemSize);
                        //console.log("===========================================");

                        var retData = { productName: "P", productColor: [] };
                        for (var cIdx = 0; cIdx < dataGrpByColor.length; cIdx++) {

                            var productColorDetail = {
                                colorName: dataGrpByColor[cIdx],
                                memSize: []
                            };

                            for (var mIdx = 0; mIdx < dataGrpByMemSize.length; mIdx++) {

                                var productItemDetail = { sizeName: dataGrpByMemSize[mIdx] };
                                var prodItemResultList = $linq.Enumerable()
                                                                .From(result.data["response-data"].products)
                                                                .Where("$.productInfo.capacity == '" + dataGrpByMemSize[mIdx] + "' && $.productInfo.color == '" + dataGrpByColor[cIdx] + "'")
                                                                .ToArray();

                                //console.log("productInfo.color[" + dataGrpByColor[cIdx] + "].capacity[" + dataGrpByMemSize[mIdx] + "] : ", prodItemResultList);

                                if (prodItemResultList != null && prodItemResultList.length > 0) {

                                    productItemDetail.code = prodItemResultList[0].code;
                                    productItemDetail.name = prodItemResultList[0].name;
                                    productItemDetail.piece = prodItemResultList[0].qty;
                                    productItemDetail.price = prodItemResultList[0].price;
                                    productItemDetail.stock = (prodItemResultList[0].qty <= 0 ? "red" : (prodItemResultList[0].qty.qty >= 5 ? "green" : "yellow"));
                                    productItemDetail.itemCount = prodItemResultList.length;

                                } else {

                                    productItemDetail.code = "";
                                    productItemDetail.name = "";
                                    productItemDetail.piece = "";
                                    productItemDetail.price = "";
                                    productItemDetail.stock = "";
                                    productItemDetail.itemCount = 0;
                                }

                                productColorDetail.memSize.push(productItemDetail);
                            }

                            retData.productColor.push(productColorDetail);
                        }
                        var queryResult = [retData];

                        console.log("===========================================");
                        console.log("getProductByCategory : ", queryResult);
                        console.log("===========================================");

                        fnCallback({
                            status: true,
                            data: queryResult[0],
                            error: "",
                            msgErr: ""
                        });
                    } else {
                        fnCallback(result);
                    }

                }


            };

            if (!dalService.demo) {

                request.param.category_id = category_id;
                request.param.customer_type = "*";
                request.target = '/sales-services/rest/master/get_products_by_category';

                dalService.callServicePost(request, null, function(result) {
                    onSuccess(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "products": [{
                            "code": "3000005918",
                            "name": "3000005918-H/S,IPHONE 4,16GB,BLACK",
                            "desc": "H/S,IPHONE 4,16GB,BLACK",
                            "type": "P",
                            "qty": 3,
                            "price": 20263,
                            "productInfo": {
                                "capacity": "16GB",
                                "color": "Black"
                            }
                        }, {
                            "code": "3000005921",
                            "name": "3000005921-H/S,IPHONE 4,16GB,WHITE THA(SELL)",
                            "desc": "H/S,IPHONE 4,16GB,WHITE THA(SELL)",
                            "type": "P",
                            "qty": 0,
                            "price": 20263,
                            "productInfo": {
                                "capacity": "16GB",
                                "color": "White"
                            }
                        }, {
                            "code": "3000005999",
                            "name": "3000005999-H/S,IPHONE 4,16GB,RED THA(SELL)",
                            "desc": "H/S,IPHONE 4,16GB,RED THA(SELL)",
                            "type": "P",
                            "qty": 0,
                            "price": 9999,
                            "productInfo": {
                                "capacity": "128GB",
                                "color": "Red"
                            }
                        }, {
                            "code": "3000005922",
                            "name": "3000005922-H/S,IPHONE 4,32GB,BLACK",
                            "desc": "H/S,IPHONE 4,32GB,BLACK",
                            "type": "P",
                            "qty": 8,
                            "price": 23775,
                            "productInfo": {
                                "capacity": "32GB",
                                "color": "Black"
                            }
                        }, {
                            "code": "3000005923",
                            "name": "3000005922-H/S,IPHONE 4,32GB,BLACK",
                            "desc": "H/S,IPHONE 4,32GB,BLACK",
                            "type": "P",
                            "qty": 2,
                            "price": 23775,
                            "productInfo": {
                                "capacity": "32GB",
                                "color": "Black"
                            }
                        }, {
                            "code": "3000005925",
                            "name": "3000005925-H/S,IPHONE 4,32GB,WHITE THA(SELL)",
                            "desc": "H/S,IPHONE 4,32GB,WHITE THA(SELL)",
                            "type": "P",
                            "qty": 0,
                            "price": 23775,
                            "productInfo": {
                                "capacity": "32GB",
                                "color": "White"
                            }
                        }, {
                            "code": "3000011348",
                            "name": "3000011348-H/S,IPHONE 4,8GB,GSM-THA,BK,MD128TH/A",
                            "desc": "H/S,IPHONE 4,8GB,GSM-THA,BK,MD128TH/A",
                            "type": "P",
                            "qty": 7,
                            "price": 11200,
                            "productInfo": {
                                "capacity": "16GB",
                                "color": "Black"
                            }
                        }, {
                            "code": "3000011402",
                            "name": "3000011402-H/S,IPHONE 4,8GB,GSM-THA,WH,MD198TH/A",
                            "desc": "H/S,IPHONE 4,8GB,GSM-THA,WH,MD198TH/A",
                            "type": "P",
                            "qty": 15,
                            "price": 11200,
                            "productInfo": {
                                "capacity": null,
                                "color": null
                            }
                        }, {
                            "code": "3000012634",
                            "name": "3000012634-H/S, IP4-16BK-6M.WARRANTEE",
                            "desc": "H/S, IP4-16BK-6M.WARRANTEE",
                            "type": "P",
                            "qty": 0,
                            "price": 20263,
                            "productInfo": {
                                "capacity": null,
                                "color": null
                            }
                        }, {
                            "code": "3000012636",
                            "name": "3000012636-H/S, IP4-32BK-6M.WARRANTEE",
                            "desc": "H/S, IP4-32BK-6M.WARRANTEE",
                            "type": "P",
                            "qty": 0,
                            "price": 23775,
                            "productInfo": {
                                "capacity": null,
                                "color": null
                            }
                        }, {
                            "code": "3000012637",
                            "name": "3000012637-H/S, IP4-32WH-6M.WARRANTEE",
                            "desc": "H/S, IP4-32WH-6M.WARRANTEE",
                            "type": "P",
                            "qty": 0,
                            "price": 23775,
                            "productInfo": {
                                "capacity": null,
                                "color": null
                            }
                        }]
                    },
                    "display-message": null
                };

                var data2 = {
                    "status": "UNSUCCESSFUL",
                    "display-messages": [{
                        "message": "request sim prefix  is wrong format for company(RM)",
                        "message-code": "",
                        "message-type": "ERROR",
                        "en-message": "request sim prefix  is wrong format for company(RM)",
                        "th-message": "request sim prefix  is wrong format for company(RM)",
                        "technical-message": "request sim prefix  is wrong format for company(RM)"
                    }],
                    "trx-id": "4Q15KDZCTBQYP",
                    "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                    "response-data": {}

                };

                $timeout(function() {
                    onSuccess({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }
        };

        this.getProduct = function(fnCallback) {

        };

        this.getPromotionSet = function(fnCallback) {
            if (!dalService.demo) {

                request.target = '/sales-services/rest/master/get_product';

                dalService.callServicePost(request, null, function(result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "product": {
                            "name": "3000013633-H/S,IPHONE 5,32GB,GSM-THA,BK,MD299TH/A",
                            "desc": "H/S,IPHONE 5,32GB,GSM-THA,BK,MD299TH/A",
                            "price": 28250,
                            "productInfo": {
                                "appleCareCode": "APC"
                            },
                            "serviceInfo": null,
                            "campaigns": [{
                                "code": "PP228",
                                "name": "C15 With PP ",
                                "desc": null
                            }, {
                                "code": "RS080",
                                "name": "RS080 : iPhone5_Free You",
                                "desc": null
                            }, {
                                "code": "RS081",
                                "name": "iPhone 5_MNP (Contract 10 mths)",
                                "desc": null
                            }, {
                                "code": "RS084",
                                "name": "Biz & Ent iPhone 5_H/S+SIM (Contract 10 mths)",
                                "desc": null
                            }, {
                                "code": "RS085",
                                "name": "Biz & Ent iPhone 5_H/S+SIM (No contract)",
                                "desc": null
                            }, {
                                "code": "RS091",
                                "name": "Biz & Ent iPhone 5_MNP (Contract 10 mths)",
                                "desc": null
                            }, {
                                "code": "RS095",
                                "name": "MNP Handset Discount 1,000Bt  ",
                                "desc": null
                            }, {
                                "code": "RS098",
                                "name": "MNP Handset Discount 1,000bt (Contract 6 mths)",
                                "desc": null
                            }, {
                                "code": "RS109",
                                "name": "TrueCard discount 1,000 Baht",
                                "desc": null
                            }, {
                                "code": "RS112",
                                "name": "GOV_Free You_Premium Tier",
                                "desc": null
                            }, {
                                "code": "RS114",
                                "name": "Apple Employee for True Group",
                                "desc": null
                            }, {
                                "code": "RS115",
                                "name": "Apple Employee for CP Group",
                                "desc": null
                            }, {
                                "code": "RS128",
                                "name": "RS128 : Handset+New Sim for Apple",
                                "desc": null
                            }, {
                                "code": "RS238",
                                "name": "RS238 : TC discount 1,000 Baht",
                                "desc": null
                            }, {
                                "code": "RS396",
                                "name": "RS396 : Pre2Post_True Super One 299 Baht",
                                "desc": null
                            }, {
                                "code": "Test001",
                                "name": "Test001_Test Reserve",
                                "desc": null
                            }, {
                                "code": "TRN001",
                                "name": "TRN001 : Training Campaign No Advance",
                                "desc": null
                            }, {
                                "code": "TSM084",
                                "name": "Biz & Ent iPhone 5_H/S+SIM (Contract 10 mths)",
                                "desc": null
                            }],
                            "promotions": [{
                                "code": "PN462",
                                "name": "iPhone4 8GB  Contact 18 Month.",
                                "desc": "โปรโมชั่นพิเศษสุดๆ"
                            },{
                                "code": "PN4622",
                                "name": "iPhone4 8GB  Contact 18 Month.",
                                "desc": "โปรโมชั่นพิเศษสุดๆ"
                            }]
                        }
                    },
                    "display-message": null
                };
                $timeout(function() {
                    fnCallback({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }
        };

        this.getCampaign = function(fnCallback) {
            // var resp = {};
            // var resp = $localstorage.getObject("resp");t;

            // var onSuccess = function(result) {
            //     if (result.status) {
            //         if (result.data["response-data"]) {
            //             var.resp = {};
            //             resp.campaignlist = result.data["response-data"].compainglist;
            //             $localstorage.setObject("resp,"
            //                 resp);
            //         } else {
            //             console.log(resp.data)
            //         }
            //     }

            //     fnCallback(result;)
            // }

            if (!dalService.demo) {

                request.target = '/sales-services/rest/master/get_product';

                dalService.callServicePost(request, null, function(result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "product": {
                            "name": "3000013633-H/S,IPHONE 5,32GB,GSM-THA,BK,MD299TH/A",
                            "desc": "H/S,IPHONE 5,32GB,GSM-THA,BK,MD299TH/A",
                            "price": 28250,
                            "productInfo": {
                                "appleCareCode": "APC"
                            },
                            "serviceInfo": null,
                            "campaigns": [{
                                "code": "PP228",
                                "name": "C15 With PP ",
                                "desc": null
                            }, {
                                "code": "RS080",
                                "name": "RS080 : iPhone5_Free You",
                                "desc": null
                            }, {
                                "code": "RS081",
                                "name": "iPhone 5_MNP (Contract 10 mths)",
                                "desc": null
                            }, {
                                "code": "RS084",
                                "name": "Biz & Ent iPhone 5_H/S+SIM (Contract 10 mths)",
                                "desc": null
                            }, {
                                "code": "RS085",
                                "name": "Biz & Ent iPhone 5_H/S+SIM (No contract)",
                                "desc": null
                            }, {
                                "code": "RS091",
                                "name": "Biz & Ent iPhone 5_MNP (Contract 10 mths)",
                                "desc": null
                            }, {
                                "code": "RS095",
                                "name": "MNP Handset Discount 1,000Bt  ",
                                "desc": null
                            }, {
                                "code": "RS098",
                                "name": "MNP Handset Discount 1,000bt (Contract 6 mths)",
                                "desc": null
                            }, {
                                "code": "RS109",
                                "name": "TrueCard discount 1,000 Baht",
                                "desc": null
                            }, {
                                "code": "RS112",
                                "name": "GOV_Free You_Premium Tier",
                                "desc": null
                            }, {
                                "code": "RS114",
                                "name": "Apple Employee for True Group",
                                "desc": null
                            }, {
                                "code": "RS115",
                                "name": "Apple Employee for CP Group",
                                "desc": null
                            }, {
                                "code": "RS128",
                                "name": "RS128 : Handset+New Sim for Apple",
                                "desc": null
                            }, {
                                "code": "RS238",
                                "name": "RS238 : TC discount 1,000 Baht",
                                "desc": null
                            }, {
                                "code": "RS396",
                                "name": "RS396 : Pre2Post_True Super One 299 Baht",
                                "desc": null
                            }, {
                                "code": "Test001",
                                "name": "Test001_Test Reserve",
                                "desc": null
                            }, {
                                "code": "TRN001",
                                "name": "TRN001 : Training Campaign No Advance",
                                "desc": null
                            }, {
                                "code": "TSM084",
                                "name": "Biz & Ent iPhone 5_H/S+SIM (Contract 10 mths)",
                                "desc": null
                            }],
                            "promotions": [{
                                "code": "PN462",
                                "name": "iPhone4 8GB  Contact 18 Month.",
                                "desc": "โปรโมชั่นพิเศษสุดๆ"
                            }]
                        }
                    },
                    "display-message": null
                };
                $timeout(function() {
                    fnCallback({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }

        };

        this.verify = function(fnCallback) {

        }

        this.getCategoryByName = function(name, fnCallback) {
            console.log(name);
            var result = {};
            var master = $localstorage.getObject("master");



            var getAll = function(source) {
                var res = $filter('filter')(source, {
                    "name": name
                });
                if (res && res.length >= 1) {
                    return res;
                } else {
                    for (var i = 0; i < source.length; i++) {
                        if (source[i].child && source[i].child.length >= 1) {
                            var a = getAll(source[i].child);
                            if (a && a.length >= 1) {
                                return a;
                                break;

                            }
                        } else {
                            //return null;
                        }

                    }


                }


            };
            var category = getAll(master.categories);

            //console.log(Devices);
            if (category && category.length >= 1) {
                result = category[0].child;
                console.log(result);
                fnCallback({
                    status: true,
                    data: result,
                    error: "",
                    msgErr: ""
                });
            } else {

            }
        }

    });
