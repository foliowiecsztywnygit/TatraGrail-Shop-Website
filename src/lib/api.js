const API_BASE_URL = (() => {
  const configuredUrl = import.meta.env.VITE_API_BASE_URL?.trim()
  if (configuredUrl) return configuredUrl
  if (import.meta.env.DEV) return 'http://localhost:3000'
  if (typeof window !== 'undefined') return window.location.origin
  return 'http://localhost:3000'
})()
const ADMIN_TOKEN_KEY = 'tatragrail-admin-token';

const getFirstErrorMessage = (payload) => {
  if (!payload?.errors || typeof payload.errors !== 'object') return null;
  return Object.values(payload.errors).find((value) => typeof value === 'string' && value.trim()) || null;
};

export const getApiBaseUrl = () => API_BASE_URL.replace(/\/$/, '');

export const getAdminToken = () => localStorage.getItem(ADMIN_TOKEN_KEY);
export const setAdminToken = (token) => localStorage.setItem(ADMIN_TOKEN_KEY, token);
export const clearAdminToken = () => localStorage.removeItem(ADMIN_TOKEN_KEY);

const buildHeaders = (extraHeaders = {}, includeAdmin = false) => {
  const headers = {
    ...extraHeaders
  };

  if (includeAdmin) {
    const token = getAdminToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  return headers;
};

export async function apiFetch(path, options = {}) {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    ...options,
    headers: buildHeaders(options.headers, options.includeAdmin)
  });

  let payload = null;
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    payload = await response.json();
  } else {
    payload = await response.text();
  }

  if (!response.ok) {
    const fallbackMessage =
      response.status === 401 ? 'Brak autoryzacji.' :
      response.status === 404 ? 'Nie znaleziono zasobu.' :
      response.status === 409 ? 'Konflikt danych.' :
      response.status >= 500 ? 'Blad serwera.' :
      'Request failed';
    const error = new Error(payload?.error || payload?.message || getFirstErrorMessage(payload) || fallbackMessage);
    error.payload = payload;
    error.status = response.status;
    throw error;
  }

  return payload;
}

export async function apiJson(path, method = 'GET', body, options = {}) {
  return apiFetch(path, {
    method,
    body: body === undefined ? undefined : JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    includeAdmin: options.includeAdmin
  });
}

export async function apiFormData(path, formData, options = {}) {
  return apiFetch(path, {
    method: options.method || 'POST',
    body: formData,
    includeAdmin: options.includeAdmin
  });
}
