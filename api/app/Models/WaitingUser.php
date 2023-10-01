<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WaitingUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'name',
        'confirmed',
        'confirmation_token',
        'invited_at',
    ];

    protected $casts = [
        'confirmed' => 'boolean',
    ];

    public function scopeConfirmed($query)
    {
        return $query->where('confirmed', true);
    }

    public function scopeUnconfirmed($query)
    {
        return $query->where('confirmed', false);
    }

    public function scopeInvited($query)
    {
        return $query->whereNotNull('invited_at');
    }

    public function scopeNotInvited($query)
    {
        return $query->whereNull('invited_at');
    }
}
