<script setup lang="ts">
import { ref } from 'vue'

interface Integration {
  id: string
  name: string
  status: 'active' | 'inactive'
  lastRun: string
}

const currentPage = ref(1)
const itemsPerPage = 9
const totalItems = ref(18)

const mockIntegrations: Integration[] = [
  { id: '1', name: 'Stripe Integration', status: 'active', lastRun: '2024-03-20T10:30:00Z' },
  { id: '2', name: 'PayPal Integration', status: 'active', lastRun: '2024-03-19T15:45:00Z' },
  { id: '3', name: 'Google Analytics', status: 'inactive', lastRun: '2024-03-18T08:20:00Z' },
  { id: '4', name: 'Salesforce', status: 'active', lastRun: '2024-03-17T14:15:00Z' },
  { id: '5', name: 'Mailchimp', status: 'inactive', lastRun: '2024-03-16T11:30:00Z' },
  { id: '6', name: 'Slack', status: 'active', lastRun: '2024-03-15T16:45:00Z' },
  { id: '7', name: 'Zendesk', status: 'active', lastRun: '2024-03-14T09:20:00Z' },
  { id: '8', name: 'HubSpot', status: 'inactive', lastRun: '2024-03-13T13:10:00Z' },
  { id: '9', name: 'AWS S3', status: 'active', lastRun: '2024-03-12T17:25:00Z' },
]

const integrations = ref(mockIntegrations)

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Integrações</h1>
        <button class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Nova Integração
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="integration in integrations" :key="integration.id"
          class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg font-semibold text-gray-900">{{ integration.name }}</h3>
            <span :class="{
              'px-3 py-1 rounded-full text-sm font-medium': true,
              'bg-green-100 text-green-800': integration.status === 'active',
              'bg-gray-100 text-gray-800': integration.status === 'inactive'
            }">
              {{ integration.status === 'active' ? 'Ativado' : 'Desativado' }}
            </span>
          </div>
          
          <div class="text-sm text-gray-600">
            <p>Última execução:</p>
            <p class="font-medium">{{ formatDate(integration.lastRun) }}</p>
          </div>
          
          <div class="mt-4 flex justify-end space-x-2">
            <button class="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <span class="sr-only">Configurar</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Paginação -->
      <div class="mt-8 flex justify-center">
        <nav class="flex items-center space-x-2">
          <button
            :disabled="currentPage === 1"
            class="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            @click="currentPage--"
          >
            Anterior
          </button>
          <span class="px-4 py-2 text-gray-700">
            Página {{ currentPage }} de {{ Math.ceil(totalItems / itemsPerPage) }}
          </span>
          <button
            :disabled="currentPage >= Math.ceil(totalItems / itemsPerPage)"
            class="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            @click="currentPage++"
          >
            Próxima
          </button>
        </nav>
      </div>
    </div>
  </div>
</template> 