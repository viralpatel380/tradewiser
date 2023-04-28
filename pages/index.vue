<template>
<div class="">
    <div class="mx-auto max-w-7xl rounded-md px-4 sm:px-6 lg:px-8">
        
       
           
        <dl class="mx-auto grid  border 	rounded-md mt-3 grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">

            <div v-for="(stat, index) in stats" :key="stat.name" 
            :class="[index === 0 ? 'rounded-tl-md  rounded-bl-md ' : '', 
            index+1 === stats.length ? ' rounded-tr-md  rounded-br-md ' : '']"
            class="flex flex-wrap   items-baseline  justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
                <dt class="text-sm font-medium leading-6 text-gray-500">{{ stat.name }}</dt>
                <dd :class="[stat.changeType === 'negative' ? 'text-rose-600' : 'text-green-700', 'text-xs font-medium']">{{ stat.change }}</dd>
                <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">{{ stat.value }}</dd>
            </div>
        </dl>
    </div>
</div>
</template>
     

<script>

export default {

    data() {
        return {
            stats: [{
                    name: 'Deposit',
                    value: '₹28,000',
                    change: '+4.75%',
                    changeType: 'positive'
                },
                {
                    name: 'Profit',
                    value: '₹4,600',
                    change: '+1.09',
                    changeType: 'positive'
                },
                {
                    name: 'Charges',
                    value: '₹8,624.25',
                    change: '-1.39%',
                    changeType: 'negative'
                },
                {
                    name: 'Net Realised Profit',
                    value: '₹-4024.25',
                    change: '-10.9%',
                    changeType: 'negative'
                },
            ],
        }
    },

}
</script>
