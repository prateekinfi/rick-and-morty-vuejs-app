import { shallowMount } from '@vue/test-utils'
import SelectedFilters from '@/components/Filters/SelectedFilters.vue'

describe('selectedFilter.vue', () => {
  it('renders filter from selected filter list', () => {
    
    const wrapper = shallowMount(SelectedFilters, {
      data(){
        return {
        filterList : [{"filterType":"gender","name":"Female"}]
      }}
    });
    expect(wrapper.find('div.selected-filter').html()).toMatch('Female');
    expect(wrapper.find('div.cross').html()).toMatch('X');

  })
  it('removes selected filter list heading if list is empty', () => {
    
    const wrapper = shallowMount(SelectedFilters, {
      data(){
        return {
        filterList : []
      }}
    });
    expect(wrapper.find('h3').exists()).toBeFalsy();

  })
})
