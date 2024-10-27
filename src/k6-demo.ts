import http from "k6/http";
import { check, group } from "k6";

export const options = {
    scenarios: {
        demo: {
          
          executor: 'constant-vus',
          vus: 5,
          duration: '10s',

        //   executor: 'ramping-vus',
        //     stages: [
        //         { target: 5, duration: "5s" },
        //         { target: 5, duration: "10s" },
        //         { target: 0, duration: "5s" }
        //     ],

        }
    },
    thresholds: {
        "http_req_duration": ["p(95)<500"],
    },
};

export default function demoTest() {

    group("Request K6 Homepage", function() {
        
        let response = http.get("http://test.k6.io/");
      
        check(response, {
            "Homepage request successful": (r) => r.status == 200 || false
        });

        
    });
}

