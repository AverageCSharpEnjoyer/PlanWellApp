import { QueryClient, QueryClientProvider } from 'react-query';
import { routes } from '../router/Routes';
import { useRoutes } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {useRoutes(routes)}
    </QueryClientProvider>
  )
}

export default App
