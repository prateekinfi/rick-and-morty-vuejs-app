import { shallowMount } from '@vue/test-utils'
import CharacterTile from '@/components/Character/CharacterTile.vue'

describe('CharacterTile.vue', () => {
    it('renders character details', () => {

        const characterData = { "id": 188, "name": "Karen Entity", "status": "Alive", "species": "Alien", "type": "Unknown-nippled alien", "gender": "Female", "origin": { "name": "Unity's Planet", "url": "https://rickandmortyapi.com/api/location/28" }, "location": { "name": "Unity's Planet", "url": "https://rickandmortyapi.com/api/location/28" }, "image": "https://rickandmortyapi.com/api/character/avatar/188.jpeg", "episode": ["https://rickandmortyapi.com/api/episode/14"], "url": "https://rickandmortyapi.com/api/character/188", "created": "2017-12-29T19:10:16.171Z" }

        const wrapper = shallowMount(CharacterTile, {
            propsData: {
                character: characterData
            }
        });
        expect(wrapper.find('h3.name').html()).toMatch('Karen Entity');
        expect(wrapper.find('li.status span.property-value').html()).toMatch('Alive');


    })

    
})
