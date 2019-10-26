---
path: "/laravel-share-method-between-classes-controllers"
date: "2019-07-28"
title: "Laravel – share method between controllers"
author: "Szymon Radosz"
tags: [{ key: "laravel", value: "Laravel", identifier: 3 }]
postDir: "2019-07-28-laravel-share-method-between-classes-controllers"
image: ./PostImg.jpg
---

<div class="blog-post__container">
<p>As you should know PHP is a language where one class can inherit from one other class(single inheritance). When you build your apps/projects you want to make that clean and easy to extend. You want to avoid copying code fragments between different elements. If you want to share a code fragment between different places in you app, there is an easy way to accomplish that – PHP Traits.</p>

<p>Let me introduce the example of Trait. I want to store all caught errors in my database. We’ll store user_id which meet the error, request name and message of error. We want to add that in all controllers methods in the catch block.</p>

<p>First we need model for ErrorLog.</p>

<span class="blog-post__file--name"><i>app/ErrorLog.php</i></span>

<pre>
namespace App;
use Illuminate\Database\Eloquent\Model;
class ErrorLog extends Model
{
    protected $table = 'error_logs';
    protected $fillable = ['user_id', 'request', 'message'];
}
</pre>

<p>We will store user_id, request and message in table called error_logs. </p>

<p>Our migration will be looks like:</p>

<pre>
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateErrorLogsTable extends Migration
{
    public function up()
    {
        Schema::create('error_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->default(0);
            $table->string('request')->default('');
            $table->text('message');
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('error_logs');
    }
}
</pre>

<p>Now we can create shared Trait inside app/Http/Traits called ErrorLogTrait.php</p>

<p>It contains one method storeErrorLog which gets user_id, requestName and message parameters and save error to database. </p>

<span class="blog-post__file--name"><i>app/Http/Traits/ErrorLogTrait.php</i></span>

<pre>
namespace App\Http\Traits;
use App\ErrorLog;
trait ErrorLogTrait {
public function storeErrorLog($user_id, $requestName, $message) {
       $user_id = $user_id;
       $requestName = $requestName;
       $message = $message;
        try{
            $errorLog = new ErrorLog();
            $errorLog->user_id = $user_id;
            $errorLog->request = $requestName;
            $errorLog->message = $message;
            $errorLog->save();
            return $errorLog;
        }catch(\Exception $e){
            return response()->json(['status' => 'ERR', 'result' => 'Oops something goes wrong.']);
        }
    }
}
</pre>

<p>Now when you created your Trait you can call it, as in the following example below.</p>

<pre>
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;
use App\Http\Traits\ErrorLogTrait;
class UserController extends Controller
{
    use ErrorLogTrait;

    protected function create(array $data)
    {
        try{
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'platform' => $data['platform'],
                'age' => 0,
                'lattitude' => 0,
                'longitude' => 0,
                'description' => '',
                'email_token' => base64_encode(\$data['email'])
            ]);

           $success['token'] =  $user->createToken('myapp')->accessToken;
           $success['name'] =  $user->name;

           return response()->json(['user' => $user, 'status' => 'OK']);
        }catch(\Exception $e){
           $this->storeErrorLog($user->id, '/register', $e->getMessage());

           return response()->json(['status' => 'ERR', 'result' => 'Can’t save user data.']);
        }
    }
}
</pre>

<p>When we include use ErrorLogTrait; we can call particular methods from that Trait using $this->method()</p>

<p>As you can see Traits are a great opportunity to share the same functionalities in multiple places. </p>

<p>Keep in mind that Traits like abstract classes can’t be instantiate of its own. </p>

</div>
