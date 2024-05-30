import type { IBreadcrumbs } from './router/router.types';

declare module 'vue-router' {
  interface RouteMeta {
    layout: ReturnType<typeof defineComponent>;
    breadcrumbs: IBreadcrumbs[];
  }
}
