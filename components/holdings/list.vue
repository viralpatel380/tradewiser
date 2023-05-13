<template>
    <div>
      <div class="flex flex-wrap items-center gap-6 sm:flex-nowrap mt-4  ">
        <h1 class="text-base font-semibold leading-7 text-gray-900">Portfolio</h1>
        <div class="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
          <a href="#" class="text-indigo-600">Holdings</a>
          <a href="#" class="text-gray-700">Positions</a>
          <span class="text-gray-700 flex ">T-Factor <span class="ml-2"><SparklesIcon class="-ml-1.5 h-4 w-4 text-yellow-400" aria-hidden="true" /> </span></span>
        </div>
        <a href="https://kite.zerodha.com/connect/login?v=3&api_key=qdfidc6fduyq3mru"   class="ml-auto flex items-center gap-x-1 rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
          <ArrowPathIcon class="-ml-1.5 h-4 w-4" aria-hidden="true" />
          Sync with Zerodha Kite
        </a>
      </div>

      <div class=" mt-3">
    <!-- <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Transactions</h1>
        <p class="mt-2 text-sm text-gray-700">A table of placeholder stock market data that does not make any sense.</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Export</button>
      </div>
    </div> -->
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Exchange</th>
                <!-- <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">Company</th> -->
                <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">Share</th>
                <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">Quantity</th>
                <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">T+1 Quantity</th>
                <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">Average Price</th>
                <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
                
                <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">Net amount</th>
                <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">Net Change</th>
                <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">Day Change %</th>
                <th scope="col" class="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="transaction in holdings" :key="transaction.id">
                <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">{{  }}
                    <span  class="inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  ring-1 ring-inset "
                    :class="transaction.exchange === 'NSE' ? 'bg-orange-50 text-orange-600 ring-orange-500/10' : 'bg-cyan-50 text-cyan-600 ring-cyan-500/10'">{{ transaction.exchange }}</span>
                </td>
                <!-- <td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">{{ transaction.company }}</td> -->
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{{ transaction.tradingsymbol }}</td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{{ transaction.quantity }}</td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{{ transaction.t1_quantity }}</td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{{ transaction.average_price }}</td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{{ transaction.close_price }}</td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500" :class="transaction.pnl > 0 ? 'text-green-500' : 'text-red-500'">{{ transaction.pnl.toFixed(2) }}</td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500" :class="(transaction.close_price / transaction.average_price * 100) - 100 > 0 ? 'text-green-500' : 'text-red-500'">{{ ((transaction.close_price / transaction.average_price * 100) - 100).toFixed(2) }} %</td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500" :class="transaction.day_change_percentage > 0 ? 'text-green-500' : 'text-red-500'">{{ transaction.day_change_percentage.toFixed(2) }}</td>
                <!-- <td class="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit<span class="sr-only">, {{ transaction.id }}</span></a
                  >
                </td> -->
              </tr>
            </tbody>
            <!-- <pre>{{ holdings }}</pre> -->
          </table>


        </div>
      </div>
    </div>
  </div>
    </div>
  </template>
  
  <script setup>
  import { ArrowPathIcon } from '@heroicons/vue/20/solid'
  import { SparklesIcon } from '@heroicons/vue/24/solid'
  const transactions = [
  {
    id: 'AAPS0L',
    company: 'Chase & Co.',
    share: 'CAC',
    commission: '+$4.37',
    price: '$3,509.00',
    quantity: '12.00',
    netAmount: '$4,397.00',
  },
 
]



     const   holdings = [
  {
    "tradingsymbol": "ADANIENT",
    "exchange": "BSE",
    "instrument_token": 131225348,
    "isin": "INE423A01024",
    "product": "CNC",
    "price": 0,
    "quantity": 6,
    "used_quantity": 0,
    "t1_quantity": 0,
    "realised_quantity": 6,
    "authorised_quantity": 0,
    "authorised_date": "2023-05-13 00:00:00",
    "authorisation": {
      
    },
    "opening_quantity": 6,
    "short_quantity": 0,
    "collateral_quantity": 0,
    "collateral_type": "",
    "discrepancy": false,
    "average_price": 1487.9,
    "last_price": 1964.8,
    "close_price": 1964.8,
    "pnl": 2861.399999999999,
    "day_change": 0,
    "day_change_percentage": 0
  },
  {
    "tradingsymbol": "ADANIPORTS",
    "exchange": "NSE",
    "instrument_token": 3861249,
    "isin": "INE742F01042",
    "product": "CNC",
    "price": 0,
    "quantity": 3,
    "used_quantity": 0,
    "t1_quantity": 0,
    "realised_quantity": 3,
    "authorised_quantity": 0,
    "authorised_date": "2023-05-13 00:00:00",
    "authorisation": {
      
    },
    "opening_quantity": 3,
    "short_quantity": 0,
    "collateral_quantity": 0,
    "collateral_type": "",
    "discrepancy": false,
    "average_price": 585.05,
    "last_price": 700,
    "close_price": 700,
    "pnl": 344.85000000000014,
    "day_change": 0,
    "day_change_percentage": 0
  },
  {
    "tradingsymbol": "BEL",
    "exchange": "NSE",
    "instrument_token": 98049,
    "isin": "INE263A01024",
    "product": "CNC",
    "price": 0,
    "quantity": 4,
    "used_quantity": 0,
    "t1_quantity": 0,
    "realised_quantity": 4,
    "authorised_quantity": 0,
    "authorised_date": "2023-05-13 00:00:00",
    "authorisation": {
      
    },
    "opening_quantity": 4,
    "short_quantity": 0,
    "collateral_quantity": 0,
    "collateral_type": "",
    "discrepancy": false,
    "average_price": 109,
    "last_price": 107.3,
    "close_price": 107.3,
    "pnl": -6.800000000000011,
    "day_change": 0,
    "day_change_percentage": 0
  },
  {
    "tradingsymbol": "GOLDBEES",
    "exchange": "BSE",
    "instrument_token": 151064324,
    "isin": "INF204KB17I5",
    "product": "CNC",
    "price": 0,
    "quantity": 5,
    "used_quantity": 0,
    "t1_quantity": 0,
    "realised_quantity": 5,
    "authorised_quantity": 0,
    "authorised_date": "2023-05-13 00:00:00",
    "authorisation": {
      
    },
    "opening_quantity": 5,
    "short_quantity": 0,
    "collateral_quantity": 0,
    "collateral_type": "",
    "discrepancy": false,
    "average_price": 43.16,
    "last_price": 51.93,
    "close_price": 51.93,
    "pnl": 43.850000000000016,
    "day_change": 0,
    "day_change_percentage": 0
  },
  {
    "tradingsymbol": "NIFTYBEES",
    "exchange": "NSE",
    "instrument_token": 2707457,
    "isin": "INF204KB14I2",
    "product": "CNC",
    "price": 0,
    "quantity": 4,
    "used_quantity": 0,
    "t1_quantity": 0,
    "realised_quantity": 4,
    "authorised_quantity": 0,
    "authorised_date": "2023-05-13 00:00:00",
    "authorisation": {
      
    },
    "opening_quantity": 4,
    "short_quantity": 0,
    "collateral_quantity": 0,
    "collateral_type": "",
    "discrepancy": false,
    "average_price": 191.33,
    "last_price": 200.26,
    "close_price": 200.26,
    "pnl": 35.719999999999914,
    "day_change": 0,
    "day_change_percentage": 0
  },
  {
    "tradingsymbol": "ONGC",
    "exchange": "BSE",
    "instrument_token": 128079876,
    "isin": "INE213A01029",
    "product": "CNC",
    "price": 0,
    "quantity": 25,
    "used_quantity": 0,
    "t1_quantity": 0,
    "realised_quantity": 25,
    "authorised_quantity": 0,
    "authorised_date": "2023-05-13 00:00:00",
    "authorisation": {
      
    },
    "opening_quantity": 25,
    "short_quantity": 0,
    "collateral_quantity": 0,
    "collateral_type": "",
    "discrepancy": false,
    "average_price": 143.18,
    "last_price": 165.5,
    "close_price": 165.5,
    "pnl": 557.9999999999998,
    "day_change": 0,
    "day_change_percentage": 0
  },
  {
    "tradingsymbol": "SPELS",
    "exchange": "BSE",
    "instrument_token": 132394500,
    "isin": "INE252A01019",
    "product": "CNC",
    "price": 0,
    "quantity": 100,
    "used_quantity": 0,
    "t1_quantity": 0,
    "realised_quantity": 100,
    "authorised_quantity": 0,
    "authorised_date": "2023-05-13 00:00:00",
    "authorisation": {
      
    },
    "opening_quantity": 100,
    "short_quantity": 0,
    "collateral_quantity": 0,
    "collateral_type": "",
    "discrepancy": false,
    "average_price": 67.85,
    "last_price": 43.59,
    "close_price": 43.54,
    "pnl": -2425.999999999999,
    "day_change": 0.05000000000000426,
    "day_change_percentage": 0.11483693155719858
  },
  {
    "tradingsymbol": "SUZLON",
    "exchange": "NSE",
    "instrument_token": 3076609,
    "isin": "INE040H01021",
    "product": "CNC",
    "price": 0,
    "quantity": 496,
    "used_quantity": 0,
    "t1_quantity": 0,
    "realised_quantity": 496,
    "authorised_quantity": 0,
    "authorised_date": "2023-05-13 00:00:00",
    "authorisation": {
      
    },
    "opening_quantity": 496,
    "short_quantity": 0,
    "collateral_quantity": 0,
    "collateral_type": "",
    "discrepancy": false,
    "average_price": 7.21129,
    "last_price": 8.25,
    "close_price": 8.25,
    "pnl": 515.20016,
    "day_change": 0,
    "day_change_percentage": 0
  },
  {
    "tradingsymbol": "TATASTEEL",
    "exchange": "NSE",
    "instrument_token": 895745,
    "isin": "INE081A01020",
    "product": "CNC",
    "price": 0,
    "quantity": 1,
    "used_quantity": 0,
    "t1_quantity": 0,
    "realised_quantity": 1,
    "authorised_quantity": 0,
    "authorised_date": "2023-05-13 00:00:00",
    "authorisation": {
      
    },
    "opening_quantity": 1,
    "short_quantity": 0,
    "collateral_quantity": 0,
    "collateral_type": "",
    "discrepancy": false,
    "average_price": 105.75,
    "last_price": 106.75,
    "close_price": 106.75,
    "pnl": 1,
    "day_change": 0,
    "day_change_percentage": 0
  }
]
  </script>

