import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { SearchBox } from "../SearchBox";
import { SpecialOffer } from "../SpecialOffer";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="navbar-wrapper">
      <header>
        <SpecialOffer />
        <SearchBox />
      </header>

      <nav>
        <ul>
          <li>
            <a href="{{ route('welcome') }}">Home</a>
          </li>
          <li>
            <a href="{{ route('collections.categories') }}">Categories</a>
          </li>
          <li>
            <a href="{{ route('collections.featured') }}">Featured</a>
          </li>
          <li>
            <a href="{{ route('about') }}">About Us</a>
          </li>
        </ul>

        <ul>
          <span class="cart-icon mx-6 cursor-pointer">
            Cart<i class="ti-bag h-6 ml-1"></i>
          </span>
          {/* @if (Route::has('login')) */}
          <div class="space-x-4 self-end">
            {/* @auth */}
            <a class="font-bold" href="{{ route('dashboard') }}">
              Username
            </a>
            <a
              href="{{ route('logout') }}"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Log out
            </a>

            <form
              id="logout-form"
              action="{{ route('logout') }}"
              method="POST"
              style="display: none;"
            >
              {/* @csrf */}
            </form>
            {/* @else */}
            <a
              href="{{ route('login') }}"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Log in
            </a>

            {/* @if (Route::has('register')) */}
            <a
              href="{{ route('register') }}"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Register
            </a>
            {/* @endif
        @endauth */}
          </div>
          {/* @endif */}
        </ul>
      </nav>

      {/* <div>// @livewire('shopping-cart')</div> */}
    </div>
  );
});
