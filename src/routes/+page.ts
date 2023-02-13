import getter from '$lib/assets/images/presentation';

export const load = async () => ({
  ...await getter()
});
