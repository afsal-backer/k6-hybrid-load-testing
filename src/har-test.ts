import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  scenarios: {
    har: {
      executor: 'ramping-vus',
      stages: [
        { target: 10, duration: '10s' },
        { target: 10, duration: '20s' },
        { target: 0, duration: '10s' },
      ],
    },
  },

  thresholds: {
    'http_req_failed': ['rate<0.06'],
  },
  
}

export default function harTest() {
  let response: any

  group('Home Page - https://test.k6.io/', function () {
    response = http.get('https://test.k6.io/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    response = http.get('https://test.k6.io/static/css/site.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    response = http.get('https://test.k6.io/static/js/prisms.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    response = http.get('https://test.k6.io/static/favicon.ico', {
      headers: {
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    response = http.get('https://test.k6.io/static/favicon.ico', {
      headers: {
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(0.5)
  })

  group('Contacts - https://test.k6.io/contacts.php', function () {
    response = http.get('https://test.k6.io/contacts.php', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(0.5)
  })

  group('Home - https://test.k6.io/', function () {
    response = http.get('https://test.k6.io/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    response = http.get('https://test.k6.io/static/css/site.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    response = http.get('https://test.k6.io/static/js/prisms.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(0.5)
  })

  group('News - https://test.k6.io/news.php', function () {
    response = http.get('https://test.k6.io/news.php', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(0.5)
  })

  group('Home - https://test.k6.io/', function () {
    response = http.get('https://test.k6.io/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    response = http.get('https://test.k6.io/static/css/site.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    response = http.get('https://test.k6.io/static/js/prisms.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(0.5)
  })

  group('Decimal Pie - https://test.k6.io/pi.php?decimals=3', function () {
    response = http.get('https://test.k6.io/pi.php?decimals=3', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(0.5)
  })

  group('Coin Flip - https://test.k6.io/flip_coin.php', function () {
    response = http.get('https://test.k6.io/flip_coin.php', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(0.5)
  })

  group('Browser Page - https://test.k6.io/browser.php', function () {
    response = http.get('https://test.k6.io/browser.php', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(0.5)
  })

  group('Messages - https://test.k6.io/my_messages.php', function () {
    response = http.get('https://test.k6.io/my_messages.php', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(0.5)
  })

  group('Log in - https://test.k6.io/login.php', function () {
    response = http.post(
      'https://test.k6.io/login.php',
      {
        redir: '1',
        csrftoken: 'Mjc5MDQ5Mzg3',
        login: 'admin',
        password: '123',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://test.k6.io',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    sleep(0.5)
    console.log(response)
  })
}
