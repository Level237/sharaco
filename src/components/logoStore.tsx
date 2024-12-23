                                                        
                                                                                                                        
import React, { useState } from 'react'
import { FileUploader } from "react-drag-drop-files"


export default function Upload() {
    const [picture, setPicture] = useState({
        title: '',
        file: null
    })
    const fileTypes = ["JPG", "PNG", "JPEG"]
    const [fileSizeError, setFileSizeError] = useState('')

    const handleChange = (file:any) => {
        setFileSizeError('')
        setPicture({
            ...picture, file: file
        })
    }

    const handleSizeError = () => {
        setFileSizeError('The file size must not be greater than 2MB.')
    }

    const storeImage = async (e:any) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', picture.file)
        formData.append('title', picture.title)

       
    }

    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="crad-header bg-white">
                            <h5 className="text-center mt-4">
                                Upload file
                            </h5>
                        </div>
                        <div className="card-body">
                            <form className='mt-5' onSubmit={(e) => storeImage(e)}>
                                <div className="mb-3">
                                    <label htmlFor="title" 
                                        className='form-label'>Title*</label>
                                    <input type="text" name="title" id="title"
                                        className='form-control'
                                        onChange={(e) => setPicture({
                                            ...picture, title: e.target.value
                                        })}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <FileUploader 
                                        handleChange={handleChange} 
                                        name="file" 
                                        types={fileTypes} 
                                        required={!picture.file}  
                                        maxSize={2} 
                                        onSizeError={handleSizeError}
                                        classes="drop_area"
                                    />
                                    {
                                        fileSizeError && <div className="text-white my-2 rounded p-2 bg-danger">
                                            { fileSizeError }
                                        </div>
                                    }
                                    {
                                        picture?.file && 
                                        <img 
                                            src={URL.createObjectURL(picture.file)}
                                            alt="Picture"
                                            width={150}
                                            height={150}
                                            className="rounded my-2"
                                        />
                                    }
                                </div>
                                <div className="mb-3">
                                    <button type="submit"
                                        className='btn btn-sm btn-dark'>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


                                                        
                                                    