require('./bootstrap');

import WhyYouNoWork from './WhyYouNoWork.vue';
import Vue from 'vue';

const ready = callback => {
    if (document.readyState !== 'loading') callback();
    else document.addEventListener('DOMContentLoaded', callback);
};

ready(() => {
    new Vue({
        el: '#app',
        render: h => h(WhyYouNoWork),
    });
});
