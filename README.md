# Parktimizer

## The Idea 

Parktimizer is a web application currently under development that offers users the ability to create their ideal days at theme parks. Users input the rides that they consider must dos and the rides they can skip and the system generates a minute by minute plan with projected wait times to let users maximize their day at the parks.

Currently the application only handles Universal Studios Florida and Islands of Adventure (which happen to be my favorite parks) but I'm working on collecting the data that I'll need for other parks, including Disney and Universal Hollywood.

## Technical Details

### Systems

Parktimizer consists of a React frontend and a Python/Tensorflow backend.

The core of the project is a deep learning model trained on past wait time data on my GTX 1060. In addition to the time data, the model also incorporates weather features as weather and temperature also has an effect on wait times.

### Algorithms

In order to create an optimal path, we would reduce this problem down to the Traveling Salesman Problem. Since a true solution would require factorial time and the amount of "cities" is on the order of 15-20, a brute force algorithm is impractical, especially when you consider that at each "stop", we'd need to query our ML model to get a prediction.

So I have implemented [Christofides algoritm](https://en.wikipedia.org/wiki/Christofides_algorithm) as an approximation to the brute force algorithm. O(n^4) is reasonable considering an n of 15 or 20.

## Progress

I initially intended to implement this using Tensorflow 1.0 but with 2.0 released recently, I'm learning 2.0 so that I can implement it in that.