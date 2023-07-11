const mapping: Record<string, string> = {
  companies: 'company',
  tickets: 'ticket',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
