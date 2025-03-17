export const useCustomFetch: typeof useFetch = (request, opts) => {
  const config = useRuntimeConfig();
  const baseUrl = import.meta.server
    ? config.public.apiBaseServer
    : config.public.apiBaseClient;
  return useFetch(request, { baseURL: baseUrl, ...opts });
};
