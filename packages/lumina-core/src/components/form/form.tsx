import { useCallback, useState } from 'react';
import Form, { Input, Select, FormButton, Checkbox, FormThemeProvider } from 'react-form-component'
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
            'singleCheckBox'
        ]}
        onChange={function noRefCheck() {}}>
        <Checkbox
            className=""
            help=""
            label="Optional Input Label"
            name="singleCheckbox"
            text="Single Checkbox"
        />
        <Button buttonType='button' onClick={() => {setOpenForm(false)}} text="Close Form" style="primary"/>
    </Form></FormThemeProvider></ReactModal>}
    </>)
}