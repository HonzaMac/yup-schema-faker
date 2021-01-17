import { createApp } from 'vue'
import App from './App.vue'
import Wrapper from './components/Wrapper.vue'
import Code from './components/Code.vue'
import Preview from './components/Preview.vue'
import FakeButton from './components/FakeButton.vue'
import CopyButton from './components/CopyButton.vue'
import './index.css'
import 'object-visualizer/dist/index.css'

const app = createApp(App)
app.component('Wrapper', Wrapper)
app.component('Code', Code)
app.component('Preview', Preview)
app.component('FakeButton', FakeButton)
app.component('CopyButton', CopyButton)
app.mount('#app')
