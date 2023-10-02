<x-mail::message>
# Hi {{ $user->name }}!

Thank you for joining our waitlist. Please click the button below to confirm your email address:

<x-mail::button :url="$confirmationLink">
Confirm Email Address
</x-mail::button>

Or copy and paste this link into your browser:
 
{{ $confirmationLink }}

If you did not sign up for our waitlist, please ignore this email.

Thank you,  
The {{ config('app.name') }} Team
</x-mail::message>
