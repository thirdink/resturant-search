import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer EclrI1JBR9fvpmCMEQ8jCuiXoUk-2Y_EVn7wWg9lLO1108K76sLvvs802_OfZKvgTanfwy-5P8yWTEGcmxM-9lg4w8Og1m2FHBtNUiVEZVGhMQNhDBPIwu4B1QYHX3Yx'
    }
});

