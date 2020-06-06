import LcButton from './components/button.vue'
import LcInput from './components/input.vue'
import LcDialog from './components/dialog.vue'
import LcSwitch from './components/switch.vue'
import LcRadio from './components/radio.vue'
import LcRadioGroup from './components/radioGroup.vue'
import LcCheckbox from './components/checkbox.vue'
import LcCheckboxGroup from './components/checkboxGroup.vue'
import LcForm from './components/form.vue'
import LcFormItem from './components/form-item.vue'
import './fonts/icon.css'
const components = [
  LcButton,
  LcDialog,
  LcInput,
  LcSwitch,
  LcRadio,
  LcRadioGroup,
  LcCheckbox,
  LcCheckboxGroup,
  LcForm,
  LcFormItem
]
function install (Vue) {
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
