import { createApp, Directive, DirectiveBinding } from 'vue';
import App from './App.vue';
import FeatherIcon from './components/FeatherIcon.vue';
import './index.css';

type SetObserver = (el: Element, isMounted: boolean) => void;
const observeDirective: Directive = {
  mounted(el: Element, binding: DirectiveBinding<SetObserver>) {
    binding.value(el, true);
  },
  unmounted(el: Element, binding: DirectiveBinding<SetObserver>) {
    binding.value(el, false);
  },
};

const app = createApp(App);
app.directive('set-observer', observeDirective);
app.component('feather-icon', FeatherIcon);
app.mount('#app');
