import toast from 'react-hot-toast';

const displayError = (error: { message: string }) => {
  toast.error(`Oops! ${error.message}`, {
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
    },
  });
};

const convertItems = (items: any[]) => {
  return items.map(({ id, created_at, item }) => ({
    id,
    created_at,
    ...item
  }));
};

export { displayError, convertItems }