# Node.js Server Unresponsiveness Under Load

This repository demonstrates a common issue in Node.js applications where the server becomes unresponsive or hangs under heavy load. The problem stems from not handling potential exceptions or memory leaks effectively.

## The Problem

The provided `server.js` demonstrates a simplified server that introduces a 5-second delay in responding to requests.  Under a high volume of requests, this delay can lead to issues if exceptions are not properly handled.  Additionally, memory leaks could exacerbate the problem. 

## The Solution

The `serverSolution.js` offers a solution by implementing proper error handling and potentially optimizing memory usage if the application involves complex data structures. 

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies (if any).
3. Run `node server.js`.
4. Simulate a high load using tools like `ab` (Apache Benchmark) or `wrk`. Observe the server's response times and behavior under stress.

## How to Solve

1. Review the `serverSolution.js` for improvements. 
2. Implement appropriate error handling mechanisms using `try...catch` blocks.
3.  Consider using techniques like connection pooling and request throttling to manage the influx of requests.
4.  Profile the application to identify and address potential memory leaks using tools like heapdump.