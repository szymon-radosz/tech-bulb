---
path: "/how-web-browser-executes-javascript"
date: "2018-11-12"
title: "How Web browser executes Javascript?"
author: "Szymon Radosz"
tags: [{ key: "javascript", value: "Javascript", identifier: 0 }]
postDir: "2018-11-12-how-web-browser-executes-javascript"
image: ./PostImg.jpg
---

<div class="blog-post__container">
<p>Most of us, developers worked with Javascript experienced situation when you struggle with your code and you don’t have any idea why it doesn’t work. You made a few changes and it still doesn’t work. After that you made more and more changes and none of the solutions was valid. You start to question your career, your life and you realize that the computer is stupid(computer don’t think, it only executes your commands and gives you results). So, you realized the computer doesn’t take responsibility of your stupidity. You realized that the only problem is in you, in your knowledge. You realized that you don’t know the subject well.</p>

<h3>How browser runs Javascript?</h3>
<p>If we take Google Chrome as a browser you need to know it has it’s own engine which is single-threaded- it executes it only run one operation at the time. The engine consists two main parts:
1. Call stack – stores information about actions which are currently running in the program, which method are executed etc.
2. Memory heap – It’s the place apart from the program code and the call stack and it’s reserved for memory allocation which you program needs. Your browser needs some portion of memory to execute code in it.</p>

<p>So the engine is mostly that 2 concepts: call stack and memory heap, but we have also additional Web API’s, event loop and callback queue in our browser.</p>

<p>Let’s understand how call stack works.</p>

<h3>What is the call stack?</h3>
<p>It shows where in the program we are. It’s similar to Hanoi tower. When we call the function it goes at the top of the call stack. When inside that function we call another function, now the second function is on top. If that second function returns a value it gives that value to first function and goes away from the call stack. After that first function is on top, when it returns a value, the call stack is empty. I think the best solution to understand that is to show an example.</p>

<pre>
function add(x,y){
  return x + y;
}

function myCustomFuction(a, b){
console.log("first");
let result = add(a,b);
console.log(result);
}
myCustomFuction(2,3);</pre>

<p>result in console will be: ‘first’, 5</p>

<p>First, we want to call myCustomFuction(2,3). It goes to the call stack. When we execute that function, we print ‘first’ and after that add(a,b) goes to the call stack above myCustomFuction(2,3). Then add(a,b) return value and it it stored in let result. add(a,b) goes away from the call stack. After that in myCustomFunction we display result variable value and call stack is now empty.</p>

<h3>What are Browser Web API’s?</h3>

<p>Web API’s contains Standard JavaScript APIs(DOM), HTML5 and other emerging APIs(localStorage etc.) and more.</p>

<p>You can check full list: <a href="https://developer.chrome.com/apps/api_other" target="_blank" title="additional API's">here</a></p>

<h3>What are callback queue and event loop?</h3>

<p>Javascript run-time own a queue which contains a list of operations to perform from Web API’s. The first operation which land on the queue is the first operation execute. When call stack is empty then event loop execute operations in the callback queue.</p>

<p>I created 3 call stack behavior examples, if you want, you can solve how results list will be look like. I added answers after Example 3 code.</p>

<p>Example 1:</p>

<pre>
function function1(){
function5();
console.log("first");
}

function function2(){
function3();
console.log("second")
function1();
}

function function3(){
console.log("third");
}

function function4(){
function2();
}

function function5(){
console.log("fifth");
}

function4();</pre>

<p>Example 2:</p>

<pre>
function function1(){
console.log("first");
}

function function2(){
console.log("second");
}

function function3(){
function1();
setTimeout(() => console.log('timeout'), 0);
function2();
}

function3();</pre>

<p>Example 3:</p>

<pre>
function crash(){
console.log("wait to crash");
crash();
}

crash();</pre>

<p>Example 1 answer:<br />
result: third, second, fifth, first</p>

<p>Example 2 answer:<br />
result: first, second, timeout</p>

<p>The question is why? Why, when we add 0s delay of timeout it display value last? First function3 goes to the call stack. After that function1 goes at the top of the call stack, display value and goes away. Then we execute setTimeout(), but it’s from Web API and it goes to callback queue. After that function3() goes to the call stack, display value and goes away. After that function3() made everything and also goes away from call stack and now when the call stack is empty, event loop start executing functions in callback queue, SetTimeout goes to call stack, display value and call stack is empty.</p>

<p>Example 3 answer:<br />
It adds itself at the top of the call stack all the time and after a moment(in my case browser display that 17229 times) browser return Uncaught RangeError: Maximum call stack size exceeded.</p>

<h3>Is Javascript hard to understand?</h3>

<p>For me Javascript is the technology which is really easy to start and really hard to master. When you start learning Javascript everything looks so pretty, you learn loop, statements, you output results in your browser and you think you need few weeks/months and you will be great developer. After a few weeks/month you start a big project and you realized that you make things intuitively(like in tutorials you saw), but real/commercial projects are something more than tutorial of building calculator in hundreds of frameworks. You realized that you have shortages in basic concepts. You can’t predict how your program will be executed. You try one concept if it doesn’t work you try something more and if it’s works you go to the next task, but you don’t know exactly why it works and previous code not. You are like the person in the meme below:</p>

<img src="./images/article1.jpg" />

<p>Someday you decided that there is no shortcuts and you need to understand how Javascript really works entirely. You google that and you visit my personal blog- where I write posts about things which I learned. I am also like the guy in the meme above really often and I think most of developers which I met struggle with that. There is an essence of programming- solving problems. You have to deal with things which not work at the start and all time learn new things.</p>
</div>
