import http from 'k6/http';
import { group } from 'k6';

import {
  check,
  randomSeed,
  sleep,
} from 'k6';
export let options = {
  stages: [
    { duration: '5s', target: 1 },
    { duration: '10s', target: 10},
    { duration: '10s', target: 1000}, // passes this test
    { duration: '10s', target: 2000}, // doesnt pass this
    { duration: '10s', target: 50 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<150', 'max < 250'],
  }
};
const localhost = 'http://localhost:1010';
randomSeed(0);
export default function () {
  group('app starting up', () => {
    const max = 1000000;
    let product_id = Math.floor(Math.random() * max) || 1;

    // const max2 = 10;
    // let question_id = Math.floor(Math.random() * max) || 1;

    let getQuestion = http.get(`http://localhost:1010/qa/questions/${product_id}`);
    check (getQuestion, {
      'is status 200': (r) => r.status === 200,
      'is duration < 250ms': (r) => r.timings.duration < 250,
    })
    sleep(1);

    let getAnswer = http.get(`http://localhost:1010/qa/questions/${product_id}/answers`);
    check (getAnswer, {
      'is status 200': (r) => r.status === 200,
      'is duration < 250ms': (r) => r.timings.duration < 250,
    })
    sleep(1);
  })
}