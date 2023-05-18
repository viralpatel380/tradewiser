<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex flex-wrap items-center gap-6 sm:flex-nowrap mt-4">
      <h1 class="text-base font-semibold leading-7 text-gray-900">Portfolio</h1>
      <div
        class="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7"
      >
        <a href="#" class="text-indigo-600">Holdings</a>
        <a href="#" class="text-gray-700">Positions</a>
        <span class="text-gray-700 flex"
          >T-Factor
          <span class="ml-2"
            ><SparklesIcon
              class="-ml-1.5 h-4 w-4 text-yellow-400"
              aria-hidden="true"
            /> </span
        ></span>
      </div>

      <div
        v-if="new Date().getTime() < new Date(st).getTime() + 24 * 60 * 60 * 1000 && z"
        class="whitespace-nowrap px-2 py-2 ml-auto flex items-center text-sm flex text-gray-500"
      >
        <span
          ><CloudArrowUpIcon class="mr-1.5 h-5 w-5" aria-hidden="true"
        /></span>
        Synced with zerodha kite at {{ formatAMPM(new Date(st)) }}    <button type="button" class="rounded bg-white ml-3 px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex items-center justify-center" @click="sync()">Sync</button>

      </div>
      <a
        v-else
        href="https://kite.zerodha.com/connect/login?v=3&api_key=qdfidc6fduyq3mru"
        class="ml-auto flex items-center gap-x-1 rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
      >
        <ArrowPathIcon class="-ml-1.5 h-4 w-4" aria-hidden="true" />
        Sync with Zerodha Kite
      </a>
    </div>

    <div class="mt-3">
      <!-- <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Transactions</h1>
        <p class="mt-2 text-sm text-gray-700">A table of placeholder stock market data that does not make any sense.</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Export</button>
      </div>
    </div> -->
      <div v-if="data" class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Exchange
                  </th>
                  <!-- <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">Company</th> -->
                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Share
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    T+1 Quantity
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Average Price
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Price
                  </th>

                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Net amount
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Net Change
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Day Change %
                  </th>
                  <th
                    scope="col"
                    class="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0"
                  >
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="transaction in JSON.parse(data).data" :key="transaction.id">
                  <td
                    class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0"
                  >
                    {{}}
                    <span
                      class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                      :class="
                        transaction.exchange === 'NSE'
                          ? 'bg-orange-50 text-orange-600 ring-orange-500/10'
                          : 'bg-cyan-50 text-cyan-600 ring-cyan-500/10'
                      "
                      >{{ transaction.exchange }}</span
                    >
                  </td>
                  <!-- <td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">{{ transaction.company }}</td> -->
                  <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                    {{ transaction.tradingsymbol }}
                  </td>
                  <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                    {{ transaction.quantity }}
                  </td>
                  <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                    {{ transaction.t1_quantity }}
                  </td>
                  <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                    {{ transaction.average_price }}
                  </td>
                  <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                    {{ transaction.close_price }}
                  </td>
                  <td
                    class="whitespace-nowrap px-2 py-2 text-sm text-gray-500"
                    :class="
                      transaction.pnl > 0 ? 'text-green-500' : 'text-red-500'
                    "
                  >
                    {{ transaction.pnl.toFixed(2) }}
                  </td>
                  <td
                    class="whitespace-nowrap px-2 py-2 text-sm text-gray-500"
                    :class="
                      (transaction.close_price / transaction.average_price) *
                        100 -
                        100 >
                      0
                        ? 'text-green-500'
                        : 'text-red-500'
                    "
                  >
                    {{
                      (
                        (transaction.close_price / transaction.average_price) *
                          100 -
                        100
                      ).toFixed(2)
                    }}
                    %
                  </td>
                  <td
                    class="whitespace-nowrap px-2 py-2 text-sm text-gray-500"
                    :class="
                      transaction.day_change_percentage > 0
                        ? 'text-green-500'
                        : 'text-red-500'
                    "
                  >
                    {{ transaction.day_change_percentage.toFixed(2) }}
                  </td>
                  <!-- <td class="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit<span class="sr-only">, {{ transaction.id }}</span></a
                  >
                </td> -->
                </tr>
              </tbody>

            </table>
           <pre>
            
           </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon } from "@heroicons/vue/20/solid";
import { ArrowPathIcon } from "@heroicons/vue/20/solid";
import { SparklesIcon } from "@heroicons/vue/24/solid";


const transactions = [
  {
    id: "AAPS0L",
    company: "Chase & Co.",
    share: "CAC",
    commission: "+$4.37",
    price: "$3,509.00",
    quantity: "12.00",
    netAmount: "$4,397.00",
  },
];

const z = useCookie("z", { watch: true });
const st = useCookie("st", { watch: true });

// https://api.ghosters.tech
let { data } = await useFetch(
  `https://api.ghosters.tech/holdings?t=${z._rawValue}`,
  {
    headers: {
      "x-token": z,
    },
    mode: "no-cors",
    method: "GET",
  }
);

async function sync(){
  data = await useFetch(
  `https://api.ghosters.tech/holdings?t=${z._rawValue}`,
  {
    headers: {
      "x-token": z,
    },
    mode: "no-cors",
    method: "GET",
  }
);

}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
</script>
