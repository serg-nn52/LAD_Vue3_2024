import { useFetch } from '@/composables/useFetch';
import { defineStore, storeToRefs } from 'pinia';
import { computed, ref, watchEffect } from 'vue';
import { useCounterStore } from './counter';

interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const usePostsStore = defineStore('posts', () => {
  const counterStore = useCounterStore();

  const { count } = storeToRefs(counterStore);

  const posts = ref<IPost[]>([]);
  const error = ref<unknown>({});
  const isLoading = ref(false);
  const isShowAll = ref(false);

  const visiblePosts = computed(() => {
    return isShowAll.value
      ? posts.value.map((el) => ({ ...el, title: el.title + count.value }))
      : posts.value.filter((el, i) => {
          if (i < 10) return el;
        });
  });

  const togglePosts = () => (isShowAll.value = !isShowAll.value);

  const fetchPosts = () => {
    const {
      data: fetchedPosts,
      error: fetchedError,
      isLoading: fetchedIsLoading,
    } = useFetch<IPost[]>(
      'posts',
      'get',
      {},
      {
        _page: '1',
        _limit: 100,
      },
    );
    watchEffect(() => {
      if (fetchedPosts.value) posts.value = fetchedPosts.value;
      error.value = fetchedError.value;
      isLoading.value = fetchedIsLoading.value;
    });
  };

  return { posts, error, isLoading, fetchPosts, visiblePosts, isShowAll, togglePosts };
});
