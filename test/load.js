import http from 'k6/http';
import { sleep, check, group } from 'k6';

export let options = {
  stages: [
    { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: '10m', target: 100 }, // stay at 100 users for 10 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'], // errors less than 1%
    http_req_duration: ['p(95)<2000'], // 95% of requests should be under 2000ms
  },
};

export default function () {
  group('app startup', () => {
    const max = 1000000;
    const min = 1;
    const product_id = Math.round((Math.random() * (max - min)) + min);

    let getQuestion = http.get(`http://localhost:1010/${product_id}`);
    check(getQuestion, {
      'is status 200': (r) => r.status === 200,
      'is duration < 250 ms': (r) => r.timings.duration < 250,
    })
    sleep(1);

    let getAnswer = http.get(`http://localhost:1010/qa/questions/${product_id}/answers`);
    check(getAnswer, {
      'is status 200': (r) => r.status === 200,
      'is duration < 250ms': (r) => r.times.duration < 250,
    })
    sleep(1);
  })
}