---
path: "/laravel-many-to-many-relationship"
date: "2019-01-16"
title: "Laravel many-to-many relationship"
author: "Szymon Radosz"
tags: [{ key: "laravel", value: "Laravel", identifier: 3 }]
postDir: "2019-02-16-laravel-many-to-many-relationship"
image: ./PostImg1.jpg
---

<div class="blog-post__container">
<p>I’m a big fan of Eloquent and Laravel framework as well. Eloquent gives you a lot of opportunities to write really short and clean database queries.</p>

<p>Today I want to present many-to-many database relation in Laravel. I don’t like fake examples when I read some articles, so I present you code from my side project <a href="http://wyjechani.pl/" title="wyjechani.pl" target="_blank">wyjechani.pl</a> – which is application present travel offers where users votes for favourite offers.</p>

<img src="./images/article1.png" />

<p>User voting is many-to-many relation in that example. We have many user accounts on the website and single offer can have many votes from different users.</p>

<p>We need an additional database table to store single votes. We have to link user id with offer id. There is no vote range – user votes for offers which means we increase count of votes.</p>

<p>We need two models to represent User and Offer.</p>

<span class="blog-post__file--name"><i>app/Offer.php</i></span>

<img src="./images/article2.png" />

<span class="blog-post__file--name"><i>app/User.php</i></span>

<img src="./images/article3.png" />

<p>As you can see both of models belongsToMany themselves. Second parameter ‘offer_user’ is name of table which store that relation and we also declare ‘offer_id’ and ‘user_id’ which are names of columns in that table.</p>

<p>Now we need to create that table. We run php artisan make:migration create_offer_user_table and added our parameters in that migration. Our migration file should look like:</p>

<img src="./images/article4.png" />

<p>Now we can run php artisan migrate which adds new table to our database.</p>

<p>Now we can create VotesController with store method which get vote_id as parameter. In that method we check if the user is signed in. We find offer with vote_id and if it’s unique then we can use method declare in Offer model called users() and attach user id. It creates a record in our offer_user table. attach() is build in method to add relation, you can use detach() to remove specific relation as well.</p>

<p>Ok, that’s all, but you can ask yourself: ok, that’s awesome, but show me some advantages of that relation. Why should I use that?</p>

<p>The biggest advantage of that relation is our query to get offer data with votes and users which voted for specific offers. You can use a query like that:</p>

<img src="./images/article5.png" />

<p>Writing custom queries with raw SQL, a lot of join() methods can be really awful and can make your code dirty. Relations help you write understandable queries for other people. Eloquent is really great ORM and we should use that in an efficient way.</p>

</div>
