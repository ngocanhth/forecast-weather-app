import React, { useEffect, useMemo } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import openweathermapApi from '../../api/openweathermapApi';

Sidebar.propTypes = {
    
};



function Sidebar(props) {
     const location = useLocation();

   //  const queryParams = queryString.parse(location.search);
  
    let queryParams = useMemo(() => {
      const params = queryString.parse(location.search);

      console.log(params);
  
      return {
        ...params,
        // _page: Number.parseInt(params._page) || 1,
        // _limit: Number.parseInt(params._limit) || 12,
        // _sort: params._sort || 'salePrice:ASC',
        // isPromotion: params.isPromotion === 'true',
        // isFreeShip: params.isFreeShip === 'true',
        q: 'Ha Noi'
      };
    }, [location.search]);

    console.log(queryParams);

    useEffect(() => {
        (async () => {
            try {
                const response = await openweathermapApi.getCityWeather({q: 'Ha Noi'});
                console.log("response", response);
            } catch (error) {
                console.log('Failed to fetch  data weather: ', error);
            }
        })()
    }, [])


   
//   useEffect(() => {
//     (async () => {
//       try {

//         const response = await productApi.getAll({_page: 1, _limit: 12});
//         // console.log({response});

//         // console.log('Khi load trang lan dau  và change params filter se la: ',filters);

//         const { data, pagination } = await productApi.getAll(queryParams);

//         console.log('Sau khi truyen new param filter se la: ', {pagination});

//         setProductList(data);
//         setPagination(pagination);
//       } catch (error) {
//         console.log('Failed to fetch product list: ', error);
//       }

//       setLoading(false);
//    })();
//   }, [queryParams]);
    return (
        <>

        </>
    
    );
}

export default Sidebar;    