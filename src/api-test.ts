import http from "k6/http";
import { check, group } from "k6";
import { Counter, Rate } from "k6/metrics";

const loginData = JSON.parse(open("../users.json"));  // test users
// Custom metrics
let successfulLogins = new Counter("successful_logins");
let failedLogins = new Counter("failed_logins");
let checkFailureRate = new Rate("check_failure_rate");

export const options = {
    scenarios: {
        har: {
          executor: 'ramping-vus',
            stages: [
                { target: 2, duration: "5s" },
                { target: 2, duration: "10s" },
                { target: 0, duration: "5s" }
            ],
        }
    },
    thresholds: {
        "http_req_duration": ["p(95)<500"],
        "check_failure_rate": ["rate<0.3"],
        "failed_logins": ["count<=0"]
    },
};

export default function apiTest() {

    group("Request all pages", function() {
        let res = http.get("http://test.k6.io/");
      
        let checkRes = check(res, {
            "Homepage request successful": (r) => r.body && typeof r.body === 'string' && r.body.indexOf("Welcome to the k6.io demo site!") !== -1 || false
        });

        checkFailureRate.add(!checkRes); // Record check failures

        res = http.get("https://test.k6.io/contacts.php");

        checkRes = check(res, {
            "Contact Us request successful": (r) => r.status== 200 || false
        });

        checkFailureRate.add(!checkRes);

        res = http.get("https://test.k6.io/news.php");
        checkRes = check(res, {
            "News request successful": (r) => r.status== 200 || false
        });

        res = http.get("https://test.k6.io/pi.php?decimals=3");
        checkRes = check(res, {
            "Decimal Pi request successful": (r) => r.status== 200 || false
        });

        res = http.get("https://test.k6.io/flip_coin.php");
        checkRes = check(res, {
            "Flip Coin request successful": (r) => r.status== 200 || false
        });

        res = http.get("https://test.k6.io/browser.php");
        checkRes = check(res, {
            "Browser request successful": (r) => r.status== 200 || false
        });
    });



    group("Login", function() {
        let res = http.get("http://test.k6.io/my_messages.php");
        
        const vars: Record<string, string> = {}; //get CSRF token
        if (res.html) { 
            const csrfToken = res.html().find("input[name=csrftoken]").first().attr("value");
            if (csrfToken) {
                vars["csrftoken"] = csrfToken;
            }
        }

        let position = Math.floor(Math.random()*loginData.users.length);  // get random test user
        let credentials = loginData.users[position];

        res = http.post("http://test.k6.io/login.php", { 
            login: credentials.username, 
            password: credentials.password, 
            redir: '1', 
            csrftoken: vars["csrftoken"] || '' 
        });
        
        let checkLoginResponse = check(res, {
            "Login successful": (r) => r.body && typeof r.body === 'string' && r.body.indexOf("Welcome, admin!") !== -1 || false
        });

        checkFailureRate.add(!checkLoginResponse, { page: "login" });

        
        if (checkLoginResponse) { // Record successful logins
            successfulLogins.add(1);
        }
        else {
            failedLogins.add(1);
        }
    });
}

