import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from "./Button";

export default {
    title:'Button/Example',
    component:Button,
} as ComponentMeta<typeof Button>
const Template:ComponentStory<typeof Button> = (args)=><Button {...args}/>


export const disabledButton = Template.bind({});
disabledButton.args={
    children:'I am a Button',
    disabled:true,
}

export const ClickableButton = Template.bind({});
ClickableButton.args={
    children:'i am a working button',
    onClick:()=>console.log('working')
}



