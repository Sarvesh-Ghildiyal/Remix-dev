// Configuration for v1 routing
import { createRoutesFromFolders } from '@remix-run/v1-route-convention';
export default {
  tailwind: true,
  postcss: true,
  routes(defineRoutes) {
    return createRoutesFromFolders(defineRoutes);
  },
};
