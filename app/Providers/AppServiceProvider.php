<?php

namespace App\Providers;

use App\Models\GeneralSettings;
use Illuminate\Support\ServiceProvider;
use View;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $general_settings = GeneralSettings::first();
        View::share(['general_settings' => $general_settings]);
    }
}
