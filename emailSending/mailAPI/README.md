<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## what you should know
# in a nutshell :
I made API to send emails with mailtrap sandbox and to store them in the data base.
I created the http request api in routeAPI, I run the server and I already connected the front end with the api using axios.

90% of the repo was not used lol, all you need to know is this :
Laravel was used for the Contactbox component in react, in the contact page.
to simplify I will put the steps I used :
I used mailtrap sandbox for the email sending. Just follow its documentation it is simple.
after creating an account in mailtrap sandbox, all you'll have to do is to configure the `.env` file
create a mailable classe : [TestMail.php](./emailSending/mailAPI/app/Mail/TestMAIL.php) (to set the subject, the view,and to accept the data from the front end to use it) 
create the [view](./emailSending/mailAPI/resources/views/emails/contact.blade.php) You can modify the view how you like (view is the email that the user views / sees)
Now you need a controller and the route / endpoint of the api
