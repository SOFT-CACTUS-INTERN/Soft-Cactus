<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>


# What you should know
### In a nutshell :
- I made an **API** to send emails with **mailtrap** sandbox and to store them in the **data base**.
- I created the http request api in **routeAPI**, I run the server and I already connected the front end with the api using **axios**.
### Detailes :
- 90% of the repo was not used lol, all you need to know is this : <br> **In laravel** :
    - Laravel was used for the Contactbox component in react, in the contact page.
- to simplify I will put the steps I used :
    - I used mailtrap sandbox for the email sending. Just follow its documentation it is simple.
    - after creating an account in **mailtrap sandbox**, all you'll have to do is to configure the `.env` file
    - create a mailable classe : [TestMail.php](./emailSending/mailAPI/app/Mail/TestMAIL.php) (to set the subject, the view,and to accept the data from the front end to use it) `php artisan make:mail TestMAIL `
    - create the [view](./emailSending/mailAPI/resources/views/emails/contact.blade.php) You can modify the view how you like (view is the email that the user views / sees)
    - Now you need a controller and the route / endpoint of the api
- in the [contactbox](./Cactus-Front/src/Components/ContactBox.jsx) component :
    -I used useState where I initialized my state formData wit ht the inputs
    - used a function with onChange to track the change in the values of each input and setFormData state
    - ! You Should Know that in react, you don't directly change, but create a new object and apply changes. That's why the spread operator {... X} was used to copy all the properties of the object into a new one. all this is a one line of code don't worry.
    - I used **axios** to link react with laravel
    - and don't forget to configure [cors.php](./emailSending/mailAPI/config/cors.php) to control which methodes to accept, endpoints etc. (if you don't have it to publish it with `php artisan config:publish` and choose cors)
    - to alert the user with success I used **toastify norifications**
    - for the **Data base** that's where models come into use :
    - create a (model)[./emailSending/mailAPI/app/Models/Contact.php] `php artisan make:model Contact`, set it up $fillable for mass assigning.
    - migrate the DB `php artisan migrate`
    - in (api.php)[./emailSending/mailAPI/routes/api.php] let the DB save the data
    - You can use `php artisan tinker` `App\Models\Contact::all();` to see the data of the Contact DB
 
  
      
