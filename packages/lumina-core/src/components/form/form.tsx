import { useCallback, useState } from 'react';
import Form, { Input, Select, Checkbox, FormThemeProvider, Radio, Slider, SwitchList, TextArea, ImageSelect, MultiSelect } from 'react-form-component'
import { Button } from '../button/button';
import ReactModal from 'react-modal';

export const LumForm = () => {
    const [openForm, setOpenForm] = useState<boolean>(false)

    const handleOpenForm = useCallback(() => {
        setOpenForm(!openForm);
      }, [openForm]);


   return (
    <>
    <Button buttonType='button' onClick={handleOpenForm} text="Open Form" style="primary"/>
    {openForm && <ReactModal isOpen><FormThemeProvider><Form 
        fields={[
            'singleCheckBox',
            'radioButton',
            'Select',
            'Slider',
            'switches',
            'TextArea',
            'Input',
            'ImageSelect',
            'MultiSelect'
        ]}
        onChange={function noRefCheck() {}}>
        <Checkbox
            className=""
            help=""
            label="Optional Input Label"
            name="singleCheckbox"
            text="Single Checkbox"
        />
        <Radio
            className=""
            help="Help text"
            label="Radio"
            name="example"
            options={[
            'Sparkling water',
            'Cola',
            {
                label: 'Lemonade',
                value: 'lemonade'
            },
            {
                label: 'Beer',
                value: 'beer'
            },
            {
                label: 'Kompot',
                value: 'kompot'
            }
            ]}
        />
        <Select
            className=""
            help="Help text"
            label="Select"
            name="example"
            options={[
            'Sparkling water',
            'Cola',
            {
                label: 'Lemonade',
                value: 'lemonade'
            },
            {
                label: 'Beer',
                value: 'beer'
            },
            {
                label: 'Kompot',
                value: 'kompot'
            }
            ]}
            placeholder=""
            prefix=""
            suffix=""
        />
        <Slider
            className=""
            help="Help text"
            label="Range"
            max={500}
            min={0}
            name="example"
            unit="km"
        />
        <SwitchList
            className=""
            help="Help text"
            initialValue={[]}
            label="Multiple switches:"
            name="switches"
            options={[
            'Notify me about new threads',
            {
                label: 'Notify me about mentions',
                value: 'mentions'
            },
            {
                label: 'Notify me about updates',
                value: 'updates'
            }
            ]}
        />
        <TextArea
            className=""
            help="Help text"
            initialValue=""
            label="Select"
            min={5}
            name="example"
            placeholder="Placeholder text"
            prefix=""
            rows={5}
            suffix=""
        />
        <Input
            className=""
            help="Help text"
            initialValue=""
            label="Basic input"
            min={5}
            name="example"
            placeholder="Placeholder text"
            prefix="✨"
            suffix="€"
            type="text"
        />
        <ImageSelect
            className=""
            help="Help text"
            label="Image select"
            name="example"
            options={[
            {
                image: '',
                label: 'Animals',
                value: 'animals'
            },
            {
                image: '',
                label: 'People',
                value: 'people'
            },
            {
                image: '',
                label: 'Nature',
                value: 'nature'
            },
            {
                image: '',
                label: 'Tech',
                value: 'tech'
            }
            ]}
        />
        <MultiSelect
            className=""
            help="Help text"
            label="Multi Select"
            name="example"
            options={[
            'Culture',
            'Travel',
            {
                label: 'Music',
                value: '54078'
            },
            {
                label: 'Nature',
                value: '74956'
            },
            {
                label: 'Tech',
                value: '24956'
            }
            ]}
            placeholder=""
            prefix=""
            suffix=""
        />
        <Button buttonType='button' onClick={() => {setOpenForm(false)}} text="Close Form" style="primary"/>
    </Form></FormThemeProvider></ReactModal>}
    </>)
}