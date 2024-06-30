import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src="https://i.postimg.cc/4dfZqhyP/Screenshot-from-2024-06-29-11-22-57-transformed-removebg-preview.png" alt="Logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#cart">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const resList =  [
   {
      "type": "restaurant",
      "info": {
        "resId": 32479,
        "name": "Gypsy Chinese",
        "image": {
          "url": "https://i.postimg.cc/CKPfx8tP/187b1e1fac629790080e7e6d7cd57468.avif",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/9/32479/2b0e46daba178f121ff8403ce20c6895_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": false
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.2",
          "rating_text": "3.2",
          "rating_subtitle": "Average",
          "rating_color": "CDD614",
          "votes": "1,284",
          "subtext": "REVIEW",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.8",
              "reviewCount": "1,279",
              "reviewTextSmall": "1,279 Reviews",
              "subtext": "1,279 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.8",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "2.5",
              "reviewCount": "5",
              "reviewTextSmall": "5 Reviews",
              "subtext": "5 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "2.5",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "yellow",
                "tint": "600"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹1,200 for two"
        },
        "cfo": {
          "text": "₹500 for one"
        },
        "locality": {
          "name": "Dadar Shivaji Park, Mumbai",
          "address": "121, Maryland Corner, Keluskar Marg, Dadar Shivaji Park, Mumbai",
          "localityUrl": "mumbai/dadar-shivaji-park-restaurants"
        },
        "timing": {
          "text": "Closes in 1 hour 32 minutes",
          "color": "#e5521f"
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/thai/",
            "name": "Thai"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/sea-food/",
            "name": "Seafood"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/japanese/",
            "name": "Japanese"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹1,200 for two"
        }
      },
      "order": [
        
      ],
      "gold": {
        "instant": 10,
        "welcome_offer": false,
        "gold_offer": false,
        "text": "Flat",
        "offerValue": "50% OFF",
        "isGoldIcon": false
      },
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/gypsy-chinese-dadar-shivaji-park/info",
        "clickActionDeeplink": ""
      },
      "distance": "3 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"32479\",\"element_type\":\"listing\",\"rank\":382}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 39280,
        "name": "Sujata Annexe",
        "image": {
          "url": "https://i.postimg.cc/WbGFJCCJ/f0d8b5wpq2gq5yjcut9z.avif",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/chains/0/39280/1edc26f370110046435e430d7b743ce7_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/0/39280/6f9b1dcced98fe5cd42de85a143c54ff_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.7",
          "rating_text": "3.7",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "203",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.4",
              "reviewCount": "120",
              "reviewTextSmall": "120 Reviews",
              "subtext": "120 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.4",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.0",
              "reviewCount": "83",
              "reviewTextSmall": "83 Reviews",
              "subtext": "83 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.0",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹700 for two"
        },
        "cfo": {
          "text": "₹300 for one"
        },
        "locality": {
          "name": "Dadar West, Mumbai",
          "address": "Gokhale & Ranade Road Junction, Dadar West, Mumbai",
          "localityUrl": "mumbai/dadar-west-restaurants"
        },
        "timing": {
          "text": "Closes in 1 hour 2 minutes",
          "color": "#e5521f"
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/biryani/",
            "name": "Biryani"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/sichuan/",
            "name": "Sichuan"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/street-food/",
            "name": "Street Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/desserts/",
            "name": "Desserts"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹700 for two"
        }
      },
      "order": [
        
      ],
      "gold": {
        "instant": 10,
        "welcome_offer": false,
        "gold_offer": false,
        "text": "Flat",
        "offerValue": "10% OFF",
        "isGoldIcon": false
      },
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/sujata-annexe-dadar-west/info",
        "clickActionDeeplink": ""
      },
      "distance": "2.7 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"39280\",\"element_type\":\"listing\",\"rank\":383}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]
    },{
      "type": "restaurant",
      "info": {
        "resId": 20131090,
        "name": "BCreamy",
        "image": {
          "url": "https://i.postimg.cc/4dj7zgXp/ae3qqfev6j7hzhxw6if3.avif",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/0/20131090/294568a4b3e41b2d241e28d380b56eea_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/0/20131090/7da149444066e9f0ffd25614da0b6731_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.6",
          "rating_text": "3.6",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "172",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.6",
              "reviewCount": "12",
              "reviewTextSmall": "12 Reviews",
              "subtext": "12 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.6",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "3.6",
              "reviewCount": "160",
              "reviewTextSmall": "160 Reviews",
              "subtext": "160 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "3.6",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹450 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Mazgaon, Mumbai",
          "address": "Shop 2, Ground Floor, Dholkawala Compound, Shivdas Chapsi Road, Mazgaon, Mumbai",
          "localityUrl": "mumbai/mazgaon-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/ice-cream/",
            "name": "Ice Cream"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/desserts/",
            "name": "Desserts"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/shake/",
            "name": "Shake"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/juices/",
            "name": "Juices"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹450 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/bcreamy-mazgaon/info",
        "clickActionDeeplink": ""
      },
      "distance": "3.7 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20131090\",\"element_type\":\"listing\",\"rank\":384}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]},{"type": "restaurant",
      "info": {
        "resId": 38382,
        "name": "Ming Yang - Taj Lands End",
        "image": {
          "url": "https://i.postimg.cc/13yg0M17/fd4d733e5ba4d1b7d10bd572ddf72801.avif",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/2/38382/72596d3d7b0c7f100696e90be25666a1_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": false
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.2",
          "rating_text": "4.2",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "1,091",
          "subtext": "REVIEW",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "4.2",
              "reviewCount": "1,091",
              "reviewTextSmall": "1,091 Reviews",
              "subtext": "1,091 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "4.2",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "",
              "reviewCount": "0",
              "reviewTextSmall": "0 Reviews",
              "subtext": "Does not offer Delivery",
              "color": "",
              "ratingV2": "-",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "grey",
                "tint": "500"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹5,000 for two"
        },
        "cfo": {
          "text": "₹2,000 for one"
        },
        "locality": {
          "name": "Taj Lands End, Bandra, Mumbai",
          "address": "Taj Lands End, Bandstand, Bandra West, Mumbai",
          "localityUrl": "mumbai/restaurants/in/taj-lands-end-bandra"
        },
        "timing": {
          "text": "Closes in 1 hour 2 minutes",
          "color": "#e5521f"
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/sea-food/",
            "name": "Seafood"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹5,000 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/ming-yang-taj-lands-end-bandstand-bandra-west/info",
        "clickActionDeeplink": ""
      },
      "distance": "4.9 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"38382\",\"element_type\":\"listing\",\"rank\":385}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]},{"type": "restaurant",
      "info": {
        "resId": 36209,
        "name": "Triveni Veg Restaurant",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/9/36209/396910be9e28570af60bd9f8eeab3374_featured_v2.jpg",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/9/36209/396910be9e28570af60bd9f8eeab3374_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/9/36209/91d78b992f614ac96815391f97b0eb00_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.3",
          "rating_text": "3.3",
          "rating_subtitle": "Average",
          "rating_color": "CDD614",
          "votes": "24",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.3",
              "reviewCount": "23",
              "reviewTextSmall": "23 Reviews",
              "subtext": "23 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.3",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "",
              "reviewCount": "1",
              "reviewTextSmall": "1 Reviews",
              "subtext": "Does not offer Delivery",
              "color": "",
              "ratingV2": "-",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "grey",
                "tint": "500"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹300 for two"
        },
        "cfo": {
          "text": "₹150 for one"
        },
        "locality": {
          "name": "Byculla, Mumbai",
          "address": "SRC Building, Dr Ambedkar Road, Byculla, Mumbai",
          "localityUrl": "mumbai/byculla-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/south-indian/",
            "name": "South Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/north-indian/",
            "name": "North Indian"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹300 for two"
        }
      },
      "order": [
        
      ],
      "gold": {
        "instant": 10,
        "welcome_offer": false,
        "gold_offer": false,
        "text": "Flat",
        "offerValue": "20% OFF",
        "isGoldIcon": false
      },
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/triveni-veg-restaurant-byculla/info",
        "clickActionDeeplink": ""
      },
      "distance": "2.3 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"36209\",\"element_type\":\"listing\",\"rank\":386}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 20857847,
        "name": "Aadab Biryani",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/7/20857847/a97f9c9cfab5518d37a3f90710939cf7_featured_v2.jpg",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/7/20857847/a97f9c9cfab5518d37a3f90710939cf7_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/7/20857847/3e0a2a16dfd2256ab45fe0bec49072cd_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.5",
          "rating_text": "3.5",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "197",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.5",
              "reviewCount": "4",
              "reviewTextSmall": "4 Reviews",
              "subtext": "4 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.5",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "3.5",
              "reviewCount": "193",
              "reviewTextSmall": "193 Reviews",
              "subtext": "193 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "3.5",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹400 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Mahalaxmi, Mumbai",
          "address": "Ground Floor, Sane Guruji Marg, Kasturba Vasahat Road, Near Jacob Circle, Mahalaxmi, Mumbai",
          "localityUrl": "mumbai/mahalaxmi-restaurants"
        },
        "timing": {
          "text": "Closes in 1 hour 2 minutes",
          "color": "#e5521f"
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/biryani/",
            "name": "Biryani"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/hyderabadi/",
            "name": "Hyderabadi"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹400 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/aadab-biryani-mahalaxmi/info",
        "clickActionDeeplink": ""
      },
      "distance": "2 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20857847\",\"element_type\":\"listing\",\"rank\":387}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]},{"type": "restaurant",
      "info": {
        "resId": 41710,
        "name": "Cafe Zam Zam",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/0/41710/9743d1911f62f3b43f36eceb605c15c1_featured_v2.jpg",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/0/41710/9743d1911f62f3b43f36eceb605c15c1_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": false
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.3",
          "rating_text": "3.3",
          "rating_subtitle": "Average",
          "rating_color": "CDD614",
          "votes": "22",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.3",
              "reviewCount": "22",
              "reviewTextSmall": "22 Reviews",
              "subtext": "22 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.3",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "",
              "reviewCount": "0",
              "reviewTextSmall": "0 Reviews",
              "subtext": "Does not offer Delivery",
              "color": "",
              "ratingV2": "-",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "grey",
                "tint": "500"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹400 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Mumbai Central, Mumbai",
          "address": "Shop 13, Agripada, Dr. A Nair Road, Mumbai Central, Mumbai",
          "localityUrl": "mumbai/mumbai-central-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
            "name": "Beverages"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjZcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/lebanese/",
            "name": "Lebanese"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹400 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/cafe-zam-zam-mumbai-central/info",
        "clickActionDeeplink": ""
      },
      "distance": "2.9 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"41710\",\"element_type\":\"listing\",\"rank\":388}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 49464,
        "name": "Café 792",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/4/49464/d7b808f923f93b7f4091be516642fc7d_featured_v2.jpg",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/4/49464/d7b808f923f93b7f4091be516642fc7d_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": false
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.1",
          "rating_text": "4.1",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "317",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "4.1",
              "reviewCount": "316",
              "reviewTextSmall": "316 Reviews",
              "subtext": "316 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "4.1",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "",
              "reviewCount": "1",
              "reviewTextSmall": "1 Reviews",
              "subtext": "Does not offer Delivery",
              "color": "",
              "ratingV2": "-",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "grey",
                "tint": "500"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹500 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Dadar East, Mumbai",
          "address": "792, Dina Manzil Outhouse, Parsi Colony, Jame Jamshed Road, Dadar East, Mumbai",
          "localityUrl": "mumbai/dadar-east-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/sandwich/",
            "name": "Sandwich"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/rolls/",
            "name": "Rolls"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/street-food/",
            "name": "Street Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/fast-food/",
            "name": "Fast Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/burger/",
            "name": "Burger"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
            "name": "Beverages"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/desserts/",
            "name": "Desserts"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹500 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/café-792-dadar-east/info",
        "clickActionDeeplink": ""
      },
      "distance": "2.8 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"49464\",\"element_type\":\"listing\",\"rank\":389}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]},{"type": "restaurant",
      "info": {
        "resId": 18966004,
        "name": "Shardha Hotel",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/4/18966004/349af6ce790cf248eeb8ffb44fdaff56_featured_v2.jpg",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/4/18966004/349af6ce790cf248eeb8ffb44fdaff56_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/4/18966004/c41cd41019fe014eea56038f463824eb_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.5",
          "rating_text": "3.5",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "1,020",
          "subtext": "REVIEW",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.1",
              "reviewCount": "26",
              "reviewTextSmall": "26 Reviews",
              "subtext": "26 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.1",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "3.9",
              "reviewCount": "994",
              "reviewTextSmall": "994 Reviews",
              "subtext": "994 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "3.9",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹150 for two"
        },
        "cfo": {
          "text": "₹100 for one"
        },
        "locality": {
          "name": "Matunga West, Mumbai",
          "address": "GNMD 28, 3/3 C, Matunga Labour Camp, Andhra Vally Road, Anand Nagar, Dharavi, Matunga West, Mumbai",
          "localityUrl": "mumbai/matunga-west-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/south-indian/",
            "name": "South Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/ice-cream/",
            "name": "Ice Cream"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/fast-food/",
            "name": "Fast Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹150 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/shardha-hotel-matunga-west/info",
        "clickActionDeeplink": ""
      },
      "distance": "4.8 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18966004\",\"element_type\":\"listing\",\"rank\":390}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]},{"type": "restaurant",
      "info": {
        "resId": 21142294,
        "name": "Memco Chaat And More",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/4/21142294/7cfa3e3f691aa65799bf045246efacaa_featured_v2.jpg",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/4/21142294/7cfa3e3f691aa65799bf045246efacaa_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/4/21142294/7055e9678fec3b977c5cc2e7f2507beb_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.0",
          "rating_text": "4.0",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "15",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "",
              "reviewCount": "2",
              "reviewTextSmall": "2 Reviews",
              "subtext": "Does not offer Dining",
              "color": "",
              "ratingV2": "-",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "grey",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.0",
              "reviewCount": "13",
              "reviewTextSmall": "13 Reviews",
              "subtext": "13 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.0",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹200 for two"
        },
        "cfo": {
          "text": "₹100 for one"
        },
        "locality": {
          "name": "Mahalaxmi, Mumbai",
          "address": "Ground Floor, Immamwada Road, Mahalaxmi, Mumbai",
          "localityUrl": "mumbai/mahalaxmi-restaurants"
        },
        "timing": {
          "text": "Opens at 2:15pm",
          "color": "#ab000d"
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/sandwich/",
            "name": "Sandwich"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/street-food/",
            "name": "Street Food"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/memco-chaat-and-more-mahalaxmi/info",
        "clickActionDeeplink": ""
      },
      "distance": "4.7 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21142294\",\"element_type\":\"listing\",\"rank\":391}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]},{"type": "restaurant",
      "info": {
        "resId": 18562495,
        "name": "Nanumal Bhojraj",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/2/37382/5451060d5786110e3ca54e1bf88d3305_featured_v2.jpg",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/chains/2/37382/5451060d5786110e3ca54e1bf88d3305_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/2/37382/0cd39e8163e8f88119607bba85b93928_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.6",
          "rating_text": "3.6",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "9,126",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.2",
              "reviewCount": "122",
              "reviewTextSmall": "122 Reviews",
              "subtext": "122 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.2",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.0",
              "reviewCount": "9,004",
              "reviewTextSmall": "9,004 Reviews",
              "subtext": "9,004 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.0",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹500 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Parel, Mumbai",
          "address": "Shop 3, Waking Building, J B Road, Opposite Shirodkar Market, Parel, Mumbai",
          "localityUrl": "mumbai/parel-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/south-indian/",
            "name": "South Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/biryani/",
            "name": "Biryani"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/desserts/",
            "name": "Desserts"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹500 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/nanumal-bhojraj-parel/info",
        "clickActionDeeplink": ""
      },
      "distance": "1.2 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18562495\",\"element_type\":\"listing\",\"rank\":392}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]},{"type": "restaurant",
      "info": {
        "resId": 34437,
        "name": "Alankar",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/7/34437/fa1465f0458dafb3ce376a11ba94d7e5_featured_v2.jpg",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/7/34437/fa1465f0458dafb3ce376a11ba94d7e5_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/7/34437/9a22fbb981271e18114aff98b365c8ff_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.3",
          "rating_text": "3.3",
          "rating_subtitle": "Average",
          "rating_color": "CDD614",
          "votes": "4,490",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "2.7",
              "reviewCount": "169",
              "reviewTextSmall": "169 Reviews",
              "subtext": "169 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "2.7",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "yellow",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "3.9",
              "reviewCount": "4,321",
              "reviewTextSmall": "4,321 Reviews",
              "subtext": "4,321 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "3.9",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹500 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Worli, Mumbai",
          "address": "10, Century Mill, PB Marg, Worli, Mumbai",
          "localityUrl": "mumbai/worli-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/south-indian/",
            "name": "South Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
            "name": "Beverages"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/street-food/",
            "name": "Street Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/fast-food/",
            "name": "Fast Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/sichuan/",
            "name": "Sichuan"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹500 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/alankar-worli/info",
        "clickActionDeeplink": ""
      },
      "distance": "912 m",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"34437\",\"element_type\":\"listing\",\"rank\":393}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]},{"type": "restaurant",
      "info": {
        "resId": 45903,
        "name": "Acharekar's Malvan Katta",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/3/45903/8418509ed734265b234df8708bca608c_featured_v2.jpg",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/3/45903/8418509ed734265b234df8708bca608c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/3/45903/dff439cf2ebf2745c11847b77923cc69_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.1",
          "rating_text": "4.1",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "1,857",
          "subtext": "REVIEW",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "4.1",
              "reviewCount": "521",
              "reviewTextSmall": "521 Reviews",
              "subtext": "521 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "4.1",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.0",
              "reviewCount": "1,336",
              "reviewTextSmall": "1,336 Reviews",
              "subtext": "1,336 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.0",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹950 for two"
        },
        "cfo": {
          "text": "₹400 for one"
        },
        "locality": {
          "name": "Dadar West, Mumbai",
          "address": "Ground Floor, Krishna Niwas, Shivsena Bhavan Marg, Dadar West, Mumbai",
          "localityUrl": "mumbai/dadar-west-restaurants"
        },
        "timing": {
          "text": "Closes in 1 hour 32 minutes",
          "color": "#e5521f"
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzFcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/malwani/",
            "name": "Malwani"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/sea-food/",
            "name": "Seafood"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹950 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/acharekars-malvan-katta-dadar-west/info",
        "clickActionDeeplink": ""
      },
      "distance": "2.8 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"45903\",\"element_type\":\"listing\",\"rank\":394}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]},{"type": "restaurant",
      "info": {
        "resId": 21116344,
        "name": "Aanandi",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/4/21116344/4d64700c8fe8ecabcd8f4f0c8da1c270_featured_v2.jpg",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/4/21116344/4d64700c8fe8ecabcd8f4f0c8da1c270_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": false
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.9",
          "rating_text": "3.9",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "4",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.9",
              "reviewCount": "4",
              "reviewTextSmall": "4 Reviews",
              "subtext": "4 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.9",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "",
              "reviewCount": "0",
              "reviewTextSmall": "0 Reviews",
              "subtext": "Does not offer Delivery",
              "color": "",
              "ratingV2": "-",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "grey",
                "tint": "500"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹1,200 for two"
        },
        "cfo": {
          "text": "₹500 for one"
        },
        "locality": {
          "name": "Lower Parel, Mumbai",
          "address": "Shop No-8, Wadachi Chawl, NM Joshi Marg, Lower Parel, Mumbai",
          "localityUrl": "mumbai/lower-parel-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/maharashtrian/",
            "name": "Maharashtrian"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹1,200 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/aanandi-lower-parel/info",
        "clickActionDeeplink": ""
      },
      "distance": "531 m",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21116344\",\"element_type\":\"listing\",\"rank\":395}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]},{"type": "restaurant",
      "info": {
        "resId": 37433,
        "name": "Trupti",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/3/37433/bb1fc24974fff40a41b0bda75c4ff6c0_featured_v2.jpg",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/3/37433/bb1fc24974fff40a41b0bda75c4ff6c0_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/3/37433/fa2b90cfd01aa89d4738e2bf9106d8a0_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.2",
          "rating_text": "4.2",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "13.3K",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "4.1",
              "reviewCount": "501",
              "reviewTextSmall": "501 Reviews",
              "subtext": "501 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "4.1",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.3",
              "reviewCount": "12.8K",
              "reviewTextSmall": "12.8K Reviews",
              "subtext": "12.8K Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.3",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹650 for two"
        },
        "cfo": {
          "text": "₹300 for one"
        },
        "locality": {
          "name": "Dadar West, Mumbai",
          "address": "8, Aakansha, NC Kelkar Marg, Plaza Cinema, Dadar West, Mumbai",
          "localityUrl": "mumbai/dadar-west-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/maharashtrian/",
            "name": "Maharashtrian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/south-indian/",
            "name": "South Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/fast-food/",
            "name": "Fast Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/street-food/",
            "name": "Street Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/desserts/",
            "name": "Desserts"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹650 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/trupti-dadar-west/info",
        "clickActionDeeplink": ""
      },
      "distance": "2.8 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"37433\",\"element_type\":\"listing\",\"rank\":396}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]},{"type": "restaurant",
      "info": {
        "resId": 19924309,
        "name": "Bansuri Family Restaurant And Bar",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/9/19924309/d576e4c6bad34368263abc325b627a5b_featured_v2.jpg",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/9/19924309/d576e4c6bad34368263abc325b627a5b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/9/19924309/359d28299cfbf2e050ddf80c0d05b008_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.4",
          "rating_text": "3.4",
          "rating_subtitle": "Average",
          "rating_color": "CDD614",
          "votes": "647",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "2.7",
              "reviewCount": "4",
              "reviewTextSmall": "4 Reviews",
              "subtext": "4 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "2.7",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "yellow",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.0",
              "reviewCount": "643",
              "reviewTextSmall": "643 Reviews",
              "subtext": "643 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.0",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹550 for two"
        },
        "cfo": {
          "text": "₹250 for one"
        },
        "locality": {
          "name": "Wadala, Mumbai",
          "address": "Shop 12, Old BPT Colony, Barkat Ali Dargah Road, Wadala, Mumbai",
          "localityUrl": "mumbai/wadala-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/mughlai/",
            "name": "Mughlai"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/biryani/",
            "name": "Biryani"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/kebab/",
            "name": "Kebab"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/sea-food/",
            "name": "Seafood"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/sichuan/",
            "name": "Sichuan"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹550 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/bansuri-family-restaurant-and-bar-wadala/info",
        "clickActionDeeplink": ""
      },
      "distance": "4.2 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19924309\",\"element_type\":\"listing\",\"rank\":397}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]},{"type": "restaurant",
      "info": {
        "resId": 18784951,
        "name": "Sri Krishna",
        "image": {
          "url": "https://i.postimg.cc/W17kxC7P/7d1fabdcb12d6e4f28c60fa41d602b0b.avif",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/chains/1/18784951/d471752566cf68daa8a1b7be8c566c2b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/1/18784951/038140bc9202009183124af06873e1a1_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.3",
          "rating_text": "4.3",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "7,636",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "4.4",
              "reviewCount": "246",
              "reviewTextSmall": "246 Reviews",
              "subtext": "246 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "4.4",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.2",
              "reviewCount": "7,390",
              "reviewTextSmall": "7,390 Reviews",
              "subtext": "7,390 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.2",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹1,100 for two"
        },
        "cfo": {
          "text": "₹450 for one"
        },
        "locality": {
          "name": "Grant Road, Mumbai",
          "address": "Nana Chowk, Grant Road, Mumbai",
          "localityUrl": "mumbai/grant-road-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/south-indian/",
            "name": "South Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/fast-food/",
            "name": "Fast Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/street-food/",
            "name": "Street Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/desserts/",
            "name": "Desserts"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/sichuan/",
            "name": "Sichuan"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹1,100 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/sri-krishna-grant-road/info",
        "clickActionDeeplink": ""
      },
      "distance": "4.6 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18784951\",\"element_type\":\"listing\",\"rank\":398}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]},{"type": "restaurant",
      "info": {
        "resId": 21049413,
        "name": "JM Food",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/3/21049413/4223075065d9a78ade6f7a1975b902eb_featured_v2.jpg",
          "urlWithParams": "https://b.zmtcdn.com/data/pictures/3/21049413/4223075065d9a78ade6f7a1975b902eb_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/3/21049413/b3055405ac49b03a3d5a77824e65ab97_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "0",
          "rating_text": "-",
          "rating_subtitle": "Not rated",
          "rating_color": "CBCBCB",
          "votes": "2",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "",
              "reviewCount": "2",
              "reviewTextSmall": "2 Reviews",
              "subtext": "Does not offer Dining",
              "color": "",
              "ratingV2": "-",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "grey",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "",
              "reviewCount": "0",
              "reviewTextSmall": "0 Reviews",
              "subtext": "Does not offer Delivery",
              "color": "",
              "ratingV2": "-",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "grey",
                "tint": "500"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹250 for two"
        },
        "cfo": {
          "text": "₹100 for one"
        },
        "locality": {
          "name": "Dadar East, Mumbai",
          "address": "Shop 3, JB Marg, Dadar East, Mumbai",
          "localityUrl": "mumbai/dadar-east-restaurants"
        },
        "timing": {
          "text": "Opens at 3:30pm",
          "color": "#ab000d"
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/maharashtrian/",
            "name": "Maharashtrian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/mexican/",
            "name": "Mexican"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/sandwich/",
            "name": "Sandwich"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/mumbai/restaurants/fast-food/",
            "name": "Fast Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹250 for two"
        }
      },
      "order": [
        
      ],
      "gold": [
        
      ],
      "takeaway": [
        
      ],
      "cardAction": {
        "text": "",
        "clickUrl": "/mumbai/jm-food-dadar-east/info",
        "clickActionDeeplink": ""
      },
      "distance": "878 m",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"1c1fb62c-3613-4ddb-ac37-35a756ef5f9a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646286234222592\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21049413\",\"element_type\":\"listing\",\"rank\":399}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [
        
      ],
      "promoOffer": "",
      "checkBulkOffers": false,
      "bulkOffers": [
        
      ],
      "isDisabled": false,
      "bottomContainers": [
        
      ]}
];

  const RestaurantCard = (props) => {
    const { resData } = props;
    
    
    const cuisines = resData.info.cuisine.map(cuisine => cuisine.name).join(", ");
  
    return (
      <div className="res-card">
        <img src={resData.info.image.url} alt={resData.info.name} />
        <h3>{resData.info.name}</h3>
        <h4>{cuisines}</h4>
        <div className="rating-container">
          <span className="rating">{resData.info.rating.aggregate_rating}</span>
          <span className="rating-out-of">/ 5</span>
        </div>
        <h4>{resData.info.locality.name}</h4>
        <h4>{resData.info.costText.text}</h4>
      </div>
    );
  };

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search Restaurant...."></input>
        <button>🔍</button>
      </div>
      <div className="res-container">
        {
        resList.map(restaurant => <RestaurantCard key={restaurant.info.resId} resData={restaurant} /> )}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
