<x-mail::message>
# Welcome {{ $user->name }}!

Thank you for confirming your desire to join our waitlist. We're excited to have you on board!

Here's a quick recap of your details:
- **Email:** {{ $user->email }}
@if($user->name)
- **Name:** {{ $user->name }}
@endif

We'll keep you updated with any news or updates related to our platform. In the meantime, feel free to explore our website or reach out if you have any questions.

<x-mail::button :url="$site">
Visit Our Website
</x-mail::button>

Thanks again for your interest in {{ config('app.name') }}!

Warm regards,  
The {{ config('app.name') }} Team
</x-mail::message>
