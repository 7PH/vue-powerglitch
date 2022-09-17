import { mockAnimationsApi } from 'jsdom-testing-mocks';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { vGlitch } from '../src/lib/vGlitch';
import { PowerGlitchOptions, RecursivePartial } from 'powerglitch';

try {
    mockAnimationsApi();
} catch (error) {
    console.warn('Unable to mock Web Animation API');
}

const BASE_OPTIONS = {
    timing: {
        easing: 'ease-in-out',
    },
};

const mountGlitchElement = (options: RecursivePartial<PowerGlitchOptions>) => {
    return mount({
        directives: { 'glitch': vGlitch },
        template: `
            <div>
                Hello <span class='glitched-element' v-glitch='${JSON.stringify(options)}'>World</span>!
            </div>
        `,
    });
};

describe('v-glitch', () => {
    it('be exported', async () => {
        expect(vGlitch).toBeTruthy();
    });
    
    it('does glitch element', async () => {
        const wrapper = mountGlitchElement({ ...BASE_OPTIONS, slice: { count: 3 } });
        expect(wrapper.findAll('div > div > div > .glitched-element').length).toBe(4);
    });
});
