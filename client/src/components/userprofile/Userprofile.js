import react from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserProfile() {
  return (
    <div>
      <div>
        <div class="p-16">
          <div class="p-8 bg-white border-2 border-gray-300 shadow mt-24">
            <div class="grid grid-cols-1 md:grid-cols-3">
              <div class="relative">
                <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <img className="h-48 w-48 rounded-full" alt="jayratiya" />
                </div>
              </div>

              <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center"></div>
            </div>

            <div class="mt-20 text-center pb-12">
              <h1 class="text-4xl font-medium text-gray-700 uppercase">
                jay ratiya<span class="font-light text-gray-500"></span>
              </h1>
              <p class="font-light text-gray-600 mt-3 lowercase">20itubs157</p>
            </div>
            <div className="content-center ">
              <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
