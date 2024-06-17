import { api } from '@/api';
import { ref } from 'vue';
type TMethod = 'get' | 'post';

export function useFetch<T>(
  url: string,
  method: TMethod = 'get',
  body?: unknown,
  params?: Record<string, string | number>,
  // params?:  { [key: string]: string | number },
) {
  const isLoading = ref(false);
  const data = ref<T | null>(null);
  const error = ref<unknown | null>(null);

  //вариант без аксиос
  // (async () => {
  //   isLoading.value = true;
  //   try {
  //     const fetchingData = await fetch(url);
  //     data.value = await fetchingData.json();
  //   } catch (e: unknown) {
  //     error.value = e;
  //   } finally {
  //     isLoading.value = false;
  //   }
  // })();

  // вариант с аксиос
  if (method === 'get') {
    (async () => {
      isLoading.value = true;
      try {
        const { data: fetchingData } = await api.get(url, {
          params,
        });
        data.value = fetchingData;
      } catch (e: unknown) {
        error.value = e;
      } finally {
        isLoading.value = false;
      }
    })();
  }

  if (method === 'post') {
    (async () => {
      isLoading.value = true;
      try {
        const { data: fetchingData } = await api.post(url, { body });
        data.value = fetchingData;
      } catch (e: unknown) {
        error.value = e;
      } finally {
        isLoading.value = false;
      }
    })();
  }

  return { data, isLoading, error };
}
