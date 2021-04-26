import { useEffect } from 'react';
import { getLaunches } from './actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const dispatch = useDispatch();

  useEffect (() => {
    const fetchLaunches = async () => {
      const launches = await axios("https://api.spacexdata.com/v3/launches");
      console.log(launches);
      dispatch(getLaunches(launches));
    };
    fetchLaunches();
  }, [dispatch]);

  const allLaunches = useSelector(state => state);
  console.log(allLaunches);

  return allLaunches;
};