import {useState, useEffect, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {loadItem} from '../../../../../actions/shipments/index';
import {wait} from '../../../../../lib/healper';

// List Item
export function useLoadItem(url) {
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onLoadItem = useCallback(async () => {
    setLoading(true);
    try {
      const response = await dispatch(loadItem(url));
      setResponse(response);
    } catch (e) {}
    // setLoading(false);
    wait(1000).then(() => setLoading(false));
  }, [dispatch, url]);

  useEffect(() => {
    onLoadItem();
  }, [onLoadItem]);

  return {response, isLoading, onLoadItem};
}
