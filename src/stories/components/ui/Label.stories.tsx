import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '../../../components/ui';

const LabelStories: ComponentMeta<typeof Label> = {
    title: 'Components/UI/Label',
    component: Label,
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color' },
        size: { control: 'select' }
    }
}

const Template: ComponentStory<typeof Label> = (args) => <Label { ...args } />;

export const Basic = Template.bind({});

Basic.args = {
    size: 'normal',
    text: 'Basic'
}

export const AllCapitalizations = Template.bind({});

AllCapitalizations.args = {
    allCapitalize: true,
    text: 'all capitalizations'
}

export const Secondary = Template.bind({});

Secondary.args = {
    color: 'secondary',
    text: 'Secondary'
}

export const Tertiary = Template.bind({});

Tertiary.args = {
    color: 'tertiary',
    text: 'Tertiary'
}

export const CustomBackgroundColor = Template.bind({});

CustomBackgroundColor.args = {
    backgroundColor: '#000000',
    fontColor: '#FFFFFF',
    size: 'h1',
    text: 'Custom Background Color'
}

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
    fontColor: '#5517AC',
    size: 'h1',
    text: 'Custom Font Color'
}

export default LabelStories;