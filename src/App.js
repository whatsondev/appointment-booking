import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='container max-w-[1920px] mx-auto'>
      <div className='container max-w-[1920px] mx-auto background'>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </div>
  );
}

export default App;
