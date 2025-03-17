export const useCustomFetch: typeof useFetch = (request, opts) => {
  const config = useRuntimeConfig();
  const baseUrl = import.meta.server
    ? config.apiBaseServer
    : config.public.apiBaseClient;
  console.log(baseUrl);
  return useFetch(request, { baseURL: baseUrl, ...opts });
};
